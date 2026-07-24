export default function RankingHighlights() {
  const highlights = [
    {
      title: "University of Oxford",
      description: "Ranked #1 globally for Teaching Excellence.",
      color: "bg-blue-900",
    },
    {
      title: "MIT",
      description: "Leads in Research & Innovation worldwide.",
      color: "bg-green-700",
    },
    {
      title: "Stanford University",
      description: "Highest Graduate Employability score.",
      color: "bg-purple-700",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-10">
          Latest Ranking Highlights
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className={`${item.color} text-white rounded-xl p-8 shadow-lg hover:scale-105 transition`}
            >
              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p>{item.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}