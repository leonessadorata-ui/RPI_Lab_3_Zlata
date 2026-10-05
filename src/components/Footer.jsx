function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(135deg, #9ac1eb 0%, #b3d0f2 100%)',
      color: 'white', padding: '50px 20px 20px 20px', marginTop: '50px'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: '30px' }}>

        <div>
          <h3 style={{ marginBottom: '15px' }}>Учебная платформа</h3>
          <p style={{ opacity: 0.9 }}>Соединяем экспертов и аудиторию.</p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px' }}>Контакты</h3>
          <p style={{ opacity: 0.9 }}>Email: info@platform.ru</p>
          <p style={{ opacity: 0.9 }}>Телефон: +7 (999) 123-45-67</p>
        </div>

        <div>
          <h3 style={{ marginBottom: '15px' }}>Мы в соцсетях</h3>
          <p style={{ opacity: 0.9 }}>Telegram | VK | YouTube</p>
        </div>

      </div>
      <div style={{ textAlign: 'center', marginTop: '40px', opacity: 0.8, fontSize: '14px' }}>
        © 2026 Учебная платформа. Все права защищены.
      </div>
    </footer>
  );
}

export default Footer;