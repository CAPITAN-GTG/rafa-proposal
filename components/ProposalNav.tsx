'use client';

import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function ProposalNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: '#executive-summary', label: 'Executive Summary' },
    { href: '#current-site-audit', label: 'Current Site Audit' },
    { href: '#proposed-solution', label: 'Proposed Solution' },
    { href: '#design-mockups', label: 'Design Mockups' },
    { href: '#technical-approach', label: 'Technical Approach' },
    { href: '#timeline', label: 'Timeline & Phases' },
    { href: '#investment', label: 'Investment' },
    { href: '#next-steps', label: 'Next Steps' },
  ];

  return (
    <>
      {/* Mobile Dropdown */}
      <div className="proposal-nav-mobile">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="proposal-nav-toggle"
        >
          <span>Navigate to Section</span>
          {isOpen ? <X size={20} /> : <ChevronDown size={20} />}
        </button>
        
        {isOpen && (
          <div className="proposal-nav-dropdown">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="proposal-nav-item"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Desktop Navigation */}
      <nav className="proposal-nav-desktop">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="proposal-nav-link"
          >
            {item.label}
          </a>
        ))}
      </nav>
    </>
  );
}

