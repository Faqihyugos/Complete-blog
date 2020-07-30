import React from "react";
import Header from "../Parts/Header";
import Slider from "../Parts/Slider";
import TrendingPosts from "../Parts/TrendingPosts";
import FreshStories from "../Parts/FreshStories";
import Footer from "../Parts/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <TrendingPosts />
      <FreshStories />
      <Footer />
    </>
  );
};

export default Home;
