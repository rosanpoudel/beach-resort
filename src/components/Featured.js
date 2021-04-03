import React, { useContext } from "react";
import { Title } from "../components/Title";
import { Room } from "../components/Room";
import { RoomContext } from "../Context";

export const Featured = () => {
  const context = useContext(RoomContext);
  const featured = context.featuredRooms;
  return (
    <div className="featured">
      <div className="container">
        <Title title="Featured Rooms" />

        <div className="row">
          
            {
              featured.map((roomDetail)=>{
                return (
                  <div
                    className="col-md-2 col-lg-4 mb-4 mb-lg-0"
                    key={roomDetail.id}
                  >
                    <Room roomDetail={roomDetail} />
                  </div>
                );
              })
            }

        </div>
      </div>
    </div>
  );
};
