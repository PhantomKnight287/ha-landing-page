import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hack Armour</title>
        <meta
          name="description"
          content="Hack Armour is a community of hackers, devs and creative people who aim to create a community platform where everyone can learn and mingle with the community accessibly."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />

        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackarmour.tech" />
        <meta property="twitter:url" content="https://hackarmour.tech" />
        <meta property="twitter:site" content="@thehackarmour" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://github.com/hackarmour">Hack Armour</a>!
        </h1>
        <p className={styles.heading}>
         {'Who are we?'}
        </p>
        <p className={styles.description}>
          Hack Armour is a community of hackers and devs focused on creating a
          platform where everyone can learn tech stuff and mingle with the
          community accessibly.
        </p>
      <p className={styles.description}>
        Currently we are focusing on community building, and our future goal includes to make a infosec search engine to search relevant stuff about cybersecurity and hacking.
      </p>
      <p className={styles.heading}>
        The Strategical Approach
      </p>
      <p className={styles.description}>
        We have already done some pre-planning about the infosec search engine and the practical approach about it. The todo and complete strategy can be found on our discord server.
      </p>
      <p className={styles.links}>
        Join Our <a href='https://discord.gg/DtQkZkUTuF'>Discord Server</a>
      </p>
      </main>

      <footer className={styles.footer}>
        © 2021&nbsp;
        <a
          href="https://github.com/hackarmour"
          target="_blank"
          rel="noopener noreferrer"
        >Hack Armour</a>
        . All rights reserved.
      </footer>
    </div>
  );
}
