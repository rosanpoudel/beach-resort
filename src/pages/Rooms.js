import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";
import {Title} from "../components/Title";
import RoomsContainer from "../components/RoomsContainer";

export const Rooms = () => {

  return (
    <div className="rooms-list">
      <Hero hero="roomsHero">
        <Banner title="Our Rooms">
          <Link className="site-btn" to="/">
            Return Home
          </Link>
        </Banner>
      </Hero>

      <Title title="search rooms" />


      <RoomsContainer />





    </div>
  );
};
