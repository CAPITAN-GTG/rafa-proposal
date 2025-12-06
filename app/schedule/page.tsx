import Link from 'next/link';

export default function Schedule() {
  return (
    <div className="container-narrow" style={{padding:'2rem 1rem'}}>
      <nav className="mb-2">
        <Link href="/" className="back-link">← Back to Menu</Link>
      </nav>
      
      <header className="text-center mb-3">
        <h1 className="heading-1 mb-1">Schedule a Call with Me</h1>
        <p className="text-large text-medium-color">
          Let's discuss your website redesign needs
        </p>
      </header>

      <div className="card shadow-lg text-center mb-3">
        <h2 className="heading-3 mb-2">Book a Consultation</h2>
        
        <div className="mt-2">
          <p className="text-medium text-medium-color mb-2">
            Schedule a meeting via Calendly to discuss your website redesign needs.
          </p>
          <div className="mb-2">
            <a 
              href="https://calendly.com/rcordero-rrs/st-aidan-s-episcopal?month=2025-12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary btn-large"
            >
              Book on Calendly
            </a>
          </div>
        </div>
      </div>

      <div className="card">
        <h3 className="heading-4 mb-1">What to Expect</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem'}}>
          <li className="mb-1">Discussion of your current website needs and goals</li>
          <li className="mb-1">Review of the proposal and mockups</li>
          <li className="mb-1">Q&A session about the redesign process</li>
          <li className="mb-1">Customization options for your package</li>
          <li className="mb-1">Timeline and next steps</li>
        </ul>
      </div>
    </div>
  );
}