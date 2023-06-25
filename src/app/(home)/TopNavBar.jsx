'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const links = [
  {id: 1, name: "table", link: "/"},
  {id: 2, name: "results", link: "/results"},
  {id: 3, name: "fixtures", link: "/fixtures"}
]
export default function TopNavBar() {
  const pathname = usePathname()
  return (
    <ul className="font-inter flex gap-2">
      {links.map((item)=>{
        const isActive = pathname.endsWith(item.link)
      return <li key={item.id} className={`capitalize flex-1 ${isActive? "border-light-green text-light-green": "border-dark-grey"} border-b text-center`}><Link href={item.link}>{item.name}</Link></li>
      })}
    </ul>
  )
}
