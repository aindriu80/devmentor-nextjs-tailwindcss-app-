import Link from 'next/link'
import styles from '../styles/About.module.css'
function About() {
  return (
    <>
      <header className="container">
        <hgroup>
          <h1>About Page</h1>
          <p>The About Page.....</p>
          <Link href="/">Home</Link>
          <button className="btn btn-primary">Css styling</button>
        </hgroup>
      </header>

      <container>
        <div className={styles.hightlight}>About</div>
      </container>
    </>
  )
}

export default About
