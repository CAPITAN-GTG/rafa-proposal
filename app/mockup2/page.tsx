'use client';

import Link from 'next/link';

export default function Mockup2() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <main className="container-narrow" style={{textAlign:'center'}}>
        <h1 className="heading-1 mb-3">
          Mockup 2
        </h1>
        <p style={{marginBottom:'2rem',color:'var(--text-medium)'}}>
          This mockup page is coming soon.
        </p>
        <Link href="/" className="menu-btn">
          Back to Menu
        </Link>
      </main>
    </div>
  );
}

