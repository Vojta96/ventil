import React, { useState } from "react";
import Modal from '../../UI/Modal'
import Card from '../../UI/Card';
import Input from '../../UI/Input';
import Button from '../../UI/Button';

const NewRoom = props => {
    const [enteredNumber, setEnteredNumber] = useState("")
    const [enteredTemperature, setEnteredTemperature] = useState("")
    const [enteredArea, setEnteredArea] = useState("")
    const [enteredHeight, setEnteredHeight] = useState("")

    const addRoom = () => {
        const addedRoom = {
            Number: enteredNumber,
            Temperature: enteredTemperature,
            HeatLoss: "--- W",
        }
        props.onAddedRoom(addedRoom)
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
        <div /* className="backdrop" */>
            <Card className="card">
                <Input type="text" label="Číslo místnosti" value={enteredNumber} onChange={numberChanger} />
                <Input type="text" label="Teplota" onChange={temperatureChanger} />
                <Input type="text" label="Plocha místnosti" onChange={areaChanger} />
                <Input type="text" label="Konstrukční výška" onChange={heightChanger} />
                <Button onClick={addRoom} >ok</Button>
            </Card>
        </div>
    )
}

export default NewRoom