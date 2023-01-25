import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Buy from './Buy';
import Donate from './Donate';
import Contact from './Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Buy' element={<Buy />} />
        <Route path='/Donate' element={<Donate />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App