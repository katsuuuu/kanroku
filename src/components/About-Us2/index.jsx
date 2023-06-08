/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import aboutUs2Data from "../../data/about-us2.json";

const AboutUs2 = () => {
  const { t, ready } = useTranslation("common");

  if (!ready) return <div>Loading...</div>;

  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="exp-content nopat wow fadeInUp" data-wow-delay=".3s">
              {/* <h6 className="sub-title">About Us</h6> */}
              <h2 className="mb-20 playfont">
                {t("home.about.title.first")} <br /> {t("home.about.title.second")}
              </h2>
              <p>{t("home.about.content")}</p>
              <ul>
                {t("home.about.list", { returnObjects: true, useSuspense: false }).map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <Link href={t("home.about.buttonLink")}>
                <a className="btn-curve btn-color mt-30">
                  <span>{t("home.about.buttonText")}</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={"/assets/img/two_nobg.png"} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
