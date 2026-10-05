import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PartnersPage from './pages/PartnersPage';
import LecturersPage from './pages/LecturersPage';
import ReviewsPage from './pages/ReviewsPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    if (currentPage === 'home') return <HomePage onNavigate={setCurrentPage} />;
    if (currentPage === 'about') return <AboutPage />;
    if (currentPage === 'partners') return <PartnersPage />;
    if (currentPage === 'lecturers') return <LecturersPage />;
    if (currentPage === 'reviews') return <ReviewsPage />;
    if (currentPage === 'blog') return <BlogPage />;
    if (currentPage === 'contacts') return <ContactsPage />;
    return <HomePage onNavigate={setCurrentPage} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header onNavigate={setCurrentPage} />
      <main style={{ flex: 1 }}>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;