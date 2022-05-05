import React from "react";

const ConstructionList = (props) => {
    return (
        <div className='Room--box'>
            {props.rooms.map((room) => (
                <div key={room.Number} className='Room'>
                    -{room.Number}-<br />
                    {room.Temperature} °C<br />
                    {room.HeatLoss} W<br />
                </div>)
            )}
            <div className='addRoom' onClick={props.openNewRoom}>+</div>
        </div>
    )
};

export default ConstructionList;