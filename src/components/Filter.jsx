"use client";
import { useState, useEffect } from "react";
import Select from "./Select";
import { weeks } from "./data";
import useSWR from "swr";
import { getScheduleFromDB } from "@/services/firestoreFunction";

export default function Filter({setMatches, setRound}) {
  const [selected, setSelected] = useState(weeks[0]);

  useEffect(()=>{
    getScheduleFromDB(selected.value).then((data)=>{
      console.log(data);
      setMatches(data)
      setRound(selected.value)
    }).catch((error)=>{
      console.log(error);
    })
  }, [selected, setMatches])
 
  return (
    <div>
      <Select listData={weeks} value={selected} onChange={(e) => setSelected(e)} name={"weeks"}/>
    </div>
  );
}
