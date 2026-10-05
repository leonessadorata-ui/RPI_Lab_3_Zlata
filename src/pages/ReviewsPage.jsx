function ReviewsPage() {
  const reviews = [
    { id: 1, name: "Анна", text: "Отличная платформа! Нашла лектора по Python за 5 минут. Занятия проходят интересно и продуктивно.", rating: 5 },
    { id: 2, name: "Иван", text: "Заказывали корпоративный тренинг по финансовой грамотности. Всё чётко, профессионально. Рекомендую!", rating: 5 },
    { id: 3, name: "Екатерина", text: "Понравился подход: можно выбрать лектора под свои задачи. Уже прошла курс по дизайну, теперь беру психологию.", rating: 4 },
    { id: 4, name: "Максим", text: "Готовился к ЕГЭ по физике с Константином Андреевичем. Сдал на 92 балла! Огромное спасибо платформе.", rating: 5 },
    { id: 5, name: "Ольга", text: "Удобно, что можно посмотреть дисциплины и темы до записи. Выбрала курс по биохимии, всё понравилось.", rating: 5 },
  ];

  return (
    <div style={{ padding: '60px 20px', maxWidth: '850px', margin: '0 auto', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '40px', fontSize: '32px', color: '#2c3e50' }}>Отзывы</h2>
      {reviews.map((review) => (
        <div key={review.id} style={{
          backgroundColor: 'white', padding: '30px', borderRadius: '20px',
          marginBottom: '20px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <strong style={{ color: '#2c3e50', fontSize: '18px' }}>{review.name}</strong>
            <span style={{ color: '#f5b301', fontSize: '20px' }}>
              {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
            </span>
          </div>
          <p style={{ lineHeight: '1.6', color: '#555' }}>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewsPage;