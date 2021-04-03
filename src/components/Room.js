import React from "react";
import { Link } from "react-router-dom";

export const Room = ({ roomDetail }) => {
  return (
    <div className="room" key={roomDetail.id}>
      <div className="room-img">
        <img
          className="img-fluid"
          src={roomDetail.images[0]}
          alt="single room images"
        />
        <p className="room-price">
          <span>{"$" + roomDetail.price}</span>
          <small>per night</small>
        </p>
        <Link
          to={"rooms/" + roomDetail.slug}
          className="site-btn room-link"
          key={roomDetail.id}
        >
          features
        </Link>
      </div>
      <p className="room-title">{roomDetail.name}</p>
    </div>
  );
};
