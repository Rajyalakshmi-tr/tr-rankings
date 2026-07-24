export default function WhyChoose() {
  const features = [
    {
      title: "Transparent Methodology",
      description:
        "Every university is evaluated using a clear and publicly available methodology.",
      icon: "📊",
    },
    {
      title: "Global Coverage",
      description:
        "Rankings include universities from countries around the world.",
      icon: "🌍",
    },
    {
      title: "Research Excellence",
      description:
        "Teaching, research, employability, and international outlook are all considered.",
      icon: "🎓",
    },
    {
      title: "Trusted Rankings",
      description:
        "Helping students make informed decisions about higher education.",
      icon: "🏆",
    },
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-slate-900 mb-4">
          Why Choose TR Rankings?
        </h2>

        <p className="text-center text-gray-600 mb-12">
          A transparent, research-driven approach to evaluating universities worldwide.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>

              <h3 className="text-xl font-bold mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}