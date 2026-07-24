import Link from "next/link";

const news = [
  {
    id: 1,
    title: "TR Rankings 2026 Released",
    date: "July 2026",
    description:
      "Explore the latest TR World University Rankings featuring over 1,000 universities worldwide.",
  },
  {
    id: 2,
    title: "New Research Excellence Indicator",
    date: "June 2026",
    description:
      "TR Rankings introduces an enhanced research assessment methodology for greater transparency.",
  },
  {
    id: 3,
    title: "Top Emerging Universities",
    date: "May 2026",
    description:
      "Discover universities making remarkable progress in teaching, innovation, and global impact.",
  },
];

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Latest News
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item) => (
            <div
              key={item.id}
              className="rounded-xl shadow-lg overflow-hidden bg-gray-50 hover:shadow-xl transition"
            >
              <div className="h-48 bg-blue-900 flex items-center justify-center text-white text-6xl">
                📰
              </div>

              <div className="p-6">
                <p className="text-sm text-gray-500">{item.date}</p>

                <h3 className="text-xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mt-4">
                  {item.description}
                </p>

                <Link
                  href="/news"
                  className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}