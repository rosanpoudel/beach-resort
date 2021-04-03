import React from 'react';
import { withRoomConsumer } from "../Context";
import { RoomList } from "./RoomList";
import { RoomFilter } from "./RoomFilter";

function RoomsContainer({ context }) {
    const { sortedRooms, rooms } = context;
    return (
        <div className="container">
            <div className="rooms-wrapper">
                <RoomFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
            </div>
        </div>
    )
}

export default withRoomConsumer(RoomsContainer);


