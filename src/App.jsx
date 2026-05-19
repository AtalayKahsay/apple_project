import { useState } from 'react'

import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Iphone17ProMax from './components/iphone17promax/Iphone17ProMax'
import Iphone17Pro from './components/iphone17pro/Iphone17Pro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header />
      <Hero />
      <Iphone17ProMax />
      <Iphone17Pro />
    </div>
  )
}
export default App
