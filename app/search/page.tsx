import { universities } from "@/data/universities";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;

  const search = q.trim().toLowerCase();

  const results = universities.filter((u) =>
    u.name.toLowerCase().includes(search) ||
    u.country.toLowerCase().includes(search) ||
    u.city.toLowerCase().includes(search)
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          Search Results
        </h1>

        <p className="mb-6">
          Searching for: <strong>{q}</strong>
        </p>

        <p className="mb-6">
          Results found: <strong>{results.length}</strong>
        </p>

        {results.length === 0 ? (
          <p className="text-red-600 text-xl">
            No universities found.
          </p>
        ) : (
          <div className="space-y-4">
            {results.map((u) => (
              <div
                key={u.slug}
                className="bg-white shadow rounded-lg p-6 flex justify-between"
              >
                <div>
                  <h2 className="text-xl font-bold">{u.name}</h2>
                  <p>{u.flag} {u.country}</p>
                </div>

                <Link
                  href={`/rankings/world/${u.slug}`}
                  className="text-blue-700 hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            ))}
          </div>
        )}

      </div>
    </main>
  );
}