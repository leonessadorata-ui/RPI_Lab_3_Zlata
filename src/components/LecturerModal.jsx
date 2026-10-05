function LecturerModal({ lecturer, onClose }) {
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex',
      justifyContent: 'center', alignItems: 'center', zIndex: 1000,
      padding: '20px', overflowY: 'auto'
    }}>
      <div style={{
        backgroundColor: 'white', padding: '40px', borderRadius: '25px',
        maxWidth: '850px', width: '100%', maxHeight: '90vh', overflowY: 'auto',
        position: 'relative', boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
      }}>
        {/* Кнопка закрытия */}
        <button onClick={onClose} style={{
          position: 'absolute', top: '20px', right: '20px',
          background: 'linear-gradient(90deg, #9ac1eb, #b3d0f2)', color: 'white', border: 'none',
          borderRadius: '50%', width: '40px', height: '40px',
          cursor: 'pointer', fontSize: '18px', fontWeight: 'bold',
          boxShadow: '0 4px 10px rgba(0,0,0,0.15)'
        }}>✕</button>

        {/* Верхний блок: фото + основная инфа */}
        <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap', marginBottom: '30px', alignItems: 'flex-start' }}>
          <div style={{
            width: '200px', height: '260px', flexShrink: 0,
            borderRadius: '20px', overflow: 'hidden',
            boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
          }}>
            <img
              src={lecturer.photo}
              alt={lecturer.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '250px' }}>
            <h2 style={{ fontSize: '28px', color: '#2c3e50', marginBottom: '20px' }}>{lecturer.name}</h2>
            <p style={{ marginBottom: '10px', fontSize: '16px' }}><strong>Степень:</strong> {lecturer.degree}</p>
            <p style={{ marginBottom: '10px', fontSize: '16px' }}><strong>Стаж:</strong> {lecturer.experience}</p>
            <p style={{ marginBottom: '10px', fontSize: '16px' }}><strong>Образование:</strong> {lecturer.education}</p>
          </div>
        </div>

        <hr style={{ margin: '25px 0', border: 'none', borderTop: '2px solid #f0f4f8' }} />

        <h3 style={{ color: '#1a73e8', marginBottom: '20px', fontSize: '22px' }}>📚 Дисциплины и темы</h3>
        {lecturer.disciplines.map((disc, index) => (
          <div key={index} style={{
            marginBottom: '25px', padding: '20px',
            backgroundColor: '#f8fafc', borderRadius: '15px'
          }}>
            <h4 style={{ color: '#2c3e50', marginBottom: '8px', fontSize: '18px' }}>{disc.title}</h4>
            <p style={{ color: '#666', fontStyle: 'italic', marginBottom: '15px' }}>{disc.description}</p>
            <ul style={{ paddingLeft: '20px' }}>
              {disc.topics.map((topic, i) => (
                <li key={i} style={{ marginBottom: '6px', lineHeight: '1.5', color: '#444' }}>{topic}</li>
              ))}
            </ul>
          </div>
        ))}

        <hr style={{ margin: '25px 0', border: 'none', borderTop: '2px solid #f0f4f8' }} />

        <h3 style={{ color: '#1a73e8', marginBottom: '20px', fontSize: '22px' }}>💰 Тарифы</h3>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
          {lecturer.tariffs.map((tariff, index) => (
            <div key={index} style={{
              flex: '1 1 200px', padding: '20px',
              background: 'linear-gradient(135deg, #9ac1eb 0%, #b3d0f2 100%)',
              borderRadius: '15px', color: 'white'
            }}>
              <div style={{ fontSize: '14px', marginBottom: '8px', opacity: 0.9 }}>{tariff.type}</div>
              <div style={{ fontSize: '22px', fontWeight: 'bold' }}>{tariff.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LecturerModal;