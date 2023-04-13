import { Navigate, Routes, Route } from 'react-router-dom';
import './App.css';
import CreatePage from './pages/Create';
import EditPage from './pages/Edit ';
import HomePage from './pages/Home';
import ItemPage from './pages/Item';
import Navbar from './components/navbar'
import Footer from './components/footer';


function App() {
  

  return (
   <div className="App">
      <Navbar />
        <Routes>
         <Route path='/edit' element={<EditPage />}/>
         <Route path='/item' element={<ItemPage />}/>
         <Route path='/create' element={<CreatePage />}/>
         <Route path='/' element={<HomePage />}/>
         <Route path='/*' element={<Navigate to='/' />}/>
        </Routes>
      <Footer />

    
    </div>
  );
}

export default App;
