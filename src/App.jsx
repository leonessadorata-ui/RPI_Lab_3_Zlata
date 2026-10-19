import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// Импортируем все твои страницы
import HomePage from './pages/HomePage';
import LecturersPage from './pages/LecturersPage';
import LecturerDetailPage from './pages/LecturerDetailPage'; // Её нужно создать (см. ЭТАП 2)
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ContactsPage from './pages/ContactsPage';
import PartnersPage from './pages/PartnersPage';
import ReviewsPage from './pages/ReviewsPage';
import NotFound from './pages/NotFound'; // Её нужно создать (см. ЭТАП 3)

function App() {
  return (
    <Routes>
      {/* Layout оборачивает все страницы, чтобы шапка и подвал были везде */}
      <Route path="/" element={<Layout />}>

        {/* Главная */}
        <Route index element={<HomePage />} />

        {/* Остальные страницы */}
        <Route path="lecturers" element={<LecturersPage />} />
        <Route path="lecturers/:id" element={<LecturerDetailPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="partners" element={<PartnersPage />} />
        <Route path="reviews" element={<ReviewsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;