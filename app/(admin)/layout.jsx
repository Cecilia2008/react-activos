"use client";

import { useRouter } from "next/navigation";
import { useAuthContext } from "@/contexts/authContext";


function LayoutAdmin({ children }) {
  const { isLoggedIn } = useAuthContext();
  const router = useRouter();
  if (!isLoggedIn) {
    router.push("/login");
  }

  return <div>{children}</div>;
}

export default LayoutAdmin;
