import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";

import { Api } from "../../api";

const Property = ({ data }) => {
  const { t, ready } = useTranslation("common");

  if (!data) return null;

  const property = data.properties.data[0].attributes;

  return (
    <LightLayout>
      <PageHeader
        ready={ready}
        title={property.Title}
        isPostPage={true}
        property={property}
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Properties", url: "/properties" },
          { id: 3, name: property.Title, url: `/properties/${property.Slug}` },
        ]}
      />

      <section className="container property-wrapper">
        <div className="property-categories">
          {property.categories.data.map(({ attributes }) => (
            <span key={attributes.Slug}>{attributes.Title}</span>
          ))}
        </div>

        <section className="content__section">
          <ReactMarkdown>{property.Body}</ReactMarkdown>
        </section>
      </section>
    </LightLayout>
  );
};

export default Property;

export const getStaticProps = async ({ params, locale }) => {
  const data = await Api.properties.getProperty(params.slug, locale);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const enData = await Api.properties.getProperties("en");
  const jaData = await Api.properties.getProperties("ja");
  const zhData = await Api.properties.getProperties("zh-CN");

  const paths = [
    ...enData.properties.data.map((property) => ({
      params: { slug: property.attributes.Slug },
      locale: "en",
    })),
    ...jaData.properties.data.map((property) => ({
      params: { slug: property.attributes.Slug },
      locale: "ja",
    })),
    ...zhData.properties.data.map((property) => ({
      params: { slug: property.attributes.Slug },
      locale: "zh-CN",
    })),
  ];

  return {
    paths: paths || [],
    // fallback: "blocking",
    fallback: true,
    // fallback: false,
  };
};
