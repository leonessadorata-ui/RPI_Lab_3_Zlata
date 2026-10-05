function ContactsPage() {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#2c3e50' }}>Контакты</h2>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '25px', marginBottom: '30px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <p style={{ marginBottom: '12px' }}><strong>Email:</strong> info@platform.ru</p>
          <p style={{ marginBottom: '12px' }}><strong>Телефон:</strong> +7 (999) 123-45-67</p>
          <p style={{ marginBottom: '12px' }}><strong>Адрес:</strong> г. Москва, ул. Примерная, д. 1</p>
          <p><strong>Режим работы:</strong> Пн–Пт, 9:00–18:00</p>
        </div>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <h3 style={{ marginBottom: '25px', color: '#2c3e50' }}>Напишите нам</h3>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" placeholder="Ваше имя" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px' }} />
            <input type="email" placeholder="Ваш email" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px' }} />
            <textarea placeholder="Ваше сообщение" rows="5" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px', fontFamily: 'inherit' }}></textarea>
            <button type="button" style={{
              background: 'linear-gradient(90deg, #9ac1eb, #b3d0f2)',
              color: 'white', border: 'none', padding: '15px',
              borderRadius: '25px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold'
            }}>
              Отправить
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;