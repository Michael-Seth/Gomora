import React from "react";
import Header from "../components/Header";
import ProductsList from "../components/ProductsList";
import Testimonial from "../components/Testimonial";
import Modal from "../components/Modal";
import Banner from "../components/Banner";
import CTA from "../components/CTA";
import Product from "../components/Product";
import Carousel from "../components/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <Carousel />
      <ProductsList />
      <Testimonial />
      <Modal />
      <Banner />
      <CTA />
    </div>
  );
}

export default Home;
