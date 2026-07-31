import Link from "next/link";
import { news } from "@/data/news";

export default function LatestNews() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          Latest News
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-gray-50 rounded-xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <p className="text-sm text-gray-500">
                {article.date}
              </p>

              <h3 className="text-2xl font-bold mt-3">
                {article.title}
              </h3>

              <p className="text-gray-600 mt-4">
                {article.excerpt}
              </p>

              <Link
                href={`/news/${article.slug}`}
                className="inline-block mt-6 text-blue-700 font-semibold hover:underline"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}