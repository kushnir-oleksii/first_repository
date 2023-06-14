import './App.css';
import Main from './components/Main';
import Posts from './components/Posts';
import Login from './components/Login';
import SinglePosts from './components/SinglePosts';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        
        <nav className="menu">
          <NavLink to="/">Main</NavLink>
         < NavLink to="/posts">Posts</NavLink>
         <NavLink to="/login">Login</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Main/>} />
          <Route path="/Posts" element={<Posts/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path='*' element={<h1>Not Found</h1>} />
          <Route path='/posts/:id' element={<SinglePosts />}/>

        </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
