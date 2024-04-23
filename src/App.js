import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './components/main';
import View from './components/viewProduct';
import Update from './components/update';
import AddProduct from './components/addProduct';
import PageNotFound from './components/pageNotFound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main/>}></Route>
        <Route path='/view/:id' element={<View/>}></Route>
        <Route path='/update/:id' element={<Update/>}></Route>
        <Route path='/add' element={<AddProduct/>}></Route>
        <Route path='/*' element={<PageNotFound/>}></Route>
        
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
