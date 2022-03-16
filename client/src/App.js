import * as React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Index from './components/index/index'

export default function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />}/>
      </Routes>

      <Footer />
    </div>
  );
}
