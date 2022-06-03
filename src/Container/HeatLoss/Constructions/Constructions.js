import React, { useState } from "react";
import ConstructionList from "./ConstructionList"
import NewConstruction from "./NewConstruction"
import "./../HeatCalc.css"
import "./Constructions.css"

const Constructions = props => {
    const [constructions, setConstructions] = useState([{
        Name: "Obvodová konstrukce",
        ShortName: "SO1",
        HeatTransfer: "0,2 W/m.K",
    }]);
    const [showNewConstruction, setShowNewConstruction] = useState(0)

    const onAddedConstruction = (eName, eShortName, eHeatTransfer) => {
        setConstructions((prev) => {
            return [...prev, {
                Name: eName,
                ShortName: eShortName,
                HeatTransfer: eHeatTransfer,
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