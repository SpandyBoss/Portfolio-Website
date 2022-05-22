import Head from 'next/head'
import Image from 'next/image'
// import styles from  '../styles/home.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
    <Header></Header>
    <About></About>
    <Projects></Projects>
    <Footer></Footer>
    </>
  )
}
