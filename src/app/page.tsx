import About from './(components)/About'
import Contact from './(components)/Contact'
import Footer from './(components)/Footer'
import Header from './(components)/Header'
import Hero from './(components)/Hero'
import Portfolio from './(components)/Portfolio'
import Skills from './(components)/Skills'

export default function Home() {
  return (
    <>
     <Header />  
     <main className="main">
     <Hero />
     <About/>
     <Portfolio/>
     <Skills/>
     <Contact/>
     <Footer/>
     </main>
    </>
  )
}
