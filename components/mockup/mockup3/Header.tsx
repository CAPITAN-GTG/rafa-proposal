'use client';

import { useState } from 'react';
import Link from 'next/link';
import { X, ChevronDown, Home, FileText, Calendar, BookOpen, Image, FileText as Blog, Heart, Menu } from 'lucide-react';
import styles from './css/Header.module.css';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <div className={styles.headerMiddle}>
            <div className={styles.contentWrap}>
              <div className={styles.contactLogo}>
                <div className={styles.logo}>
                  <Link href="/" className={styles.logoLink}>
                    <div className={styles.logoIcon}>SA</div>
                    <div className={styles.logoText}>
                      <div className={styles.logoTitle}>St. Aidan's</div>
                      <div className={styles.logoSubtitle}>Episcopal Church</div>
                    </div>
                  </Link>
                </div>
              </div>
              
              <div className={styles.menuMainWrap}>
                <nav className={styles.menuMainNavArea}>
                  <ul id="menu_main" className={styles.menuMainNav}>
                    <li 
                      className={`${styles.menuItem} ${styles.hasChildren}`}
                      onMouseEnter={() => setHoveredMenu('home')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <a href="#" className={styles.sfWithUl}>
                        Home
                        <ChevronDown 
                          size={14} 
                          className={`${styles.dropdownIcon} ${hoveredMenu === 'home' ? styles.rotated : ''}`}
                        />
                      </a>
                      <ul className={styles.subMenu}>
                        <li className={styles.menuItem}><Link href="/mockup3">Home 1</Link></li>
                        <li className={styles.menuItem}><Link href="/mockup2">Home 2</Link></li>
                        <li className={styles.menuItem}><Link href="/mockup">Home 3</Link></li>
                      </ul>
                    </li>
                    <li 
                      className={`${styles.menuItem} ${styles.hasChildren}`}
                      onMouseEnter={() => setHoveredMenu('pages')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <a href="#" className={styles.sfWithUl}>
                        Pages
                        <ChevronDown 
                          size={14} 
                          className={`${styles.dropdownIcon} ${hoveredMenu === 'pages' ? styles.rotated : ''}`}
                        />
                      </a>
                      <ul className={styles.subMenu}>
                        <li className={styles.menuItem}><Link href="/proposal">About Us</Link></li>
                        <li className={styles.menuItem}><Link href="/schedule">Events Calendar</Link></li>
                        <li className={styles.menuItem}><Link href="/proposal">Contacts</Link></li>
                      </ul>
                    </li>
                    <li className={`${styles.menuItem} ${styles.eventsItem}`}>
                      <Link href="/schedule">Events</Link>
                    </li>
                    <li 
                      className={`${styles.menuItem} ${styles.hasChildren}`}
                      onMouseEnter={() => setHoveredMenu('sermons')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <a href="#" className={styles.sfWithUl}>
                        Sermons
                        <ChevronDown 
                          size={14} 
                          className={`${styles.dropdownIcon} ${hoveredMenu === 'sermons' ? styles.rotated : ''}`}
                        />
                      </a>
                      <ul className={styles.subMenu}>
                        <li className={styles.menuItem}><Link href="/proposal">All Sermons</Link></li>
                        <li className={styles.menuItem}><Link href="/proposal">Sermons Boxed</Link></li>
                        <li className={styles.menuItem}><Link href="/proposal">Sermons Fullscreen</Link></li>
                      </ul>
                    </li>
                    <li 
                      className={`${styles.menuItem} ${styles.hasChildren}`}
                      onMouseEnter={() => setHoveredMenu('gallery')}
                      onMouseLeave={() => setHoveredMenu(null)}
                    >
                      <a href="#" className={styles.sfWithUl}>
                        Gallery
                        <ChevronDown 
                          size={14} 
                          className={`${styles.dropdownIcon} ${hoveredMenu === 'gallery' ? styles.rotated : ''}`}
                        />
                      </a>
                      <ul className={styles.subMenu}>
                        <li className={styles.menuItem}><Link href="/proposal">Grid Gallery</Link></li>
                        <li className={styles.menuItem}><Link href="/proposal">Cobbles Gallery</Link></li>
                        <li className={styles.menuItem}><Link href="/proposal">Masonry Gallery</Link></li>
                      </ul>
                    </li>
                    <li className={`${styles.menuItem} ${styles.blogItem}`}>
                      <Link href="/proposal">Blog</Link>
                    </li>
                    <li className={`${styles.menuItem} ${styles.donateBtn}`}>
                      <Link href="/proposal">Give</Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Header */}
      <div className={styles.headerMobile}>
        <div className={styles.contentWrap}>
          <Link href="/" className={styles.mobileLogoLink}>
            <div className={styles.logoIcon}>SA</div>
            <div className={styles.logoText}>
              <div className={styles.logoTitle}>St. Aidan's</div>
              <div className={styles.logoSubtitle}>Episcopal Church</div>
            </div>
          </Link>
          <button 
            className={styles.menuButton} 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        <div className={`${styles.sideWrap} ${mobileMenuOpen ? styles.open : ''}`}>
          <div className={styles.mobileMenuHeader}>
            <div className={styles.mobileLogo}>
              <div className={styles.logoIcon}>SA</div>
              <div className={styles.logoText}>
                <div className={styles.logoTitle}>St. Aidan's</div>
                <div className={styles.logoSubtitle}>Episcopal Church</div>
              </div>
            </div>
            <button 
              className={styles.closeButton}
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>
          
          <div className={styles.panelTop}>
            <nav className={styles.menuMainNavArea}>
              <ul id="menu_main_mobile" className={styles.menuMainNav}>
                <li className={`${styles.menuItem} ${styles.hasChildren}`}>
                  <button 
                    className={styles.menuItemButton}
                    onClick={() => toggleSubmenu('home')}
                  >
                    <Home size={18} />
                    <span>Home</span>
                    <ChevronDown 
                      size={18} 
                      className={`${styles.chevron} ${openSubmenu === 'home' ? styles.rotated : ''}`}
                    />
                  </button>
                  <ul className={`${styles.subMenu} ${openSubmenu === 'home' ? styles.subMenuOpen : ''}`}>
                    <li className={styles.menuItem}><Link href="/mockup3" onClick={() => setMobileMenuOpen(false)}>Home 1</Link></li>
                    <li className={styles.menuItem}><Link href="/mockup2" onClick={() => setMobileMenuOpen(false)}>Home 2</Link></li>
                    <li className={styles.menuItem}><Link href="/mockup" onClick={() => setMobileMenuOpen(false)}>Home 3</Link></li>
                  </ul>
                </li>
                <li className={`${styles.menuItem} ${styles.hasChildren}`}>
                  <button 
                    className={styles.menuItemButton}
                    onClick={() => toggleSubmenu('pages')}
                  >
                    <FileText size={18} />
                    <span>Pages</span>
                    <ChevronDown 
                      size={18} 
                      className={`${styles.chevron} ${openSubmenu === 'pages' ? styles.rotated : ''}`}
                    />
                  </button>
                  <ul className={`${styles.subMenu} ${openSubmenu === 'pages' ? styles.subMenuOpen : ''}`}>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>About Us</Link></li>
                    <li className={styles.menuItem}><Link href="/schedule" onClick={() => setMobileMenuOpen(false)}>Events Calendar</Link></li>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Contacts</Link></li>
                  </ul>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/schedule" className={styles.menuItemLink} onClick={() => setMobileMenuOpen(false)}>
                    <Calendar size={18} />
                    <span>Events</span>
                  </Link>
                </li>
                <li className={`${styles.menuItem} ${styles.hasChildren}`}>
                  <button 
                    className={styles.menuItemButton}
                    onClick={() => toggleSubmenu('sermons')}
                  >
                    <BookOpen size={18} />
                    <span>Sermons</span>
                    <ChevronDown 
                      size={18} 
                      className={`${styles.chevron} ${openSubmenu === 'sermons' ? styles.rotated : ''}`}
                    />
                  </button>
                  <ul className={`${styles.subMenu} ${openSubmenu === 'sermons' ? styles.subMenuOpen : ''}`}>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>All Sermons</Link></li>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Sermons Boxed</Link></li>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Sermons Fullscreen</Link></li>
                  </ul>
                </li>
                <li className={`${styles.menuItem} ${styles.hasChildren}`}>
                  <button 
                    className={styles.menuItemButton}
                    onClick={() => toggleSubmenu('gallery')}
                  >
                    <Image size={18} />
                    <span>Gallery</span>
                    <ChevronDown 
                      size={18} 
                      className={`${styles.chevron} ${openSubmenu === 'gallery' ? styles.rotated : ''}`}
                    />
                  </button>
                  <ul className={`${styles.subMenu} ${openSubmenu === 'gallery' ? styles.subMenuOpen : ''}`}>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Grid Gallery</Link></li>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Cobbles Gallery</Link></li>
                    <li className={styles.menuItem}><Link href="/proposal" onClick={() => setMobileMenuOpen(false)}>Masonry Gallery</Link></li>
                  </ul>
                </li>
                <li className={styles.menuItem}>
                  <Link href="/proposal" className={styles.menuItemLink} onClick={() => setMobileMenuOpen(false)}>
                    <Blog size={18} />
                    <span>Blog</span>
                  </Link>
                </li>
                <li className={`${styles.menuItem} ${styles.donateBtn}`}>
                  <Link href="/proposal" className={styles.donateLink} onClick={() => setMobileMenuOpen(false)}>
                    <Heart size={18} />
                    <span>Give</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          
          <div className={styles.panelBottom}>
            <div className={styles.contactSocials}>
              <p className={styles.socialTitle}>Follow Us</p>
              <div className={styles.scSocials}>
                <a href="#" target="_blank" className={styles.socialIcon} onClick={() => setMobileMenuOpen(false)}>
                  <span>Facebook</span>
                </a>
                <a href="#" target="_blank" className={styles.socialIcon} onClick={() => setMobileMenuOpen(false)}>
                  <span>Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {mobileMenuOpen && <div className={styles.mask} onClick={() => setMobileMenuOpen(false)}></div>}
      </div>
    </>
  );
}

