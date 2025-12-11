import MockupDropdown from '@/components/MockupDropdown';

export default function Home() {
  return (
    <div style={{minHeight:'100vh',display:'flex',alignItems:'center',justifyContent:'center',padding:'2rem'}}>
      <main className="container-narrow" style={{textAlign:'center'}}>
        <h1 className="heading-1 mb-3">
          St. Aidan's Church<br />Website Redesign Proposal
        </h1>
        <nav style={{display:'flex',flexDirection:'column',gap:'1.5rem'}}>
          <a href="/proposal" className="menu-btn">
            Audit and Proposal
          </a>
          <MockupDropdown />
          <a href="/schedule" className="menu-btn">
            Schedule a Call with Me
          </a>
        </nav>
      </main>
    </div>
  );
}