export default function Statistics() {
  const stats = [
    { number: "1,000+", label: "Universities Ranked", icon: "🏛️" },
    { number: "100+", label: "Countries", icon: "🌍" },
    { number: "50+", label: "Subjects", icon: "📚" },
    { number: "10M+", label: "Students Represented", icon: "🎓" },
  ];

  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
          TR Rankings in Numbers
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{stat.icon}</div>

              <h3 className="text-4xl font-bold text-blue-900">
                {stat.number}
              </h3>

              <p className="text-gray-600 mt-3">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}