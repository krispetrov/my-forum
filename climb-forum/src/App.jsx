import NavBar from './components/NavBar';
import Footer from './views/Footer';
import Home from './views/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path='/home' element={<Home/>}/>
        </Routes>
        <Footer></Footer>
      </div>
  
  )
}

export default App
