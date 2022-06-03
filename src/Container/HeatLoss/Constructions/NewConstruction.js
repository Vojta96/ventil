import React, { useState } from "react";
import Card from '../../../UI/Card';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

const NewConstruction = props => {
    const [enteredName, setEnteredName] = useState("")
    const [enteredShortName, setEnteredShortName] = useState("")
    const [enteredHeatTransfer, setEnteredHeatTransfer] = useState("")

    const addConstruction = () => {
        props.onAddedConstruction(enteredName, enteredShortName, enteredHeatTransfer)
        props.NewConstructionHandler()
    }

    const nameChanger = (event) => {
        setEnteredName(event.target.value)
    }

    const shortNameChanger = (event) => {
        setEnteredShortName(event.target.value)
    }

    const heatTransferChanger = (event) => {
        setEnteredHeatTransfer(event.target.value)
    }

    return (
        <>
            <div className="NewConstruction__form">
                <Card className="card">
                    <Input type="text" label="Název konstrukce" value={enteredName} onChange={nameChanger} />
                    <Input type="text" label="Zkratka konstrukce" onChange={shortNameChanger} />
                    <Input type="text" label="Součinitel prostupu tepla" onChange={heatTransferChanger} />
                    <Button onClick={addConstruction} >ok</Button>
                </Card>
            </div>
            <div className="backdrop" onClick={props.NewConstructionHandler} />
        </>
    )
}

export default NewConstruction;