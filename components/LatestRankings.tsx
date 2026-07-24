import Link from "next/link";

const rankings = [
  {
    title: "World University Rankings 2026",
    description: "Explore the top universities across the globe.",
    link: "/rankings/world",
    icon: "🌍",
  },
  {
    title: "Asia University Rankings",
    description: "Leading universities in Asia.",
    link: "/rankings/country",
    icon: "🌏",
  },
  {
    title: "Subject Rankings",
    description: "Find the best universities by subject.",
    link: "/rankings/subject",
    icon: "📚",
  },
];

export default function LatestRankings() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Latest Rankings
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {rankings.map((ranking) => (
            <Link
              key={ranking.title}
              href={ranking.link}
            >
              <div className="bg-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all p-8 h-full cursor-pointer hover:-translate-y-1">
                <div className="text-5xl mb-4">
                  {ranking.icon}
                </div>

                <h3 className="text-2xl font-bold text-blue-900 mb-3">
                  {ranking.title}
                </h3>

                <p className="text-gray-600">
                  {ranking.description}
                </p>

                <div className="mt-6 text-blue-700 font-semibold">
                  Explore →
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}