'use client';

import Image from 'next/image';
import { Facebook, Mail } from 'lucide-react';
import styles from './css/TeamSection.module.css';

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
            <Image src="/aboutus_1.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Rev. Dr. Joyce Stickney - Rector</h6>
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
            <Image src="/aboutus_2.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Ed Milkovitch Associate Priest</h6>
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
            <Image src="/aboutus_5.webp" alt="Team Member" width={220} height={220} className={styles.teamImg} loading="lazy" />
            <h6>Greg</h6>
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
              <Image src="/aboutus_3.webp" alt="Meet Our Team" width={220} height={220} className={styles.teamImg} loading="lazy" />
              <div className={styles.mask}></div>
              <h3>meet our</h3>
              <h4>team</h4>
            </div>
            <h6>Lauren Begert - Director of Campus and Community Engagement</h6>
            <div className={styles.socialTeam}>
              <ul className={styles.teamSocial}>
                <li className={styles.iconTeam}><a href="#"><Facebook size={16} /></a></li>
                <li className={styles.iconTeam}><a href="#"><Mail size={16} /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

