import Link from "next/link";

export default function CompareUniversities() {
  return (
    <section className="bg-blue-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Compare Universities
        </h2>

        <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-10">
          Compare universities side by side based on Teaching, Research,
          International Outlook, Employability, and Overall TR Score.
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">

          <select className="p-4 rounded-lg text-black">
            <option>University of Oxford</option>
            <option>MIT</option>
            <option>Stanford University</option>
            <option>Harvard University</option>
            <option>University of Cambridge</option>
          </select>

          <select className="p-4 rounded-lg text-black">
            <option>MIT</option>
            <option>University of Oxford</option>
            <option>Stanford University</option>
            <option>Harvard University</option>
            <option>University of Cambridge</option>
          </select>

        </div>

        <Link
          href="/compare"
          className="inline-block mt-10 bg-yellow-400 text-blue-900 px-8 py-3 rounded-lg font-bold hover:bg-yellow-300"
        >
          Compare Now
        </Link>

      </div>
    </section>
  );
}