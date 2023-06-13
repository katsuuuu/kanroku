import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ReactMarkdown from "react-markdown";
import { useRouter } from "next/router";

import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";

import { Api } from "../../api";

const Property = ({ data, paths }) => {
  const { query, locale, push } = useRouter();
  const { slug } = query;

  const { t, ready } = useTranslation("common");
  console.log("data", data);

  // const currentProperty = data.filter((property) => property.attributes.Slug === slug);

  const currentProperty =
    paths?.find((property) => property.enTranslations.slug === slug) ||
    paths?.find((property) => property.jaTranslations.slug === slug) ||
    paths?.find((property) => property.zhTranslations.slug === slug);

  if (typeof window !== "undefined") {
    const url = window.location.href;

    locale === "en" &&
      !url.includes(`/properties/${String(currentProperty.enTranslations.slug)}`) &&
      push(`/properties/${String(currentProperty.enTranslations.slug)}`);
    locale === "ja" &&
      !url.includes(`/ja/properties/${String(currentProperty.jaTranslations.slug)}`) &&
      push(`/ja/properties/${String(currentProperty.jaTranslations.slug)}`);
    locale === "zh-CN" &&
      !url.includes(`/zh-CN/properties/${String(currentProperty.zhTranslations.slug)}`) &&
      push(`/zh-CN/properties/${String(currentProperty.zhTranslations.slug)}`);
  }

  // useEffect(() => {
  //   // if (typeof window !== "undefined") {
  //   const url = window.location.href;

  //   locale === "en" &&
  //     !url.includes(`/properties/${String(currentProperty.enTranslations.slug)}`) &&
  //     push(`/properties/${String(currentProperty.enTranslations.slug)}`);
  //   locale === "ja" &&
  //     !url.includes(`/ja/properties/${String(currentProperty.jaTranslations.slug)}`) &&
  //     push(`/ja/properties/${String(currentProperty.jaTranslations.slug)}`);
  //   locale === "zh-CN" &&
  //     !url.includes(`/zh-CN/properties/${String(currentProperty.zhTranslations.slug)}`) &&
  //     push(`/zh-CN/properties/${String(currentProperty.zhTranslations.slug)}`);
  //   // }
  // }, [locale]);

  //може, зробити getstaticpaths не зі слагом, а з лінком?

  console.log("currentProperty", currentProperty);
  console.log("slug", slug);
  console.log("locale", locale);

  const property = data.properties.data[0].attributes;

  // console.log("property", property);

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
        <section className="content__section">
          <ReactMarkdown children={property.Body} />
        </section>
      </section>
    </LightLayout>
  );
};

export default Property;

export const getStaticProps = async ({ params, locale }) => {
  // let data;

  // if (locale === "en") {
  //   data = await Api.properties.getProperty(params.slug, "en");
  // } else if (locale === "ja") {
  //   data = await Api.properties.getProperty(params.slug, "ja");
  // } else if (locale === "zh-CN") {
  //   data = await Api.properties.getProperty(params.slug, "zh-CN");
  // }

  const data = await Api.properties.getProperty(params.slug, locale);

  const enData = await Api.properties.getProperties("en");
  const jaData = await Api.properties.getProperties("ja");
  const zhData = await Api.properties.getProperties("zh-CN");

  console.log("enData_enData", enData.properties.data);
  console.log("jaData_jaData", jaData.properties.data);
  console.log("zhData_zhData", zhData.properties.data);

  const allLocalesData = [
    ...enData?.properties?.data.map((el) => ({
      // id: el.id,
      id: el.attributes.PropertyId,
      // attributes: el.attributes,
      slug: el.attributes.Slug,
      locale: "en",
    })),
    ...jaData?.properties?.data.map((el) => ({
      // id: el.id,
      id: el.attributes.PropertyId,
      // attributes: el.attributes,
      slug: el.attributes.Slug,
      locale: "ja",
    })),
    ...zhData?.properties?.data.map((el) => ({
      // id: el.id,
      id: el.attributes.PropertyId,
      // attributes: el.attributes,
      slug: el.attributes.Slug,
      locale: "zh-CN",
    })),
  ];

  console.log("allLocalesData_allLocalesData", allLocalesData);

  const paths = allLocalesData.map((el) => {
    return {
      enTranslations: allLocalesData.find((item) => item.id === el.id && item.locale === "en"),
      jaTranslations: allLocalesData.find((item) => item.id === el.id && item.locale === "ja"),
      zhTranslations: allLocalesData.find((item) => item.id === el.id && item.locale === "zh-CN"),
    };
  });

  console.log("data_data_data", paths);

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en", ["common"])),
      data,
      // data: await Api.properties.getProperty(params.slug, locale),
      // enData: await Api.properties.getProperty(params.slug, "en"),
      // jaData: await Api.properties.getProperty(params.slug, "ja"),
      // zhData: await Api.properties.getProperty(params.slug, "zh-CN"),
      paths: paths?.length ? paths : [],
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

  // const paths = data.properties.data.map((property) => ({
  //   params: { slug: property.attributes.Slug },
  // }));

  // const paths = [];
  // data.properties.data.map((element) => {
  //   return locales.map((locale) => {
  //     return paths.push({
  //       params: { slug: `${element.attributes.Slug}` },
  //       locale,
  //     });
  //   });
  // });

  return {
    paths: paths || [],
    fallback: "blocking",
  };
};
