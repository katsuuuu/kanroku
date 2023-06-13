import React, { useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import Properties from "../../components/Properties";
import { Api } from "../../api";

const BlogDetails = ({ data, categories }) => {
  const { t, ready } = useTranslation("common");

  useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <PageHeader
        ready={ready}
        title={t("properties.title")}
        // title="Properties"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Properties", url: "/properties" },
        ]}
      />
      <Properties data={data} categories={categories} />
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
    data: await Api.properties.getProperties(locale),
    categories: await Api.categories.getCategories(),
  },
});

export default BlogDetails;
