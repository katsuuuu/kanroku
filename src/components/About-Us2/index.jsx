/* eslint-disable @next/next/no-img-element */
import React from "react";
import aboutUs2Data from "../../data/about-us2.json";
import Link from "next/link";

const AboutUs2 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div
              className="exp-content nopat wow fadeInUp"
              data-wow-delay=".3s">
              {/* <h6 className="sub-title">About Us</h6> */}
              <h2 className="mb-20 playfont">
                {aboutUs2Data.title.first} <br /> {aboutUs2Data.title.second}
              </h2>
              <p>{aboutUs2Data.content}</p>
              <ul>
                {aboutUs2Data.textList.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
              <Link href="/about">
                <a className="btn-curve btn-color mt-30">
                  <span>About Us</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <img src={aboutUs2Data.image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs2;
