/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import thumparallaxUp from "../../common/thumparallaxUp";

const Properties = () => {
  const { t, ready } = useTranslation("common");
  const [posts, setPosts] = useState(t("blogs.posts", { returnObjects: true, useSuspense: false }));

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  const handleCategory = (category) => {
    setPosts(
      t("blogs.posts", { returnObjects: true, useSuspense: false }).filter((item) =>
        item.categories.includes(category),
      ),
    );
  };

  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container p-0">
          <div className="row justify-content-center m-0">
            <div className="">
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
                  <div className="flex-column-reverse flex-lg-row d-flex justify-content-between m-0">
                    <div className="col-lg-10 p-0">
                      <div className="posts row m-0">
                        {ready &&
                          posts.map((item) => (
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
                          ))}
                      </div>
                    </div>

                    <ul className="tags-section col-lg-2 col-xl-1 flex-wrap">
                      {ready &&
                        t("blogs.tags", { returnObjects: true, useSuspense: false }).map((item) => (
                          <li onClick={() => handleCategory(item.name)} key={item.id}>
                            {item.name}
                          </li>
                        ))}
                    </ul>
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
