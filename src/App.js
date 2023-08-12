import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Homepage from './Pages/Homepage';
import Coinpage from './Pages/Coinpage';


function App() {

 

  
  return (
    <BrowserRouter>
  <div className='app'>
    <Header/>
    <Routes>
    <Route path='/' exact element={<Homepage/>} />
    <Route path='/coins/:id' element={<Coinpage/>}/>
    </Routes>
  </div>

    </BrowserRouter>
  );
}

export default App;
