'use client';

import Image from 'next/image';
import { Facebook, Mail } from 'lucide-react';
import styles from './TeamSection.module.css';

export default function TeamSection() {
  return (
    <div id="team" className={styles.teamSection}>
      <div className="container">
        <div className="sixteen columns">
          <div className={styles.topText}>
            <h1>MEET US</h1>
            <div className={styles.subline}></div>
            <div className={styles.topSubtext}>We're a small, friendly and talented team.</div>
          </div>
        </div>
        <div className="clear"></div>
        <div className="four columns" data-scrollreveal="enter left and move 50px over 1s">
          <div className={styles.teamMem}>
            <Image src="/choir.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Rev. Joyce Stickney</h6>
            <p><span>Rector</span></p>
            <div className={styles.socialTeam}>
              <ul className={styles.teamSocial}>
                <li className={styles.iconTeam}><a href="#"><Facebook size={16} /></a></li>
                <li className={styles.iconTeam}><a href="#"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="four columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div className={styles.teamMem}>
            <Image src="/choir_violin.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Sarah Johnson</h6>
            <p><span>Music Director</span></p>
            <div className={styles.socialTeam}>
              <ul className={styles.teamSocial}>
                <li className={styles.iconTeam}><a href="#"><Facebook size={16} /></a></li>
                <li className={styles.iconTeam}><a href="#"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="four columns" data-scrollreveal="enter bottom and move 50px over 1s">
          <div className={styles.teamMem}>
            <Image src="/prayer.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Michael Brown</h6>
            <p><span>Youth Director</span></p>
            <div className={styles.socialTeam}>
              <ul className={styles.teamSocial}>
                <li className={styles.iconTeam}><a href="#"><Facebook size={16} /></a></li>
                <li className={styles.iconTeam}><a href="#"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="four columns" data-scrollreveal="enter right and move 50px over 1s">
          <div className={styles.teamMem}>
            <div className={styles.teamMask}>
              <Image src="/prayer_2.webp" alt="Join Our Team" width={220} height={220} className={styles.teamImg} loading="lazy" />
              <div className={styles.mask}></div>
              <h3>join our</h3>
              <h4>community</h4>
            </div>
            <h6>join our team</h6>
            <p><span>Tell Us About You</span></p>
            <div className={styles.socialTeam}>
              <ul className={styles.teamSocial}>
                <li className={styles.iconTeam}><a href="#"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

