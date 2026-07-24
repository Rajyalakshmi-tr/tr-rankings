import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact TR Rankings for university ranking inquiries, partnerships, media, and general support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10 md:px-8">
      <div className="max-w-6xl mx-auto">

        {/* Hero */}
        <div className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 text-white rounded-2xl p-12 text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact TR Rankings
          </h1>

          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            We'd love to hear from you. Get in touch for university rankings,
            partnerships, media inquiries, or general questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">

              <div>
                <h3 className="font-semibold">📧 Email</h3>
                <p className="text-gray-600">
                  info@trrankings.org
                </p>
              </div>

              <div>
                <h3 className="font-semibold">🌐 Website</h3>
                <p className="text-gray-600">
                  www.trrankings.org
                </p>
              </div>

              <div>
                <h3 className="font-semibold">🏢 Headquarters</h3>
                <p className="text-gray-600">
                  Global Higher Education Research Centre
                </p>
              </div>

              <div>
                <h3 className="font-semibold">🤝 Partnerships</h3>
                <p className="text-gray-600">
                  partnerships@trrankings.org
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-lg p-8">

            <h2 className="text-2xl font-bold text-blue-700 mb-6">
              Send a Message
            </h2>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border rounded-lg p-3"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full border rounded-lg p-3"
              />

              <button
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </main>
  );
}