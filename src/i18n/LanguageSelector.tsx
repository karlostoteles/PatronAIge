import React, { useState, useRef, useEffect } from 'react';
import { useI18n } from './I18nContext';
import type { Language } from './translations';

const languageOptions: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'es', label: 'Español', flag: '🇪🇸' },
    { code: 'zh', label: '中文', flag: '🇨🇳' },
];

const LanguageSelector: React.FC = () => {
    const { lang, setLang } = useI18n();
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const current = languageOptions.find(l => l.code === lang) || languageOptions[0];

    return (
        <div ref={ref} style={{ position: 'relative' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--border-color)',
                    borderRadius: '8px',
                    padding: '0.5rem 0.75rem',
                    color: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = 'var(--accent-color)')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'var(--border-color)')}
            >
                <span style={{ fontSize: '1.1rem' }}>{current.flag}</span>
                <span>{current.code.toUpperCase()}</span>
                <span style={{ fontSize: '0.6rem', opacity: 0.5, marginLeft: '0.25rem' }}>▼</span>
            </button>

            {isOpen && (
                <div
                    style={{
                        position: 'absolute',
                        top: 'calc(100% + 8px)',
                        right: 0,
                        background: 'rgba(10, 10, 10, 0.95)',
                        backdropFilter: 'blur(20px)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '12px',
                        overflow: 'hidden',
                        zIndex: 1000,
                        minWidth: '160px',
                        boxShadow: '0 16px 48px rgba(0,0,0,0.5)',
                    }}
                >
                    {languageOptions.map(option => (
                        <button
                            key={option.code}
                            onClick={() => {
                                setLang(option.code);
                                setIsOpen(false);
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                width: '100%',
                                padding: '0.75rem 1rem',
                                border: 'none',
                                background: option.code === lang ? 'rgba(255,107,0,0.15)' : 'transparent',
                                color: option.code === lang ? 'var(--accent-color)' : '#fff',
                                cursor: 'pointer',
                                fontSize: '0.9rem',
                                fontWeight: option.code === lang ? 600 : 400,
                                transition: 'background 0.15s ease',
                                textAlign: 'left',
                            }}
                            onMouseEnter={e => {
                                if (option.code !== lang) e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            }}
                            onMouseLeave={e => {
                                if (option.code !== lang) e.currentTarget.style.background = 'transparent';
                            }}
                        >
                            <span style={{ fontSize: '1.2rem' }}>{option.flag}</span>
                            <span>{option.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default LanguageSelector;
