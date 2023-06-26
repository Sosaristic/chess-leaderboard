'use client'
import { useState } from 'react'
import Filter from '@/components/Filter'
import MatchCard from '@/components/MatchCard'

export default function FixturesPage() {
  const [matches, setMatches] = useState([])
  const [round, setMatchRound] = useState("")
  return (
      <section>
        <h2 className='text-2xl text-light-green font-[600] text-center'>Fixtures</h2>
        <div className='flex justify-end my-1'><Filter setMatches={setMatches} setRound={setMatchRound}/></div>
        <div className='flex flex-wrap gap-6'>
        <MatchCard matchesData={matches} round={round}/>

        </div>
      </section>
    )
}
