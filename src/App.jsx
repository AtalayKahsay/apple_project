import { Routes, Route } from 'react-router-dom'

import Home from './pages/home/Home'
import Mac from './pages/mac/Mac'
import Iphone from './pages/iphone/Iphone'
import Ipad from './pages/ipad/Ipad'
import Watch from './pages/watch/Watch'
import TV from './pages/tv/TV'
import Music from './pages/music/Music'
import Support from './pages/support/Support'
import Cart from './pages/cart/Cart'
import Four04 from './pages/four04/Four04'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="mac" element={<Mac />} />
      <Route path="iphone" element={<Iphone />} />
      <Route path="ipad" element={<Ipad />} />
      <Route path="watch" element={<Watch />} />
      <Route path="tv" element={<TV />} />
      <Route path="music" element={<Music />} />
      <Route path="support" element={<Support />} />
      <Route path="cart" element={<Cart />} />
      <Route path='*' element={<Four04 />} />
    </Routes>
  )
}
export default App
