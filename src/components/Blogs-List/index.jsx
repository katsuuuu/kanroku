/* eslint-disable @next/next/no-img-element */
import React from "react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

import Blog1Data from "../../data/blog1.json";
import thumparallaxUp from "../../common/thumparallaxUp";

const BlogsList = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  if (!ready) return <div>Loading...</div>;

  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {t("blogs.posts", { returnObjects: true, useSuspense: false }).map((item) => (
                  <div className="item mb-80" key={item.id}>
                    <div className="img">
                      <Link href="/blog-details">
                        <a>
                          <img src={item.image} alt="" className="thumparallax" />
                        </a>
                      </Link>
                    </div>
                    <div className="content">
                      <div className="date">
                        <h5>
                          <Link href="/blog-details">
                            <a>
                              <span className="num">{item.date2[1]}</span>
                              <span>{item.date2[0]}</span>
                            </a>
                          </Link>
                        </h5>
                      </div>
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
                        <p>{item.excerpt}</p>
                        <Link href={item.link}>
                          <a className="more">{item.buttonText}</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="pagination">
                  <span className="active">
                    <Link href="#">1</Link>
                  </span>
                  <span>
                    <Link href="#">2</Link>
                  </span>
                  <span>
                    <Link href="#">
                      <a>
                        <i className="fas fa-angle-right"></i>
                      </a>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogsList;
