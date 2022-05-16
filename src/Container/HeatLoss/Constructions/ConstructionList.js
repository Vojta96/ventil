import React from "react";

const ConstructionList = (props) => {
    return (
        <div className='Construction--box'>
            {props.constructions.map((construction) => (
                <div key={props.constructions.length} className='Construction'>
                    -{construction.Number}-<br />
                    {construction.Temperature} °C<br />
                    {construction.HeatLoss} W<br />
                </div>)
            )}
            <div className='addConstruction' onClick={props.NewConstructionHandler}>+</div>
        </div>
    )
};

export default ConstructionList;