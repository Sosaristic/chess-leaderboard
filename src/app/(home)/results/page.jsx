'use client'
import { useState } from 'react'
import Filter from '@/components/Filter'
import MatchCard from '@/components/MatchCard'

export default function ResultsPage() {
  const [matches, setMatches] = useState([])
  const [round, setRound] = useState("")

  return (
      <section>
        <h2 className='text-2xl text-light-green font-[600] text-center'>Results</h2>
        <div className='flex justify-end my-1'><Filter setMatches={setMatches} setRound={setRound}/></div>
        <div className='flex flex-wrap gap-6'>
        <MatchCard displayResult={true} matchesData={matches} round={round}/>

        </div>
      </section>
    )
}