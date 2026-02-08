import { useState } from 'react';
import Head from 'next/head';

export default function Landing() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(''); // 'success' | 'error' | ''

  const handleWaitlist = async (e) => {
    e.preventDefault();

    // TODO: Connect to your email collection service (Mailchimp, ConvertKit, etc.)
    // For now, just show success
    setStatus('success');
    setEmail('');

    // Mock API call
    console.log('Waitlist signup:', email);
  };

  return (
    <>
      <Head>
        <title>Thetics Capital - The AI Hedge Fund That Actually Reads</title>
        <meta name="description" content="Most AI funds trade on price patterns. We read every 10-K, 10-Q, and 8-K filing. Fundamental analysis at machine scale." />
        <meta property="og:title" content="Thetics Capital - The AI Hedge Fund That Actually Reads" />
        <meta property="og:description" content="Most AI funds trade on price patterns. We read every 10-K, 10-Q, and 8-K filing." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white text-gray-900">
        {/* Navigation */}
        <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-semibold tracking-tight">
              Thetics Capital
            </div>
            <a
              href="#waitlist"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Join Waitlist
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-tight">
              The AI hedge fund<br />
              <span className="text-gray-500">that actually reads</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Most AI funds trade on price patterns. We read every 10-K, 10-Q, and 8-K filing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="#waitlist"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Join the Waitlist
              </a>
              <a
                href="#how-it-works"
                className="px-8 py-4 border border-gray-300 rounded-lg font-medium hover:border-gray-900 transition-colors"
              >
                How It Works
              </a>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                The Problem with AI Investing
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Today's AI funds are sophisticated calculators, not readers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-semibold mb-3">Quant Funds</h3>
                <p className="text-gray-600">
                  Trade on price patterns and technical indicators. Fast, but blind to fundamentals.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-xl font-semibold mb-3">AI Trading Bots</h3>
                <p className="text-gray-600">
                  Process sentiment from news and social media. Noisy signals, no depth.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl border border-gray-200">
                <div className="text-4xl mb-4">👔</div>
                <h3 className="text-xl font-semibold mb-3">Traditional Funds</h3>
                <p className="text-gray-600">
                  Analysts read filings deeply, but can't scale beyond 20-30 companies.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We do the homework no one else can
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Our AI reads every word of every SEC filing for 500+ companies.
              Then it invests with the conviction of a fundamental analyst.
            </p>

            <div className="bg-gray-50 rounded-2xl p-8 md:p-12 text-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Deep Reading</h3>
                    <p className="text-gray-600">
                      Extract KPIs, risks, and management commentary from MD&A sections. Track 18+ XBRL concepts across 10 years.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Pattern Detection</h3>
                    <p className="text-gray-600">
                      Identify gaps between risk factors and MD&A. Track insider transactions. Monitor disclosure changes.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-900 text-white rounded-lg flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Conviction Investing</h3>
                    <p className="text-gray-600">
                      Pick 20-30 high-conviction stocks based on fundamental quality, not momentum. Hold for years, not minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-12 text-center">
              <div>
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-gray-600">Companies Indexed</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">4,500+</div>
                <div className="text-gray-600">SEC Filings Read</div>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10yr</div>
                <div className="text-gray-600">Historical Depth</div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section id="how-it-works" className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
              Our Unfair Advantage
            </h2>

            <div className="space-y-12">
              <div className="flex items-start gap-6">
                <div className="text-2xl">📚</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Complete SEC Filing Database</h3>
                  <p className="text-gray-600">
                    We've indexed every 10-K, 10-Q, 8-K, and DEF 14A for the S&P 500. XBRL data + raw HTML + AI extraction = complete picture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-2xl">🧠</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Custom-Trained LLMs</h3>
                  <p className="text-gray-600">
                    Our models are fine-tuned to extract KPIs, detect red flags, and identify management tone shifts. Temperature = 0.0 for strict grounding.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-2xl">🔗</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Graph RAG Architecture</h3>
                  <p className="text-gray-600">
                    Connect companies through supply chains, board members, investors, and peers. See relationships other funds miss.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="text-2xl">⚡</div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Monitoring</h3>
                  <p className="text-gray-600">
                    New 8-K filed? Insider transaction? Proxy statement? We read it within hours and update our thesis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Built by investors, for investors
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              We're not a team of quants who've never read a 10-K. We're fundamental analysts who got tired of manually reading 200-page filings.
            </p>

            <div className="bg-white rounded-xl p-8 border border-gray-200 text-left max-w-2xl mx-auto">
              <p className="text-gray-600 italic mb-4">
                "Warren Buffett reads every word of every annual report. But he can only deeply analyze ~20 companies. What if you could do that for 500 companies?"
              </p>
              <div className="font-semibold">— Founding Team</div>
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join the Waitlist
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We're launching our first fund in Q2 2026. Early waitlist members get priority access.
            </p>

            <form onSubmit={handleWaitlist} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                Join Waitlist
              </button>
            </form>

            {status === 'success' && (
              <p className="mt-4 text-green-600 font-medium">
                ✓ You're on the list! We'll be in touch soon.
              </p>
            )}

            <p className="mt-6 text-sm text-gray-500">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-gray-200 py-12 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-sm text-gray-600">
              © 2026 Thetics Capital. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="mailto:hello@theticscapital.com" className="hover:text-gray-900 transition-colors">
                Contact
              </a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}
