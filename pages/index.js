import Head from 'next/head'
import Image from 'next/image'
// import styles from  '../styles/home.css'
import Header from '../components/Header'
// import Footer from '../components/Footer'
import About from '../components/About'
// import Projects from '../components/Projects'
// import Skills from '../components/Skills'
export default function Home() {
  return (
    <>
    <Head>
      <title>Spandan&apos;s Portfolio</title>
      </Head>
    {/* <Header></Header> */}
    <About></About>
    {/* <Projects></Projects>
    <Skills></Skills>
    <Footer></Footer> */}
    </>
  )
}
