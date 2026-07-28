export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-blue-800 to-sky-600 text-white py-28 lg:py-36">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight max-w-5xl mx-auto text-white px-4">
          TR World University Rankings
        </h1>

<p className="mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto px-4">
  Empowering Global Higher Education Through Transparent and Trusted Rankings.
</p>
<div className="flex flex-wrap justify-center gap-3 mt-8 px-4">
  <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
    🌍 100+ Countries
  </span>

  <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
    🎓 2,000+ Universities
  </span>

  <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
    📊 Trusted Data
  </span>

  <span className="bg-white/20 backdrop-blur-md px-5 py-2 rounded-full">
    📅 2026 Edition
  </span>
</div>

 <form action="/search" className="mt-10 flex justify-center">
  <div className="flex flex-col sm:flex-row w-full md:w-2/3 lg:w-1/2 gap-3">
 <input
  type="text"
  name="q"
  placeholder="Search universities..."
  className="flex-1 p-4 rounded-lg text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
/>
  <button
  className="bg-yellow-500 text-blue-900 font-bold px-8 py-4 rounded-lg hover:bg-yellow-400"
>
  Search
</button>
  </div>
</form>

      </div>
    </section>
  );
}