import './App.css';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home'
import New from './pages/New';
import Edit from './pages/Edit';
import Diary from './pages/Diary';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <h2>Hello</h2>
    </div>
    </BrowserRouter>
  );
}

export default App;
