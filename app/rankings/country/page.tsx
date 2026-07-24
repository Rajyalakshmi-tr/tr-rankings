import Link from "next/link";

const countries = [
  "United States",
  "United Kingdom",
  "Canada",
  "Australia",
  "India",
  "Germany",
  "Japan",
  "China",
  "Singapore",
  "France",
];

export default function CountryRankingsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-700 rounded-2xl text-white p-10 mb-10">
          <h1 className="text-5xl font-bold">
            Country Rankings
          </h1>

          <p className="mt-4 text-lg">
            Browse the world's leading universities by country.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">

          {countries.map((country) => (
            <Link
              key={country}
              href={`/rankings/world?country=${encodeURIComponent(country)}`}
              className="bg-white rounded-xl shadow hover:shadow-xl transition p-8 text-center hover:-translate-y-1"
            >
              <div className="text-5xl mb-4">🌍</div>

              <h2 className="font-bold text-xl text-blue-900">
                {country}
              </h2>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}