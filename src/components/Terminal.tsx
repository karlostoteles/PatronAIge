import React, { useEffect, useState } from 'react'

const Terminal: React.FC = () => {
  const [displayedLines, setDisplayedLines] = useState<string[]>([])
  const currentLineIdx = displayedLines.length

  const lines = [
    { text: 'PATRON_TERMINAL_v1.0.4', cls: 'text-cyan-400' },
    { text: '', cls: '' },
    { text: 'CONNECTED_NODES: 14', cls: 'text-gray-300' },
    { text: '', cls: '' },
    { text: 'TOTAL_INFERENCE_STREAM', cls: 'text-gray-500' },
    { text: '1,240,582 TOKENS/S', cls: 'text-green-400' },
    { text: '', cls: '' },
    { text: 'AVG_PORTFOLIO_ALIGNMENT', cls: 'text-gray-500' },
    { text: '24.5% +0.4%', cls: 'text-yellow-400' },
    { text: '', cls: '' },
    { text: 'LIVE_UNDERWRITING_FEED', cls: 'text-gray-500' },
    { text: '[TX-4091] NeuralFlow DEPLOYED H100 x 8', cls: 'text-gray-300' },
    { text: '[TX-4092] LlamaScale SCALING A100 x 16', cls: 'text-gray-300' },
    { text: '[TX-4093] VisionPro UNDERWRITING H100 x 4', cls: 'text-gray-300' },
    { text: '', cls: '' },
    { text: '> SYSTEM_STATUS: ALL_CLUSTERS_NOMINAL', cls: 'text-green-400' },
    { text: '> READY_FOR_PATRON_ALLOCATION', cls: 'text-cyan-400 font-bold' },
  ]

  useEffect(() => {
    if (currentLineIdx >= lines.length) return
    const timer = setTimeout(() => {
      setDisplayedLines((prev) => [...prev, lines[currentLineIdx].text])
    }, 40)
    return () => clearTimeout(timer)
  }, [currentLineIdx])

  return (
    <div className="terminal-window mx-auto max-w-2xl">
      <div className="terminal-header">
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="terminal-dot" />
        <span className="ml-2 text-xs text-gray-500 font-mono">patron — zsh — 80×24</span>
      </div>
      <div className="terminal-body">
        {displayedLines.map((line, i) => (
          <p key={i} className="terminal-line">
            {line === '' ? '\u00A0' : line}
          </p>
        ))}
        {currentLineIdx < lines.length && (
          <div className="terminal-input-line">
            <span className="terminal-prompt">{'\u25B6'}</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  )
}

export default Terminal
