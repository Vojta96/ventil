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

    const openNewRoom = () => {
        setShowNewRoom(1)
        console.log(showNewRoom)
    }

    const closeNewRoom = () => {
        setShowNewRoom(0)
    }

    return (
        <div className="App-header">
            <RoomList rooms={rooms} openNewRoom={openNewRoom}
            />
            {showNewRoom == 1 &&
                <NewRoom
                    onAddedRoom={onAddedRoom}
                    closeNewRoom={closeNewRoom}
                />}
        </div>
    )

};

export default HeatCalc;