'use client';

import { Home, Info, Calendar, Users, Gift, Video } from 'lucide-react';
import MobileNav from '@/components/MobileNav';
import { useAnimatedHeader } from '@/hooks/useAnimatedHeader';
import styles from './Navigation.module.css';

export default function Navigation() {
  const { isShrunk } = useAnimatedHeader({ shrinkPoint: 100 });

  return (
    <div id="menu-wrap" className={`${styles.menuWrap} ${isShrunk ? styles.shrink : styles.header}`}>
      <div className="container">
        <div className="sixteen columns">
          <div className={styles.churchLogo}>
            <div className={styles.churchLogoIcon}>SA</div>
            <div>
              <div className={styles.churchLogoText}>St. Aidan's Episcopal Church</div>
              <div className={styles.churchLogoLocation}>Malibu, California</div>
            </div>
          </div>
          <MobileNav />
          <ul className={`${styles.slimmenu} mobile-hidden`}>
            <li><a className="scroll" href="#home"><Home size={14} /> home</a></li>
            <li><a className="scroll" href="#about"><Info size={14} /> about</a></li>
            <li><a className="scroll" href="#worship"><Calendar size={14} /> worship</a></li>
            <li><a className="scroll" href="#ministries"><Users size={14} /> ministries</a></li>
            <li><a className="scroll" href="#events"><Calendar size={14} /> events</a></li>
            <li><a href="/mockup/live"><Video size={14} /> watch live</a></li>
            <li><a href="/#"><Gift size={14} /> give</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

