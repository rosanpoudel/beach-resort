import React from 'react';
import { Room } from "./Room";

export const RoomList = ({ rooms }) => {

    {
        if (rooms.length === 0) {
            return (
                <h2 className="no-rooms text-center font-weight-bold">
                    Unfortunately No Rooms Matched Your Search Parameters
                </h2>
            )
        }
    }
    return (
        <div className="row">
            {rooms.map((roomDetail) => {
                return (
                    <div className="col-sm-6 col-md-4 col-lg-3" key={roomDetail.id}>
                        <Room roomDetail={roomDetail} />
                    </div>
                );
            })}
        </div>
    )
}
