import Filter from '@/components/Filter'
import MatchCard from '@/components/MatchCard'

export default function FixturesPage() {
  return (
      <section>
        <h2 className='text-2xl text-light-green font-[600] text-center'>Fixtures</h2>
        <div className='flex justify-end my-1'><Filter /></div>
        <div className='flex flex-wrap gap-6'>
        <MatchCard />

        </div>
      </section>
    )
}
