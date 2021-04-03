import React, { useContext } from "react";

import { RoomContext } from "../Context";

export const RoomFilter = ({ rooms }) => {

  const context = useContext(RoomContext);
  // handle change connection with context
  const { handleChange, type, capacity, price, minPrice, maxPrice, minSize, maxSize, breakfast, pets } = context;



  // get unique data
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  }


  // for room type
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  types = types.map((type, index) => {
    return <option key={index} value={type}>{type}</option>
  })

  // for capacity
  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>
  });



  return (
    <div className="room-filter" >
      <form className="filter-form">
        <div className="form-wrapper">
          {/* room type */}
          <div className="form-group type-box">
            <label className="label mb-2" htmlFor="type">Room Type :</label>
            <select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
              {types}
            </select>
          </div>
          {/* room type ends */}

          {/* room capacity */}
          <div className="form-group capacity-box">
            <label className="label mb-2" htmlFor="capacity">Guests :</label>
            <select className="form-control" name="capacity" id="capacity" value={capacity} onChange={handleChange}>
              {people}
            </select>
          </div>
          {/* room capacity ends */}


          {/* room price */}
          <div className="form-group price-box">
            <label className="label" htmlFor="price">Price ${price}</label>
            <input className="form-control pr-0" type="range" name="price" min={minPrice} max={maxPrice} id="price" value={price} onChange={handleChange} />
          </div>
          {/* room price ends */}


          {/* room size */}
          <div className="form-group size-box">
            <label className="label mb-2" htmlFor="size">Size</label>
            <div className="d-flex">
              <input type="number" className="form-control mr-2" name="minSize" id="size" value={minSize} onChange={handleChange} />
              <input type="number" className="form-control" name="maxSize" id="size" value={maxSize} onChange={handleChange} />
            </div>
          </div>
          {/* room size ends */}




          {/* pets & breakfast */}
          <div className="form-group extra-box">
            <div className="breakfast mb-2">
              <input className="mr-2" type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
              <label htmlFor="breakfast">Breakfast</label>

            </div>
            <div class="pets">
              <input className="mr-2" type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
              <label htmlFor="pets">pets</label>

            </div>
          </div>
          {/* pets & breakfast ends */}


        </div>
      </form>
    </div>
  );
};
