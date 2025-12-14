'use client';

import Image from 'next/image';
import Link from 'next/link';
import styles from './css/BlogSection.module.css';

const blogPosts = [
  {
    id: 1,
    image: '/aboutus_1.webp',
    title: 'Small Group Leader Training',
    author: 'Jane Doe',
    date: 'Oct 03',
    comments: 0,
    excerpt: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non...'
  },
  {
    id: 2,
    image: '/aboutus_2.webp',
    title: 'The Power of Scripture',
    author: 'Jane Doe',
    date: 'Oct 02',
    comments: 0,
    excerpt: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo...'
  },
  {
    id: 3,
    image: '/aboutus_3.webp',
    title: 'Be Inspired by Biblical Teaching',
    author: 'Jane Doe',
    date: 'Sep 22',
    comments: 0,
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim...'
  },
  {
    id: 4,
    image: '/aboutus_4.webp',
    title: 'Listen to the Wind Words, the Spirit blowing through the churches.',
    author: 'Jane Doe',
    date: 'Aug 22',
    comments: 0,
    excerpt: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste...'
  },
  {
    id: 5,
    image: '/aboutus_5.webp',
    title: 'Want to Try an Online Church?',
    author: 'Jane Doe',
    date: 'Mar 19',
    comments: 0,
    excerpt: 'Fusce et augue placerat, dictum velit sit amet, egestas urna. Cras aliquam pretium ornare. Aliquam vel finibus metus. Aenean venenatis sodales...'
  },
  {
    id: 6,
    image: '/aboutus_6.webp',
    title: 'Finding Yourself',
    author: 'Jane Doe',
    date: 'Mar 17',
    comments: 0,
    excerpt: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut tristique pretium tellus, sed fermentum est...'
  }
];

export default function BlogSection() {
  return (
    <div className={styles.section}>
      <div className={styles.contentWrap}>
        <h6 className={styles.subtitle}>Latest News</h6>
        <h2 className={styles.title}>From our blog</h2>
        <div className={styles.blogGrid}>
          {blogPosts.map((post) => (
            <article key={post.id} className={styles.blogItem}>
              <div className={styles.blogFeatured}>
                <span className={styles.postDate}>
                  <span className={styles.postDateMonth}>{post.date.split(' ')[0]}</span>
                  <span className={styles.postDateDay}>{post.date.split(' ')[1]}</span>
                </span>
                <div className={styles.postThumb}>
                  <Link href="/proposal">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={370}
                      height={209}
                      className={styles.image}
                    />
                  </Link>
                </div>
              </div>
              <div className={styles.blogContent}>
                <h5 className={styles.blogTitle}>
                  <Link href="/proposal">{post.title}</Link>
                </h5>
                <div className={styles.blogInfo}>
                  <span className={styles.blogAuthor}>by {post.author}</span>
                  <span className={styles.blogComments}>{post.comments} Comments</span>
                </div>
                <div className={styles.blogExcerpt}>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className={styles.buttonWrap}>
          <Link href="/proposal" className={styles.button}>
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
}

