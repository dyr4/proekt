import './App.css';
import Main from './pages/Main';
import Contacts from './pages/Contacts';
import Map from './pages/Map';
import Reviews from './pages/Reviews';
import Service from './pages/Service';
import Spec from './pages/Spec';
import MainNav from './components/MainNav';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <>
    <BrowserRouter>
      <MainNav/>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/Spec' element={<Spec/>}></Route>
        <Route path='/Service'element={<Service/>}></Route>
        <Route path='/Reviews' element={<Reviews/>}></Route>
        <Route path='/Contacts' element={<Contacts/>}></Route>
        <Route path='/Map' element={<Map/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
