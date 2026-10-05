function LecturerCard({ lecturer, onShowDetails }) {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '20px',
      width: '300px',
      borderRadius: '20px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.2s, box-shadow 0.2s'
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = 'translateY(-5px)';
      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.15)';
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)';
    }}>
      <div style={{
        width: '100%',
        height: '300px',
        overflow: 'hidden',
        borderRadius: '15px',
        backgroundColor: '#e0e0e0'
      }}>
        <img
          src={lecturer.photo}
          alt={lecturer.name}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top'
          }}
        />
      </div>

      <h3 style={{ marginTop: '20px', color: '#2c3e50', fontSize: '20px' }}>{lecturer.name}</h3>
      <p style={{ marginTop: '10px', color: '#666', fontSize: '14px' }}><strong>Степень:</strong> {lecturer.degree}</p>
      <p style={{ color: '#666', fontSize: '14px' }}><strong>Стаж:</strong> {lecturer.experience}</p>

      <button
        onClick={() => onShowDetails(lecturer)}
        style={{
          background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
          color: 'white',
          border: 'none',
          padding: '12px',
          borderRadius: '25px',
          cursor: 'pointer',
          width: '100%',
          marginTop: 'auto',
          fontWeight: 'bold',
          fontSize: '16px',
          boxShadow: '0 4px 10px rgba(154, 193, 235, 0.4)'
        }}>
        Подробнее
      </button>
    </div>
  );
}

export default LecturerCard;