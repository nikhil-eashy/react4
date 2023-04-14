import logo from './logo.svg';
import './App.css';
import Read from './components/Read';
import Teachers from './components/Teachers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Addstudents from './components/Addstudents';
import Startscreen from './components/Startscreen';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Navbar></Navbar>
      <Routes>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/ss' element={<Startscreen></Startscreen>}></Route>
        <Route path='/' element={<Teachers></Teachers>}> </Route>
        <Route path='/students' element={<Read></Read>}></Route>
        <Route path='/addstudents' element={<Addstudents data={{id:'',name:'',grade:''}} method='post'></Addstudents>}></Route>
        <Route path='/teachers' element={<Teachers></Teachers>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
