import React from "react";
import Header from "../Parts/Header";
import PostDesc from "../Parts/PostDesc";
import Comment from "../Parts/Comment";
import Footer from "../Parts/Footer";

const Single = () => {
  return (
    <>
      <Header />
      <div className="single-post no-sidebar">
        <PostDesc />
        <Comment />
      </div>
      <Footer />
    </>
  );
};

export default Single;
