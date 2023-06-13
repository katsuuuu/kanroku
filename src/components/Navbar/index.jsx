/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
// import { useTranslation, Trans } from "next-i18next";

import appData from "../../data/app.json";
import getSiblings from "../../common/getSiblings";
import { useEffect } from "react";

import { Api } from "../../api";

const Navbar = ({ navbarRef, logoRef, logoClass }) => {
  const [test, setTest] = React.useState([]);
  const router = useRouter();
  const { t, ready } = useTranslation("common");

  const handleDropdown = (e) => {
    getSiblings(e.target.parentElement)
      .filter((item) => item.classList.contains("show"))
      .map((item) => {
        item.classList.remove("show");
        if (item.childNodes[0]) {
          item.childNodes[0].setAttribute("aria-expanded", false);
        }
        if (item.childNodes[1]) {
          item.childNodes[1].classList.remove("show");
        }
      });
    e.target.parentElement.classList.toggle("show");
    e.target.setAttribute("aria-expanded", true);
    e.target.parentElement.childNodes[1].classList.toggle("show");
  };

  const handleMobileDropdown = (e) => {
    document.getElementById("navbarSupportedContent").classList.toggle("show-with-trans");
  };

  useEffect(async () => {
    const propertySlug = await Api.properties.getPropertyId(router.query.slug, router.locale);

    const getPropertyId = await Api.properties.getPropertiesById(
      propertySlug.properties.data[0].attributes.PropertyId,
      // router.locale,
      "all",
    );

    setTest(getPropertyId);
  }, [router]);

  const handleLocaleChange = (locale) => {
    if (router.route === "/properties/[slug]") {
      test.properties.data.map((el) => {
        if (el.attributes.locale === locale) {
          router.push(`/properties/${el.attributes.Slug}`, `/properties/${el.attributes.Slug}`, {
            locale,
          });
        }
      });
    } else {
      router.push(router.route, router.asPath, {
        locale,
      });
    }
  };

  if (!ready) return <div>Loading...</div>;

  return (
    <>
      <nav className="navbar change navbar-expand-lg" ref={navbarRef}>
        <div className="container">
          <Link href="/home3">
            <a className={`logo ${logoClass && logoClass}`}>
              <img src={appData.lightLogo} alt="logo" ref={logoRef} />
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            onClick={handleMobileDropdown}
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="icon-bar">
              <i className="fas fa-bars"></i>
            </span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              {/* <li className="nav-item">
                <Link href="/home3">
                  <a className="nav-link">Architecture Light</a>
                </Link>
              </li> */}

              {t("layout.header.menu", { returnObjects: true, useSuspense: false }).map((item) => (
                <li className="nav-item" key={item.id}>
                  <Link href={item.link}>
                    <a className="nav-link">{item.name}</a>
                  </Link>
                </li>
              ))}

              {/* <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Portfolio
                </span>
                <div className="dropdown-menu">
                  <Link href="/work1">
                    <a className="dropdown-item">Two Column</a>
                  </Link>
                  <Link href="/work2">
                    <a className="dropdown-item">Three Column</a>
                  </Link>
                  <Link href="/work3">
                    <a className="dropdown-item">Four Column</a>
                  </Link>
                  <Link href="/project-details">
                    <a className="dropdown-item">Single Project</a>
                  </Link>
                </div>
              </li> */}
              {/* <li className="nav-item dropdown" onClick={handleDropdown}>
                <span
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-haspopup="true"
                  aria-expanded="false">
                  Blog
                </span>
                <div className="dropdown-menu">
                  <Link href="/blogs">
                    <a className="dropdown-item">Blogs</a>
                  </Link>
                  <Link href="/blog-details">
                    <a className="dropdown-item">Post Details</a>
                  </Link>
                </div>
              </li> */}
            </ul>

            <ul className="locales">
              {router.locales.map((locale) => (
                <li onClick={() => handleLocaleChange(locale)} key={locale}>
                  {locale}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
