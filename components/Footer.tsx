import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-4">
              TR Rankings
            </h2>

            <p className="text-gray-300">
              Empowering Global Higher Education Through
              Transparent and Trusted Rankings.
            </p>
          </div>

          {/* Rankings */}
          <div>
            <h3 className="font-bold mb-4">Rankings</h3>

            <ul className="space-y-2">
              <li><Link href="/rankings/world">World Rankings</Link></li>
              <li><Link href="/rankings/country">Country Rankings</Link></li>
              <li><Link href="/rankings/subject">Subject Rankings</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold mb-4">Company</h3>

            <ul className="space-y-2">
              <li><Link href="/about">About</Link></li>
              <li><Link href="/methodology">Methodology</Link></li>
              <li><Link href="/news">News</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>

            <p>Email:</p>
            <p>info@trrankings.com</p>

            <p className="mt-3">
              Hyderabad, India
            </p>
          </div>

        </div>

        <hr className="my-8 border-gray-700" />

        <p className="text-center text-gray-400">
          © 2026 TR Rankings. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}