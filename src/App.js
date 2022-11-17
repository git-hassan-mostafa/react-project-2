import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Router from './components/Routers';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router />
    </div>
  );
}

export default App;
