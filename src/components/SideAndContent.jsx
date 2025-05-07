"use client";

import { useStore } from "@/store";
import SideBar from "./SideBar";

export default function SideAndContent({ children }) {
  const { sidebar } = useStore();

  return (
    <main
      className={`grid ${
        sidebar ? "grid-cols-[12%_88%]" : "grid-cols-[5%_95%]"
      }`}
    >
      <div className={`${sidebar ? "block w-full" : "w-12 overflow-hidden"}`}>
        <SideBar />
      </div>
      <div className="p-5">{children}</div>
    </main>
  );
}
