import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import BlogsList from "../../components/Blogs-List";

const Blogs = () => {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <PageHeader
        title={t("blogs.title")}
        fullPath={t("blogs.paths", {
          returnObjects: true,
        })}
      />
      <BlogsList />
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Blogs;
