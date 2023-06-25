"use client";
import { useRouter } from "next/navigation";
import { signOut } from "firebase/auth";
import {auth} from "@/services/firebase"
export default function Logout() {
const router = useRouter()
    const handleLogOut = ()=>{
        signOut(auth).then(()=>{
            router.push("/login")
        }).catch((error)=>{
            
        })
    }
  return (
    <div className="flex justify-end">
      <button className="h-[2.5rem] bg-light-green text-white px-2 rounded-md" onClick={handleLogOut}>Log Out</button>
    </div>
  );
}
