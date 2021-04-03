import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Hero } from "../components/Hero";
import { Banner } from "../components/Banner";
import StyledHero from "../components/StyledHero";
import { RoomContext } from "../Context";

export const SingleRoom = (props) => {
  const context = useContext(RoomContext);
  const slug = props.match.params.slug;
  let tempRooms = [...context.rooms];
  // find returns the first object it finds, filter returns an array
  const room = tempRooms.find((room) => room.slug === slug);

  // if no page found
  if (!room) {
    return (
      <div>
        <Hero hero="roomsHero">
          <Banner title="404">
            <Link className="site-btn" to="/rooms">
              Back to rooms
            </Link>
          </Banner>
        </Hero>
      </div>
    );
  }

  // if page found
  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images,
  } = room;
  return (
    <div>
      <StyledHero img={images[0]}>
        <Banner title={name + " Room"}>
          <Link className="site-btn" to="/rooms">
            Back to rooms
          </Link>
        </Banner>
      </StyledHero>

      <div className="room-details">
        <div className="container">
          <div className="detail-wrapper">
            <div className="details">
              <div className="room-images mb-3 mb-md-5">
                <div className="row">
                  {images.map((image, index) => {
                    return (
                      <div className="col-6 col-md-3  mb-4 mb-md-0" key={index}>
                        <img className="img-fluid" src={image} alt={name} />
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="row">
                <div className="col-lg-7 mb-5 mb-lg-0">
                  <h3 className="sub-titles">Details</h3>
                  <p className="description">{description}</p>
                </div>
                <div className="col-lg-4">
                  <h3 className="sub-titles">info</h3>
                  <p className="info-txt">price: ${price}</p>
                  <p className="info-txt">size: {size} SQFT</p>
                  <p className="info-txt">max capacity: {capacity} person</p>
                  <p className="info-txt">
                    breakfast: {breakfast ? "free breakfast" : "have to pay"}
                  </p>
                  <p className="info-txt">
                    {pets ? "pets allowed" : "no pets allowed"}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="extras">
            <h3 className="sub-titles">Extras</h3>
            <ul>
              {extras.map((item, index) => {
                return <li key={index}>- {item}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
