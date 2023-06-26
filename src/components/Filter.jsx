"use client";
import { useState, useEffect } from "react";
import Select from "./Select";
import { weeks } from "./data";
import useSWR from "swr";
import { getScheduleFromDB } from "@/services/firestoreFunction";

export default function Filter({setMatches}) {
  const [selected, setSelected] = useState(weeks[0]);

  useEffect(()=>{
    getScheduleFromDB(selected.value).then((data)=>{
      setMatches(data)
    }).catch((error)=>{
      console.log(error);
    })
  }, [selected, setMatches])
  // console.log(data);
  console.log(selected);
  return (
    <div>
      <Select listData={weeks} value={selected} onChange={(e) => setSelected(e)} name={"weeks"}/>
    </div>
  );
}
