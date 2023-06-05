import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";

const PageHeader = ({ title, fullPath, image }) => {
  const router = useRouter();

  const { ready } = useTranslation("common");
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
          </div>
        </div>
      </div>
    </header>
  );
};

export default PageHeader;
