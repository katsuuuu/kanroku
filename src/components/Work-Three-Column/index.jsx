/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);

  if (!ready) return null;

  return (
    <>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              {t("work2.works.filters", { returnObjects: true, useSuspense: false }).map(
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
          <div className="row gallery">
            {t("work2.works.list", { returnObjects: true }).map((item) => {
              return (
                <div className={`col-lg-4 col-md-6 items ${item.className}`}>
                  <div className="item">
                    <div className="img">
                      <img src={item.img} alt={item.title} />
                    </div>
                    <div className="cont">
                      <h5>
                        <Link href={item.link}>{item.title}</Link>
                      </h5>

                      {item.categories.map((category) => (
                        <span>{category}</span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
