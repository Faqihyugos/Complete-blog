import React from "react";
import Header from "../Parts/Header";
import Breadcrumb from "../Parts/Breadcrumb";
import Posts from "../Parts/Posts";
import Sidebar from "../Parts/Sidebar";
import Footer from "../Parts/Footer";

const Category = () => {
  return (
    <>
      <Header />
      <Breadcrumb />
      <section className="blog-section">
        <div className="container">
          <div className="row">
            <Posts />
            <Sidebar />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Category;
