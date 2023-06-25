"use client";
import { useState } from "react";
import Select from "./Select";
import { weeks } from "./data";
export default function Filter() {
  const [selected, setSelected] = useState(weeks[0]);
  return (
    <div>
      <Select listData={weeks} value={selected} onChange={(e) => setSelected(e)} name={"weeks"}/>
    </div>
  );
}
