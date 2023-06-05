/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import thumparallaxUp from "../../common/thumparallaxUp";

const Properties = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Properties</h2>
                  <div className="info">
                    <p>
                      <a>Upon a request</a>
                    </p>
                  </div>
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="posts row">
                        {ready &&
                          t("blogs.posts", { returnObjects: true, useSuspense: false }).map(
                            (item) => (
                              <div className="item mb-80 col-lg-6" key={item.id}>
                                <div className="img">
                                  <Link href="/blog-details">
                                    <a>
                                      <img src={item.image} alt="" className="thumparallax" />
                                    </a>
                                  </Link>
                                </div>
                                <div className="content">
                                  <div className="cont">
                                    <div className="tags">
                                      {item.categories.map((category) => (
                                        <Link href="#" key={category}>
                                          <a>{category}</a>
                                        </Link>
                                      ))}
                                    </div>

                                    <h4 className="title">
                                      <Link href={item.link}>{item.hardcodeTitle}</Link>
                                    </h4>

                                    <Link href={item.link}>
                                      <a className="more">{item.buttonText}</a>
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ),
                          )}
                        {/* <h6>Strong market potential</h6>

                        <p>
                          The size of the real estate market in Japan is 44
                          trillion yen as a whole, of which 4.4 trillion yen is
                          for brokerage alone. Even though it’s not small, there
                          are few real estate agents in the market that
                          specialize in foreign investors.
                        </p>

                        <h6>Advantage in sales strategy</h6>

                        <p>
                          By conducting sales activities in English and Chinese,
                          we are able to overcome language barriers and make
                          proposals that better fit the needs of our customers,
                          achieving high customer satisfaction. In addition, we
                          aim for rapid expansion by making full use of the
                          personal connections and know-how that we have
                          cultivated so far.
                        </p>

                        <h6>Diversified culture</h6>

                        <p>
                          In a male-dominated, conservative industry, the
                          opposite concept of a bilingual female sales force
                          becomes superiority and differentiation in the
                          existing industry.
                        </p> */}

                        {/* <ul>
                          <li>
                            <span>01</span> Integer in volutpat libero.
                          </li>
                          <li>
                            <span>02</span> Vivamus maximus ultricies pulvinar.
                          </li>
                          <li>
                            <span>03</span> priorities that will pop up in any
                            particular month.
                          </li>
                          <li>
                            <span>04</span> We all intend to plan ahead.
                          </li>
                          <li>
                            <span>05</span> The main component of a healthy env
                            for self esteem.
                          </li>
                        </ul> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Properties;
