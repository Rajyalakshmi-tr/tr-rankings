import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TR Rankings, our mission, methodology, vision, and commitment to transparent world university rankings.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-blue-900">
            About TR Rankings
          </h1>

          <p className="mt-4 text-lg text-gray-600">
            Empowering Global Higher Education Through Transparent and Trusted Rankings.
          </p>
        </div>

        {/* Introduction */}
        <section className="mb-8">
          <p className="text-lg text-gray-700 leading-8">
            TR Rankings is an independent global university ranking
            organization dedicated to evaluating higher education institutions
            through transparent, data-driven, and objective performance
            indicators. Our rankings are designed to help students,
            educators, researchers, universities, and policymakers make
            informed decisions by providing reliable insights into
            institutional excellence.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700 leading-7">
            To help students, parents, educators, and policymakers make
            informed decisions by providing reliable, transparent, and
            comprehensive university rankings.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-700 leading-7">
            To become one of the world's most trusted university ranking
            organizations by promoting excellence in teaching, research,
            innovation, and global impact.
          </p>
        </section>

        {/* Core Values */}
        <section className="bg-white rounded-lg shadow p-6 mb-10">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Core Values
          </h2>

          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Transparency</li>
            <li>Academic Excellence</li>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Global Perspective</li>
          </ul>
        </section>

        {/* Who We Serve */}
        <section>
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-8">
            Who We Serve
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">
                🎓 Students
              </h3>

              <p className="text-gray-700">
                Compare universities worldwide and make informed study
                decisions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">
                🏛 Universities
              </h3>

              <p className="text-gray-700">
                Benchmark institutional performance and identify opportunities
                for improvement.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">
                🔬 Researchers
              </h3>

              <p className="text-gray-700">
                Access reliable performance indicators and academic insights.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-semibold text-lg mb-2">
                🌍 Policymakers
              </h3>

              <p className="text-gray-700">
                Support evidence-based decisions for higher education
                development.
              </p>
            </div>

          </div>
        </section>

      </div>
    </main>
  );
}