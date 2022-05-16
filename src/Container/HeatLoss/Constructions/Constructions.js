import React, { useState } from "react";
import ConstructionList from "./ConstructionList"
import NewConstruction from "./NewConstruction"
import "./../HeatCalc.css"
import "./Constructions.css"

const Constructions = props => {
    const [constructions, setConstructions] = useState([]);
    const [showNewConstruction, setShowNewConstruction] = useState(0)

    const onAddedConstruction = (eName, eDepth, eLambda, eRsi, eRse) => {
        setConstructions((prev) => {
            return [...prev, {
                Name: eName,
                Depth: eDepth,
                Lambda: eLambda,
                Rsi: eRsi,
                Rse: eRse,
            }]
        })
    };

    const NewConstructionHandler = () => {
        setShowNewConstruction((prev) => {
            return (!prev)
        })
    };

    return (
        <div className="App-header">
            <ConstructionList
                constructions={constructions}
                NewConstructionHandler={NewConstructionHandler}
            />
            {showNewConstruction == 1 &&
                <NewConstruction
                    onAddedConstruction={onAddedConstruction}
                    NewConstructionHandler={NewConstructionHandler}
                />}
        </div>
    )
};

export default Constructions;