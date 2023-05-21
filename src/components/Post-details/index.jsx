/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = () => {
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
                  <h2>Value Proposition</h2>
                  <div className="info">
                    <p>
                      <a>2023/5/3</a>
                    </p>
                  </div>
                </div>

                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <h6>Strong market potential</h6>

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
                        </p>

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

export default PostDetails;
