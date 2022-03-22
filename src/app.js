import * as React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";

import Header from './components/header/header';
import Footer from './components/footer';
import Error from './components/error';
import Results from './components/results';
import Index from './components/index/index';
import ReviewsPage from './components/reviews/reviewsPage';
import Review from './components/reviews/review';

export default function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/review/:id" element={<Review />} /> {/* ID for switch statment */}
        <Route path="/results/:id" element={<Results />} /> {/* ID displaying input */}
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </>
  );
};
