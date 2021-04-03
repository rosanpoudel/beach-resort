import React from "react";

export const Hero = ({ children, hero }) => {
  return <div className={hero}>{children}</div>;
};

// default props
Hero.defaultProps = {
  hero: "mainHero",
};
