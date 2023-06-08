/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import initIsotope from "../../common/initIsotope";

export const WorkTwoColumn = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  if (!ready) return null;

  return (
    <>
      <section className="works filter-img section-padding">
        <div className="container">
          <div className="row gallery">
            <div className="col-lg-6 items mt-0 interior theaters residential">
              <div className="section-head mb-0">
                <h3>{t("work1.works.title")}</h3>

                <div className="filtering mt-30">
                  <div className="filter">
                    {t("work1.works.filters", { returnObjects: true, useSuspense: false }).map(
                      (item, index) => {
                        return (
                          <span
                            className={index === 0 && "active"}
                            data-filter={item.filter}
                            key={item.id}>
                            {item.title}
                          </span>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            </div>

            {t("work1.works.list", { returnObjects: true }).map((item) => {
              return (
                <div className={`col-lg-6 items ${item.className}`} key={item.id}>
                  <div className="item">
                    <div className="img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="cont vis">
                      <h5>
                        <Link href={item.link}>{item.title}</Link>
                      </h5>

                      {item.categories.map((category) => (
                        <span key={category}>{category}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/2.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 items residential interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/1.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 items interior">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/5.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 items residential">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/3.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div>

            <div className="col-lg-6 items theaters">
              <div className="item">
                <div className="img">
                  <img src="/assets/img/works/4.jpg" alt="" />
                </div>
                <div className="cont vis">
                  <h5>
                    <Link href="/project-details">Modern Townhouse</Link>
                  </h5>
                  <span>Architecture</span>
                  <span>Modern</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};
