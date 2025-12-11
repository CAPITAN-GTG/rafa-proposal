import Link from 'next/link';
import ProposalNav from '@/components/ProposalNav';

export default function Proposal() {
  return (
    <div style={{maxWidth:'900px',margin:'0 auto',padding:'2rem 1rem'}}>
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

      <section id="executive-summary" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Executive Summary
        </h2>
        <p style={{marginBottom:'1rem',fontSize:'1.125rem'}}>
          St. Aidan's Episcopal Church currently operates a website that, while functional, does not fully reflect the vibrant, welcoming, and inclusive community it represents. This proposal outlines a comprehensive redesign that will modernize your online presence, improve user experience, and better serve our congregation and community.
        </p>
        
        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Key Goals</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Create a modern, welcoming online presence that reflects St. Aidan's values</li>
          <li style={{marginBottom:'0.5rem'}}>Improve accessibility and user experience across all devices</li>
          <li style={{marginBottom:'0.5rem'}}>Make livestream services prominently accessible (HIGH PRIORITY)</li>
          <li style={{marginBottom:'0.5rem'}}>Simplify online giving and stewardship engagement</li>
          <li style={{marginBottom:'0.5rem'}}>Enhance content organization and navigation</li>
          <li style={{marginBottom:'0.5rem'}}>Optimize site performance for faster loading times</li>
          <li style={{marginBottom:'0.5rem'}}>Provide an easy-to-manage content management system</li>
        </ul>

        <div style={{display:'flex',flexWrap:'wrap',gap:'2rem',marginTop:'2rem'}}>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>3x Faster</div>
            <div>Load times reduced from 5-8 seconds to under 3 seconds</div>
          </div>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>Mobile-First</div>
            <div>Fully responsive design optimized for all devices</div>
          </div>
          <div style={{flex:'1',minWidth:'200px',padding:'1.5rem',background:'#f5f5f5',borderRadius:'8px',textAlign:'center'}}>
            <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>User-Focused</div>
            <div>Clear navigation and prominent calls-to-action</div>
          </div>
        </div>
      </section>

      <section id="current-site-audit" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Current Website Audit
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I conducted a comprehensive audit of <a href="https://www.staidanschurch.org/" target="_blank" rel="noopener noreferrer" style={{color:'#0066cc'}}>https://www.staidanschurch.org/</a> and identified several areas requiring improvement:
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
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Online Giving</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Confusing PDF</td>
                <td style={{padding:'1rem',border:'1px solid #ddd'}}>Simple, secure, 1-click</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section id="proposed-solution" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Proposed Solution
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I propose a complete website redesign that addresses all identified issues while creating a modern, inspiring online presence that truly reflects St. Aidan's mission and values.
        </p>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>High Priority Features</h3>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Live Session Widget</strong> - Prominent, always-visible widget with countdown timer and one-click access to livestream</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Responsive Design</strong> - Mobile-first approach ensuring perfect display on all devices</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Clear Navigation</strong> - Intuitive menu structure with proper information architecture</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Fast Performance</strong> - Optimized loading times under 3 seconds on all devices</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Modern Design</strong> - Clean, inspiring, professional aesthetics</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Online Giving</strong> - Simple, secure donation system with Stripe integration</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Service Information</strong> - Times, location, and details clearly displayed</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Easy Content Management</strong> - User-friendly system for updating content</li>
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
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Welcoming</strong> - Warm colors, friendly imagery, inclusive messaging that invites all to participate</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Modern</strong> - Contemporary design patterns while respecting traditional Episcopal aesthetics</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Accessible</strong> - WCAG 2.1 AA compliant, easy to read and navigate for all visitors</li>
        </ul>
      </section>

      <section id="design-mockups" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Design Mockups
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I've created <strong>three different design mockups</strong> for you to choose from, each with a unique visual style and layout approach. These mockups demonstrate the front page layout and live previews page, showing how the design adapts to both desktop and mobile devices so you can get a clear idea of the visual direction and user experience.
        </p>
        <p style={{marginBottom:'1rem'}}>
          Each mockup features your actual church images and showcases the responsive design, navigation structure, and overall aesthetic. This gives you a concrete sense of how the final website will look and feel across different devices.
        </p>
        <p style={{marginTop:'1rem',fontStyle:'italic'}}>View all three mockup options on the <Link href="/" style={{color:'#0066cc'}}>home page</Link> by clicking "Mockup Websites" in the menu.</p>
      </section>

      <section id="technical-approach" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Technical Approach
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
          <li style={{marginBottom:'0.5rem'}}><strong>FastAPI (Python)</strong> - Fast, modern API framework</li>
          <li style={{marginBottom:'0.5rem'}}><strong>MongoDB</strong> - Flexible content database</li>
          <li style={{marginBottom:'0.5rem'}}><strong>RESTful API</strong> - Standard, scalable architecture</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Secure Authentication</strong> - For admin access</li>
        </ul>

        <h4 style={{fontSize:'1.25rem',marginTop:'1.5rem',marginBottom:'0.75rem',fontWeight:'600'}}>Integrations</h4>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}><strong>Stripe</strong> - Secure online donations</li>
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
          <li style={{marginBottom:'0.5rem'}}><strong>Content Management</strong> - Easy-to-use admin interface</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Analytics</strong> - Track visitors and engagement</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Security</strong> - SSL, secure payments, data protection</li>
          <li style={{marginBottom:'0.5rem'}}><strong>Scalable</strong> - Grows with our congregation</li>
        </ul>

        <h3 style={{fontSize:'1.5rem',marginTop:'2rem',marginBottom:'1rem',fontWeight:'600'}}>Easy Content Management</h3>
        <p style={{marginBottom:'1rem'}}>
          You'll have a user-friendly admin interface to manage your website content without technical knowledge:
        </p>
        <ul style={{listStyle:'disc',paddingLeft:'2rem',marginBottom:'1rem'}}>
          <li style={{marginBottom:'0.5rem'}}>Update service times, events, and announcements</li>
          <li style={{marginBottom:'0.5rem'}}>Add photos and videos to galleries</li>
          <li style={{marginBottom:'0.5rem'}}>Manage staff directory and ministry pages</li>
          <li style={{marginBottom:'0.5rem'}}>Post sermons and blog articles</li>
          <li style={{marginBottom:'0.5rem'}}>View donation reports and analytics</li>
          <li style={{marginBottom:'0.5rem'}}>No coding required - simple point-and-click interface</li>
        </ul>
      </section>

      <section id="timeline" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Timeline & Implementation Phases
        </h2>
        <p style={{marginBottom:'1rem'}}>
          I recommend a phased approach to ensure quality and allow for feedback at each stage. Total estimated timeline: <strong>4-6 weeks</strong>
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
            <li style={{marginBottom:'0.5rem'}}>Online giving integration (Stripe)</li>
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
            <li style={{marginBottom:'0.5rem'}}>Staff training on CMS</li>
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

      <section id="investment" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Investment
        </h2>
        <p style={{marginBottom:'2rem'}}>
          This comprehensive website redesign represents a significant upgrade to your online presence and ministry outreach capabilities.
        </p>

        <div className="investment-cards-grid" style={{marginBottom:'3rem'}}>
          <div className="investment-card">
            <div className="investment-card-header">
              <h3 style={{fontSize:'1.25rem',marginBottom:'0.75rem',fontWeight:'600'}}>Essential</h3>
              <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$5,800</div>
              <p style={{marginBottom:'0.75rem',color:'#666',fontSize:'0.875rem'}}>One-time investment</p>
            </div>
            <div className="investment-card-content">
              <ul className="investment-card-list" style={{textAlign:'left',listStyle:'disc',paddingLeft:'1.5rem',fontSize:'0.875rem'}}>
                <li style={{marginBottom:'0.375rem'}}>Modern homepage redesign</li>
                <li style={{marginBottom:'0.375rem'}}>Up to 5 main pages</li>
                <li style={{marginBottom:'0.375rem'}}>Mobile responsive design</li>
                <li style={{marginBottom:'0.375rem'}}>Live stream widget</li>
                <li style={{marginBottom:'0.375rem'}}>Basic events calendar</li>
                <li style={{marginBottom:'0.375rem'}}>Contact forms</li>
                <li style={{marginBottom:'0.375rem'}}>30-day support</li>
              </ul>
            </div>
            <a href="/#" className="btn btn-primary investment-card-button">Select Essential</a>
          </div>

          <div className="investment-card" style={{border:'3px solid #0066cc',position:'relative'}}>
            <div style={{position:'absolute',top:'-12px',left:'50%',transform:'translateX(-50%)',background:'#0066cc',color:'#fff',padding:'0.25rem 1rem',borderRadius:0,fontSize:'0.875rem',fontWeight:'600'}}>RECOMMENDED</div>
            <div className="investment-card-header" style={{marginTop:'1rem'}}>
              <h3 style={{fontSize:'1.25rem',marginBottom:'0.75rem',fontWeight:'600'}}>Complete</h3>
              <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$6,000</div>
              <p style={{marginBottom:'0.75rem',color:'#666',fontSize:'0.875rem'}}>One-time investment</p>
            </div>
            <div className="investment-card-content">
              <ul className="investment-card-list" style={{textAlign:'left',listStyle:'disc',paddingLeft:'1.5rem',fontSize:'0.875rem'}}>
                <li style={{marginBottom:'0.375rem'}}>Everything in Essential</li>
                <li style={{marginBottom:'0.375rem'}}>Up to 12 main pages</li>
                <li style={{marginBottom:'0.375rem'}}>Online giving (Stripe)</li>
                <li style={{marginBottom:'0.375rem'}}>Advanced events system</li>
                <li style={{marginBottom:'0.375rem'}}>Sermon archive</li>
                <li style={{marginBottom:'0.375rem'}}>Photo galleries</li>
                <li style={{marginBottom:'0.375rem'}}>Newsletter integration</li>
                <li style={{marginBottom:'0.375rem'}}>Content management system</li>
                <li style={{marginBottom:'0.375rem'}}>SEO optimization</li>
                <li style={{marginBottom:'0.375rem'}}>60-day support</li>
              </ul>
            </div>
            <a href="/#" className="btn btn-primary investment-card-button">Select Complete</a>
          </div>

          <div className="investment-card">
            <div className="investment-card-header">
              <h3 style={{fontSize:'1.25rem',marginBottom:'0.75rem',fontWeight:'600'}}>Premium</h3>
              <div style={{fontSize:'2rem',fontWeight:'600',color:'#0066cc',marginBottom:'0.5rem'}}>$6,100</div>
              <p style={{marginBottom:'0.75rem',color:'#666',fontSize:'0.875rem'}}>One-time investment</p>
            </div>
            <div className="investment-card-content">
              <ul className="investment-card-list" style={{textAlign:'left',listStyle:'disc',paddingLeft:'1.5rem',fontSize:'0.875rem'}}>
                <li style={{marginBottom:'0.375rem'}}>Everything in Complete</li>
                <li style={{marginBottom:'0.375rem'}}>Unlimited pages</li>
                <li style={{marginBottom:'0.375rem'}}>Member portal/login</li>
                <li style={{marginBottom:'0.375rem'}}>Custom features</li>
                <li style={{marginBottom:'0.375rem'}}>Advanced analytics</li>
                <li style={{marginBottom:'0.375rem'}}>Multi-language support</li>
                <li style={{marginBottom:'0.375rem'}}>Priority development</li>
                <li style={{marginBottom:'0.375rem'}}>90-day support</li>
                <li style={{marginBottom:'0.375rem'}}>3 months free maintenance</li>
              </ul>
            </div>
            <a href="/#" className="btn btn-primary investment-card-button">Select Premium</a>
          </div>
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
              <li style={{marginBottom:'0.5rem'}}>Stripe payment processing (2.9% + 30¢)</li>
              <li style={{marginBottom:'0.5rem'}}>Email services (if applicable)</li>
            </ul>
          </div>
        </div>

        <div style={{marginTop:'2rem',padding:'1.5rem',border:'2px solid #0066cc',borderRadius:0}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1.5rem',fontWeight:'600'}}>What's Included in All Packages</h3>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit, minmax(250px, 1fr))',gap:'1rem'}}>
            <ul style={{listStyle:'disc',paddingLeft:'2rem',margin:0}}>
              <li style={{marginBottom:'0.5rem'}}>Discovery & planning sessions</li>
              <li style={{marginBottom:'0.5rem'}}>Custom design based on mockups</li>
              <li style={{marginBottom:'0.5rem'}}>Mobile-responsive development</li>
              <li style={{marginBottom:'0.5rem'}}>Performance optimization</li>
              <li style={{marginBottom:'0.5rem'}}>Security implementation</li>
            </ul>
            <ul style={{listStyle:'disc',paddingLeft:'2rem',margin:0}}>
              <li style={{marginBottom:'0.5rem'}}>Content migration</li>
              <li style={{marginBottom:'0.5rem'}}>Staff training (2 sessions)</li>
              <li style={{marginBottom:'0.5rem'}}>Testing & quality assurance</li>
              <li style={{marginBottom:'0.5rem'}}>Launch support</li>
              <li style={{marginBottom:'0.5rem'}}>Documentation</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="next-steps" style={{marginBottom:'4rem'}}>
        <h2 style={{fontSize:'2rem',marginBottom:'1.5rem',fontWeight:'600',borderBottom:'2px solid #ddd',paddingBottom:'0.5rem'}}>
          Next Steps
        </h2>
        <p style={{marginBottom:'1rem'}}>
          Ready to transform your online presence? Here's how I can move forward:
        </p>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>1. Review & Discuss</h3>
          <p style={{marginBottom:'1rem'}}>
            Review this proposal and mockups with your team. Schedule a meeting to discuss questions and preferences.
          </p>
        </div>

        <div style={{marginTop:'2rem'}}>
          <h3 style={{fontSize:'1.5rem',marginBottom:'1rem',fontWeight:'600'}}>2. Select Package</h3>
          <p style={{marginBottom:'1rem'}}>
            Choose the package that best fits your needs and budget. I can customize any package to your requirements.
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
