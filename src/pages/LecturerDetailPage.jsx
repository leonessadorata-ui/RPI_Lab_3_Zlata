import { useParams, useNavigate, Link } from 'react-router-dom';
import { lecturers } from '../data/lecturers';

export default function LecturerDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const lecturer = lecturers.find(l => String(l.id) === String(id));

  if (!lecturer) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <h2>Лектор не найден 😢</h2>
        <button
          onClick={() => navigate('/lecturers')}
          style={{ padding: '10px 20px', marginTop: '20px', cursor: 'pointer', borderRadius: '20px', border: 'none', background: '#9ac1eb', color: 'white', fontWeight: 'bold' }}
        >
          Вернуться к списку
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px', fontFamily: 'sans-serif' }}>

      {/* Кнопка Назад */}
      <button
        onClick={() => navigate('/lecturers')}
        style={{
          marginBottom: '30px',
          padding: '12px 25px',
          cursor: 'pointer',
          borderRadius: '25px',
          border: 'none',
          background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 4px 10px rgba(154, 193, 235, 0.4)',
          transition: 'transform 0.2s'
        }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
      >
        ← Назад к списку
      </button>

      {/* Шапка лектора */}
      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', marginBottom: '50px', alignItems: 'flex-start' }}>
        <img
          src={lecturer.photo}
          alt={lecturer.name}
          style={{ width: '300px', height: '400px', borderRadius: '20px', objectFit: 'cover', boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
        />
        <div style={{ flex: 1, minWidth: '300px' }}>
          <h1 style={{ fontSize: '36px', color: '#2c3e50', marginTop: 0 }}>{lecturer.name}</h1>
          <p style={{ fontSize: '20px', color: '#7f8c8d', fontWeight: 'bold' }}>
            {lecturer.degree !== 'нет' ? lecturer.degree : 'Практикующий специалист'}
          </p>
          <div style={{ marginTop: '20px', lineHeight: '1.8', fontSize: '18px', color: '#444' }}>
            <p><b>🎓 Образование:</b> {lecturer.education}</p>
            <p><b>💼 Опыт работы:</b> {lecturer.experience}</p>
          </div>
        </div>
      </div>

      {/* Дисциплины */}
      <h2 style={{ color: '#2c3e50', fontSize: '28px', marginBottom: '20px' }}>📚 Дисциплины:</h2>
      <div style={{ display: 'grid', gap: '20px' }}>
        {lecturer.disciplines.map((d, i) => (
          <div key={i} style={{
            background: 'white',
            padding: '25px',
            borderRadius: '20px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            borderLeft: '5px solid #9ac1eb'
          }}>
            <h3 style={{ color: '#2c3e50', marginTop: 0, fontSize: '22px' }}>{d.title}</h3>
            <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px' }}>{d.description}</p>

            <details style={{ cursor: 'pointer' }}>
              <summary style={{ fontWeight: 'bold', color: '#1a73e8', marginBottom: '10px' }}>
                Показать программу ({d.topics.length} тем)
              </summary>
              <ul style={{ color: '#444', lineHeight: '1.6', marginTop: '10px' }}>
                {d.topics.map((t, j) => <li key={j} style={{ marginBottom: '8px' }}>{t}</li>)}
              </ul>
            </details>
          </div>
        ))}
      </div>

      {/* Тарифы */}
      <h2 style={{ color: '#2c3e50', marginTop: '50px', fontSize: '28px' }}>💰 Тарифы на обучение:</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', marginTop: '20px' }}>
        {lecturer.tariffs.map((t, i) => (
          <div key={i} style={{
            background: '#ffffff',
            padding: '30px 20px',
            borderRadius: '20px',
            flex: '1 1 250px',
            boxShadow: '0 8px 25px rgba(0,0,0,0.08)',
            textAlign: 'center',
            border: '2px solid #f0f4f8',
            transition: 'transform 0.2s, boxShadow 0.2s, borderColor 0.2s',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-5px)';
            e.currentTarget.style.boxShadow = '0 12px 30px rgba(154, 193, 235, 0.3)';
            e.currentTarget.style.borderColor = '#9ac1eb';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.08)';
            e.currentTarget.style.borderColor = '#f0f4f8';
          }}>
            <p style={{ color: '#666', margin: '0 0 15px 0', fontSize: '16px', fontWeight: '500' }}>
              {t.type}
            </p>
            <div style={{ marginBottom: '20px' }}>
              <b style={{ fontSize: '32px', color: '#2c3e50', fontWeight: '800' }}>{t.price}</b>
            </div>

            {/* Заменили кнопку на Link */}
            <Link
              to={`/contacts?lecturer=${encodeURIComponent(lecturer.name)}`}
              style={{
                display: 'block',
                background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
                color: 'white',
                border: 'none',
                padding: '12px',
                borderRadius: '25px',
                cursor: 'pointer',
                width: '100%',
                fontWeight: 'bold',
                fontSize: '16px',
                boxShadow: '0 4px 10px rgba(154, 193, 235, 0.4)',
                textDecoration: 'none',
                textAlign: 'center',
                boxSizing: 'border-box',
                transition: 'transform 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              Записаться
            </Link>

          </div>
        ))}
      </div>

    </div>
  );
}