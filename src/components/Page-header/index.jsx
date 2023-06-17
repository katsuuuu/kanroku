import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const PageHeader = ({ title, fullPath, image, property, isPostPage = false }) => {
  const router = useRouter();

  const { ready } = useTranslation("common");

  const date = new Date(property?.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <header
      className="pages-header bg-img valign parallaxie"
      style={{
        backgroundImage: `url(${!image ? "/assets/img/rocks.jpg" : image})`,
      }}
      data-overlay-dark="5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h1>{title}</h1>
              <div className="path">
                {ready &&
                  fullPath.map((item, index) => (
                    <React.Fragment key={item.id}>
                      <Link href={item.url}>
                        <a className={router.pathname == item.url ? "active" : ""}>{item.name}</a>
                      </Link>
                      {index != fullPath.length - 1 ? <span>/</span> : ""}
                    </React.Fragment>
                  ))}
              </div>
            </div>

            {isPostPage && property && (
              <section className="container">
                <div className="property-categories">
                  {property.categories.data.map(({ attributes }) => (
                    <span key={attributes.Slug}>{attributes.Title}</span>
                  ))}
                </div>

                <div className="property-author__section">
                  {property.Author?.Avatar && (
                    <img src={property.Author?.Avatar} alt={property.Author.Name} />
                  )}

                  <section>
                    <h5>{property.Author.Name}</h5>

                    <p>{date}</p>
                  </section>
                </div>
              </section>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
