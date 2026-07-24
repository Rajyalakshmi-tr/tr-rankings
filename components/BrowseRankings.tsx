import Link from "next/link";

const rankings = [
  {
    title: "World Rankings",
    description: "Explore the best universities across the world.",
    href: "/rankings/world",
    icon: "🌍",
  },
  {
    title: "Country Rankings",
    description: "Find the top universities by country.",
    href: "/rankings/country",
    icon: "🏛️",
  },
  {
    title: "Subject Rankings",
    description: "Discover universities by academic subject.",
    href: "/rankings/subject",
    icon: "📚",
  },
];

export default function BrowseRankings() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Browse Rankings
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Explore universities through different ranking categories.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {rankings.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="bg-slate-50 rounded-xl shadow-md p-8 hover:shadow-xl hover:-translate-y-1 transition"
            >
              <div className="text-5xl mb-4">{item.icon}</div>

              <h3 className="text-2xl font-bold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}