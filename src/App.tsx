import React, { useEffect } from 'react'
import Terminal from './components/Terminal'

const App: React.FC = () => {
  useEffect(() => {
    document.querySelectorAll('.reveal').forEach((el, i) => {
      (el as HTMLElement).style.animationDelay = `${i * 0.1}s`
    })
  }, [])

  return (
    <div className="min-h-screen text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="bg-mesh" />
      <div className="bg-noise" />
      <main className="relative z-10 max-w-5xl mx-auto px-6 py-20 md:py-28">
        <header className="text-center mb-24 reveal">
          <div className="inline-block mb-4 px-3 py-1 text-xs font-mono tracking-wider text-cyan-400 border border-cyan-500/30 rounded-full bg-cyan-900/20">
            PROVABLE CAPITAL INFRASTRUCTURE
          </div>
          <h1 className="mb-6 bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-300 bg-clip-text text-transparent animate-gradient-x">
            Patronaige
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Turn <span className="text-cyan-400">unverifiable compute</span> into{' '}
            <span className="text-indigo-400">provable capital</span>.
            <br className="hidden md:block" />
            Hardware-signed inference receipts anchored onchain.
          </p>
        </header>

        <section className="mb-20 reveal">
          <div className="glass-card p-8 md:p-10">
            <h2 className="flex items-center gap-3 mb-4">
              <span className="w-2 h-8 rounded-full bg-gradient-to-b from-cyan-500 to-indigo-500" />
              The Great Shift
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              AI compute has evolved from a variable R&amp;D expense to the <strong>primary fixed cost</strong> of entrepreneurship.
              Founders previously paid for people; today they pay for inference.
              Patronaige bridges the resulting financing gap.
            </p>
          </div>
        </section>

        <section className="mb-20 reveal">
          <h2 className="text-center mb-8">The Offer: Compute Financing</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card p-6">
              <h3 className="text-cyan-400 mb-2">Who it's for</h3>
              <p className="text-gray-300">
                High-potential founders blocked by access to sustained AI compute, not by ideas.
              </p>
            </div>
            <div className="glass-card p-6">
              <h3 className="text-indigo-400 mb-2">Philosophy</h3>
              <p className="text-gray-300">
                <em>"Financing should be as fluid as the tokens you consume."</em>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-20 reveal">
          <div className="glass-card p-8 glow-accent">
            <h3 className="text-center text-gray-400 text-sm font-mono mb-6 tracking-widest uppercase">
              Monthly Compute Budget Example
            </h3>
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-300">$10k</div>
                <div className="text-sm text-gray-500 mt-1">Range: $5k – $100k+</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-indigo-300">25x</div>
                <div className="text-sm text-gray-500 mt-1">Leverage Multiplier</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-300">$250k</div>
                <div className="text-sm text-gray-500 mt-1">Unlocked Output</div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-600 mt-6">
              *Based on average technical leverage metrics for model-heavy AI startups.
            </p>
          </div>
        </section>

        <section className="mb-20 reveal">
          <h3 className="text-center mb-8 text-gray-400">Key Terms</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {['Non-Recourse', 'No Personal Guarantees', 'Non-Dilutive'].map((term, i) => (
              <span key={i} className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-sm hover:border-cyan-500/50 transition-colors">
                {term}
              </span>
            ))}
          </div>
        </section>

        <section className="mb-20 reveal">
          <h2 className="text-center mb-8">Provable Infrastructure Stack</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'TEE Receipts', desc: 'Hardware-signed inference proofs via AWS Nitro / Intel SGX', accent: 'cyan' },
              { title: 'On-Chain Anchor', desc: 'Starknet L2 audit registry for tamper-evident logging', accent: 'indigo' },
              { title: 'ZK Research', desc: 'Long-term trustlessness roadmap for full verification', accent: 'purple' },
            ].map((card, i) => (
              <div key={i} className={`glass-card p-6 hover:border-${card.accent}-500/50 transition-all group`}>
                <h3 className={`text-${card.accent}-400 mb-3`}>{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 reveal">
          <h2 className="text-center mb-8">Partnership Structures</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Revenue Share', desc: 'Success-aligned revenue percentage until a predefined multiple.' },
              { title: 'Structured Upside', desc: 'Custom participation agreements tailored to your growth trajectory.' },
              { title: 'Project Warrants', desc: 'Case-by-case project-level warrants for long-term alignment.' },
            ].map((card, i) => (
              <div key={i} className="glass-card p-6 text-center">
                <h3 className="text-white mb-2">{card.title}</h3>
                <p className="text-gray-400 text-sm">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 reveal">
          <h2 className="text-center mb-8">Application Process</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {['Apply — Detail project, model needs, roadmap',
              'Underwrite — Assess leverage potential and viability',
              'Structure — Custom compute-for-upside agreement',
              'Build — Focus on execution; both parties win'].map((step, i) => (
              <div key={i} className="glass-card p-5 relative">
                <div className="absolute -top-3 left-6 w-6 h-6 rounded-full bg-gradient-to-b from-cyan-500 to-indigo-500 text-xs flex items-center justify-center font-bold">
                  {i+1}
                </div>
                <p className="text-sm text-gray-300 mt-2">{step}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-20 reveal">
          <h2 className="text-center mb-8">Patron Terminal v1.0</h2>
          <Terminal />
        </section>

        <section className="mb-20 reveal">
          <div className="glass-card p-8 border-l-4 border-l-cyan-500">
            <blockquote className="text-lg italic text-gray-300 mb-4">
              "Most venture capital is a debt of equity. We believe the future of AI isn't built on interest rates,
              but on <strong className="text-cyan-300">Technical Alignment</strong>.
              We aren't just your financiers; we are your compute infrastructure partners.
              If you don't scale, we don't win. That is the only 'Green Flag' that matters."
            </blockquote>
            <p className="text-right text-sm text-gray-500">
              — <strong>Carlos de la Figuera</strong>, Founder, Patronaige
            </p>
          </div>
        </section>

        <footer className="text-center text-gray-600 text-sm pb-10">
          <p>Built on Provable Infrastructure • TEE Receipts • Starknet L2 • ZK Research</p>
        </footer>

      </main>
    </div>
  )
}

export default App
