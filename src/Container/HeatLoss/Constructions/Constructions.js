import React, { useState } from "react";
import ConstructionList from "./ConstructionList"
import NewConstruction from "./NewConstruction"
import "./../HeatCalc.css"

const Constructions = props => {
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
            <ConstructionList rooms={rooms} openNewRoom={openNewRoom}
            />
            {showNewRoom == 1 &&
                <NewConstruction
                    onAddedRoom={onAddedRoom}
                    closeNewRoom={closeNewRoom}
                />}
        </div>
    )

};

export default Constructions;