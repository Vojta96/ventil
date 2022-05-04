import React, { useEffect, useState } from 'react'
import EquipmentList from './EquipmentList'
import "./SaniCalc.css"
import BasicSelect from '../UI/BasicSelect.js'
import { TextField } from '@mui/material'
import { higherRangeFor } from "./Support/PPRPN10.js";
import ranges from './Support/PPRPN10.js';

const SaniCalc = () => {
  const [velocity, setVelocity] = useState(2)
  const [crossSection, setcrossSection] = useState(2)
  const [coldDimension, setColdDimension] = useState("")
  const [hotDimension, setHotDimension] = useState("")
  const [coldQd, setColdQd] = useState(0)
  const [hotQd, setHotQd] = useState(0)

  useEffect((o) => {
    //QD, opravit higher range(nebude sedět na novou řadu)
    setColdDimension("")
  }, [velocity]);

  const onChange = (c, h) => {
    setColdQd(c)
    setHotQd(h)
  }

  return (
    <>
      <EquipmentList />
      <div className="sani__input--box">
        <div className=''>
          <TextField
            label="Rychlost"
            type="number"
            value={velocity}
            onChange={(e) =>
              setVelocity(e.target.value)
            }
          />
          <BasicSelect className="sani__input" />
        </div>
      </div>
      <div className="sani__result--box">
        <h3>Navržené rozměry</h3>
        <div className="sani__result">
          <h4>Studená</h4>
          {coldDimension}
        </div>
        <div className="sani__result">
          <h4>Teplá</h4>
          {hotDimension}
        </div>
      </div>
    </>
  )
}

export default SaniCalc