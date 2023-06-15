import React, { useEffect, useState } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";

import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import Properties from "../../components/Properties";
import { Api } from "../../api";
import clsx from "clsx";

const BlogDetails = ({ data, categories }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const { t, ready } = useTranslation("common");

  const router = useRouter();

  const handleLogin = () => {
    if (
      username === process.env.NEXT_PUBLIC_USERNAME &&
      password === process.env.NEXT_PUBLIC_PASSWORD
    ) {
      setIsVisible(false);
      // localStorage.setItem("isLoggedIn", true);
      setIsLogged(localStorage.setItem("isLoggedIn", true) || true);
    } else {
      setIsVisible(true);
      setError("Invalid credentials");
      // localStorage.setItem("isLoggedIn", false);
      setIsLogged(localStorage.setItem("isLoggedIn", false) || false);
    }
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsVisible(isLoggedIn === "false" || !isLoggedIn ? true : false);

    // if (isLoggedIn === "false" || !isLoggedIn) {
    if (isLogged === "false" || !isLogged) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    document.querySelector("body").classList.add("index3");

    // if (isLoggedIn === "false" || !isLoggedIn) {
    if (isLogged === "false" || !isLogged) {
      document.querySelector("body").classList.add("properties-hidden");
      // document.querySelector("body").style.overflow = "hidden";
    } else {
      // document.querySelector("body").style.alignItems = "center";
      document.querySelector("body").classList.remove("properties-hidden");
    }
  }, [isLogged]);

  console.log("isVisible", isVisible);
  console.log("isLogged", isLogged);

  return (
    <LightLayout>
      <PageHeader
        ready={ready}
        title={t("properties.title")}
        // title="Properties"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Properties", url: "/properties" },
        ]}
      />
      <Properties data={data} categories={categories} />

      <section
        className={clsx("login-form__wrapper", {
          "login-form__wrapper--visible": isVisible,
        })}>
        <div className="col-11 col-md-7 col-lg-5 col-xl-4 login-form">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Login"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <button onClick={handleLogin}>Login</button>
          {error && <p>{error}</p>}
        </div>
      </section>
    </LightLayout>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? "en", ["common"])),
    data: await Api.properties.getProperties(locale),
    categories: await Api.categories.getCategories(),
  },
});

export default BlogDetails;
