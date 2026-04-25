import React, { useEffect } from 'react'
import Terminal from './components/Terminal'

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.08}s`
    })
  }, [])

  return (
    <div className="min-h-screen text-[#2d2926] font-sans selection:bg-amber-200/40 selection:text-[#8b735b]">
      {/* Background layers */}
      <div className="bg-marble" />
      <div className="bg-grain" />
      <div className="marble-vein" />

      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">

        {/* Hero */}
        <header className="text-center mb-20 reveal">
          <div className="inline-block mb-4 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#8b735b] border border-[#d4cfc7] rounded-full bg-[#f8f7f4]/60">
            Provable Capital Infrastructure
          </div>
          <h1 className="mb-6 text-[#2d2926]">
            Patronaige
          </h1>
          <p className="text-xl md:text-2xl text-[#5a5550] max-w-3xl mx-auto leading-relaxed font-serif">
            Turn <span className="text-[#8b735b] font-serif italic">unverifiable compute</span> into{' '}
            <span className="text-[#6b5d4f] font-serif">provable capital</span>.
            <br className="hidden md:block" />
            Hardware-signed inference receipts anchored onchain.
          </p>
        </header>

        {/* Core Thesis */}
        <section className="mb-16 reveal">
          <div className="stone-card p-8 md:p-10">
            <h2 className="flex items-center gap-3 mb-5 text-[#2d2926]">
              <span className="w-1.5 h-8 rounded-full bg-gradient-to-b from-[#c9a87c] to-[#8b735b]" />
              The Great Shift
            </h2>
            <p className="text-lg leading-relaxed text-[#5a5550]">
              AI compute has evolved from a variable R&amp;D expense to the <strong>primary fixed cost</strong> of entrepreneurship.
              Founders previously paid for people; today they pay for inference.
              Patronaige bridges the resulting financing gap.
            </p>
          </div>
        </section>

        {/* Offer */}
        <section className="mb-16 reveal">
          <h2 className="text-center mb-8 text-[#2d2926]">The Offer: Compute Financing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="stone-card p-6">
              <h3 className="text-[#8b735b] mb-2 font-serif">Who it's for</h3>
              <p className="text-[#5a5550]">
                High-potential founders blocked by access to sustained AI compute, not by ideas.
              </p>
            </div>
            <div className="stone-card p-6">
              <h3 className="text-[#6b5d4f] mb-2 font-serif">Philosophy</h3>
              <p className="text-[#5a5550]">
                <em>"Financing should be as fluid as the tokens you consume."</em>
              </p>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-16 reveal">
          <div className="stone-card p-8 gold-glow">
            <h3 className="text-center text-[#8b735b] text-[11px] uppercase tracking-widest mb-6 font-mono">
              Monthly Compute Budget Example
            </h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-serif font-semibold text-[#6b5d4f]">$10k</div>
                <div className="text-sm text-[#9a9590] mt-1">Range: $5k – $100k+</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-semibold text-[#8b735b]">25x</div>
                <div className="text-sm text-[#9a9590] mt-1">Leverage Multiplier</div>
              </div>
              <div>
                <div className="text-4xl font-serif font-semibold text-[#5a5550]">$250k</div>
                <div className="text-sm text-[#9a9590] mt-1">Unlocked Output</div>
              </div>
            </div>
            <p className="text-center text-xs text-[#b8b3ac] mt-6">
              *Based on average technical leverage metrics for model-heavy AI startups.
            </p>
          </div>
        </section>

        {/* Key Terms */}
        <section className="mb-16 reveal">
          <h3 className="text-center mb-8 text-[#8b735b] text-sm uppercase tracking-wider">Key Terms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Non-Recourse', 'No Personal Guarantees', 'Non-Dilutive'].map((term, i) => (
              <span
                key={i}
                className="px-4 py-2 rounded-lg bg-[#f8f7f4]/80 border border-[#e8e4de] text-sm text-[#5a5550] hover:border-[#c9a87c] transition-colors"
              >
                {term}
              </span>
            ))}
          </div>
        </section>

        {/* Infrastructure Stack */}
        <section className="mb-16 reveal">
          <h2 className="text-center mb-8 text-[#2d2926]">Provable Infrastructure Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'TEE Receipts', desc: 'Hardware-signed inference proofs via AWS Nitro / Intel SGX', accent: '#8b735b' },
              { title: 'On-Chain Anchor', desc: 'Starknet L2 audit registry for tamper-evident logging', accent: '#6b5d4f' },
              { title: 'ZK Research', desc: 'Long-term trustlessness roadmap for full verification', accent: '#5a5550' },
            ].map((card, i) => (
              <div key={i} className="stone-card p-6 hover:border-[#c9a87c]/50 transition-all">
                <h3 className="text-[#8b735b] mb-3 font-serif">{card.title}</h3>
                <p className="text-[#6b5d4f] text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Partnership Structures */}
        <section className="mb-16 reveal">
          <h2 className="text-center mb-8 text-[#2d2926]">Partnership Structures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Revenue Share', desc: 'Success-aligned revenue percentage until a predefined multiple.' },
              { title: 'Structured Upside', desc: 'Custom participation agreements tailored to your growth trajectory.' },
              { title: 'Project Warrants', desc: 'Case-by-case project-level warrants for long-term alignment.' },
            ].map((card, i) => (
              <div key={i} className="stone-card p-6 text-center">
                <h3 className="text-[#2d2926] mb-2 font-serif">{card.title}</h3>
                <p className="text-[#6b5d4f] text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16 reveal">
          <h2 className="text-center mb-8 text-[#2d2926]">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Apply — Detail project, model needs, roadmap',
              'Underwrite — Assess leverage potential and viability',
              'Structure — Custom compute-for-upside agreement',
              'Build — Focus on execution; both parties win'].map((step, i) => (
              <div key={i} className="stone-card p-5 relative">
                <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-to-b from-[#c9a87c] to-[#8b735b] text-[10px] flex items-center justify-center font-bold text-white">
                  {i+1}
                </div>
                <p className="text-sm text-[#5a5550] mt-2 font-sans">{step}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Terminal */}
        <section className="mb-16 reveal">
          <h2 className="text-center mb-8 text-[#2d2926]">Patron Terminal v1.0</h2>
          <Terminal />
        </section>

        {/* Founder Quote */}
        <section className="mb-16 reveal">
          <div className="stone-card p-8 border-l-4 border-l-[#c9a87c]">
            <blockquote className="text-lg italic text-[#5a5550] mb-4 font-serif">
              "Most venture capital is a debt of equity. We believe the future of AI isn't built on interest rates,
              but on <strong className='text-[#8b735b]'>Technical Alignment</strong>.
              We aren't just your financiers; we are your compute infrastructure partners.
              If you don't scale, we don't win. That is the only 'Green Flag' that matters."
            </blockquote>
            <p className="text-right text-sm text-[#9a9590] font-mono">
              — <strong>Carlos de la Figuera</strong>, Founder, Patronaige
            </p>
          </div>
        </section>

        {/* Contact Card */}
        <section className="mb-16 reveal">
          <div className="stone-card p-8 max-w-2xl mx-auto text-center">
            <h2 className="text-[#8b735b] mb-4 font-serif">Get in Touch</h2>
            <p className="text-[#5a5550] mb-6">
              Interested in compute financing, partnership, or technical collaboration?
              Reach out directly:
            </p>
            <a
              href="mailto:carlosdelafiguera@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#c9a87c] to-[#8b735b] text-white font-medium hover:from-[#d4b48a] hover:to-[#9c8469] transition-all shadow-lg shadow-[#c9a87c]/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="4" width="20" height="16" rx="2"/>
                <path d="M22 6L12 13 2 6"/>
              </svg>
              carlosdelafiguera@gmail.com
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-[#9a9590] text-sm pb-10 font-mono">
          <p>Built on Provable Infrastructure • TEE Receipts • Starknet L2 • ZK Research</p>
        </footer>

      </main>
    </div>
  )
}

export default App
