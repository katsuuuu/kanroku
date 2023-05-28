/* eslint-disable @next/next/no-img-element */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import WorkHeader from "../../components/Work-header";
import MainLayout from "../../layouts/main";
import { WorkTwoColumn } from "../../components/Work-Two-Column";

const Work1 = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <WorkHeader
        title={{
          first: t("work1.title.first"),
          second: t("work1.title.second"),
        }}
        // title = "text",
        content={t("work1.content")}
      />
      <WorkTwoColumn t={t} ready={ready} />
      {/* <WorkTwoColumn /> */}
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Work1;
