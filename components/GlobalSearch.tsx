"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { universities } from "@/data/universities";

export default function GlobalSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const university = universities.find((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );

    if (university) {
      router.push(`/rankings/world/${university.slug}`);
    } else {
      alert("University not found.");
    }
  };

  return (
    <section className="bg-white py-10 shadow">
      <div className="max-w-4xl mx-auto px-6 flex gap-4">

        <input
          type="text"
          placeholder="Search any university..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 border rounded-lg px-4 py-3"
        />

        <button
          onClick={handleSearch}
          className="bg-blue-900 text-white px-6 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>

      </div>
    </section>
  );
}