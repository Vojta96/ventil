import './App.css';
import React, { useState } from 'react';
import Card from './UI/Card';
import './UI/Card.css'
import HeatCalc from './Container/HeatLoss/HeatCalc';
import AirCalc from "./Container/Aircalc/AirCalc";
import SaniCalc from "./Container/Sanicalc/SaniCalc";
import SwipeBox from "./Container/UI/SwipeBox"

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
    <div className=''>
      <h1 className="header" onClick={showHome}>
        VENTIL
      </h1>
      {home === 1 &&
        <div>
          <div className="start__tiles">VZT</div>
          <SwipeBox
            slot1="Dimenze VZT potrubí"
            props1OnClick={showAir}
            slot2="Vlhký vzduch"
            slot3="Koncentrace CO2"
            slot4="Produkce vlhkosti"
            slot5="Tepelný zisk"
            slot6="Tlakové ztráty"
            slot7="Výpočet CHÚC"
            slot8="Hromadné garáže"
            slot9="Tlumič hluku"
            slot10="Volný slot"
          />
          <div className="start__tiles" onClick={showSani}>ZTI</div>
          <SwipeBox
            slot1="Dimenze svodného potrubí"
            props1OnClick={showSani}
            slot2="Odpadní potrubí"
            slot3="Vodovodní potrubí"
            slot4="Dimenzování cirkulace"
            slot5="Tlakové ztráty vodovodu"
            slot6="slot6"
            slot7="slot7"
            slot8="slot8"
            slot9="slot9"
            slot10="slot10"
            slot11="slot11"
          />
          <div className="start__tiles" onClick={showHeat}>RTCH</div>          <SwipeBox
            slot1="Tepelné ztráty"
            props1OnClick={showHeat}
            slot2="slot2"
            slot3="slot3"
            slot4="slot4"
            slot5="slot5"
            slot6="slot6"
            slot7="slot7"
            slot8="slot8"
            slot9="slot9"
            slot10="slot10"
            slot11="slot11"
          />
        </div>
      }
      {air === 1 && <AirCalc />}
      {sani === 1 && <SaniCalc />}
      {heat === 1 && <HeatCalc />}
    </div>
  );
}

export default App;