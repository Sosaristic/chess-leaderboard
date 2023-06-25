"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkUserSignedIn } from "@/services/firebaseAuthentication";
import DashboardNav from "./DashboardNav";
import Logout from "./Logout";

export default function DashboardLayout({ children }) {
  const router = useRouter();
  useEffect(() => {
    checkUserSignedIn()
      .then((user) => {
        if (!user) {
          router.push("/login");
        }
      })
      .catch((error) => {});
  }, []);
  return (
    <section>
      <Logout />
      <DashboardNav />
      {children}
    </section>
  );
}
