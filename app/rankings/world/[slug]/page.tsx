import { universities } from "@/data/universities";
import Link from "next/link";

export function generateStaticParams() {
  return universities.map((university) => ({
    slug: university.slug,
  }));
}

export default async function UniversityProfile({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {


  const { slug } = await params;


  const university = universities.find(
    (item) => item.slug === slug
  );


  if (!university) {
    return (
      <div className="p-10 text-center">
        University not found
      </div>
    );
  }


  return (

    <main className="min-h-screen bg-gray-50 p-8">


      <div className="max-w-5xl mx-auto">


        {/* Header */}

        <div className="
        bg-blue-900 
        text-white 
        rounded-xl 
        p-8 
        mb-8
        ">


          <h1 className="text-4xl font-bold">
            {university.name}
          </h1>


          <p className="mt-3 text-lg">
            {university.country}
          </p>


          <p className="mt-2">
            TR World Ranking #{university.rank}
          </p>


        </div>



        {/* Score Card */}


        <div className="
        bg-white 
        rounded-xl 
        shadow 
        p-8 
        mb-8
        text-center
        ">


          <h2 className="text-xl font-semibold">
            TRKM Overall Score
          </h2>


          <div className="
          text-6xl 
          font-bold 
          text-blue-900 
          mt-4
          ">
            {university.overall}
          </div>


          <p className="text-gray-500">
            Out of 100
          </p>


        </div>





        {/* Indicators */}


        <div className="
        grid 
        md:grid-cols-2 
        gap-6
        ">


          <ScoreCard
          title="Teaching Excellence"
          score={university.teaching}
          />


          <ScoreCard
          title="Research Impact"
          score={university.research}
          />


          <ScoreCard
          title="International Outlook"
          score={university.international}
          />


          <ScoreCard
          title="Graduate Employability"
          score={university.employability}
          />


        </div>





        {/* Methodology */}


        <div className="
        bg-white 
        rounded-xl 
        shadow 
        p-8 
        mt-8
        ">


          <h2 className="text-2xl font-bold text-blue-900">
            TRKM Ranking Methodology
          </h2>


          <ul className="mt-4 space-y-2 text-gray-700">


            <li>
              📚 Teaching Excellence - 30%
            </li>


            <li>
              🔬 Research Impact - 30%
            </li>


            <li>
              🌎 International Outlook - 20%
            </li>


            <li>
              💼 Graduate Employability - 20%
            </li>


          </ul>


        </div>





        <Link
        href="/rankings/world"
        className="
        inline-block
        mt-8
        bg-blue-900
        text-white
        px-6
        py-3
        rounded-lg
        "
        >

        ← Back to Rankings

        </Link>



      </div>


    </main>

  );
}





function ScoreCard({
  title,
  score,
}:{
  title:string;
  score:number;
}){


return (

<div className="
bg-white
rounded-xl
shadow
p-6
">

<h3 className="font-semibold text-lg">
{title}
</h3>


<div className="
text-3xl
font-bold
text-blue-900
mt-3
">
{score}
</div>


<div className="
h-3
bg-gray-200
rounded-full
mt-4
">

<div
className="
h-3
bg-yellow-500
rounded-full
"
style={{
width:`${score}%`
}}
/>

</div>


</div>

);

}