import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';
import MyButton from './components/MyButton';
import { type } from '@testing-library/user-event/dist/type';

function App() {
  const env = process.env;
  env.PUBLIC_URL = env.PUBLIC_URL || "";
  return (
    <BrowserRouter>
      <div className="App">
        <h2>Hello</h2>
        
        <MyButton 
          text={'Button'} 
          onClick = {() => alert("Button clicked")} 
          type = {"positive"}
        />

        <MyButton 
          text={'Button'} 
          onClick = {() => alert("Button clicked")} 
          type = {"negative"}
        />
        <MyButton 
          text={'Button'} 
          onClick = {() => alert("Button clicked")} 
        />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/new' element={<New />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='/diary/:id' element={<Diary />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
