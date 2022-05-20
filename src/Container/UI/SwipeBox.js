import React, { useState } from 'react';
import "./SwipeBox.css"


function SwipeBox(props) {
    return (
        <div className='container'>
            <div className='slot' onClick={props.props1OnClick}>{props.slot1}</div>
            <div className='slot'>{props.slot2}</div>
            <div className='slot'>{props.slot3}</div>
            <div className='slot'>{props.slot4}</div>
            <div className='slot'>{props.slot5}</div>
            <div className='slot'>{props.slot6}</div>
            <div className='slot'>{props.slot7}</div>
            <div className='slot'>{props.slot8}</div>
            <div className='slot'>{props.slot9}</div>
            <div className='slot'>{props.slot10}</div>
            <div className='slot'>{props.slot11}</div>
            <div className='slot'>{props.slot12}</div>
            <div className='slot'>{props.slot13}</div>
            <div className='slot'>{props.slot14}</div>
            <div className='slot'>{props.slot21}</div>
            <div className='slot'>{props.slot22}</div>
            <div className='slot'>{props.slot23}</div>
        </div>)

};

export default SwipeBox;