import './App.css';
import React, { useState } from 'react';
import Card from './UI/Card';
import './UI/Card.css'
import HeatCalc from './Container/HeatLoss/HeatCalc';
import AirCalc from "./Container/Aircalc/AirCalc";
import SaniCalc from "./Container/Sanicalc/SaniCalc";
import SwipeBox from "./Container/UI/SwipeBox"
import pump from "./Container/Images/pump.jpg"
import AirDimensions from "./Container/Images/AirDimensions.jpg"
import Garage from "./Container/Images/Garage.jpg"
import Humidity from "./Container/Images/Humidity.jpg"
import Oxid from "./Container/Images/Oxid.jpg"
import CopperPipe from "./Container/Images/CopperPipe.jpg"
import WaterPipe from "./Container/Images/WaterPipe.jpg"
import SewerPipes from "./Container/Images/SewerPipes.jpg"
import FireExit from "./Container/Images/FireExit.jpg"
import RainPool from "./Container/Images/RainPool.jpg"
import AirPipes from "./Container/Images/AirPipes.jpg"
import Thermometer from "./Container/Images/Thermometer.jpg"
import Ventilator1 from "./Container/Images/Ventilator1.jpg"

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
          <div className="start__tiles">Větrání a klimatizace</div>
          <SwipeBox
            slot1="Dimenze VZT potrubí"
            props1OnClick={showAir}
            image1={<img className='tile__img' src={AirPipes} alt="airDim" />}
            slot2="Vlhký vzduch"
            image2={<img className='tile__img' src={Humidity} alt="airDim" />}
            slot3="Koncentrace CO2"
            image3={<img className='tile__img' src={Oxid} alt="airDim" />}
            slot4="Produkce vlhkosti"
            image4={<img className='tile__img' src={Humidity} alt="airDim" />}
            slot5="Tepelný zisk"
            image5={<img className='tile__img' src={Thermometer} alt="airDim" />}
            slot6="Tlakové ztráty"
            image6={<img className='tile__img' src={Ventilator1} alt="airDim" />}
            slot7="Výpočet CHÚC"
            image7={<img className='tile__img' src={FireExit} alt="airDim" />}
            slot8="Hromadné garáže"
            image8={<img className='tile__img' src={Garage} alt="airDim" />}
          />
          <div className="start__tiles" onClick={showSani}>Zdravotně technické instalace</div>
          <SwipeBox
            slot1="Dimenze kanalizace"
            props1OnClick={showSani}
            image1={<img className='tile__img' src={SewerPipes} alt="airDim" />}
            slot2="Dešťová voda"
            image2={<img className='tile__img' src={RainPool} alt="airDim" />}
            slot3="Vodovodní potrubí"
            image3={<img className='tile__img' src={WaterPipe} alt="airDim" />}
            slot4="Dimenzování cirkulace"
            image4={<img className='tile__img' src={CopperPipe} alt="airDim" />}
            slot5="Tlakové ztráty vodovodu"
            image5={<img className='tile__img' src={pump} alt="airDim" />}
          />
          <div className="start__tiles" onClick={showHeat}>Rozvody tepla a chladu</div>
          <SwipeBox
            slot1="Tepelné ztráty"
            props1OnClick={showHeat}
            image1={<img className='tile__img' src={pump} alt="airDim" />}
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