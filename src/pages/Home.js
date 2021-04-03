import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Featured } from "../components/Featured";

export const Home = () => {
  return (
    <>
      <Hero hero="mainHero">
        <Banner
          title="Luxurious Rooms"
          subtitle="Deluxe Rooms Starting At $299"
        >
          <Link className="site-btn" to="/rooms">
            Our Rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featured />
    </>
  );
};
