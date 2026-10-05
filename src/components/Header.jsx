function Header({ onNavigate }) {
  const navItems = [
    { label: 'Главная', page: 'home' },
    { label: 'Партнеры', page: 'partners' },
    { label: 'О нас', page: 'about' },
    { label: 'Лекторы', page: 'lecturers' },
    { label: 'Отзывы', page: 'reviews' },
    { label: 'Блог', page: 'blog' },
    { label: 'Контакты', page: 'contacts' },
  ];

  return (
    <header style={{
      backgroundColor: 'white',
      padding: '20px 20px',
      display: 'flex',
      justifyContent: 'center'
    }}>
      {/* Контейнер фиксированной ширины */}
      <div style={{
        width: '100%',
        maxWidth: '1200px',
        position: 'relative'
      }}>
        {/* Сама "плавающая" полоса */}
        <nav style={{
          display: 'flex',
          gap: '35px',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
          padding: '14px 50px',
          borderRadius: '50px',
          boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
          flexWrap: 'wrap'
        }}>
          {navItems.map((item) => (
            <span
              key={item.page}
              onClick={() => onNavigate(item.page)}
              style={{
                cursor: 'pointer',
                color: 'white',
                fontWeight: 'bold',
                fontSize: '18px',
                textShadow: '0 1px 2px rgba(0,0,0,0.1)'
              }}
            >
              {item.label}
            </span>
          ))}
        </nav>


      </div>
    </header>
  );
}

export default Header;