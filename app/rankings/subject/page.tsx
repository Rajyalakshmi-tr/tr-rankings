import Link from "next/link";

const subjects = [
  {
    slug: "engineering",
    name: "Engineering & Technology",
    icon: "⚙️",
  },
  {
    slug: "computer-science",
    name: "Computer Science",
    icon: "💻",
  },
  {
    slug: "business",
    name: "Business & Management",
    icon: "💼",
  },
  {
    slug: "medicine",
    name: "Medicine",
    icon: "🩺",
  },
  {
    slug: "law",
    name: "Law",
    icon: "⚖️",
  },
  {
    slug: "arts",
    name: "Arts & Humanities",
    icon: "🎨",
  },
  {
    slug: "social-sciences",
    name: "Social Sciences",
    icon: "🌍",
  },
  {
    slug: "education",
    name: "Education",
    icon: "📚",
  },
];

export default function SubjectRankingsPage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-900 mb-4">
          Subject Rankings
        </h1>

        <p className="text-lg text-gray-600 mb-10">
          Explore the world's best universities by academic subject.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {subjects.map((subject) => (
            <Link
              key={subject.slug}
              href={`/rankings/subject/${subject.slug}`}
            >
              <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition p-8 cursor-pointer text-center">

                <div className="text-5xl mb-4">
                  {subject.icon}
                </div>

                <h2 className="text-xl font-bold text-blue-900">
                  {subject.name}
                </h2>

              </div>
            </Link>
          ))}

        </div>

      </div>
    </main>
  );
}