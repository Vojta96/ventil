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
    <div className='App'>
      <h1 className="header" onClick={showHome}>
        VENTIL
      </h1>
      {home === 1 &&
        <div>
          <div className="start__tiles" onClick={showAir}>Větrání a klimatizace</div>
          {/* PŘEDPŘÍPRAVA DO BUDOUCNA
          <SwipeBox
            slot1="Dimenze VZT potrubí"
            props1OnClick={showAir}
            image1={<img className='tile__img' src={""} alt="airDim" />}
            slot2="Vlhký vzduch"
            image2={<img className='tile__img' src={""} alt="airDim" />}
            slot3="Koncentrace CO2"
            image3={<img className='tile__img' src={""} alt="airDim" />}
            slot4="Produkce vlhkosti"
            image4={<img className='tile__img' src={""} alt="airDim" />}
            slot5="Tepelný zisk"
            image5={<img className='tile__img' src={""} alt="airDim" />}
            slot6="Tlakové ztráty"
            image6={<img className='tile__img' src={""} alt="airDim" />}
            slot7="Výpočet CHÚC"
            image7={<img className='tile__img' src={""} alt="airDim" />}
            slot8="Hromadné garáže"
            image8={<img className='tile__img' src={""} alt="airDim" />}
          /> */}
          <div className="start__tiles" onClick={showSani}>Zdravotně technické instalace</div>
          {/* <SwipeBox
            slot1="Dimenze kanalizace"
            props1OnClick={showSani}
            image1={<img className='tile__img' src={""} alt="airDim" />}
            PŘEDPŘÍPRAVA DO BUDOUCNA
            slot2="Dešťová voda"
            image2={<img className='tile__img' src={""} alt="airDim" />}
            slot3="Vodovodní potrubí"
            image3={<img className='tile__img' src={""} alt="airDim" />}
            slot4="Dimenzování cirkulace"
            image4={<img className='tile__img' src={""} alt="airDim" />}
            slot5="Tlakové ztráty vodovodu"
            image5={<img className='tile__img' src={""} alt="airDim" />}
          /> */}
          <div className="start__tiles" onClick={showHeat}>Rozvody tepla a chladu</div>
          {/* <SwipeBox
            slot1="Tepelné ztráty"
            props1OnClick={showHeat}
            image1={<img className='tile__img' src={""} alt="airDim" />}
          /> */}
        </div>
      }
      {air === 1 && <AirCalc />}
      {sani === 1 && <SaniCalc />}
      {heat === 1 && <HeatCalc />}
    </div>
  );
}

export default App;