import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about TR Rankings, our mission, methodology, vision, and commitment to transparent world university rankings.",
};
export default function AboutPage() {
  return (
<main className="min-h-screen bg-gray-50 px-4 py-8 pb-20 md:px-8">
      <div className="max-w-5xl mx-auto">

<div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white rounded-2xl p-12 mb-10 text-center">
  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
    TR Rankings | World University Rankings
  </h1>

<p className="text-lg md:text-xl max-w-3xl mx-auto">
    Empowering Global Higher Education Through Transparent,
    Trusted and Data-Driven University Rankings.
  </p>
</div>

        <p className="text-lg text-gray-700 mb-6">
          TR Rankings is an independent global university 
          ranking organization dedicated to evaluating higher 
          education institutions through transparent, data-driven, 
          and objective performance indicators. Our rankings are 
          designed to help students, educators, researchers, 
          universities, and policymakers make informed decisions 
          by providing reliable insights into institutional excellence.
        </p>

        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Mission
          </h2>

          <p className="text-gray-700">
            To help students, parents, educators, and policymakers make informed
            decisions by providing reliable, transparent, and comprehensive
            university rankings.
          </p>
        </div>
<div className="bg-white rounded-lg shadow p-6 mb-6">
  <h2 className="text-2xl font-bold text-blue-700 mb-4">
    Why TR Rankings?
  </h2>

  <div className="grid md:grid-cols-2 gap-6 text-gray-700">
    <div>✅ Transparent Methodology</div>
    <div>🌍 Global Coverage</div>
    <div>📊 Data-Driven Rankings</div>
    <div>🎓 Student-Focused Insights</div>
    <div>🔬 Research Excellence</div>
    <div>🤝 Trusted Evaluation Framework</div>
  </div>
</div>
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-4">
            Our Vision
          </h2>

          <p className="text-gray-700">
            To become one of the world's most trusted university ranking
            organizations by promoting excellence in teaching, research,
            innovation, and global impact.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
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
        </div>
<div className="bg-white rounded-lg shadow p-6 mt-6">
  <h2 className="text-2xl font-bold text-blue-700 mb-6">
    TR Ranking Indicators
  </h2>

  <div className="grid md:grid-cols-2 gap-4">
    <div>📘 Teaching Quality</div>
    <div>🔬 Research Excellence</div>
    <div>🌍 International Outlook</div>
    <div>💼 Graduate Employability</div>
    <div>💡 Innovation & Industry Collaboration</div>
    <div>🌱 Sustainability & Social Impact</div>
  </div>
</div>
<div className="bg-white rounded-lg shadow p-6 mt-6">
  <h2 className="text-2xl font-bold text-blue-900 mb-4">
    How TR Rankings is Different
  </h2>

  <ul className="space-y-3 text-gray-700">
    <li>✓ Transparent and clearly published methodology</li>
    <li>✓ Balanced evaluation of teaching, research, employability, and global engagement</li>
    <li>✓ Student-focused insights for informed decision-making</li>
    <li>✓ Continuous review and refinement of ranking indicators</li>
    <li>✓ Commitment to fairness, accuracy, and accountability</li>
  </ul>
</div>
<div className="grid md:grid-cols-3 gap-6 mt-8">

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h3 className="text-xl font-bold text-blue-900 mb-2">
      Transparency
    </h3>
    <p className="text-gray-600">
      Clear methodology and openly published evaluation criteria.
    </p>
  </div>

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h3 className="text-xl font-bold text-blue-700 mb-2">
      Innovation
    </h3>
    <p className="text-gray-600">
      Modern indicators reflecting today's higher education landscape.
    </p>
  </div>

  <div className="bg-white rounded-xl shadow p-6 text-center">
    <h3 className="text-xl font-bold text-blue-700 mb-2">
      Global Impact
    </h3>
    <p className="text-gray-600">
      Supporting students and institutions with reliable ranking insights.
    </p>
  </div>

</div>
<div className="bg-white rounded-xl shadow p-8 mt-8">
  <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
    Who We Serve
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div>
      <h3 className="font-semibold text-lg mb-2">🎓 Students</h3>
      <p className="text-gray-700">
        Compare universities worldwide and make informed study decisions.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">🏛 Universities</h3>
      <p className="text-gray-700">
        Benchmark institutional performance and identify opportunities for improvement.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">🔬 Researchers</h3>
      <p className="text-gray-700">
        Access reliable performance indicators and academic insights.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg mb-2">🌍 Policymakers</h3>
      <p className="text-gray-700">
        Support evidence-based decisions for higher education development.
      </p>
    </div>

  </div>
</div>
<div className="bg-gradient-to-r from-indigo-600 to-blue-700 text-white rounded-2xl p-10 mt-8">
  <h2 className="text-3xl font-bold mb-4 text-center">
    Our Impact
  </h2>

  <p className="text-lg text-center max-w-3xl mx-auto">
    TR Rankings empowers students, universities, researchers, 
    and policymakers with transparent, data-driven insights 
    that support informed decisions in higher education. 
    Our commitment is to promote excellence, innovation, 
    and global academic collaboration through fair and reliable rankings.
  </p>
</div>

<div className="grid md:grid-cols-4 gap-6 mt-10">

  <div className="bg-blue-900 text-white rounded-xl p-6 text-center">
    <div className="text-5xl mb-3">🌍</div>
    <h3 className="text-3xl font-bold">Global</h3>
    <p>Coverage</p>
</div>

  <div className="bg-blue-900 text-white rounded-xl p-6 text-center">
    <h3 className="text-4xl font-bold">6</h3>
    <p>Core Indicators</p>
  </div>

  <div className="bg-blue-900 text-white rounded-xl p-6 text-center">
    <h3 className="text-4xl font-bold">100%</h3>
    <p>Transparent Methodology</p>
  </div>

  <div className="bg-blue-900 text-white rounded-xl p-6 text-center">
    <h3 className="text-4xl font-bold">2026</h3>
    <p>First Edition</p>
  </div>

</div>
<div className="text-center mt-12">
<Link
  href="/rankings/world"
  className="
    inline-block
    bg-blue-900
    hover:bg-blue-800
    text-white
    font-semibold
    px-8
    py-3
    rounded-lg
    transition
  "
>
  Explore World Rankings
</Link>

</div>
<div className="pb-20"></div>
</div>
      
    </main>
  );
}