import Link from 'next/link';
import styles from './page.module.css';

const values = [
  {
    title: 'Human-Centered Design',
    body: 'We design gadgets around real routines, not trends, so each product improves daily workflows.',
  },
  {
    title: 'Quality-First Curation',
    body: 'Every item is reviewed for build quality, reliability, and long-term value before it reaches the store.',
  },
  {
    title: 'Transparent Shopping',
    body: 'Clear pricing, clear specifications, and clear policies. No hidden fees or confusing fine print.',
  },
];

const stats = [
  { value: '1200+', label: 'Orders Delivered' },
  { value: '4.9/5', label: 'Average Rating' },
  { value: '48h', label: 'Typical Dispatch' },
  { value: '30 days', label: 'Return Window' },
];

export default function AboutPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>ABOUT GADGET GENIE</p>
        <h1>Built for people who love practical technology.</h1>
        <p className={styles.lead}>
          Gadget Genie is a curated gadget store focused on reliable tools for work, creativity, and everyday life.
          We combine modern product design with straightforward shopping experiences.
        </p>
      </section>

      <section className={styles.stats} aria-label="Company highlights">
        {stats.map((item) => (
          <article key={item.label} className={styles.statCard}>
            <h2>{item.value}</h2>
            <p>{item.label}</p>
          </article>
        ))}
      </section>

      <section className={styles.storyGrid}>
        <article className={styles.storyCard}>
          <h2>Our Story</h2>
          <p>
            We started Gadget Genie to remove the noise from gadget shopping. Instead of endless low-quality options,
            we focus on a smaller collection of products that are tested, useful, and worth owning.
          </p>
          <p>
            From keyboards and audio gear to charging essentials, our goal is to help customers buy confidently and
            use technology more effectively every day.
          </p>
        </article>

        <article className={styles.storyCardAlt}>
          <h2>What We Focus On</h2>
          <ul>
            <li>Reliable performance in real-world use</li>
            <li>Clean design and quality materials</li>
            <li>Fast support and clear return policies</li>
            <li>Affordable options across key categories</li>
          </ul>
        </article>
      </section>

      <section className={styles.dualCards} aria-label="Mission and vision">
        <article className={styles.missionCard}>
          <p className={styles.cardTag}>MISSION</p>
          <h3>Make smart tech choices simple.</h3>
          <p>
            We simplify product discovery by focusing on practical features, honest pricing, and long-term value.
          </p>
        </article>
        <article className={styles.visionCard}>
          <p className={styles.cardTag}>VISION</p>
          <h3>Become your most trusted gadget destination.</h3>
          <p>
            Our vision is a store where every purchase feels obvious, useful, and aligned with real daily needs.
          </p>
        </article>
      </section>

      <section className={styles.values} aria-label="Core values">
        {values.map((value) => (
          <article key={value.title} className={styles.valueCard}>
            <h3>{value.title}</h3>
            <p>{value.body}</p>
          </article>
        ))}
      </section>

      <section className={styles.ctaSection}>
        <h2>Ready to explore smarter gadgets?</h2>
        <p>Browse our latest tech collection and find tools that match your workflow.</p>
        <Link href="/" className={styles.ctaButton}>
          Visit Storefront
        </Link>
      </section>
    </main>
  );
}
