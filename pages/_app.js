import '../styles/globals.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Projects from '../components/Projects'
import Layout from '../utils/layout'

function MyApp({ Component, pageProps }) {

  return (
  <Layout>
  <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
