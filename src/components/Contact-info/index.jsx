import React from "react";
import { useTranslation } from "react-i18next";

const ContactInfo = () => {
  const { t } = useTranslation("common");

  return (
    <div className="info pt-80 pb-80">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-mail-open"></span>
              <div className="cont">
                <h6 className="custom-font">{t("contact.emailTitle")}</h6>
                <p>{t("contact.email")}</p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="item">
              <span className="icon pe-7s-map"></span>
              <div className="cont">
                <h6 className="custom-font">{t("contact.addressTitle")}</h6>
                <p>{t("contact.address")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
