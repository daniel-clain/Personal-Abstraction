import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Personal Abstraction
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://personalquizapp.z33.web.core.windows.net/" className={styles.card}>
            <h3>Quizz App</h3>
            <p>https://personalquizapp.z33.web.core.windows.net/</p>
          </a>

          <a href="#" className={styles.card}>
            <h3>Personal Projects</h3>
            <p>The projects im currently working on or are planning</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Values Reminder</h3>
            <p>Values, Truths, Maxims, Wise Quotes, Principles, Acutualisations, Philosophy</p>
          </a>

          <a
            href="#"
            className={styles.card}
          >
            <h3>Thoughts Ideas Notes Todo</h3>
            <p>
              Like google calendar and google tasks, easy ui, you own personal categories structure is retained throughout all Personal Abstraction apps, they can all relate to eachother in different ways,eg, an idea turns into a project that can have multiple todo tasks. Or taking heaps of notes on NLP can result in some personal quiz questions. Or a work goal can be associated with personal quiz category.   
            </p>
          </a>

          
          <a
            href="#"
            className={styles.card}
          >
            <h3>Raising Awesome People</h3>
            <p>This app starts as the vague frame work that will later structur the huge plan and tool for assisting in executing a challenging and complex plan to raise boys based on all my insites on psychology</p>
          </a>

          
          <a
            href="#"
            className={styles.card}
          >
            <h3>Who am I</h3>
            <p>Categorising and organising the different abstractions of who a person is. Very similar to facebook but more organised info</p>
          </a>
          <a
            href="#"
            className={styles.card}
          >
            <h3>My timeline</h3>
            <p>Like a diary. Flagging notable events in history, with info to somewhat tell a story of the flow of the state of your life experience like and updating outobiography</p>

          </a>

          
          <a
            href="#"
            className={styles.card}
          >
            <h3>My Social Interface</h3>
            <p>Sophisticated and Intuitive controls, designed to allow you to calibrate and design your personal social interface. Your settings control what type of person can have what kind of access to your personal life. The purpose of the app is the take the difficulty out of socialising, and facilitate as much genuine face to face soccial encounters as possible. By calibrating the app, you can quickly, confidently and safely meet new people </p>
            
          </a>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
