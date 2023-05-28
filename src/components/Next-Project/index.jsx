import React from "react";
import Split from "../Split";
import Link from "next/link";

const NextProject = ({ t, ready }) => {
  if (!ready) return null;

  return (
    <section className="call-action nogif next">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="content text-center">
              <Link href="/project-details">
                <a>
                  <Split>
                    <h6 className="wow txt words chars splitting" data-splitting>
                      {t("project-details.nextProject.title")}
                    </h6>
                  </Split>

                  <Split>
                    <h2
                      className="wow txt words chars splitting"
                      data-splitting
                      dangerouslySetInnerHTML={{
                        __html: t("project-details.nextProject.title", {
                          useSuspense: false,
                        }),
                      }}
                    />
                    {/* <b> Luxury </b> Furniture
                    </h2> */}
                  </Split>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="nxt-img bg-img" data-background="img/portfolio/project1/bg.jpg"></div>
    </section>
  );
};

export default NextProject;
