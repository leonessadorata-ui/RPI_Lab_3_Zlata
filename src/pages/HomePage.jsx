function HomePage({ onNavigate }) {
  return (
    <div style={{ backgroundColor: '#f0f4f8', minHeight: '80vh' }}>

      {/* === Блок 1: Hero с фото === */}
      <div style={{
        padding: '80px 20px',
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: '50px'
      }}>

        {/* Левая колонка: Фото */}
        <div style={{ flex: '1 1 400px' }}>
          <img
            src="/images/lec.png"
            alt="Преподаватель"
            style={{
              width: '100%',
              borderRadius: '25px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
              objectFit: 'cover',
              maxHeight: '450px'
            }}
          />
        </div>

        {/* Правая колонка: Текст и кнопка */}
        <div style={{ flex: '1 1 400px' }}>
          <h1 style={{
            fontSize: '34px',
            lineHeight: '1.4',
            color: '#2c3e50',
            marginBottom: '35px'
          }}>
            Наши лекторы — признанные специалисты в своих областях, готовые делиться опытом и знаниями.
          </h1>
          <button
            onClick={() => onNavigate('lecturers')}
            style={{
              background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
              color: 'white',
              border: 'none',
              padding: '18px 45px',
              fontSize: '20px',
              borderRadius: '50px',
              cursor: 'pointer',
              fontWeight: 'bold',
              boxShadow: '0 8px 20px rgba(154, 193, 235, 0.5)'
            }}>
            НАЙТИ ЛЕКТОРА
          </button>
        </div>

      </div>

      {/* Блок 2: Статистика */}
      <div style={{ padding: '20px 20px 50px 20px' }}>
        <div style={{
          maxWidth: '1140px', margin: '0 auto',
          backgroundColor: 'white', borderRadius: '25px', padding: '50px 30px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', gap: '30px', textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#1a73e8' }}>10</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>Опытных лекторов</div>
          </div>
          <div>
            <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#1a73e8' }}>30+</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>Дисциплин</div>
          </div>
          <div>
            <div style={{ fontSize: '52px', fontWeight: 'bold', color: '#1a73e8' }}>300+</div>
            <div style={{ fontSize: '18px', color: '#666', marginTop: '10px' }}>Тем для изучения</div>
          </div>
        </div>
      </div>

      {/* Блок 3: Как это работает */}
      <div style={{ padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '50px', color: '#2c3e50' }}>Как это работает</h2>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

          <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px 30px', borderRadius: '25px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🔍</div>
            <h3 style={{ marginBottom: '15px', color: '#2c3e50' }}>1. Выберите лектора</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Изучите профили, дисциплины и отзывы.</p>
          </div>

          <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px 30px', borderRadius: '25px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>📅</div>
            <h3 style={{ marginBottom: '15px', color: '#2c3e50' }}>2. Запишитесь</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Индивидуально, в группе или корпоративный тренинг.</p>
          </div>

          <div style={{ flex: '1 1 250px', backgroundColor: 'white', padding: '40px 30px', borderRadius: '25px', textAlign: 'center', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🎓</div>
            <h3 style={{ marginBottom: '15px', color: '#2c3e50' }}>3. Учитесь</h3>
            <p style={{ color: '#666', lineHeight: '1.6' }}>Применяйте знания в работе и жизни.</p>
          </div>

        </div>
      </div>

      {/*  Блок 4: CTA для лекторов  */}
      <div style={{
        maxWidth: '1140px', margin: '20px auto 60px auto',
        background: 'linear-gradient(135deg, #9ac1eb 0%, #b3d0f2 100%)',
        color: 'white', padding: '60px 30px', textAlign: 'center', borderRadius: '25px',
        boxShadow: '0 8px 25px rgba(154, 193, 235, 0.4)'
      }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Вы эксперт в своей области?</h2>
        <p style={{ fontSize: '18px', marginBottom: '30px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
          Присоединяйтесь к платформе и делитесь знаниями.
        </p>
        <button
          onClick={() => onNavigate('contacts')}
          style={{ backgroundColor: 'white', color: '#1a73e8', border: 'none', padding: '15px 40px', fontSize: '18px', borderRadius: '50px', cursor: 'pointer', fontWeight: 'bold' }}>
          СТАТЬ ЛЕКТОРОМ
        </button>
      </div>

    </div>
  );
}

export default HomePage;