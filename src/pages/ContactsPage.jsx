import { useReducer, useState } from 'react';

function requestsReducer(state, action) {
  switch (action.type) {
    case 'ADD':
      return [...state, { id: Date.now(), ...action.payload }];
    case 'DELETE':
      return state.filter(req => req.id !== action.payload);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

function ContactsPage() {
  const [requests, dispatch] = useReducer(requestsReducer, []);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit вызван', form);
    if (!form.name || !form.email || !form.message) return;
    dispatch({ type: 'ADD', payload: form });
    setForm({ name: '', email: '', message: '' });
  };

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
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ваше имя" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px' }} />
            <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Ваш email" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px' }} />
            <textarea name="message" value={form.message} onChange={handleChange} placeholder="Ваше сообщение" rows="5" style={{ padding: '14px', borderRadius: '15px', border: '2px solid #f0f4f8', outline: 'none', fontSize: '16px', fontFamily: 'inherit' }}></textarea>
            <button type="submit" style={{ background: 'linear-gradient(90deg, #9ac1eb, #b3d0f2)', color: 'white', border: 'none', padding: '15px', borderRadius: '25px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold' }}>
                Отправить
            </button>
          </form>
        </div>

        <div style={{ backgroundColor: 'white', padding: '40px', borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '25px' }}>
            <h3 style={{ color: '#2c3e50' }}>Заявки ({requests.length})</h3>
            {requests.length > 0 && (
              <button
                onClick={() => dispatch({ type: 'CLEAR' })}
                style={{
                  background: '#ff6b6b', color: 'white', border: 'none',
                  padding: '10px 20px', borderRadius: '15px',
                  cursor: 'pointer', fontWeight: 'bold'
                }}
              >
                Очистить всё
              </button>
            )}
          </div>

          {requests.length === 0 ? (
            <p style={{ color: '#95a5a6' }}>Заявок пока нет</p>
          ) : (
            requests.map(req => (
              <div key={req.id} style={{
                padding: '20px', marginBottom: '15px',
                backgroundColor: '#f8fafc', borderRadius: '15px',
                border: '2px solid #e8eef5'
              }}>
                <p style={{ marginBottom: '8px' }}><strong>{req.name}</strong> — {req.email}</p>
                <p style={{ marginBottom: '12px', color: '#2c3e50' }}>{req.message}</p>
                <button
                  onClick={() => dispatch({ type: 'DELETE', payload: req.id })}
                  style={{
                    background: '#ff6b6b', color: 'white', border: 'none',
                    padding: '8px 16px', borderRadius: '12px',
                    cursor: 'pointer', fontSize: '14px'
                  }}
                >
                  Удалить
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactsPage;