import React from "react";
import Link from "next/link";

import services3Data from "../../data/services3.json";

const Services3 = ({ bigTitle, grid, t, ready }) => {
  // if (!ready) return <div>Loading...</div>;

  return (
    <section
      className={`${!grid ? "services" : "services-grid"} section-padding ${
        !grid ? "bg-gray" : "pt-0"
      } `}>
      <div className="container">
        {!bigTitle ? (
          <div className="section-head text-center">
            <div className="row justify-content-center">
              <div className="col-lg-6 col-md-8 col-sm-10">
                <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                  {t("home.services.top")}
                </h6>
                <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                  {t("home.services.title")}
                </h4>
              </div>
            </div>
          </div>
        ) : (
          <div className="main-header text-center">
            <h3>{t("home.services.mainHeader.title")}</h3>
            <div className="tex-bg">{t("home.services.mainHeader.text")}</div>
          </div>
        )}

        <div className="row">
          {ready &&
            t("home.services.list", { returnObjects: true, useSuspense: false }).map(
              (item, index) => {
                return (
                  <div className="col-lg-4" key={item.id}>
                    <div
                      className="item-bx bg-img wow fadeInUp"
                      data-wow-delay={index == 0 ? ".3s" : index == 1 ? ".5s" : ".7s"}
                      style={{ backgroundImage: `url(${item.image})` }}>
                      <span className={item.icon}></span>
                      <h6 className="mb-20">{item.title}</h6>
                      <p style={{ fontSize: 5 }}>{item.content}</p>
                      <Link href={item.buttonLink}>
                        <a className={`more ${!grid ? "custom-font" : ""} mt-30`}>
                          {item.buttonText}
                        </a>
                      </Link>
                    </div>
                  </div>
                );
              },
            )}
        </div>
      </div>
    </section>
  );
};

export default Services3;
