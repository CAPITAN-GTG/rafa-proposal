import Link from 'next/link';
import ProposalNav from '@/components/ProposalNav';
import ProposalBackToTop from '@/components/ProposalBackToTop';

export default function Proposal() {
  return (
    <div id="top" style={{maxWidth:'900px',margin:'0 auto',padding:'2rem 1rem',position:'relative'}}>
      <nav style={{marginBottom:'2rem'}}>
        <Link href="/" className="back-link">← Back to Menu</Link>
      </nav>
      
      <header style={{marginBottom:'3rem',textAlign:'center'}}>
        <h1 style={{fontSize:'2.5rem',marginBottom:'1rem',fontWeight:'600'}}>
          Website Redesign Proposal
        </h1>
        <h2 style={{fontSize:'1.5rem',marginBottom:'0.5rem',fontWeight:'500'}}>
          St. Aidan's Episcopal Church
        </h2>
        <p style={{fontSize:'1.125rem',color:'#666'}}>
          Modern, Responsive, Mission-Focused Web Presence
        </p>
      </header>

      <ProposalNav />

      <section id="executive-summary" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Executive Summary
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem',fontSize:'1.125rem'}}>
          I'm offering a competitive <strong>$4,000</strong> for a full website redesign—and I'm including <strong>Tithely + Breeze ChMS</strong>. Breeze has merged with Tithely into one unified church software (<a href="https://get.tithe.ly/breezechms" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>learn more</a>). I'll implement this for you so giving, people, and church management live in one place. When I add Tithely, you'll have the option to use online giving and church management (events, people) from your site. The project is scoped at <strong>20 hours</strong> with a focus on quality and a clean, consistent look across the site.
        </p>
        <p style={{marginBottom:'1rem',fontSize:'1.125rem'}}>
          You get interactive components and custom textures and graphics that are <strong>reusable across your site</strong>—so the whole site feels cohesive, not pieced together. I don't use generic templates; I build custom assets that you can keep using as you grow.
        </p>
        
        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Key Goals</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Modern, welcoming site that reflects St. Aidan's values</li>
          <li style={{marginBottom:'0.5rem'}}>Livestream front and center (high priority)</li>
          <li style={{marginBottom:'0.5rem'}}>Tithely + Breeze ChMS for giving and church management</li>
          <li style={{marginBottom:'0.5rem'}}>Clear navigation and fast load times</li>
          <li style={{marginBottom:'0.5rem'}}>Reusable custom design system for the whole site</li>
        </ul>

        <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',marginTop:'2rem'}}>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$4,000</div>
            <div>Competitive price, Tithely + Breeze included</div>
          </div>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>20h</div>
            <div>Scoped work with ensured quality</div>
          </div>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>Custom Assets</div>
            <div>Reusable graphics and components site-wide</div>
          </div>
        </div>
      </section>

      <section id="current-site-audit" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Current Website Audit
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I reviewed <a href="https://www.staidanschurch.org/" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>staidanschurch.org</a> and identified several areas requiring improvement:
        </p>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Design Weaknesses</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Outdated visual design using generic Squarespace template</li>
          <li style={{marginBottom:'0.5rem'}}>Poor visual hierarchy - no clear distinction between content importance</li>
          <li style={{marginBottom:'0.5rem'}}>Inconsistent typography and spacing</li>
          <li style={{marginBottom:'0.5rem'}}>Overwhelming image sizes (2500px wide) that dominate viewport</li>
          <li style={{marginBottom:'0.5rem'}}>Weak branding and limited color palette</li>
          <li style={{marginBottom:'0.5rem'}}>Cluttered layout with too much content crammed onto single page</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Structure Issues</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Everything crammed onto single endless homepage</li>
          <li style={{marginBottom:'0.5rem'}}>No dedicated pages for About, Ministries, Events, Resources, etc.</li>
          <li style={{marginBottom:'0.5rem'}}>Poor information architecture with no logical content grouping</li>
          <li style={{marginBottom:'0.5rem'}}>Outdated content (2020-2023 videos) mixed with current information</li>
          <li style={{marginBottom:'0.5rem'}}>Difficult to update and maintain</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Mobile & Responsiveness Problems</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Massive unoptimized images causing severe mobile performance issues</li>
          <li style={{marginBottom:'0.5rem'}}>No visible mobile optimization - desktop-centric layout</li>
          <li style={{marginBottom:'0.5rem'}}>Poor mobile navigation with no hamburger menu</li>
          <li style={{marginBottom:'0.5rem'}}>Text readability issues on small screens</li>
          <li style={{marginBottom:'0.5rem'}}>Touch targets likely too small for mobile users</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Navigation Weaknesses</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>No visible main navigation menu</li>
          <li style={{marginBottom:'0.5rem'}}>Heavily scroll-dependent - users must scroll extensively</li>
          <li style={{marginBottom:'0.5rem'}}>No breadcrumbs or site hierarchy indicators</li>
          <li style={{marginBottom:'0.5rem'}}>No quick access to key actions (watch live, donate, service times)</li>
          <li style={{marginBottom:'0.5rem'}}>No search functionality</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Speed & Performance Issues</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Huge image files (1-3MB each) slowing page load</li>
          <li style={{marginBottom:'0.5rem'}}>No modern image formats (WebP, AVIF)</li>
          <li style={{marginBottom:'0.5rem'}}>No lazy loading - all images load immediately</li>
          <li style={{marginBottom:'0.5rem'}}>Embedded Facebook livestream and YouTube videos adding weight</li>
          <li style={{marginBottom:'0.5rem'}}>Estimated load time: 5-8 seconds on mobile</li>
          <li style={{marginBottom:'0.5rem'}}>Estimated PageSpeed score: 30-50/100 (poor)</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Content Presentation Issues</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Overwhelming wall of content with poor hierarchy</li>
          <li style={{marginBottom:'0.5rem'}}>Videos from 2020-2023 prominently displayed on homepage</li>
          <li style={{marginBottom:'0.5rem'}}>Poor scannability - long paragraphs, difficult to skim</li>
          <li style={{marginBottom:'0.5rem'}}>Service times not prominent enough</li>
          <li style={{marginBottom:'0.5rem'}}>No clear donation call-to-action</li>
          <li style={{marginBottom:'0.5rem'}}>Missing visitor information (parking, accessibility, "what to expect")</li>
          <li style={{marginBottom:'0.5rem'}}>Likely fails WCAG accessibility standards</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Current vs. Proposed Performance</h3>
        <div style={{overflowX:'auto',marginTop:'1rem'}}>
          <table style={{width:'100%',borderCollapse:'collapse',border:'1px solid #ddd'}}>
            <thead>
              <tr style={{background:'#f5f5f5'}}>
                <th style={{padding:'1rem',textAlign:'left',border:'1px solid #ddd'}}>Metric</th>
                <th style={{padding:'1rem',textAlign:'left',border:'1px solid #ddd'}}>Current Site</th>
                <th style={{padding:'1rem',textAlign:'left',border:'1px solid #ddd'}}>Proposed Site</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Load Time (Mobile)</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>5-8 seconds</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>&lt;3 seconds</td>
              </tr>
              <tr style={{background:'#f9f9f9'}}>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>PageSpeed Score</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>30-50/100</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>90+/100</td>
              </tr>
              <tr>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Mobile Friendly</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Poor</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Excellent</td>
              </tr>
              <tr style={{background:'#f9f9f9'}}>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Navigation</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Unclear/Hidden</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Clear & Intuitive</td>
              </tr>
              <tr>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Live Stream Access</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Small widget, buried</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Prominent, always visible</td>
              </tr>
              <tr style={{background:'#f9f9f9'}}>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Content Structure</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>One long page</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Multi-page, organized</td>
              </tr>
              <tr>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Online Giving & ChMS</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Confusing PDF</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Tithely + Breeze ChMS, unified</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="proposed-solution" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Proposed Solution
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          A full redesign that fixes the audit issues: modern site, Tithely + Breeze ChMS integration, clean and fast. Content and giving are managed through Tithely; no custom admin to build or learn.
        </p>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>High Priority Features</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Live Session Widget</strong> - Prominent, always-visible widget with countdown timer and one-click access to livestream</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Responsive Design</strong> - Mobile-first approach ensuring perfect display on all devices</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Clear Navigation</strong> - Intuitive menu structure with proper information architecture</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Fast Performance</strong> - Optimized loading times under 3 seconds on all devices</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Modern Design</strong> - Clean, inspiring, professional aesthetics</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Online Giving & ChMS</strong> - Tithely + Breeze ChMS (<a href="https://get.tithe.ly/breezechms" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>unified church software</a>)—option for giving and ChMS (events, people) from the site</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Service Information</strong> - Times, location, and details clearly displayed</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Proposed Site Structure</h3>
        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Main Pages</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Home</strong> - Hero, welcome, events, quick access</li>
          <li style={{marginBottom:'0.5rem'}}><strong>About</strong> - Story, mission, staff, beliefs</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Worship</strong> - Service times, livestream, music, sermons</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Ministries</strong> - Programs, outreach, groups</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Events</strong> - Calendar, upcoming, registration</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Give</strong> - Online giving, stewardship, impact</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Contact</strong> - Form, map, directions, staff</li>
        </ul>

        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Key Features</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Live streaming integration</li>
          <li style={{marginBottom:'0.5rem'}}>Interactive events calendar</li>
          <li style={{marginBottom:'0.5rem'}}>Secure online donations</li>
          <li style={{marginBottom:'0.5rem'}}>Sermon archive & podcast</li>
          <li style={{marginBottom:'0.5rem'}}>Newsletter signup</li>
          <li style={{marginBottom:'0.5rem'}}>Social media integration</li>
          <li style={{marginBottom:'0.5rem'}}>Photo galleries</li>
          <li style={{marginBottom:'0.5rem'}}>Mobile app-like experience</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Design Philosophy</h3>
        <p style={{marginBottom:'1rem'}}>
          I build <strong>interactive components and custom textures/graphics</strong> that are reusable across your site—so every page shares the same look and feel. No generic templates. You get a real design system that keeps the site cohesive as you add content later.
        </p>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Welcoming</strong> - Warm, inclusive, easy to navigate</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Modern</strong> - Clean and professional</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Accessible</strong> - Readable and usable for everyone</li>
        </ul>
      </section>

      <section id="design-mockups" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Design Mockups
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I've created <strong>three design mockups</strong> to choose from—each with a different look and layout. They show the front page and how it works on desktop and mobile. The components and visuals in these mockups are the kind of reusable assets I build into the live site so the whole site stays consistent.
        </p>
        <p style={{marginBottom:'1rem',padding:'1rem',background:'#f5f5f5',borderRadius:'8px',fontStyle:'italic'}}>
          <strong>Note:</strong> Any section of the home page can be removed as desired. The mockups show a comprehensive layout, but I can customize the homepage to include only the sections that best serve your needs.
        </p>
        <p style={{marginTop:'1rem',fontStyle:'italic'}}>View all three mockup options on the <Link href="/" style={{color:'#0066cc'}}>home page</Link> by clicking "Mockup Websites" in the menu.</p>
      </section>

      <section id="technical-approach" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Technical Approach
          <ProposalBackToTop />
        </h2>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Technology Stack</h3>
        
        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Frontend</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>React</strong> - Modern, fast, component-based UI</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Tailwind CSS</strong> - Responsive, customizable styling</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Progressive Web App</strong> - App-like experience</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Optimized Images</strong> - WebP, lazy loading, responsive</li>
        </ul>

        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Backend</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>RESTful API</strong> - Standard, scalable architecture</li>
        </ul>

        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Integrations</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Tithely + Breeze ChMS</strong> - You'll have the option for online giving and ChMS (events, people) from the site (<a href="https://get.tithe.ly/breezechms" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>unified platform</a>)</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Facebook/YouTube</strong> - Livestream embedding</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Google Calendar</strong> - Events synchronization</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Mailchimp/SendGrid</strong> - Newsletter integration</li>
        </ul>

        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Hosting & Performance</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Cloud Hosting</strong> - AWS/Vercel for reliability</li>
          <li style={{marginBottom:'0.5rem'}}><strong>CDN</strong> - Fast content delivery worldwide</li>
          <li style={{marginBottom:'0.5rem'}}><strong>SSL Certificate</strong> - Secure HTTPS connection</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Automatic Backups</strong> - Daily data protection</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Key Technical Features</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Fast Loading</strong> - Optimized for &lt;3 second load times</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Mobile-First</strong> - Perfect on phones, tablets, desktops</li>
          <li style={{marginBottom:'0.5rem'}}><strong>SEO Optimized</strong> - Better search engine rankings</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Accessibility</strong> - WCAG 2.1 AA compliant</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Analytics</strong> - Track visitors and engagement</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Security</strong> - SSL, secure payments, data protection</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Scalable</strong> - Grows with your congregation</li>
        </ul>
      </section>

      <section id="timeline" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Timeline & Implementation Phases
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          Phased approach so you can give feedback along the way. Total scope: <strong>20 hours</strong> of work—typically 4–6 weeks depending on availability.
        </p>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Phase 1: Core Features & Foundation</h3>
          <p style={{marginBottom:'0.5rem'}}><strong>Duration:</strong> 1-2 weeks</p>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}>Homepage with Live Session widget</li>
            <li style={{marginBottom:'0.5rem'}}>Main navigation structure</li>
            <li style={{marginBottom:'0.5rem'}}>Service times and welcome section</li>
            <li style={{marginBottom:'0.5rem'}}>Basic mobile responsiveness</li>
            <li style={{marginBottom:'0.5rem'}}>Performance optimization setup</li>
          </ul>
          <p style={{marginBottom:'1.5rem',fontStyle:'italic'}}><strong>Deliverable:</strong> Functional homepage with key features</p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Phase 2: Content Pages & Features</h3>
          <p style={{marginBottom:'0.5rem'}}><strong>Duration:</strong> 1-2 weeks</p>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}>About pages (history, staff, mission)</li>
            <li style={{marginBottom:'0.5rem'}}>Ministries section with programs</li>
            <li style={{marginBottom:'0.5rem'}}>Events calendar with registration</li>
            <li style={{marginBottom:'0.5rem'}}>Contact page with map and form</li>
            <li style={{marginBottom:'0.5rem'}}>Sermon archive and resources</li>
          </ul>
          <p style={{marginBottom:'1.5rem',fontStyle:'italic'}}><strong>Deliverable:</strong> Complete site structure with all main pages</p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Phase 3: Interactive Features & Integrations</h3>
          <p style={{marginBottom:'0.5rem'}}><strong>Duration:</strong> 1 week</p>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}>Tithely + Breeze ChMS integration</li>
            <li style={{marginBottom:'0.5rem'}}>Livestream embedding and setup</li>
            <li style={{marginBottom:'0.5rem'}}>Event registration system</li>
            <li style={{marginBottom:'0.5rem'}}>Newsletter signup integration</li>
            <li style={{marginBottom:'0.5rem'}}>Social media connections</li>
            <li style={{marginBottom:'0.5rem'}}>Photo galleries</li>
          </ul>
          <p style={{marginBottom:'1.5rem',fontStyle:'italic'}}><strong>Deliverable:</strong> Fully functional interactive features</p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Phase 4: Polish, Testing & Launch</h3>
          <p style={{marginBottom:'0.5rem'}}><strong>Duration:</strong> 1 week</p>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}>Final performance optimization</li>
            <li style={{marginBottom:'0.5rem'}}>Cross-browser and device testing</li>
            <li style={{marginBottom:'0.5rem'}}>SEO setup and optimization</li>
            <li style={{marginBottom:'0.5rem'}}>Accessibility audit and fixes</li>
            <li style={{marginBottom:'0.5rem'}}>Content migration and review</li>
            <li style={{marginBottom:'0.5rem'}}>Staff training on site and Tithely</li>
            <li style={{marginBottom:'0.5rem'}}>Launch and go-live!</li>
          </ul>
          <p style={{marginBottom:'1.5rem',fontStyle:'italic'}}><strong>Deliverable:</strong> Fully tested, optimized, and launched website</p>
        </div>

        <div style={{marginTop:'2rem',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Post-Launch Support</h3>
          <p style={{marginBottom:'1rem'}}>After launch, I provide:</p>
          
          <h4 style={{fontSize:'1.25rem',marginTop:'1rem',marginBottom:'0.75rem',fontWeight:'600'}}>30-Day Free Support</h4>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1.5rem'}}>
            <li style={{marginBottom:'0.5rem'}}>Bug fixes and adjustments</li>
            <li style={{marginBottom:'0.5rem'}}>Staff training sessions</li>
            <li style={{marginBottom:'0.5rem'}}>Content updates assistance</li>
            <li style={{marginBottom:'0.5rem'}}>Technical support</li>
          </ul>

          <h4 style={{fontSize:'1.25rem',marginTop:'1rem',marginBottom:'0.75rem',fontWeight:'600'}}>Ongoing Maintenance (Optional)</h4>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
            <li style={{marginBottom:'0.5rem'}}>Monthly security updates</li>
            <li style={{marginBottom:'0.5rem'}}>Performance monitoring</li>
            <li style={{marginBottom:'0.5rem'}}>Content updates support</li>
            <li style={{marginBottom:'0.5rem'}}>Priority technical support</li>
          </ul>
        </div>
      </section>

      <section id="investment" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Investment
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          One price: <strong>$4,000</strong> (20h, Tithely + Breeze included). See Executive Summary for full scope.
        </p>
        <p style={{marginBottom:'2rem',fontSize:'0.95rem',color:'#555'}}>
          Lower quotes (e.g. $2,500) often mean templates and no real platform. Here you get custom components, reusable graphics for a consistent look, and Tithely integration—a site you can grow with.
        </p>

        <div style={{marginBottom:'3rem',padding:'1.5rem',border:'2px solid #0066cc',borderRadius:'8px',background:'#fafafa'}}>
          <div style={{display:'flex',flexWrap:'wrap',gap:'1rem',alignItems:'baseline',marginBottom:'1rem'}}>
            <span style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc'}}>$4,000</span>
            <span style={{color:'#666',fontSize:'0.95rem'}}>20h · One-time · Tithely + Breeze included</span>
          </div>
          <ul style={{listStyle:'disc',paddingLeft:'2rem',margin:0,fontSize:'0.95rem'}}>
            <li style={{marginBottom:'0.35rem'}}>Full site redesign</li>
            <li style={{marginBottom:'0.35rem'}}>Tithely + Breeze ChMS (<a href="https://get.tithe.ly/breezechms" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>unified church software</a>)</li>
            <li style={{marginBottom:'0.35rem'}}>Custom reusable components & graphics</li>
            <li style={{marginBottom:'0.35rem'}}>Interactive elements, consistent look site-wide</li>
            <li style={{marginBottom:'0.35rem'}}>Live stream widget, events, giving</li>
            <li style={{marginBottom:'0.35rem'}}>Mobile responsive, fast load</li>
            <li style={{marginBottom:'0.35rem'}}>Post-launch support</li>
          </ul>
        </div>

        <div style={{marginTop:'3rem',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Ongoing Costs (Optional)</h3>
          
          <div style={{marginBottom:'1.5rem'}}>
            <h4 style={{fontSize:'1.25rem',marginBottom:'0.5rem',fontWeight:'600'}}>Monthly Maintenance</h4>
            <div style={{fontSize:'1.5rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$200/month</div>
            <ul style={{listStyle:'disc',paddingLeft:'2rem'}}>
              <li style={{marginBottom:'0.5rem'}}>Security updates & monitoring</li>
              <li style={{marginBottom:'0.5rem'}}>Performance optimization</li>
              <li style={{marginBottom:'0.5rem'}}>Content updates (up to 2 hours)</li>
              <li style={{marginBottom:'0.5rem'}}>Priority email support</li>
              <li style={{marginBottom:'0.5rem'}}>Monthly analytics reports</li>
            </ul>
          </div>

          <div>
            <h4 style={{fontSize:'1.25rem',marginBottom:'0.5rem',fontWeight:'600'}}>Hosting & Services</h4>
            <div style={{fontSize:'1.5rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$50-150/month</div>
            <ul style={{listStyle:'disc',paddingLeft:'2rem'}}>
              <li style={{marginBottom:'0.5rem'}}>Cloud hosting (AWS/Vercel)</li>
              <li style={{marginBottom:'0.5rem'}}>Domain name renewal</li>
              <li style={{marginBottom:'0.5rem'}}>SSL certificate</li>
              <li style={{marginBottom:'0.5rem'}}>Tithely giving (per their pricing)</li>
              <li style={{marginBottom:'0.5rem'}}>Email services (if applicable)</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop:'2rem',padding:'1.5rem',border:'2px solid #0066cc',borderRadius:0}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1.5rem',fontWeight:'600'}}>What's Included</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:'1rem'}}>
            <ul style={{listStyle:'disc',paddingLeft:'2rem',margin:0}}>
              <li style={{marginBottom:'0.5rem'}}>Discovery & planning</li>
              <li style={{marginBottom:'0.5rem'}}>Custom design + reusable components & graphics</li>
              <li style={{marginBottom:'0.5rem'}}>Tithely + Breeze ChMS implementation</li>
              <li style={{marginBottom:'0.5rem'}}>Mobile-responsive, fast, secure</li>
            </ul>
            <ul style={{listStyle:'disc',paddingLeft:'2rem',margin:0}}>
              <li style={{marginBottom:'0.5rem'}}>Content migration</li>
              <li style={{marginBottom:'0.5rem'}}>Staff training</li>
              <li style={{marginBottom:'0.5rem'}}>Testing & launch</li>
              <li style={{marginBottom:'0.5rem'}}>Documentation & support</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="next-steps" style={{marginBottom:'4rem',paddingBottom:'4rem',borderBottom:'1px solid #eaeaea'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem',display:'flex',alignItems:'center',flexWrap:'wrap'}}>
          Next Steps
          <ProposalBackToTop />
        </h2>
        <p style={{marginBottom:'1rem'}}>
          Ready to move forward? Here's how to get started:
        </p>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>1. Review & Discuss</h3>
          <p style={{marginBottom:'1rem'}}>
            Review this proposal and mockups with your team. Schedule a meeting to discuss questions and preferences.
          </p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>2. Confirm</h3>
          <p style={{marginBottom:'1rem'}}>
            Confirm the offer above. I can adjust scope if your needs differ.
          </p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>3. Get Started</h3>
          <p style={{marginBottom:'1rem'}}>
            Sign agreement, begin discovery phase, and start building your beautiful new website!
          </p>
        </div>

        <div style={{marginTop:'3rem',padding:'2rem',background:'#f5f5f5',borderRadius:'8px'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>Contact Information</h3>
          <ul style={{listStyle:'none',padding:0}}>
            <li style={{marginBottom:'0.75rem'}}><strong>Email:</strong> <a href="mailto:racorbas@gmail.com" style={{color:'#0066cc'}}>racorbas@gmail.com</a></li>
            <li style={{marginBottom:'0.75rem'}}><strong>Phone:</strong> <a href="tel:+13479018522" style={{color:'#0066cc'}}>(347)-901-8522</a></li>
            <li style={{marginBottom:'0.75rem'}}><strong>Website:</strong> Contact for details</li>
            <li style={{marginBottom:'0.75rem'}}><strong>Meeting:</strong> Book on Calendly</li>
          </ul>
          <div style={{marginTop:'1.5rem'}}>
            <a 
              href="https://calendly.com/rcordero-rrs/st-aidan-s-episcopal?month=2025-12" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>

        <p style={{marginTop:'2rem',textAlign:'center',color:'#666',fontSize:'0.875rem'}}>
          This proposal is valid for 30 days from the date of presentation.
        </p>
      </section>

      <footer style={{marginTop:'4rem',paddingTop:'2rem',borderTop:'2px solid #ddd',textAlign:'center',color:'#666',fontSize:'0.875rem'}}>
        <p>© 2025 - Website Redesign Proposal for St. Aidan's Episcopal Church</p>
      </footer>
    </div>
  );
}
