import './App.css';
import React, { useState } from 'react';
import Card from './UI/Card';
import './UI/Card.css'
import HeatCalc from './Container/HeatLoss/HeatCalc';
import AirCalc from "./Container/Aircalc/AirCalc";
import SaniCalc from "./Container/Sanicalc/SaniCalc";

function App() {
  const [home, setHome] = useState(1)
  const [air, setAir] = useState(0)
  const [sani, setSani] = useState(0)
  const [heat, setHeat] = useState(0)

  const showHome = () => {
    setHome(1)
    setAir(0)
    setSani(0)
    setHeat(0)
  };

  const showAir = () => {
    setHome(0)
    setAir(1)
    setSani(0)
    setHeat(0)
  };

  const showSani = () => {
    setHome(0)
    setAir(0)
    setSani(1)
    setHeat(0)
  };

  const showHeat = () => {
    setHome(0)
    setAir(0)
    setSani(0)
    setHeat(1)
  };

  return (
    <div>
      <h1 className="header" onClick={showHome}>
        VENTIL
      </h1>
      {home === 1 &&
        <Card>
          <div className="start__tiles" onClick={showAir}>AirCalc</div>
          <div className="start__tiles" onClick={showSani}>SaniCalc</div>
          <div className="start__tiles" onClick={showHeat}>HeatCalc</div>
        </Card>
      }
      {air === 1 && <AirCalc />}
      {sani === 1 && <SaniCalc />}
      {heat === 1 && <HeatCalc />}
    </div>
  );
}

export default App;