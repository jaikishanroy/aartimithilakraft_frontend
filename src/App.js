import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Nav from './pages/Nav';
import Footer from './pages/Footer';
import CustomRouter from './CustomRouter';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';  // If you're using Bootstrap JS


function App() {
  return (
    <div className="App">
      <CustomRouter />
    </div>
  );
}

export default App;
