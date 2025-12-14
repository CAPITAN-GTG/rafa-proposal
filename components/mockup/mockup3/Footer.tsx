'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './css/Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.contentWrap}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h5 className={styles.widgetTitle}>About Our Church</h5>
              <div className={styles.textWidget}>
                <p>We welcome visitors at NewLife Church and would love to have you join us in church this weekend.</p>
                <p className={styles.textWidgetInfo}>
                  <strong>E: <a href="mailto:info@yoursite.com">info@yoursite.com</a></strong>
                </p>
                <p className={styles.textWidgetInfo}>
                  <strong>L: <Link href="/proposal">Google Map</Link></strong>
                </p>
              </div>
            </div>
            <div className={styles.column}>
              <h5 className={styles.widgetTitle}>Latest Sermons</h5>
              <article className={styles.postItem}>
                <div className={styles.postThumb}>
                  <Image
                    src="/aboutus_1.webp"
                    alt="Sermon"
                    width={75}
                    height={75}
                    className={styles.thumb}
                  />
                </div>
                <div className={styles.postContent}>
                  <h6 className={styles.postTitle}>
                    <Link href="/proposal">5 Reasons to Love Churches in 2016</Link>
                  </h6>
                  <div className={styles.postInfo}>
                    <span className={styles.postDate}>
                      <Link href="/proposal">Tuesday, April 26, 2016</Link>
                    </span>
                  </div>
                </div>
              </article>
              <article className={styles.postItem}>
                <div className={styles.postThumb}>
                  <Image
                    src="/aboutus_2.webp"
                    alt="Sermon"
                    width={75}
                    height={75}
                    className={styles.thumb}
                  />
                </div>
                <div className={styles.postContent}>
                  <h6 className={styles.postTitle}>
                    <Link href="/proposal">5 Questions for Decision Makers</Link>
                  </h6>
                  <div className={styles.postInfo}>
                    <span className={styles.postDate}>
                      <Link href="/proposal">Monday, April 25, 2016</Link>
                    </span>
                  </div>
                </div>
              </article>
            </div>
            <div className={styles.column}>
              <h5 className={styles.widgetTitle}>Instagram</h5>
              <ul className={styles.instagramPics}>
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <li key={i}>
                    <Link href="/proposal">
                      <Image
                        src={`/aboutus_${i}.webp`}
                        alt={`Instagram ${i}`}
                        width={100}
                        height={100}
                        className={styles.instagramPic}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.column}>
              <h5 className={styles.widgetTitle}>Recent Comments</h5>
              <ul className={styles.recentComments}>
                <li>
                  <span className={styles.commentAuthor}>John Dilan</span> on
                  <Link href="/proposal"> Persevere: The Book of James</Link>
                </li>
                <li>
                  <span className={styles.commentAuthor}>John Doe</span> on
                  <Link href="/proposal"> The Meanings of Love in the Bible</Link>
                </li>
                <li>
                  <span className={styles.commentAuthor}>John Doe</span> on
                  <Link href="/proposal"> The Meanings of Love in the Bible</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.copyright}>
        <div className={styles.copyrightInner}>
          <div className={styles.contentWrap}>
            <div className={styles.copyrightText}>
              ThemeREX © 2017 All Rights Reserved <Link href="/proposal">Terms of Use</Link> and <Link href="/proposal">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

