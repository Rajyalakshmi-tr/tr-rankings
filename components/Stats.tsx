export default function Stats() {
  const stats = [
    {
      icon: "🎓",
      value: "500+",
      label: "Universities",
    },
    {
      icon: "🌍",
      value: "80+",
      label: "Countries",
    },
    {
      icon: "📚",
      value: "50+",
      label: "Subjects",
    },
    {
      icon: "🏆",
      value: "100%",
      label: "Transparent",
    },
  ];

  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {stats.map((item) => (
            <div
              key={item.label}
              className="text-center text-white"
            >
              <div className="text-5xl mb-3">
                {item.icon}
              </div>

              <div className="text-4xl font-bold">
                {item.value}
              </div>

              <div className="mt-2 text-lg">
                {item.label}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}