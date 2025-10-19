import { CONFIG } from "../config";
import { Card } from "../components/Card";
import { SectionTitle } from "../components/SectionTitle";

export function Contact() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <section className="py-16 sm:py-24">
        <SectionTitle kicker="Next step" title="Let's talk" />
        <Card className="mt-10">
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="text-lg font-semibold text-gray-900">Have a challenge in mind?</div>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                Send a short brief and I'll reply with next steps. I'm open to fixed-scope projects
                and fractional retainers.
              </p>
              <div className="mt-6 space-y-2 text-sm">
                <div><span className="font-medium text-gray-900">Email:</span> <a className="text-gray-600 hover:text-gray-900 transition-colors" href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></div>
                <div><span className="font-medium text-gray-900">Location:</span> <span className="text-gray-600">{CONFIG.location}</span></div>
              </div>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                {CONFIG.socials.map((s) => (
                  <a key={s.label} href={s.href} className="text-gray-600 hover:text-gray-900 transition-colors font-medium" target="_blank" rel="noreferrer">{s.label}</a>
                ))}
              </div>
            </div>
            <div>
              <form
                method="POST"
                action="https://formspree.io/f/mjkazery"
                className="space-y-4"
              >
                <input name="name" placeholder="Your name" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                <input name="email" type="email" placeholder="Your email" className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent" />
                <textarea name="message" placeholder="Tell me about your project…" rows={5} className="w-full px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent resize-none" />
                <button className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors">Send</button>
              </form>
              <div className="text-xs text-gray-500 mt-3">
                By submitting, you agree not to send secrets. For NDAs, request a private intro call.
              </div>
            </div>
          </div>
        </Card>
      </section>
    </main>
  );
}

