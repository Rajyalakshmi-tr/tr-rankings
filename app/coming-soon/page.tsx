import Countdown from "@/components/Countdown";

export default function ComingSoonPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#001F5B] via-[#003B8E] to-[#001536] flex items-center justify-center px-6">

      <div className="w-full max-w-6xl text-center">

        {/* Logo / Brand */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            TR World University Rankings - 2027 
          </h1>
        </div>

        {/* Coming Soon */}
        <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-wide">
          COMING SOON
        </h2>

        {/* Tagline */}
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
          Empowering Global Higher Education Through
          Transparent & Trusted Rankings
        </p>

        {/* Launch Date */}
        <div className="mt-8">
          <p className="text-[#F5B800] text-lg md:text-xl font-semibold">
            Launching December 11, 2026
          </p>
        </div>

        {/* Countdown */}
        <div className="mt-10">
          <Countdown />
        </div>

        {/* Bottom Message */}
        <p className="mt-10 text-white/70">
          A new standard in global university rankings is coming.
        </p>

      </div>

    </main>
  );
}