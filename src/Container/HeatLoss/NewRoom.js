import React, { useState } from "react";
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import Button from '../../UI/Button';
import "./HeatCalc.css"

const NewRoom = props => {
    const [enteredNumber, setEnteredNumber] = useState("")
    const [enteredTemperature, setEnteredTemperature] = useState("")
    const [enteredArea, setEnteredArea] = useState("")
    const [enteredHeight, setEnteredHeight] = useState("")

    const addRoom = () => {
        props.onAddedRoom(enteredNumber, enteredTemperature)
        props.NewRoomHandler()
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
            <div className="backdrop" onClick={props.NewRoomHandler} />

            <div className="NewRoom__form">
                <Card className="card">
                    <Input type="text" label="Číslo místnosti" value={enteredNumber} onChange={numberChanger} />
                    <Input type="text" label="Teplota" onChange={temperatureChanger} />
                    <Input type="text" label="Plocha místnosti" onChange={areaChanger} />
                    <Input type="text" label="Konstrukční výška" onChange={heightChanger} />
                    <Button onClick={addRoom} >ok</Button>
                </Card>
            </div>
        </>
    )
}

export default NewRoom