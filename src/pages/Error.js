import React from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";

export const Error = () => {
  return (
    <div>
      <Hero hero="mainHero">
        <Banner title="404" subtitle="page not found">
          <Link className="site-btn" to="/">
            Return Home
          </Link>
        </Banner>
      </Hero>
    </div>
  );
};
