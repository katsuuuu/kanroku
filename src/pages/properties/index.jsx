import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import Properties from "../../components/Properties";

const BlogDetails = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <PageHeader
        ready={ready}
        title="Properties"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Properties", url: "/" },
        ]}
      />
      <Properties />
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default BlogDetails;
