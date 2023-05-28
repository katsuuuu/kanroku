/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const PostDetails = ({ t, ready }) => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  if (!ready) return null;

  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>{t("market-overview.post.title")}</h2>
                  <div className="info">
                    <p>
                      <a>{t("market-overview.post.date")}</a>
                    </p>
                  </div>
                </div>

                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div
                        className="cont"
                        dangerouslySetInnerHTML={{
                          __html: t("market-overview.post.content", {
                            useSuspense: false,
                          }),
                        }}
                      />
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
