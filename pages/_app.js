import '../styles/globals.css'
import  Head  from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'

function MyApp() {
  return (
<>    
    <Head>
      <title>SpandyBoss&apos;s Portfolio</title>
    </Head>

   <Header/>
       <About/>
        <Projects/>
  <Footer/>

</>
  )
}

export default MyApp
