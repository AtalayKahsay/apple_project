import Header from '../../components/header/Header'
import Hero from '../../components/hero/Hero'  
import Iphone17ProMax from '../../components/iphone17promax/Iphone17ProMax'
import Iphone17Pro from '../../components/iphone17pro/Iphone17Pro'
import DualCards from '../../components/dualCards/DualCards'
import SplitSection from '../../components/splitSection/SplitSection'
import DualProduct from '../../components/dualProduct/DualProduct'
import Footer from '../../components/footer/Footer'

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Iphone17ProMax />
      <Iphone17Pro />
      <DualCards />
      <SplitSection />
      <DualProduct />
      <Footer />
    </>
  )
}

export default Home