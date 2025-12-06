import Link from 'next/link';

export default function Live() {
  return (
    <div className="bg-dark" style={{minWidth:'320px'}}>
      {/* Header */}
      <header className="dark-header">
        <div className="container flex" style={{justifyContent:'space-between',alignItems:'center'}}>
          <div style={{color:'#fff',fontSize:'1.125rem',fontWeight:'600'}}>
            St. Aidan's Live Stream
          </div>
          <Link href="/mockup" className="btn btn-primary btn-small">
            Back to Home
          </Link>
        </div>
      </header>

      {/* Live Stream Container */}
      <main className="container" style={{margin:'2rem auto',padding:'0 1rem'}}>
        <div className="dark-card mb-2">
          {/* Live Stream Video Placeholder */}
          <div className="video-container">
            <div className="video-content">
              <div className="live-badge mb-1">
                <span className="live-dot"></span>
                LIVE
              </div>
              <div className="heading-3 mb-1">
                Sunday Worship Service
              </div>
              <div className="text-medium opacity-90 mb-2">
                Live stream will begin at 10:00 AM
              </div>
              <div className="card" style={{maxWidth:'500px',background:'rgba(255,255,255,0.1)',border:'none'}}>
                <p className="text-small mb-1">
                  The live stream will appear here during service times. If you're having trouble viewing, please refresh the page.
                </p>
                <div className="text-small" style={{opacity:0.7}}>
                  Service times: Sundays at 10:00 AM
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Info */}
        <div className="dark-card">
          <h2 className="heading-3 mb-1">Join Us for Worship</h2>
          <div className="heading-4 mb-1">
            Sundays at 10:00 AM
          </div>
          <p className="text-medium opacity-90 mb-1">
            Holy Eucharist with Music - In-Person & Livestreamed
          </p>
          <div className="flex flex-wrap gap-1 mt-2">
            <Link href="/mockup" className="btn btn-primary">
              Visit Our Homepage
            </Link>
            <a href="/#" className="btn btn-outline-dark">
              Plan Your Visit
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}