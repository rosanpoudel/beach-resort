import React from "react";

export const Banner = ({ children, title, subtitle }) => {
  return (
    <div className="banner">
      <h1 className="banner__title">{title}</h1>
      <div className="banner__underline"></div>
      <p className="banner__subtitle">{subtitle}</p>
      {children}
    </div>
  );
};
