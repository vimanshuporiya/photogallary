import React, { useState } from "react";
import "./body.css";
import Card from "./card";

function Body() {
     const dataValues = [
      {
        show:'nature',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'india',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        
        show:'life',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/2.jpeg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/1.jpg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/1.jpg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      },
      {
        show:'life',
        image:"images/1.jpg",
        body:"can i say some thinf jhewhd jhbdew wcg wb wecewhvh jh dvjchbwd"
      }
     ]
     const [values, setValues]= useState(dataValues)

     const changeData=(val)=>{
      const temp = dataValues.filter((item)=>item.show === val);
      setValues([...temp]);
     }

  return (
    <div>
      <div className="main-title">
        <ul className="title-button">
          <button onClick={()=>changeData('all')}>All</button>
          <button onClick={()=>changeData('life')}>Life</button>
          <button onClick={()=>changeData('nature')}>Nature</button>
          <button onClick={()=>changeData('india')}>India</button>
        </ul>
      </div>
      <section  className="column-card">
        <div className="cards">
       {
        values.map((item,idx)=>{
          return(
            <Card
            key={idx}
        show={item.show}
        image={item.image}
        body={item.body}
         />
          )
        })
       }
    </div>
          
      </section>
    </div>
  );
}
export default Body;
