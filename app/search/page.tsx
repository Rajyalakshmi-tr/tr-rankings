import { universities } from "@/data/universities";
import Link from "next/link";

type Props = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({ searchParams }: Props) {
  const { q = "" } = await searchParams;

  const results = universities.filter((u) =>
    u.name.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-900 mb-6">
          Search Results
        </h1>

        <p className="mb-8">
          Showing results for: <strong>{q}</strong>
        </p>

        <div className="space-y-4">
          {results.length > 0 ? (
            results.map((university) => (
              <div
                key={university.slug}
                className="bg-white rounded-lg shadow p-6 flex justify-between items-center"
              >
                <div>
                  <h2 className="text-xl font-bold">
                    {university.name}
                  </h2>
                  <p>{university.country}</p>
                </div>

                <Link
                  href={`/rankings/world/${university.slug}`}
                  className="text-blue-700 font-semibold hover:underline"
                >
                  View Profile →
                </Link>
              </div>
            ))
          ) : (
            <p>No universities found.</p>
          )}
        </div>

      </div>
    </main>
  );
}