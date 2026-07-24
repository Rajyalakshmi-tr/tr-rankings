import Link from "next/link";
import { universities } from "@/data/universities";

export default function FeaturedUniversities() {
  const topUniversities = universities.slice(0, 5);

  return (
    <section className="max-w-7xl mx-auto py-16 px-6">
      <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
        Top Ranked Universities
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        {topUniversities.map((university) => (
          <Link
            key={university.slug}
            href={`/rankings/world/${university.slug}`}
          >
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition p-6 cursor-pointer">

              <div className="text-5xl text-center mb-4">
                🎓
              </div>

              <h3 className="font-bold text-lg text-center">
                {university.name}
              </h3>

              <p className="text-gray-600 text-center mt-2">
                {university.country}
              </p>

              <div className="mt-5 text-center">
                <span className="bg-blue-900 text-white px-4 py-2 rounded-full">
                  #{university.rank}
                </span>
              </div>

            </div>
          </Link>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/rankings/world"
          className="bg-blue-900 text-white px-8 py-3 rounded-lg hover:bg-blue-800"
        >
          View Full Rankings
        </Link>
      </div>
    </section>
  );
}