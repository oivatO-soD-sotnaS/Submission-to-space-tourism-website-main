import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_content}>
        <h2 className={styles.subtitle}>SO, YOU WANT TO TRAVEL TO</h2>
        <h1 className={styles.title}>SPACE</h1>
        <p className={styles.text}>
          Let’s face it; if you want to go to space,
          you might as well genuinely go to outer space and not hover kind of on the edge of it.
          Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <Link href='' className={styles.explore_btn} >EXPLORE</Link>
    </div>
    )
}
