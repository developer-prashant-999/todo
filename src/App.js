import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Home from './components/Home';
import ToDolist from './components/ToDolist';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
     <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/todolist' element={<ToDolist/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
