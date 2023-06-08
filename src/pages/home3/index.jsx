/* eslint-disable @next/next/no-img-element */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import AboutUs3 from "../../components/About-Us3";
import AboutUs2 from "../../components/About-Us2";
import AfterBefore from "../../components/After-Before";
import Blogs2 from "../../components/Blogs2";
import Intro3 from "../../components/Intro3";
import Numbers from "../../components/Numbers";
import Services3 from "../../components/Services3";
import Team1 from "../../components/Team1";
import Testimonials1 from "../../components/Testimonials1";
import Works1 from "../../components/Works1";
import LightLayout from "../../layouts/light";

const Home3 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("homepage");
  }, []);
  return (
    <LightLayout>
      <Intro3 />
      <Services3 />
      {/* <Works1 /> */}
      <AboutUs2 />
      {/* <AfterBefore />
      <Numbers />
      <Team1 />
      <Testimonials1 />
      <Blogs2 /> */}
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Home3;
