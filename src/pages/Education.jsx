import { Card } from "../components/Card";
import { SectionTitle } from "../components/SectionTitle";
import { Link } from "react-router-dom";
import { PdfDownloadForm } from "../components/PdfDownloadForm";

/**
 * Education page - AI workshops and training for educators
 * Displays workshop offerings and educational services
 */
export function Education() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <SectionTitle 
          kicker="Education" 
          title="AI Workshops & Training for Schools" 
          right={
            <Link 
              to="/contact" 
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Request a Workshop →
            </Link>
          }
        />
        
        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-gray-700 leading-relaxed">
            Helping teachers and leaders build confidence in the age of AI - practical,
            ethical, and adaptable training for today's classrooms.
          </p>
          <p className="mt-4 text-gray-600">
            Available in 2-hour, half-day, or full-day formats • On-site or remote
          </p>
        </div>

        {/* Free Resource Download */}
        <div className="mt-12">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-block px-3 py-1 rounded-full bg-gray-900 text-white text-xs font-medium mb-3">
                  Free Resource
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                  AI for Educators: A Brief Introduction
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  Download our comprehensive guide covering the fundamentals of AI,
                  practical classroom applications, and strategies for maintaining
                  academic integrity in an AI-enabled world.
                </p>
                <ul className="text-sm text-gray-600 space-y-2 mb-4">
                  <li>• Understanding how AI actually works</li>
                  <li>• Common misconceptions and limitations</li>
                  <li>• Practical guidance for classroom discussions</li>
                  <li>• Tips for identifying AI-generated work</li>
                </ul>
              </div>
              <div>
                <PdfDownloadForm
                  pdfUrl="/ai-for-educators-intro.pdf"
                  pdfTitle="AI for Educators - A Brief Introduction"
                  formspreeId="xkgknkpq"
                />
              </div>
            </div>
          </Card>
        </div>

        {/* Workshop Offerings */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {[
            {
              title: "Understanding AI: From Hype to Reality",
              desc: "Plain-language session explaining how AI works, its limits, and how bias arises.",
              outcomes: ["Reduce fear and misinformation", "Build AI vocabulary", "Understand real capabilities vs. hype"],
            },
            {
              title: "Teaching in the Age of AI",
              desc: "Discussing AI with students and evaluating AI-assisted work.",
              outcomes: ["Student guidance strategies", "Academic integrity approaches", "Classroom policy development"],
            },
            {
              title: "AI Literacy for Leadership",
              desc: "Framework for responsible adoption and district-level readiness.",
              outcomes: ["Policy framework development", "Ethical adoption checklist", "Risk assessment tools"],
            },
          ].map((w) => (
            <Card key={w.title}>
              <div className="font-semibold text-lg text-gray-900 mb-3">{w.title}</div>
              <p className="text-sm text-gray-600 mb-4">{w.desc}</p>
              <div className="text-xs text-gray-500 font-medium mb-2">Key Outcomes:</div>
              <ul className="text-xs text-gray-600 list-disc list-inside space-y-1">
                {w.outcomes.map((o) => (
                  <li key={o}>{o}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        {/* Why This Matters */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Why AI Literacy Matters Now</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <div className="font-semibold text-gray-900 mb-3">For Teachers</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Students are already using AI tools, often without guidance</li>
                <li>• Understanding AI helps maintain academic integrity</li>
                <li>• Educators need confidence to discuss AI's role in learning</li>
                <li>• AI literacy is becoming as essential as digital literacy</li>
              </ul>
            </Card>
            <Card>
              <div className="font-semibold text-gray-900 mb-3">For School Leaders</div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Responsible AI adoption requires clear policies</li>
                <li>• Staff need consistent training and support</li>
                <li>• Understanding risks helps protect students and data</li>
                <li>• Proactive planning prevents reactive crisis management</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Workshop Formats */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Workshop Formats</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <div className="font-semibold text-gray-900 mb-2">2-Hour Session</div>
              <p className="text-sm text-gray-600 mb-3">
                Perfect for faculty meetings or professional development days
              </p>
              <div className="text-xs text-gray-500">
                Focus on one core topic with Q&A
              </div>
            </Card>
            <Card>
              <div className="font-semibold text-gray-900 mb-2">Half-Day Workshop</div>
              <p className="text-sm text-gray-600 mb-3">
                Deeper dive with hands-on activities and group discussions
              </p>
              <div className="text-xs text-gray-500">
                Covers 2 topics with practical exercises
              </div>
            </Card>
            <Card>
              <div className="font-semibold text-gray-900 mb-2">Full-Day Training</div>
              <p className="text-sm text-gray-600 mb-3">
                Comprehensive program covering all aspects of AI literacy
              </p>
              <div className="text-xs text-gray-500">
                All topics plus policy development workshop
              </div>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16">
          <Card className="bg-gray-900 border-gray-900 text-white">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can tailor a workshop to meet your school's specific needs.
              </p>
              <Link 
                to="/contact" 
                className="inline-block px-6 py-3 rounded-lg bg-white text-gray-900 font-medium hover:bg-gray-100 transition-colors"
              >
                Request a Workshop
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
}

