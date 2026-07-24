export default function NewsPage() {
  const news = [
    {
      id: 1,
      title: "TR Rankings 2026 Released",
      date: "July 2026",
      summary:
        "The latest TR World University Rankings feature more than 2,500 universities across 120 countries.",
    },
    {
      id: 2,
      title: "Top Universities for Computer Science",
      date: "June 2026",
      summary:
        "Explore the highest-ranked universities for Computer Science and Artificial Intelligence.",
    },
    {
      id: 3,
      title: "International Student Trends",
      date: "May 2026",
      summary:
        "A report highlighting global mobility and international education trends.",
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-4xl font-bold text-blue-900 mb-8">
          📰 TR Rankings News
        </h1>

        <div className="space-y-6">
          {news.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition"
            >
              <h2 className="text-2xl font-bold text-blue-900">
                {article.title}
              </h2>

              <p className="text-sm text-gray-500 mt-2">
                {article.date}
              </p>

              <p className="mt-4 text-gray-700">
                {article.summary}
              </p>

              <button className="mt-4 bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800">
                Read More
              </button>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}