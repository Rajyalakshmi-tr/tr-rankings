import Link from "next/link";


export default function HomePage() {

  return (

    <main className="min-h-screen bg-gray-50">


      {/* Hero Section */}

      <section className="
      bg-blue-900
      text-white
      py-24
      px-8
      ">


        <div className="max-w-6xl mx-auto">


          <h1 className="
          text-5xl
          font-bold
          mb-6
          ">
            TR World University Rankings
          </h1>


          <p className="
          text-xl
          max-w-3xl
          text-gray-200
          ">
            Empowering Global Higher Education Through
            Transparent and Trusted Rankings.
          </p>



          <Link
          href="/rankings/world"
          className="
          inline-block
          mt-8
          bg-yellow-500
          text-blue-900
          font-bold
          px-8
          py-3
          rounded-lg
          "
          >

          Explore World Rankings

          </Link>


        </div>


      </section>





      {/* About TRKM */}

      <section className="py-16 px-8">


        <div className="max-w-6xl mx-auto text-center">


          <h2 className="
          text-3xl
          font-bold
          text-blue-900
          ">
            About TRKM Rankings
          </h2>


          <p className="
          mt-5
          text-gray-600
          max-w-4xl
          mx-auto
          ">

          TRKM evaluates universities using a transparent
          ranking framework focused on teaching quality,
          research excellence, global engagement and
          graduate success.

          </p>


        </div>


      </section>






      {/* Statistics */}


      <section className="px-8 pb-16">


        <div className="
        max-w-6xl
        mx-auto
        grid
        md:grid-cols-3
        gap-6
        ">


          <StatCard
          number="2000+"
          title="Universities Ranked"
          />


          <StatCard
          number="100+"
          title="Countries Covered"
          />


          <StatCard
          number="50+"
          title="Subjects Ranked"
          />


        </div>


      </section>







      {/* Ranking Categories */}


      <section className="
      bg-white
      py-16
      px-8
      ">


      <div className="max-w-6xl mx-auto">


      <h2 className="
      text-3xl
      font-bold
      text-blue-900
      text-center
      mb-8
      ">
      Explore Rankings
      </h2>



      <div className="
      grid
      md:grid-cols-3
      gap-6
      ">


      <CategoryCard
      title="World Rankings"
      link="/rankings/world"
      />


      <CategoryCard
      title="Country Rankings"
      link="/rankings/country"
      />


      <CategoryCard
      title="Subject Rankings"
      link="/rankings/subject"
      />


      </div>


      </div>


      </section>








      {/* Methodology */}

      <section className="
      py-16
      px-8
      ">


      <div className="
      max-w-5xl
      mx-auto
      bg-blue-900
      text-white
      rounded-xl
      p-10
      text-center
      ">


      <h2 className="text-3xl font-bold">
      TRKM Ranking Methodology
      </h2>


      <p className="mt-4 text-gray-200">

      Our ranking system combines academic excellence,
      research performance, international diversity and
      career outcomes.

      </p>


      <Link
      href="/methodology"
      className="
      inline-block
      mt-6
      bg-yellow-500
      text-blue-900
      px-6
      py-3
      rounded-lg
      font-bold
      "
      >

      View Methodology

      </Link>


      </div>


      </section>


    </main>

  );
}








function StatCard({
number,
title
}:{
number:string;
title:string;
}){

return(

<div className="
bg-white
rounded-xl
shadow
p-8
text-center
">


<h3 className="
text-4xl
font-bold
text-blue-900
">

{number}

</h3>


<p className="mt-3 text-gray-600">
{title}
</p>


</div>

)

}







function CategoryCard({
title,
link
}:{
title:string;
link:string;
}){


return(

<Link
href={link}
className="
block
bg-gray-50
rounded-xl
shadow
p-8
hover:bg-blue-50
transition
"
>


<h3 className="
text-xl
font-bold
text-blue-900
">

{title}

</h3>


<p className="mt-3 text-gray-600">
View rankings →
</p>


</Link>


)

}