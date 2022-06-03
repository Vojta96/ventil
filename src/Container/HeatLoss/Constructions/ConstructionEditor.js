import React, { useState } from "react";
import Card from '../../../UI/Card';
import Input from '../../../UI/Input';
import Button from '../../../UI/Button';

const ConstructionEditor = props => {

    const formChanger = () => {

    }

    const finishChanges = () => {
        props.ShowEditorHandler()
    }

    return (
        <>
            <div className="NewConstruction__form">
                <Card className="card">
                    <Input type="text" label="Název konstrukce" value={props.construction.Name} onChange={0} />
                    <Input type="text" label="Zkratka konstrukce" value={props.construction.ShortName} onChange={0} />
                    <Input type="text" label="Součinitel prostupu tepla U" value={props.construction.HeatTransfer} onChange={0} />
                    <Input type="text" label="Název vrstvy" value={""} onChange={0} />
                    <Input type="text" label="Tloušťka vrstvy" value={""} onChange={0} />
                    <Input type="text" label="Lambda vrstvy" value={""} onChange={0} />
                    <Button onClick={finishChanges} >ok</Button>
                </Card>
            </div>
            <div className="backdrop" onClick={props.ShowEditorHandler} />
        </>
    )
}

export default ConstructionEditor;