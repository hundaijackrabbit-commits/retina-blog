'use client';
import { useState } from 'react';
import Link from 'next/link';
import { topics } from '../lib/content';

export default function SiteHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Link href="/" className="brand">
          RETINA<span>.</span>BLOG
        </Link>
        <nav aria-label="Main navigation">
          {topics.map(t => (
            <Link key={t.slug} href={`/topic/${t.slug}`}>
              {t.name}
            </Link>
          ))}
        </nav>
        <Link className="brief-pill" href="/#brief">
          Retina Brief
        </Link>
        <button
          className="mobile-menu-toggle"
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
      
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <nav aria-label="Mobile navigation">
            <Link href="/" onClick={() => setMobileMenuOpen(false)}>
              Home
            </Link>
            {topics.map(t => (
              <Link 
                key={t.slug} 
                href={`/topic/${t.slug}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.name}
              </Link>
            ))}
            <Link href="/#brief" onClick={() => setMobileMenuOpen(false)}>
              Retina Brief
            </Link>
            <Link href="/about" onClick={() => setMobileMenuOpen(false)}>
              About
            </Link>
            <Link href="/editorial-standards" onClick={() => setMobileMenuOpen(false)}>
              Editorial Standards
            </Link>
          </nav>
        </div>
      )}
      
      <div className="subnav">
        <span>Evidence-first coverage of retinal innovation.</span>
        <Link href="/editorial-standards">Editorial standards →</Link>
      </div>
    </>
  );
}
