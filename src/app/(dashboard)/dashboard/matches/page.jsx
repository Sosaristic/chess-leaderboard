'use client'
import { useState } from "react";
import Filter from "@/components/Filter";
import MatchCard from "@/components/MatchCard";
import UpdateMatchCard from "./UpdateMatchCard";

export default function MatchesPage() {
  const [showUpdateMatchModal, setShowUpdateMatchModal] = useState(false)
  return (
    <section>
       <h2 className='text-2xl text-light-green font-[600] text-center'>Matches</h2>
        <div className='flex justify-end my-1'><Filter /></div>
        <div className='flex flex-wrap gap-6'>
        <MatchCard user={true} setShowUpdateMatchModal={setShowUpdateMatchModal}/>
        {showUpdateMatchModal && <UpdateMatchCard setShowUpdateMatchModal={setShowUpdateMatchModal}/>}

        </div>
    </section>
  );
}
