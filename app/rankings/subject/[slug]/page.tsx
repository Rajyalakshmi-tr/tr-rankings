import { universities } from "@/data/universities";
import Link from "next/link";
import Image from "next/image";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

const subjectData = {
  engineering: {
    title: "Engineering & Technology Rankings",
    universities: [
      "Massachusetts Institute of Technology",
      "Stanford University",
      "University of Oxford",
      "University of Cambridge",
      "Harvard University",
    ],
  },

  "computer-science": {
    title: "Computer Science Rankings",
    universities: [
      "Massachusetts Institute of Technology",
      "Stanford University",
      "Carnegie Mellon University",
      "University of Oxford",
      "Harvard University",
    ],
  },

  business: {
    title: "Business & Management Rankings",
    universities: [
      "Harvard University",
      "University of Oxford",
      "Massachusetts Institute of Technology",
      "Stanford University",
      "University of Cambridge",
    ],
  },

  medicine: {
    title: "Medicine Rankings",
    universities: [
      "Harvard University",
      "University of Oxford",
      "Johns Hopkins University",
      "Stanford University",
      "University of Cambridge",
    ],
  },

  law: {
    title: "Law Rankings",
    universities: [
      "Harvard University",
      "University of Oxford",
      "University of Cambridge",
      "Yale University",
      "Stanford University",
    ],
  },

  arts: {
    title: "Arts & Humanities Rankings",
    universities: [
      "University of Oxford",
      "University of Cambridge",
      "Harvard University",
      "Stanford University",
      "Yale University",
    ],
  },

  "social-sciences": {
    title: "Social Sciences Rankings",
    universities: [
      "Harvard University",
      "University of Oxford",
      "Stanford University",
      "University of Cambridge",
      "MIT",
    ],
  },

  education: {
    title: "Education Rankings",
    universities: [
      "University of Oxford",
      "Harvard University",
      "Stanford University",
      "University of Cambridge",
      "UCL",
    ],
  },
};

export default async function SubjectPage({ params }: Props) {
  const { slug } = await params;
const subject = subjectData[slug as keyof typeof subjectData];

if (!subject) {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold">
        Subject Not Found
      </h1>
    </main>
  );
}

const topUniversities = universities.slice(0, 5);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-900 mb-8">
          {subject.title}
        </h1>

        <div className="bg-white rounded-xl shadow-lg">

          {topUniversities.map((university) => (
  <div
    key={university.slug}
    className="flex items-center justify-between border-b p-6 hover:bg-gray-50"
  >
    <div className="flex items-center gap-4">
<div className="w-12 h-12 relative">
  <Image
  src={university.logo}
  alt={university.name}
  fill
  sizes="48px"
  className="object-contain rounded-full"
/>
</div>
      <div>
        <h2 className="font-bold text-lg">
          {university.name}
        </h2>

        <p className="text-gray-500">
          {university.flag} {university.country}
        </p>
      </div>
    </div>

    <div className="text-right">
      <div className="font-bold text-blue-900">
        Rank #{university.rank}
      </div>

      <div className="text-green-600 font-semibold">
        Overall: {university.overall}
      </div>

      <Link
        href={`/rankings/world/${university.slug}`}
        className="text-blue-700 hover:underline"
      >
        View Profile →
      </Link>
    </div>
  </div>
))}
        </div>

      </div>
    </main>
  );
}