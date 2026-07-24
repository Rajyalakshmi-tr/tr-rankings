import Link from "next/link";
import { universities } from "@/data/universities";

export default function TopTenUniversities() {
  const topTen = universities.slice(0, 10);

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Top 10 Universities 2026
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Discover the world's highest-ranked universities.
        </p>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">

          {topTen.map((uni) => (
            <Link
              key={uni.slug}
              href={`/rankings/world/${uni.slug}`}
              className="flex justify-between items-center px-6 py-5 border-b hover:bg-blue-50 transition"
            >
              <div className="flex items-center gap-5">
                <div className="text-2xl font-bold text-blue-900">
                  #{uni.rank}
                </div>

                <div>
                  <h3 className="font-semibold text-lg">
                    {uni.name}
                  </h3>

                  <p className="text-gray-500">
                    {uni.country}
                  </p>
                </div>
              </div>

              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full font-bold">
                {uni.overall}
              </div>
            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}