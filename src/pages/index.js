import * as React from "react";
import Layout from "../containers/layout/layout";
import Header from "../containers/home-hero/Header";
import Services from "../containers/services";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Services />
    </Layout>
  );
};

export default IndexPage;
