import React from "react";
import { useTranslation } from "react-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import PageHeader from "../../components/Page-header";
import ContactInfo from "../../components/Contact-info";
import ContactWithMap from "../../components/Contact-with-map";
import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";

const Contact = () => {
  const { t, ready } = useTranslation("common");

  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  if (!ready) return null;

  return (
    <LightLayout>
      <PageHeader
        ready={ready}
        title={t("contact.title")}
        fullPath={t("contact.paths", {
          returnObjects: true,
        })}
        image="/assets/img/rocks.jpg"
      />
      <section className="contact">
        <ContactInfo t={t} />
        <ContactWithMap t={t} />
      </section>
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
  },
});

export default Contact;
