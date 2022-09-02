import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJs tutorial</title>
      </Head>
      <h1>Hello world</h1>
    </div>
  )
}
