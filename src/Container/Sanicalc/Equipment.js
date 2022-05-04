import React, { useState, useEffect } from 'react'
import "../../App.css"

const Equipment = ({ equipment, onNewCount }) => {
  const [count, setCount] = useState(equipment.count)
  const source = { count: count }

  const countPlus = () => {
    setCount((prevState) => {
      return (prevState + 1)
    })
  };

  const countMinus = () => {
    setCount((prevState) => {
      return (prevState - 1)
    })
  };

  useEffect(() => {
    const changedEquipments = Object.assign(equipment, source);
    onNewCount(changedEquipments)
  }, [count])

  return (
    <div className="equipment__box">
      <div onClick={countPlus}>
        <img className='equipment__img' src={equipment.image} alt="" />
        <h1 className='equipment__count'
        >
          {count}
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