'use client';

import { useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function ProposalBackToTop() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="#top"
      aria-label="Back to top"
      title="Back to top"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        marginLeft: '0.5rem',
        textDecoration: 'none',
        transition: 'transform 0.2s ease',
        transform: hovered ? 'translateY(-2px)' : 'none',
      }}
    >
      <ArrowUp size={18} strokeWidth={2.5} />
    </a>
  );
}
