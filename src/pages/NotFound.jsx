import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div style={{
      textAlign: 'center',
      padding: '100px 20px',
      minHeight: '60vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f0f4f8'
    }}>
      <h1 style={{
        fontSize: '120px',
        fontWeight: '900',
        margin: 0,
        background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        lineHeight: '1'
      }}>
        404
      </h1>

      <h2 style={{
        fontSize: '24px',
        color: '#2c3e50',
        marginTop: '10px',
        marginBottom: '40px'
      }}>
        Упс! Такой страницы не существует
      </h2>

      <Link
        to="/"
        style={{
          display: 'inline-block',
          background: 'linear-gradient(90deg, #9ac1eb 0%, #b3d0f2 100%)',
          color: 'white',
          padding: '15px 40px',
          fontSize: '18px',
          borderRadius: '50px',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 8px 20px rgba(154, 193, 235, 0.4)',
          transition: 'transform 0.2s, boxShadow 0.2s'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'translateY(-3px)';
          e.currentTarget.style.boxShadow = '0 12px 25px rgba(154, 193, 235, 0.5)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(154, 193, 235, 0.4)';
        }}
      >
        На главную
      </Link>
    </div>
  );
}