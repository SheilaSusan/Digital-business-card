import Header from './components/Header.jsx'
import Contacts from './components/Contacts.jsx'
import About from './components/About.jsx'
import Footer from './components/Footer.jsx'

export default function App(){
  return(
    <main className="main">
      <Header />
      <Contacts />
      <About />
      <Footer />
    </main>
  )
}