import { universities } from "@/data/universities";

export default function ComparePage() {
  const university1 = universities[0];
  const university2 = universities[1];

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-5xl font-bold text-blue-900 mb-10 text-center">
          Compare Universities
        </h1>

        <div className="overflow-x-auto bg-white rounded-xl shadow-lg">

          <table className="w-full">

            <thead className="bg-blue-900 text-white">
              <tr>
                <th className="px-6 py-4 text-left">Indicator</th>
                <th className="px-6 py-4 text-center">
                  {university1.name}
                </th>
                <th className="px-6 py-4 text-center">
                  {university2.name}
                </th>
              </tr>
            </thead>

            <tbody>

              <CompareRow
                title="World Rank"
                value1={`#${university1.rank}`}
                value2={`#${university2.rank}`}
              />

              <CompareRow
                title="Country"
                value1={university1.country}
                value2={university2.country}
              />

              <CompareRow
                title="City"
                value1={university1.city}
                value2={university2.city}
              />

              <CompareRow
                title="Established"
                value1={String(university1.established)}
                value2={String(university2.established)}
              />

              <CompareRow
                title="Students"
                value1={university1.students}
                value2={university2.students}
              />

              <CompareRow
                title="Teaching"
                value1={String(university1.teaching)}
                value2={String(university2.teaching)}
              />

              <CompareRow
                title="Research"
                value1={String(university1.research)}
                value2={String(university2.research)}
              />

              <CompareRow
                title="International"
                value1={String(university1.international)}
                value2={String(university2.international)}
              />

              <CompareRow
                title="Employability"
                value1={String(university1.employability)}
                value2={String(university2.employability)}
              />

              <CompareRow
                title="Overall Score"
                value1={String(university1.overall)}
                value2={String(university2.overall)}
              />

            </tbody>

          </table>

        </div>

      </div>
    </main>
  );
}

function CompareRow({
  title,
  value1,
  value2,
}: {
  title: string;
  value1: string;
  value2: string;
}) {
  return (
    <tr className="border-b hover:bg-gray-50">
      <td className="px-6 py-4 font-semibold">{title}</td>
      <td className="px-6 py-4 text-center">{value1}</td>
      <td className="px-6 py-4 text-center">{value2}</td>
    </tr>
  );
}