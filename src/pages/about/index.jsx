import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Skills2 from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import Team1 from "../../components/Team1";
import LightLayout from "../../layouts/light";

const About = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <LightLayout>
      <PageHeader
        title={t("about.title")}
        fullPath={t("about.paths", {
          returnObjects: true,
        })}
      />
      {/* <AboutUs4 />
      <Services3 /> */}
      {/* <Services3 bigTitle grid /> */}
      {/* <Testimonials1 bigTitle /> */}
      <Team1 t={t} ready={ready} />
      {/* <Skills2 /> */}
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default About;
