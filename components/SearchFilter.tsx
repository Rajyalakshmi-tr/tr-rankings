"use client";

interface SearchFilterProps {
  search: string;
  setSearch: (value: string) => void;
  country: string;
  setCountry: (value: string) => void;
}


export default function SearchFilter({
  search,
  setSearch,
  country,
  setCountry,
}: SearchFilterProps) {

  return (
    <div className="flex gap-4 mb-6">

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search university..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border rounded-lg px-4 py-2 w-72"
      />


      {/* Country Filter */}
      <select
        value={country}
        onChange={(e)=>setCountry(e.target.value)}
        className="border rounded-lg px-4 py-2"
      >

        <option value="All">
          All Countries
        </option>

        <option value="United States">
          United States
        </option>

        <option value="United Kingdom">
          United Kingdom
        </option>

        <option value="India">
          India
        </option>

      </select>

    </div>
  );
}