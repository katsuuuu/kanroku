/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import thumparallaxUp from "../../common/thumparallaxUp";

const Properties = ({ data, categories }) => {
  const [posts, setPosts] = useState(data?.properties.data);

  const properties = data?.properties.data.slice(0);

  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  useEffect(() => {
    setPosts(data?.properties.data);
  }, [data]);

  const handleCategory = (category) => {
    let filtered = [];

    properties.map((item) => {
      return item.attributes.categories.data.filter((cat) => {
        if (cat.attributes.Slug === category) {
          filtered.push(item);
        }
      });
    });

    setPosts(filtered);
  };

  console.log("posts", posts);
  console.log("categories", categories);
  console.log("data", data);
  return (
    <>
      <section className="blog-pg single section-padding">
        <div className="container p-0">
          <div className="row justify-content-center m-0">
            <div className="">
              <div className="post">
                {/* <div className="title-head">
                  <h2>Properties</h2>
                  <div className="info">
                    <p>
                      <a>Upon a request</a>
                    </p>
                  </div>
                </div> */}
                <div className="content pt-20">
                  <div className="flex-column-reverse flex-lg-row d-flex justify-content-between m-0">
                    <div className="col-lg-10 p-0">
                      <div className="posts row m-0">
                        {/* {ready && */}
                        {posts.length > 0 ? (
                          posts.map((item) => (
                            <div className="item mb-80 col-lg-6" key={item.id}>
                              <div className="img">
                                <Link
                                  href={`/properties/${item.attributes.Slug}`}
                                >
                                  <a>
                                    <img
                                      src={item.attributes.Image}
                                      alt=""
                                      className="thumparallax"
                                    />
                                  </a>
                                </Link>
                              </div>
                              <div className="content">
                                <div className="cont">
                                  <div className="tags">
                                    {item.attributes.categories.data.map(
                                      ({ attributes }) => (
                                        <Link
                                          href={`/${attributes.Slug}`}
                                          key={attributes.Slug}
                                        >
                                          <a>{attributes.Title}</a>
                                        </Link>
                                      )
                                    )}
                                  </div>

                                  <h4 className="title">
                                    <Link
                                      href={`/properties/${item.attributes.Slug}`}
                                    >
                                      {item.attributes.Title}
                                    </Link>
                                  </h4>

                                  <Link
                                    href={`/properties/${item.attributes.Slug}`}
                                  >
                                    <a className="more">
                                      {item.attributes.ButtonText}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <section>
                            <div className="container">
                              <div className="row">
                                <div className="col-12">
                                  <div className="text-center">
                                    <h2>No Properties Found</h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </section>
                        )}
                      </div>
                    </div>

                    <ul className="tags-section col-lg-2 col-xl-1 flex-wrap">
                      {/* {ready && */}
                      {
                        // t("blogs.tags", { returnObjects: true, useSuspense: false }).map((item) => (
                        categories.categories.data.map(({ attributes }) => (
                          <li
                            onClick={() => handleCategory(attributes.Slug)}
                            key={attributes.Slug}>
                            {attributes.Title}
                          </li>
                        ))
                      }
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
