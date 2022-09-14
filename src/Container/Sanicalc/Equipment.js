import React, { useState, useEffect } from 'react'
import "../../App.css"

const Equipment = ({ equipment, onNewCount }) => {
  const [coldCount, setColdCount] = useState(equipment.coldCount)
  const [hotCount, setHotCount] = useState(equipment.hotCount)
  const source = {
    coldCount: coldCount,
    hotCount: hotCount
  }

  const countPlus = () => {
    setColdCount((prevState) => {
      return (prevState + 1)
    })
    equipment.isHot && setHotCount((prevState) => {
      return (prevState + 1)
    })
  };

  const countMinus = () => {
    setColdCount((prevState) => {
      return (prevState - 1)
    })
    equipment.isHot && setHotCount((prevState) => {
      return (prevState - 1)
    })
  };

  useEffect(() => {
    const changedEquipments = Object.assign(equipment, source);
    onNewCount(changedEquipments)
  }, [equipment, source])

  return (
    <div className="equipment__box">
      <div onClick={countPlus}>
        <img className='equipment__img' src={equipment.image} alt="" />
        <h1 className='equipment__count'
        >
          {coldCount}
        </h1>
        <h2 className='equipment__name'>
          {equipment.id}
        </h2>
      </div>
      <div>
        <button onClick={countMinus}> - </button>
      </div>
    </div>
  )
}

export default Equipment