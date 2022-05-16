import React, { useEffect, useState } from "react";
import NewRoom from './NewRoom';
import RoomList from "./RoomList";
import "./HeatCalc.css"

const HeatCalc = props => {
    const [rooms, setRooms] = useState([]);
    const [showNewRoom, setShowNewRoom] = useState(0)

    const onAddedRoom = (eNumber, eTemperature) => {
        setRooms((prev) => {
            return [...prev, {
                Number: eNumber,
                Temperature: eTemperature,
                HeatLoss: "---"
            }]
        })
    }

    const NewRoomHandler = () => {
        setShowNewRoom((prev) => {
            return (!prev)
        })
    };

    return (
        <div className="App-header">
            <RoomList rooms={rooms} NewRoomHandler={NewRoomHandler}
            />
            {showNewRoom == 1 &&
                <NewRoom
                    onAddedRoom={onAddedRoom}
                    NewRoomHandler={NewRoomHandler}
                />}
        </div>
    )

};

export default HeatCalc;