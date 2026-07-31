import Link from "next/link";
import { universities } from "@/data/universities";

export default function LiveRankingsPreview() {
  const topUniversities = universities.slice(0, 10);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-blue-900">
            Live World Rankings
          </h2>

          <Link
            href="/rankings/world"
            className="text-blue-700 font-semibold hover:underline"
          >
            View Full Rankings →
          </Link>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg">

          <table className="w-full bg-white">

            <thead className="bg-blue-900 text-white">

              <tr>
                <th className="px-6 py-4 text-left">Rank</th>
                <th className="px-6 py-4 text-left">University</th>
                <th className="px-6 py-4 text-left">Country</th>
                <th className="px-6 py-4 text-center">Overall</th>
                <th className="px-6 py-4 text-center">Profile</th>
              </tr>

            </thead>

            <tbody>

              {topUniversities.map((university) => (
                <tr
                  key={university.slug}
                  className="border-b hover:bg-blue-50"
                >
                  <td className="px-6 py-5 font-bold">
                    #{university.rank}
                  </td>

                  <td className="px-6 py-5 font-semibold">
                    {university.name}
                  </td>

                  <td className="px-6 py-5">
                    {university.flag} {university.country}
                  </td>

                  <td className="px-6 py-5 text-center font-bold text-green-600">
                    {university.overall}
                  </td>

                  <td className="px-6 py-5 text-center">
                    <Link
                      href={`/rankings/world/${university.slug}`}
                      className="text-blue-700 hover:underline"
                    >
                      View →
                    </Link>
                  </td>
                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>
    </section>
  );
}