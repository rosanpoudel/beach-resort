import React, { Component } from "react";
import items from "./data";

// context initialized
const RoomContext = React.createContext();

// room provider
class RoomProvider extends Component {
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false
  };

  // getting data
  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter((room) => room.featured === true);

    // calculate max price
    let maxPrice = Math.max(...rooms.map(room => room.price));
    let maxSize = Math.max(...rooms.map(room => room.size));




    // state with new values
    this.setState({
      rooms,
      sortedRooms: rooms,
      featuredRooms,
      price: maxPrice,
      maxPrice,
      maxSize
    });


  }
  // formating data for easy access
  formatData(items) {
    let tempItems = items.map((item, index) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let room = { ...item.fields, images, id };
      return room;
    });
    return tempItems;
  }

  // handle filter change
  handleChange = (e) => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = e.target.name;

    this.setState({
      [name]: value
    }, this.filterRooms)
  };

  // filter rooms on change
  filterRooms = () => {
    let { rooms, type, capacity, price, minSize, maxSize, breakfast, pets } = this.state;

    // all rooms
    let tempRooms = [...rooms];

    // for type
    if (type !== "all") {
      tempRooms = tempRooms.filter((room) => room.type === type);
    }

    // for capacity
    capacity = parseInt(capacity);
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity >= capacity);
    }

    // for price
    price = parseInt(price);
    tempRooms = tempRooms.filter(room => room.price <= price);


    // for size
    tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);

    // fro breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === true);
    }

    // fro pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === true);
    }




    // updating state with filtered data
    this.setState({ sortedRooms: tempRooms });
  }



  render() {
    return (
      <RoomContext.Provider value={{ ...this.state, handleChange: this.handleChange }}>
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

// room consumer
const RoomConsumer = RoomContext.Consumer;

// heigher order component
export function withRoomConsumer(Component) {
  return function ConsumerWrapper(props) {
    return <RoomConsumer >
      {value => <Component {...props} context={value} />}
    </RoomConsumer>
  }
}

// exporting context values
export { RoomContext, RoomProvider, RoomConsumer };










