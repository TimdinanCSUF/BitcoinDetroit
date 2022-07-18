import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bitcoin Detroit</title>
      </Head>

      <main className={styles.main}>
      <div class="header" id="myHeader">
  
</div>
        <h1 className={styles.title}>
          Welcome to <a href="https://discord.gg/sNFzWjCQAB">Bitcoin Detroit</a>
        </h1>

        <p className={styles.description}>
          Detroit's Coolest Crypto Community{' '}
        </p>

        <div className={styles.grid}>
          <a href="https://discord.gg/sNFzWjCQAB" className={styles.card}>
            <h3>Discord &rarr;</h3>
            <p>Join our discord. Get all the hottest crypto tips and news.</p>
          </a>

          <a href="https://coinbase.com/join/tdinan?src=android-link" className={styles.card}>
            <h3>Earn &rarr;</h3>
            <p>Use our Coinbase link to get $10 in Free bitcoin!</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Merch &rarr;</h3>
            <p>Check out our Detroit Bitcoin Merch... We promise it's actually cool. Coming Soon...</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>NFT's &rarr;</h3>
            <p>
              Coming Soon...
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a href="https://discord.gg/sNFzWjCQAB" target="_blank" rel="noopener noreferrer">
          Join the Digital&nbsp;<b>Revolution</b>&nbsp;⚡️
        </a>
      </footer>
    </div>
  );
}
