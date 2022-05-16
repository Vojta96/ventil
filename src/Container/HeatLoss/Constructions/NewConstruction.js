import React, { useState } from "react";
import Card from '../../../UI/Card';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

const NewConstruction = props => {
    const [enteredNumber, setEnteredNumber] = useState("")
    const [enteredTemperature, setEnteredTemperature] = useState("")
    const [enteredArea, setEnteredArea] = useState("")
    const [enteredHeight, setEnteredHeight] = useState("")

    const addConstruction = () => {
        props.onAddedConstruction(enteredNumber, enteredTemperature)
        props.NewConstructionHandler()
    }

    const numberChanger = (event) => {
        setEnteredNumber(event.target.value)
    }

    const temperatureChanger = (event) => {
        setEnteredTemperature(event.target.value)
    }

    const areaChanger = (event) => {
        setEnteredArea(event.target.value)
    }

    const heightChanger = (event) => {
        setEnteredHeight(event.target.value)
    }

    return (
        <>
            <div className="NewConstruction__form">
                <Card className="card">
                    <Input type="text" label="Název konstrukce" value={enteredNumber} onChange={numberChanger} />
                    <Input type="text" label="Zkratka" onChange={temperatureChanger} />
                    <Input type="text" label="Plocha místnosti" onChange={areaChanger} />
                    <Input type="text" label="Konstrukční výška" onChange={heightChanger} />
                    <Button onClick={addConstruction} >ok</Button>
                </Card>
            </div>
            <div className="backdrop" onClick={props.NewConstructionHandler} />
        </>
    )
}

export default NewConstruction;