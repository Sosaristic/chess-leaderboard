'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
const routes = [
    {id: 1, name: "Players", link: "/dashboard"},
    {id: 2, name: "Matches", link: "/dashboard/matches"},

]
export default function DashboardNav() {
    const pathname = usePathname()
  return (
        <nav className='flex gap-2'>
            {routes.map((item)=>{
                        const isActive = pathname.endsWith(item.link)

                return <Link key={item.id} href={item.link} className={`flex-1  p-2 ${isActive? "bg-dark-green text-white": "bg-dark-grey"} text-center font-[500] font-inter`}>{item.name}</Link>
            })}
        </nav>
    )
}
