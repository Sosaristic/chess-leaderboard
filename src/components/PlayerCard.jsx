'use client'

import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";


export default function PlayerCard({setShowModal, setShowPlayersDetailsNodal}) {
  return (
    <>
      <div className="flex text-lg shadow-match-card items-center p-2">
        <p className="text-lg">Anderson</p>
        <button type="button" className="ml-auto text-[2rem] text-light-green" onClick={()=>setShowModal(true)}><MdOutlineDelete /></button>
        <button type="button" className="text-[2rem] text-light-green" onClick={()=>setShowPlayersDetailsNodal(true)}><AiOutlineEdit /></button>

      </div>
    </>
  );
}
