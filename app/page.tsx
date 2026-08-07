import Link from "next/link";
import Image from "next/image";
import RightSidebar from "@/components/RightSidebar";
import LatestNews from "@/components/LatestNews";
import LiveRankingsPreview from "@/components/LiveRankingsPreview";
import FeaturedUniversities from "@/components/FeaturedUniversities";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
<div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">

 {/* Main Content */}
    <div className="flex-1">
          {/* Hero Section */}
      <section className="bg-gradient-to-r from-sky-700 via-blue-700 to-indigo-700 text-white py-28">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
            TR World University Rankings
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 mt-6 max-w-3xl mx-auto">
            Empowering Global Higher Education Through Transparent and Trusted Rankings.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-10">
            <span className="bg-white/20 px-5 py-2 rounded-full">
              🌍 100+ Countries
            </span>

            <span className="bg-white/20 px-5 py-2 rounded-full">
              🏛 2,000+ Universities
            </span>

            <span className="bg-white/20 px-5 py-2 rounded-full">
              📊 Trusted Data
            </span>

            <span className="bg-white/20 px-5 py-2 rounded-full">
              📅 2026 Edition
            </span>
          </div>

          <Link
            href="/rankings/world"
            className="inline-block mt-10 bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400 transition"
          >
            Explore World Rankings
          </Link>
           {/* TR Rankings Image */}
<div className="mt-12 max-w-5xl mx-auto">
  <Image
    src="/og-image.png"
    alt="TR Rankings"
    width={1200}
    height={630}
    className="w-full rounded-2xl shadow-lg"
    priority
  />
</div>
        </div>
      </section>
<LiveRankingsPreview />
      {/* Search Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-900 mb-8">
            Search Universities
          </h2>

          <form action="/search" method="GET" className="space-y-5">
            <input
              type="text"
              name="q"
              placeholder="Search universities or countries..."
              className="w-full border-2 border-blue-500 rounded-xl px-6 py-4 text-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-4 rounded-xl text-lg font-semibold hover:bg-blue-800 transition"
            >
              Search
            </button>
          </form>

        </div>
      </section>

      {/* About */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-4xl font-bold text-blue-900">
            About TR Rankings
          </h2>

          <p className="mt-6 text-lg text-gray-600 max-w-4xl mx-auto leading-8">
            TR Rankings provides transparent, reliable and globally recognised
            university rankings based on teaching excellence, research impact,
            international outlook and graduate employability. Our mission is
            to help students, universities and policymakers make informed
            decisions through accurate higher education insights.
          </p>

        </div>
      </section>

      {/* Statistics */}
      <section className="pb-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

          <StatCard number="2000+" title="Universities Ranked" />
          <StatCard number="100+" title="Countries Covered" />
          <StatCard number="50+" title="Subjects Ranked" />
          <StatCard number="1M+" title="Annual Visitors" />

        </div>
      </section>

      {/* Featured Universities */}
      <FeaturedUniversities />
<LatestNews />
      {/* Categories */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold text-center text-blue-900 mb-12">
            Explore Rankings
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <CategoryCard
              title="World Rankings"
              description="Explore the world's best universities."
              link="/rankings/world"
            />

            <CategoryCard
              title="Country Rankings"
              description="Discover top universities by country."
              link="/rankings/country"
            />

            <CategoryCard
              title="Subject Rankings"
              description="Compare universities across subjects."
              link="/rankings/subject"
            />

          </div>

        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-700 to-indigo-700 rounded-2xl text-white p-12 text-center">

          <h2 className="text-4xl font-bold">
            TR Rankings Methodology
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Our methodology combines Teaching Excellence, Research Impact,
            International Outlook and Graduate Employability using a transparent
            and evidence-based approach.
          </p>

          <Link
            href="/methodology"
            className="inline-block mt-8 bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400"
          >
            View Methodology
          </Link>

        </div>
      </section>
</div>
 <RightSidebar />
 </div>
      {/* CTA */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">

          <h2 className="text-4xl font-bold">
            Join the Future of University Rankings
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Explore trusted university rankings, compare institutions and make
            informed decisions for your higher education journey.
          </p>

          <Link
            href="/rankings/world"
            className="inline-block mt-8 bg-yellow-500 text-blue-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-400"
          >
            View Rankings
          </Link>

        </div>
      </section>

    </main>
  );
}

function StatCard({
  number,
  title,
}: {
  number: string;
  title: string;
}) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition">
      <h3 className="text-4xl font-bold text-blue-900">
        {number}
      </h3>

      <p className="mt-4 text-gray-600">
        {title}
      </p>
    </div>
  );
}

function CategoryCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="block bg-gray-50 rounded-xl shadow-lg p-8 hover:bg-blue-50 hover:shadow-xl transition"
    >
      <h3 className="text-2xl font-bold text-blue-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600">
        {description}
      </p>

      <p className="mt-6 text-blue-700 font-semibold">
        Explore →
      </p>
    </Link>
  );
}