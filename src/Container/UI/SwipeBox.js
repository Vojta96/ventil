import React, { useState } from 'react';
import "./SwipeBox.css"


function SwipeBox(props) {
    return (
        <div className='container'>
            <div className='slot' onClick={props.props1OnClick}><div className='tile__text'>{props.slot1}</div><div>{props.image1}</div></div>
            <div className='slot' onClick={props.props2OnClick}><div className='tile__text'>{props.slot2}</div><div>{props.image2}</div></div>
            <div className='slot' onClick={props.props3OnClick}><div className='tile__text'>{props.slot3}</div><div>{props.image3}</div></div>
            <div className='slot' onClick={props.props4OnClick}><div className='tile__text'>{props.slot4}</div><div>{props.image4}</div></div>
            <div className='slot' onClick={props.props5OnClick}><div className='tile__text'>{props.slot5}</div><div>{props.image5}</div></div>
            <div className='slot' onClick={props.props6OnClick}><div className='tile__text'>{props.slot6}</div><div>{props.image6}</div></div>
            <div className='slot' onClick={props.props7OnClick}><div className='tile__text'>{props.slot7}</div><div>{props.image7}</div></div>
            <div className='slot' onClick={props.props8OnClick}><div className='tile__text'>{props.slot8}</div><div>{props.image8}</div></div>
            <div className='slot' onClick={props.props9OnClick}><div className='tile__text'>{props.slot9}</div><div>{props.image9}</div></div>
            <div className='slot' onClick={props.props10OnClick}><div className='tile__text'>{props.slot10}</div><div>{props.image10}</div></div>
        </div>)

};

export default SwipeBox;