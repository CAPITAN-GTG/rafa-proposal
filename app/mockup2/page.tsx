'use client';

import Link from 'next/link';

export default function Mockup2() {
  return (
    <div style={{ minWidth: '320px', minHeight: '100vh', padding: '2rem' }}>
      <h1>Mockup 2</h1>
      <p>This page is ready for a new approach.</p>
      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}
