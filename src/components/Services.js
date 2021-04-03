import React from "react";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import { Title } from "../components/Title";

export const Services = () => {
  let services = [
    {
      icon: <FaCocktail />,
      title: "free cocktails",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaHiking />,
      title: "Endless Hiking",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaShuttleVan />,
      title: "free shuttle",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
    {
      icon: <FaBeer />,
      title: "strongest beer",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias molestias eius libero?",
    },
  ];

  return (
    <div className="services">
      <div className="container">
        <Title title="Services" />
        <div className="services__inner">
          {services.map((service, index) => {
            return (
              <div className="services__service" key={index}>
                <div className="services__icon">{service.icon}</div>
                <h3 className="services__title">{service.title}</h3>
                <p className="services__desc">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
