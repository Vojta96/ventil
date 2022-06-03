import React, { useState } from "react";
import ConstructionEditor from "./ConstructionEditor"

const ConstructionList = (props) => {
    const [showEditor, setShowEditor] = useState(0)

    const ShowEditorHandler = () => {
        setShowEditor((prev) => {
            return (!prev)
        })
    };

    return (
        <div className='Construction--box' >
            {props.constructions.map((construction) => (
                <div key={props.constructions.length} className='Construction' >
                    <div onClick={ShowEditorHandler}>
                        {construction.ShortName}<br />
                        U={construction.HeatTransfer}<br />
                    </div>
                    {showEditor == 1 &&
                        <ConstructionEditor
                            construction={construction}
                            ShowEditorHandler={ShowEditorHandler}
                        />}
                </div>)
            )}
            <div className='addConstruction' onClick={props.NewConstructionHandler}>+</div>
        </div>
    )
};

export default ConstructionList;