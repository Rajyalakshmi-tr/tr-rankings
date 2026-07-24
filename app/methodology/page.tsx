export default function MethodologyPage() {
  return (
    <main className="min-h-screen bg-gray-50">

      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-800 text-white py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            TR Rankings Methodology
          </h1>

          <p className="text-xl">
            Transparent • Data-Driven • Global Standards
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <div className="bg-white rounded-xl shadow-lg p-8">

          <h2 className="text-3xl font-bold text-blue-900 mb-6">
            Ranking Indicators
          </h2>

          <table className="w-full border-collapse">

            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="p-4 text-left">Indicator</th>
                <th className="p-4">Weight</th>
              </tr>
            </thead>

            <tbody>

<tr className="border-b">
<td className="p-4">
Teaching Excellence
</td>

<td className="p-4 text-center">
30%
</td>
</tr>


<tr className="border-b">
<td className="p-4">
Research Impact
</td>

<td className="p-4 text-center">
30%
</td>
</tr>


<tr className="border-b">
<td className="p-4">
International Outlook
</td>

<td className="p-4 text-center">
20%
</td>
</tr>


<tr>
<td className="p-4">
Graduate Employability
</td>

<td className="p-4 text-center">
20%
</td>
</tr>


</tbody>
          </table>
          <div className="
mt-8
bg-blue-50
rounded-xl
p-6
">

<h2 className="
text-2xl
font-bold
text-blue-900
mb-3
">
Ranking Philosophy
</h2>


<p className="text-gray-700">

TR Rankings evaluates universities through a balanced
framework that measures academic excellence,
research contribution, global engagement and career
outcomes. Our methodology focuses on transparency,
fair comparison and meaningful impact on students
and society.

</p>


</div>
<div className="
mt-8
bg-white
rounded-xl
shadow
p-8
">

<h2 className="
text-2xl
font-bold
text-blue-900
mb-4
">
Scoring Process
</h2>


<ul className="
space-y-3
text-gray-700
">

<li>
📊 Data collection from universities and trusted sources
</li>

<li>
🔬 Evaluation of teaching and research performance
</li>

<li>
🌎 Assessment of international diversity and collaboration
</li>

<li>
💼 Analysis of graduate career outcomes
</li>

<li>
🏆 Calculation of final TR Rankings score out of 100
</li>

</ul>

</div>

        </div>

      </section>

    </main>
  );
}