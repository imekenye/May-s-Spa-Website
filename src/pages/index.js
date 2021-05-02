import * as React from "react";
import Layout from "../containers/layout/layout";
import Header from "../containers/home-hero/Header";
import Services from "../containers/services";
import AboutUs from "../containers/about-us";
import Benefits from "../containers/benefits";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <Services />
      <AboutUs />
      <Benefits />
    </Layout>
  );
};

export default IndexPage;
