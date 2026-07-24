"use client";

import { useState } from "react";
import SearchFilter from "@/components/SearchFilter";
import RankingTable from "@/components/RankingTable";
import { universities } from "@/data/universities";

export default function WorldRankingsPage() {
  const [search, setSearch] = useState("");
  const [country, setCountry] = useState("All");
  const [sortBy, setSortBy] = useState("rank");
const [currentPage, setCurrentPage] = useState(1);

const universitiesPerPage = 10;

  const filteredUniversities = [...universities]
    .filter((university) => {
      const matchesSearch = university.name
        .toLowerCase()
        .includes(search.toLowerCase());

      const matchesCountry =
        country === "All" || university.country === country;

      return matchesSearch && matchesCountry;
    })
    .sort((a, b) => {
      if (sortBy === "rank") return a.rank - b.rank;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "overall") return b.overall - a.overall;
      return 0;
    });

    const totalPages = Math.ceil(
  filteredUniversities.length / universitiesPerPage
);

const displayedUniversities = filteredUniversities.slice(
  (currentPage - 1) * universitiesPerPage,
  currentPage * universitiesPerPage
);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          🌍 TR World University Rankings
        </h1>

        <p className="text-gray-600 mb-6">
          Search and filter universities by name and country.
        </p>

        <SearchFilter
          search={search}
          setSearch={setSearch}
          country={country}
          setCountry={setCountry}
        />

        <div className="mb-6">
          <label className="font-semibold mr-3">
            Sort By:
          </label>

<select
  value={sortBy}
  onChange={(e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  }}
  className="border rounded-lg px-4 py-2"
>
  <option value="rank">Rank</option>
  <option value="overall">Overall Score</option>
  <option value="name">University Name</option>
</select>
        </div>

<RankingTable universities={displayedUniversities} />

<div className="flex justify-center items-center gap-4 mt-8">

  <button
    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
    disabled={currentPage === 1}
    className="px-4 py-2 bg-blue-900 text-white rounded-lg disabled:bg-gray-400"
  >
    Previous
  </button>

  <span className="font-semibold">
    Page {currentPage} of {totalPages}
  </span>

  <button
    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
    disabled={currentPage === totalPages}
    className="px-4 py-2 bg-blue-900 text-white rounded-lg disabled:bg-gray-400"
  >
    Next
  </button>

</div>
      </div>
    </main>
  );
}