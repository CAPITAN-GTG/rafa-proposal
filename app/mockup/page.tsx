import Link from 'next/link';
import MobileNav from '@/components/MobileNav';
import MinistriesCarousel from '@/components/MinistriesCarousel';

export default function Mockup() {
  return (
    <div style={{minWidth:'320px'}}>
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="church-logo">
            <div className="church-logo-icon">SA</div>
            <div>
              <div className="church-logo-text">St. Aidan's Episcopal Church</div>
              <div className="church-logo-location">Malibu, California</div>
            </div>
          </div>
          
          <MobileNav />
          <nav className="nav mobile-hidden">
            <a href="/#" className="nav-link">Home</a>
            <a href="/#" className="nav-link">About</a>
            <a href="/#" className="nav-link">Worship</a>
            <a href="/#" className="nav-link">Ministries</a>
            <a href="/#" className="nav-link">Events</a>
            <a href="/#" className="nav-link">Give</a>
            <a href="/#" className="nav-link">Contact</a>
            <a href="/mockup/live" className="btn btn-primary btn-small">Watch Live</a>
            <a href="/#" className="btn btn-success btn-small">Give</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero section-light">
        <div className="container-narrow">
          <h1 className="heading-1 mb-2">Welcome Home</h1>
          <p className="text-large mb-2 text-medium-color">
            Join us for worship this Sunday at 10:00 AM
          </p>
          <p className="text-medium mb-3 text-medium-color" style={{fontStyle:'italic'}}>
            All are welcomed at St. Aidan's. Come as you are.
          </p>
          <div className="flex flex-wrap justify-center gap-1">
            <a href="/#" className="btn btn-primary">Plan Your Visit</a>
            <a href="/mockup/live" className="btn btn-secondary">Watch Online</a>
          </div>
        </div>
      </section>

      {/* Next Service Countdown */}
      <section className="section section-dark">
        <div className="container text-center">
          <div className="text-small opacity-90 mb-1">NEXT SERVICE</div>
          <div className="heading-4 mb-1">Sunday, December 14 at 10:00 AM</div>
          <div className="text-large mb-2 opacity-90">
            Starting in: 1d 19h 23m
          </div>
          <a href="/mockup/live" className="btn btn-secondary">Join Us for Worship</a>
        </div>
      </section>

      {/* Service Times */}
      <section className="section section-white">
        <div className="container-narrow text-center">
          <h2 className="heading-2 mb-1">Join Us for Worship</h2>
          <div className="heading-4 mb-1">
            Sundays at 10:00 AM
          </div>
          <p className="text-large text-medium-color mb-1">
            Holy Eucharist with Music
          </p>
          <p className="text-medium text-light-color mb-2">
            In-Person & Livestreamed
          </p>
          <a href="/#" className="text-primary">Learn More →</a>
        </div>
      </section>

      {/* New Here Section */}
      <section className="section section-light">
        <div className="container grid grid-2 items-center">
          <div>
            <h2 className="heading-2 mb-1">New Here?</h2>
            <p className="text-large text-medium-color mb-1">
              We'd love to welcome you!
            </p>
            <p className="text-medium text-light-color mb-2">
              Learn about what to expect, directions, parking, and more.
            </p>
            <a href="/#" className="btn btn-primary">Plan Your Visit</a>
          </div>
          <div className="icon-emoji">💚</div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="section section-white">
        <div className="container grid grid-2 items-center">
          <div className="icon-emoji-small">💚</div>
          <div>
            <h2 className="heading-2 mb-1">Get Involved</h2>
            <p className="text-large text-medium-color mb-1">
              Join our community
            </p>
            <p className="text-medium text-light-color mb-2">
              Discover ministries, volunteer opportunities, and ways to connect.
            </p>
            <a href="/#" className="btn btn-primary">Explore Ministries</a>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="section section-light">
        <div className="container-narrow">
          <h2 className="heading-2 mb-1 text-center">About Us</h2>
          <h3 className="heading-4 mb-2 text-center text-medium-color">
            The Welcoming Heart of Christ in Malibu
          </h3>
          <p className="text-large text-medium-color mb-2 text-center">
            Are you looking for an inclusive church in which people from many backgrounds have found common ground?
          </p>
          <p className="text-large text-medium-color mb-2 text-center" style={{fontStyle:'italic'}}>
            St. Aidan's seeks to be the welcoming heart, hands, and voice of Christ in Malibu.
          </p>
          <blockquote className="quote-block">
            "St. Aidan's sits within the traditional homeland of the Chumash people. We respect and honor past, present, and future generations of Chumash and their continued connection to this land."
          </blockquote>
          <div className="text-center mt-2">
            <a href="/#" className="text-primary">Our Story →</a>
          </div>
          <div className="card mt-3 text-center text-small text-light-color">
            St. Aidan's Church Service - Blessing of Animals
          </div>
        </div>
      </section>

      {/* What's Happening / Events */}
      <section className="section section-white">
        <div className="container">
          <h2 className="heading-2 mb-1 text-center">What's Happening</h2>
          <p className="text-large text-medium-color mb-1 text-center">
            Upcoming Events
          </p>
          <p className="text-medium text-light-color mb-3 text-center">
            Join us for worship, fellowship, and community
          </p>

          {/* Featured Event */}
          <div className="featured-box mb-3">
            <h3 className="heading-3 mb-2">Celebrate Christmas at St. Aidan's</h3>
            <p className="text-large mb-2 opacity-90">
              Join us this Christmas season for special services filled with beautiful music, candlelight, and the joy of Christ's birth. All are welcome!
            </p>
            <div className="grid grid-2 mb-2">
              <div>
                <div className="heading-4 mb-1">Christmas Eve Service</div>
                <div className="text-medium opacity-90">December 24 at 7:00 PM</div>
              </div>
              <div>
                <div className="heading-4 mb-1">Christmas Day Service</div>
                <div className="text-medium opacity-90">December 25 at 10:00 AM</div>
              </div>
            </div>
            <a href="/#" className="btn btn-secondary">Learn More</a>
          </div>

          {/* Events List */}
          <div className="grid grid-3 mb-3">
            <div className="event-card">
              <div className="flex gap-1 mb-1">
                <div className="event-date">
                  <div>DEC</div>
                  <div style={{fontSize:'1.5rem'}}>14</div>
                </div>
                <div style={{flex:1}}>
                  <div className="heading-4 mb-1">Sunday Worship</div>
                  <div className="text-small text-medium-color">
                    10:00 AM - 11:30 AM
                  </div>
                </div>
              </div>
              <p className="text-medium text-light-color mb-1">
                Holy Eucharist with Music
              </p>
              <a href="/#" className="text-primary text-small">More Details →</a>
            </div>

            <div className="event-card">
              <div className="flex gap-1 mb-1">
                <div className="event-date">
                  <div>DEC</div>
                  <div style={{fontSize:'1.5rem'}}>24</div>
                </div>
                <div style={{flex:1}}>
                  <div className="heading-4 mb-1">Christmas Eve Service</div>
                  <div className="text-small text-medium-color">
                    7:00 PM - 8:30 PM
                  </div>
                </div>
              </div>
              <p className="text-medium text-light-color mb-1">
                Candlelight Service
              </p>
              <a href="/#" className="text-primary text-small">More Details →</a>
            </div>

            <div className="event-card">
              <div className="flex gap-1 mb-1">
                <div className="event-date">
                  <div>JAN</div>
                  <div style={{fontSize:'1.5rem'}}>05</div>
                </div>
                <div style={{flex:1}}>
                  <div className="heading-4 mb-1">Community Potluck</div>
                  <div className="text-small text-medium-color">
                    12:00 PM - 2:00 PM
                  </div>
                </div>
              </div>
              <p className="text-medium text-light-color mb-1">
                Fellowship Hall
              </p>
              <a href="/#" className="text-primary text-small">More Details →</a>
            </div>
          </div>

          <div className="text-center">
            <a href="/#" className="text-primary">View All Events →</a>
          </div>
        </div>
      </section>

      {/* Ministries */}
      <section className="section section-light">
        <div className="container">
          <h2 className="heading-2 mb-1 text-center">Ministries</h2>
          <p className="text-large text-medium-color mb-1 text-center">
            Ways to Connect
          </p>
          <p className="text-medium text-light-color mb-3 text-center">
            Find your place in our community
          </p>

          <MinistriesCarousel />
        </div>
      </section>

      {/* Support Our Mission */}
      <section className="section section-white">
        <div className="container-narrow">
          <div className="card shadow-lg text-center">
            <h2 className="heading-2 mb-1">Support Our Mission</h2>
            <p className="text-large text-medium-color mb-2">
              Your generosity helps us serve our community and share God's love
            </p>
            <div className="flex flex-wrap justify-center gap-1">
              <a href="/#" className="btn btn-success">Give Online</a>
              <a href="/#" className="btn btn-primary">2026 Stewardship</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="heading-3 mb-1">St. Aidan's Episcopal Church</div>
              <div className="text-medium opacity-90">
                28211 Pacific Coast Highway<br />
                Malibu, CA 90265<br />
                <a href="tel:+13104577966">
                  (310) 457-7966
                </a>
              </div>
            </div>

            <div>
              <h3 className="footer-title">Quick Links</h3>
              <div className="flex flex-column gap-1">
                <a href="/#">About Us</a>
                <a href="/#">Worship Schedule</a>
                <a href="/#">Ministries</a>
                <a href="/#">Events</a>
                <a href="/#">Resources</a>
                <a href="/#">Sermons</a>
                <a href="/#">Bulletins</a>
                <a href="/#">Newsletter</a>
                <a href="/#">Calendar</a>
              </div>
            </div>

            <div>
              <h3 className="footer-title">Connect</h3>
              <div className="flex gap-1 mb-1">
                <a href="/#" style={{fontSize:'1.5rem'}}>📘</a>
                <a href="/#" style={{fontSize:'1.5rem'}}>🐦</a>
                <a href="/#" style={{fontSize:'1.5rem'}}>📺</a>
              </div>
              <div>
                <a href="mailto:office@staidanschurch.org">
                  office@staidanschurch.org
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            © 2025 St. Aidan's Episcopal Church. All rights reserved.
          </div>
        </div>
      </footer>

      <Link href="/" className="fixed-btn">
        Back to Menu
      </Link>
    </div>
  );
}