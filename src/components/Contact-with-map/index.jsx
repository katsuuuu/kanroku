import React from "react";
import { useTranslation } from "react-i18next";
import appData from "../../data/app.json";

const ContactWithMap = () => {
  const { t } = useTranslation("common");
  return (
    <div className="container-fluid">
      <div className="row contact-map justify-content-center">
        <div className="col-lg-6 map-box">
          {/* <iframe src={appData.mapIframe}></iframe> */}

          <iframe
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%E6%9D%B1%E4%BA%AC%E9%83%BD%E6%B8%AF%E5%8C%BA%E9%BA%BB%E5%B8%83%E5%8D%81%E7%95%AA4-4-1%20%E3%83%84%E3%82%A4%E3%83%B3%E4%B8%80%E3%81%AE%E6%A9%8B%E4%BA%8C%E5%8F%B7%E9%A4%A8%204F+(Kanroku)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.maps.ie/distance-area-calculator.html">measure distance on map</a>
          </iframe>
        </div>
        {/* <div className="col-lg-6 form">
          <form id="contact-form" method="post">
            <div className="messages"></div>

            <div className="controls">
              <div className="form-group">
                <input
                  id="form_name"
                  type="text"
                  name={t("contact.firstInput.name")}
                  placeholder={t("contact.firstInput.placeholder")}
                  required={t("contact.firstInput.required")}
                />
              </div>

              <div className="form-group">
                <input
                  id="form_email"
                  type="email"
                  name={t("contact.secondInput.name")}
                  placeholder={t("contact.secondInput.placeholder")}
                  required={t("contact.secondInput.reqiured")}
                />
              </div>

              <div className="form-group">
                <textarea
                  id="form_message"
                  name={t("contact.thirdInput.name")}
                  placeholder={t("contact.thirdInput.placeholder")}
                  rows="4"
                  required={t("contact.thirdInput.required")}></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>{t("contact.button")}</span>
              </button>
            </div>
          </form>
        </div> */}
      </div>
    </div>
  );
};

export default ContactWithMap;
