import Header from '../components/Header';
// import Footer from './footer';
 
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
}