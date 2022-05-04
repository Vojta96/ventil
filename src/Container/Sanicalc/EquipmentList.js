import React, { useEffect, useState } from 'react'
import Equipment from './Equipment'
import ImageVV15 from '../Images/VV15.svg'
import ImageVV20 from '../Images/VV20.svg'
import bidet from '../Images/bidet.svg'
import toilet from '../Images/toilet.svg'
import washMashine from '../Images/washMashine.svg'
import dishWasher from '../Images/dishWasher.svg'
import sink from '../Images/sink.svg'
import kitchenSink from '../Images/kitchenSink.svg'
import shower from '../Images/shower.svg'
import bathTub from '../Images/bathTub.svg'
import urinal from '../Images/urinal.png'
// podle ČSN 75 5455

const EquipmentList = () => {
   const [Qd, setQd] = useState(0);
   const [newEq, setNewEq] = useState(0)
   const [equipments, setEquipments] = useState([
      {
         id: "VV15",
         image: (ImageVV15),
         name: "Výtokový ventil DN15",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "VV20",
         image: (ImageVV20),
         name: "Výtokový ventil DN20",
         dimension: 20,
         count: 0,
         outFlow: 0.4,
      },
      {
         id: "Bi",
         image: (bidet),
         name: "Bidetová souprava nebo směšovací baterie",
         dimension: 15,
         count: 0,
         outFlow: 0.1,
         //Hodnoty jmenovitého výtoku se používají pro stanovení výpočtového průtoku studené i teplé vody ke směšovací baterii.
      },
      {
         id: "WC",
         image: (toilet),
         name: "Nádržkový splachovač",
         dimension: 15,
         count: 0,
         outFlow: 0.15,
      },
      {
         id: "AP",
         image: (washMashine),
         name: "Automatická bytová pračka",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "MN",
         image: (dishWasher),
         name: "Bytová myčka nádobí",
         dimension: 15,
         count: 0,
         outFlow: 0.15,
      },
      {
         id: "Um",
         image: (sink),
         name: "Směšovací baterie u umyvadla, umývátka nebo umývacího žlabu",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "D",
         image: (kitchenSink),
         name: "Směšovací baterie u dřezu",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "S",
         image: (shower),
         name: "Směšovací baterie sprchová",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "V",
         image: (bathTub),
         name: "Směšovací baterie vanová",
         dimension: 15,
         count: 0,
         outFlow: 0.2,
      },
      {
         id: "P",
         image: (urinal),
         name: "Tlakový splachovač pisoárové mísy bez odsávání nebo pisoárového stání",
         dimension: 15,
         count: 0,
         outFlow: 0.15,
      },
      {
         id: "P+",
         image: (urinal),
         name: "Tlakový splachovač pisoárové mísy odsávací",
         dimension: 15,
         count: 0,
         outFlow: 0.3,
      },
      {
         id: "WC+",
         image: (toilet),
         name: "Tlakový splachovač záchodové mísy",
         dimension: 20,
         count: 0,
         outFlow: 1.2,
      },
   ]);

   const newCount = (newEquipmentCount) => {
      setNewEq(newEquipmentCount)
      const foundIndex = equipments.findIndex(x => x.id == newEq.id);
      equipments[foundIndex] = newEq;
      setEquipments(prev => Object.assign(prev, equipments))
      const QdWithoutSum = equipments.map(obj => Math.pow(obj.outFlow, 2) * obj.count);
      setQd((QdWithoutSum).reduce((sum, item) => sum += item, 0).toFixed(3));
      console.log(equipments)
   };

   return (
      <div className='equipmentList'>
         {equipments.map((equipment) => (
            <Equipment
               key={equipment.id}
               equipment={equipment}
               onNewCount={newCount}
            />
         ))}
         <h2>
            Qd= {Qd}m3/h
         </h2>
      </div>
   )
}

export default EquipmentList