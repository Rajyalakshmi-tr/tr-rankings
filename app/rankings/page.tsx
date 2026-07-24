"use client";

import { useState } from "react";
import Link from "next/link";
import RankingTable from "@/components/RankingTable";
import { universities } from "@/data/universities";
export default function RankingsPage() {
  return (
    <main className="min-h-screen bg-white p-10">
      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        University Rankings
      </h1>

      <p className="text-gray-700 mb-8">
        Explore our global university rankings across different categories.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        <a
          href="/rankings/world"
          className="p-6 bg-blue-100 rounded-lg hover:bg-blue-200"
        >
          🌍 World Rankings
        </a>

        <a
          href="/rankings/country"
          className="p-6 bg-green-100 rounded-lg hover:bg-green-200"
        >
          🏛 Country Rankings
        </a>

        <a
          href="/rankings/subject"
          className="p-6 bg-yellow-100 rounded-lg hover:bg-yellow-200"
        >
          📚 Subject Rankings
        </a>
      </div>
    </main>
  );
}
