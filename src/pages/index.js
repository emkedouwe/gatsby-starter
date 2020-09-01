import React from "react";
import SEO from "./../components/Global/Seo/";

const Home = ({data}) => {
  return (
    <>
      <SEO title="Home" description="Home" />
      <div className="container">Hello world!</div>
    </>
  );
}

export default Home;
