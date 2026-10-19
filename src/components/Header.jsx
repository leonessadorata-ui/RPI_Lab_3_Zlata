import { Link } from 'react-router-dom';

function Header() {
  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Партнеры', path: '/partners' },
    { label: 'О нас', path: '/about' },
    { label: 'Лекторы', path: '/lecturers' },
    { label: 'Отзывы', path: '/reviews' },
    { label: 'Блог', path: '/blog' },
    { label: 'Контакты', path: '/contacts' },
  ];

  return (
    <header style={{ backgroundColor: 'white', padding: '20px 20px', display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '100%', maxWidth: '1200px', position: 'relative' }}>
        <nav style={{
          display: 'flex', gap: '35px', alignItems: 'center', justifyContent: 'center',
          background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
          padding: '14px 50px', borderRadius: '50px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', flexWrap: 'wrap'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              style={{ textDecoration: 'none', cursor: 'pointer', color: 'white', fontWeight: 'bold', fontSize: '18px', textShadow: '0 1px 2px rgba(0,0,0,0.1)' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;