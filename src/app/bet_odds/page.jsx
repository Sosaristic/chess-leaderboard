"use client"

import React, { useState } from 'react'

const data = ["Main", "Punches", "Specials"]

const BettOdds = () => {

  const [stacks, setStacks] = useState(data[0])
  
  const straightWin = [
    { id: 1, name: "Home", odds: 2.50 },
    { id: 2, name: "Draw", odds: 5.00 },
    {id: 3, name: "Away", odds: 8.00}
  ]
  const bothSideToPuch = [
    { id: 1, name: "Yes", odds: 1.5 },
    {id: 2, name: "No", odds: 8.0}
  ]

  const firstToCry = [
    { id: 1, name: "Yes", odds: 1.18 },
    {id: 2, name: "No", odds: 15.00}
  ]

  const firstToCallPolice = [
    { id: 1, name: "Home", odds: 1.10 },
    { id: 2, name: "No Police", odds: 10.00 },
    {id: 3, name: "Away", odds: 15.00}
    
  ]

  const homePunches = [
    { id: 1, name: "1-3", odds: 1.5 },
    { id: 2, name: "4-8", odds: 8.0 },
    { id: 3, name: "9-12", odds: 15.00 },
    {id: 4, name: "12-15", odds: 20.00}
    
  ]
  const awayPunches = [
    { id: 1, name: "1-3", odds: 1.15 },
    { id: 2, name: "4-8", odds: 1.30 },
    { id: 3, name: "9-12", odds: 2.00 },
    {id: 4, name: "12-15", odds: 4.00}
  ]
  
 



  const OddsCard = ({ title, details }) => {
    const [active, setActive] = useState(null)
const handleSetActive = (id) => {
  setActive((prev) => (prev === id ? null : id));
}

    return (
      <div>
        <h5 className='my-2 text-sm font-righteous'>{ title}</h5>
        <div className='flex flex-wrap gap-4 '>
          {details.map((item) => {
            return(
              <button key={item.id} onClick={()=>handleSetActive(item.id)} className={`flex-1 basis-[30%] text-sm lg:text-lg md:basis-[20%]  hover:bg-dark-green flex justify-between rounded-lg bg-dark-grey ${active === item.id? "bg-light-green": ""} text-white px-2 py-1`}>{<span >{item.name}</span>} {<span className='text-light-green'>{item.odds}</span> }</button>
            )
            
          })}
        </div>
    </div>
  )


}




  return (
    <div className='font-inter'>
      <section>
        <h1 className='my-2 text-3xl shadow-lg'>Onyi vs Willie</h1>

        <div className='flex justify-between my-4'>{data.map((item, index) => {
          const active = item === stacks
          return <div key={item}>
            <button className={`flex-1  lg:text-2xl ${active? "border-b-4 border-b-light-green text-light-green" : "border-none"}`} onClick={()=>setStacks(item)}>{item }</button>
          </div>
        })}</div>


        {stacks === "Main" && 
          <div className='flex flex-col gap-4'>
        <OddsCard title={"Straight Win"} details={straightWin} />
          <OddsCard title={"Both side to punch"} details={bothSideToPuch} />
          <OddsCard title={"First to cry"} details={firstToCry} />
          <OddsCard title={"First to call police"} details={firstToCallPolice} />
          </div>}
        {stacks === "Punches" && 
          <div className='flex flex-col gap-4'>
            <OddsCard title={"Onyi Punches"} details={homePunches} />
            <OddsCard title={"Willie Punches"} details={awayPunches} />
          </div>}
         

      </section>
    </div>
  )
}

export default BettOdds