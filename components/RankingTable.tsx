import Link from "next/link";

interface University {
  rank: number;
  name: string;
  country: string;
  teaching: number;
  research: number;
  international: number;
  employability: number;
  overall: number;
  slug: string;
}


interface RankingTableProps {
  universities: University[];
}


export default function RankingTable({
  universities,
}: RankingTableProps) {

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow">

      <table className="w-full">

        <thead className="bg-blue-900 text-white">

          <tr>

            <th className="p-4 text-left">
              Rank
            </th>

            <th className="p-4 text-left">
              University
            </th>

            <th className="p-4">
              Country
            </th>

            <th className="p-4">
              Teaching
            </th>

            <th className="p-4">
              Research
            </th>

            <th className="p-4">
              International
            </th>

            <th className="p-4">
              Employability
            </th>

            <th className="p-4">
              Overall
            </th>

          </tr>

        </thead>


        <tbody>


        {universities.map((university)=>(
          
          <tr
          key={university.rank}
          className="border-b hover:bg-blue-50"
          >

            <td className="p-4">

              <span className="
              bg-yellow-500 
              text-white 
              px-3 
              py-1 
              rounded-full
              font-bold
              ">
                {university.rank}
              </span>

            </td>



            <td className="p-4 font-semibold">

              <Link
              href={`/rankings/world/${university.slug}`}
              className="text-blue-900 hover:underline"
              >

              {university.name}

              </Link>

            </td>



            <td className="p-4 text-center">
              {university.country}
            </td>



            <td className="p-4 text-center">
              {university.teaching}
            </td>



            <td className="p-4 text-center">
              {university.research}
            </td>



            <td className="p-4 text-center">
              {university.international}
            </td>



            <td className="p-4 text-center">
              {university.employability}
            </td>



            <td className="p-4 text-center">

              <span className="
              font-bold 
              text-blue-900
              ">
                {university.overall}
              </span>

            </td>


          </tr>

        ))}


        </tbody>

      </table>

    </div>
  );
}