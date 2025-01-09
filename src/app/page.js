import React from 'react';
import HomePage from "@/components/homepage/HomePage";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow bg-[#0A0A2A] text-[#FFD700]">
        <HomePage />
      </main>
    </div>
  );
}