import React, { useEffect } from "react";
import NewRoom from '../HeatLoss/NewRoom';
import "./HeatCalc.css"

const HeatCalc = props => {
    const rooms = [
        {
            Number: "-101-",
            Temperature: "20 °C",
            HeatLoss: "300 W",
        },
    ];

    const onAddedRoom = (event) => {
        rooms.push(event)
        console.log(rooms)
    }

    const RoomMap = () => {
        return (
            rooms.map(room => {
                return (
                    <div key={room.Number} className='Room'>
                        {room.Number}<br />
                        {room.Temperature}<br />
                        {room.HeatLoss}<br />
                    </div>
                )
            })
        )

    }

    return (
        <div className="App-header">
            <div className='Room--box'>
                {RoomMap()}
                <div className='addRoom'>+</div>
            </div>
            <NewRoom onAddedRoom={onAddedRoom} />
        </div>
    )

};

export default HeatCalc;