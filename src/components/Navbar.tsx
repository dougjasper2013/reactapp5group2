import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          <span className={styles.badge}>GG</span>
          <span>Gadget Genie</span>
        </Link>

        <nav className={styles.links} aria-label="Primary">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/cart">Cart</Link>
          <Link href="/about">About/Contact</Link>
        </nav>
      </div>
    </header>
  );
}
