function AboutPage() {
  return (
    <div style={{ backgroundColor: '#f0f4f8', padding: '60px 20px', minHeight: '80vh' }}>
      <div style={{
        maxWidth: '850px', margin: '0 auto',
        backgroundColor: 'white', padding: '50px',
        borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
      }}>
        <h2 style={{ fontSize: '28px', color: '#2c3e50', textAlign: 'center', marginBottom: '30px' }}>О нас</h2>
        <p style={{ fontSize: '20px', lineHeight: '1.7', color: '#444' }}>
          Наша учебная платформа соединяет компании, образовательные учреждения и НКО
          с профессиональными лекторами, спикерами и тренерами.
          Мы упрощаем процесс подбора, бронирования и организации лекций,
          помогая находить экспертов, которые не просто делятся знаниями, но и вдохновляют аудиторию.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;