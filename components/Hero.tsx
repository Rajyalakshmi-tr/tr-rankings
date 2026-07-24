export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">

        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6">
          TR World University Rankings
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
          Empowering Global Higher Education Through Transparent and Trusted Rankings.
        </p>

        <form action="/search" className="mt-8">
  <input
    type="text"
    name="q"
    placeholder="Search universities..."
    className="w-full md:w-2/3 lg:w-1/2 p-4 rounded-lg text-black"
  />
</form>

      </div>
    </section>
  );
}