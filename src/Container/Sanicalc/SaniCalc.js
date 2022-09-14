import React, { useEffect, useState } from 'react'
import EquipmentList from './EquipmentList'
import Supply from './Supply/Supply.js'
import "./SaniCalc.css"
import BasicSelect from '../UI/BasicSelect.js'
import { TextField } from '@mui/material'
import { lowerRangeFor, higherRangeFor } from "./Support/PPRPN10.js";
import ranges from './Support/PPRPN10.js';

const SaniCalc = () => {
  const [velocity, setVelocity] = useState(2)
  const [coldDimension, setColdDimension] = useState("")
  const [hotDimension, setHotDimension] = useState("")
  const [coldQd, setColdQd] = useState(0)
  const [hotQd, setHotQd] = useState(0)

  /*   useEffect(() => {
      const crossSection = (coldQd / velocity / 3600 * 1000000);
      const rangeL = (lowerRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
      const rangeH = (higherRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
      const realVelocityLow = (4 * coldQd / 3600 / Math.pow(rangeL, 2) / Math.PI * 1000000).toFixed(2)
      const realVelocityHigh = (4 * coldQd / 3600 / Math.pow(rangeH, 2) / Math.PI * 1000000).toFixed(2)
      setColdDimension(rangeH)
    }, [coldQd]);
  
    useEffect(() => {
      const crossSection = (hotQd / velocity / 3600 * 1000000);
      const rangeL = (lowerRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
      const rangeH = (higherRangeFor(Math.sqrt(crossSection * 4 / Math.PI)));
      const realVelocityLow = (4 * hotQd / 3600 / Math.pow(rangeL, 2) / Math.PI * 1000000).toFixed(2)
      const realVelocityHigh = (4 * hotQd / 3600 / Math.pow(rangeH, 2) / Math.PI * 1000000).toFixed(2)
      setHotDimension(rangeH)
      co
    }, [hotQd]); */

  const onChange = (c, h) => {
    setColdQd(c)
    setHotQd(h)
  }

  return (
    <div className='sani__form--box'>
      <EquipmentList
        onChange={onChange} />
      {/*       <div className="sani__input--box">
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
      </div> */}
      <div className='sani__result--box'>
        <h3>Navržené rozměry (PPR PN10)</h3>
        <div className="sani__result">
          <h4>Studená</h4>
          <h4>Qd = {coldQd} l/s</h4>
          {ranges.map(range =>
            <div>
              <div className='sani__dimension--text'>
                {range.text}
              </div>
              <div>
                w = {(4 * (coldQd / 1000) / Math.pow(range.dn / 1000, 2) / Math.PI).toFixed(2)} m/s
              </div>
            </div>)}
        </div>
        <div className="sani__result">
          <h4>Teplá</h4>
          <h4>Qd = {hotQd} l/s</h4>
          {ranges.map(range =>
            <div>
              <div className='sani__dimension--text'>
                {range.text}
              </div>
              <div>
                w = {(4 * (hotQd / 1000) / Math.pow(range.dn / 1000, 2) / Math.PI).toFixed(2)} m/s
              </div>
            </div>)}
        </div>
      </div>
    </div>
  )
}

export default SaniCalc