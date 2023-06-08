/* eslint-disable @next/next/no-img-element */
import React from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";

import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import ProjectIntro from "../../components/Project-Intro";
import NextProject from "../../components/Next-Project";
import ProjectVideo from "../../components/Project-Video";

const ProjectDetails = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  if (!ready) return null;

  return (
    <MainLayout>
      <PageHeader
        title={t("project-details.title")}
        fullPath={t("project-details.paths", {
          returnObjects: true,
        })}
        image="/assets/img/portfolio/project1/bg.jpg"
      />
      <ProjectIntro />
      {/* <ProjectIntro /> */}
      <section className="projdtal">
        <div className="justified-gallery">
          <div className="row">
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project1/1.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/2.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-6">
              <img alt="" src="/assets/img/portfolio/project1/6.jpg" />
            </a>
            <a href="#" className="col-lg-4 col-xl-3 col-md-12">
              <img alt="" src="/assets/img/portfolio/project1/3.jpg" />
            </a>
          </div>
        </div>
      </section>

      <ProjectVideo />

      <section className="projdtal">
        <div className="justified-gallery">
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/8.jpg" />
          </a>
          <a href="#" className="col-lg-4 col-xl-3 col-md-6">
            <img alt="" src="/assets/img/portfolio/project1/9.jpg" />
          </a>
        </div>
      </section>

      <NextProject />
    </MainLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default ProjectDetails;
