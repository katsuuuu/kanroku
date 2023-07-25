/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer = ({ classText }) => {
  const { t } = useTranslation("common");
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>{t("layout.footer.title")}</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>{t("layout.footer.locationTitle")}</h6>
                    <p> {t("layout.footer.location")}</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>{t("layout.footer.emailTitle")}</h6>
                    <p>{t("layout.footer.email")}</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/kanroku_white.png" alt="" />
              </div>
              <div className="social">
                <Link href="https://www.linkedin.com/company/%E6%A0%AA%E5%BC%8F%E4%BC%9A%E7%A4%BEkanroku/about/">
                  <a>
                    <i className="fab fa-linkedin"></i>
                  </a>
                </Link>
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link> */}
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link> */}
                {/* <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>{t("layout.footer.copyright")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
