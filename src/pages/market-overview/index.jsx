import React from "react";
import MainLayout from "../../layouts/main";
import LightLayout from "../../layouts/light";
import PageHeader from "../../components/Page-header";
import PostDetails from "../../components/Post-details";
import Properties from "../../components/Properties";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <LightLayout>
      <PageHeader
        title="Market Overview"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "Market Overview", url: "/market-overview" },
        ]}
      />
      <PostDetails />
    </LightLayout>
  );
};

export default BlogDetails;
