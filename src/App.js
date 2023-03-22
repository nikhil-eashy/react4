import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teachers from './components/Teachers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addstudents from './components/Addstudents';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Teachers></Teachers>}> </Route>
        <Route path='/students' element={<Read></Read>}></Route>
        <Route path='/addstudents' element={<Addstudents></Addstudents>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
