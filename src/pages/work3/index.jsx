/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import MainLayout from "../../layouts/main";
import WorkHeader from "../../components/Work-header";
import WorkFourColumn from "../../components/Work-Four-Column";

const Work3 = () => {
  const { t } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
      <WorkHeader
        center
        title={{
          first: t("work3.title.first"),
          second: t("work3.title.second"),
        }}
        content={t("work3.content")}
      />
      <WorkFourColumn />
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Work3;
