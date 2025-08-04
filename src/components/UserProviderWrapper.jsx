"use client";
import { UserProvider } from "@/context/UserContext";

export default function UserProviderWrapper({ children }) {
  return <UserProvider>{children}</UserProvider>;
}
