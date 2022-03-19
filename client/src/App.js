import * as React from 'react';
import './app.css';
import { Routes, Route } from "react-router-dom";
import Header from './components/header';
import Footer from './components/footer';
import Error from './components/error';
import Index from './components/index/index';
import ReviewsPage from './components/reviews/reviewsPage';
import Review from './components/reviews/review';

export default function App() {
  return (
    <div>
      <Header />
      
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        {/* Render review with ID for switch statment */}
        <Route path="/review/:id" element={<Review />} />
        <Route path="*" element={<Error />} />
      </Routes>

      <Footer />
    </div>
  );
};
