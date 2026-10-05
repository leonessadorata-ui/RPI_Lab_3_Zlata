import { useState } from 'react';

function BlogPage() {
  const posts = [
    { id: 1, title: "Как выбрать лектора под свои задачи", date: "15 марта 2026", category: "Советы",
      excerpt: "Разбираем, на что обращать внимание при выборе преподавателя: опыт, отзывы, формат занятий и пробный урок.",
      fullText: "При выборе лектора важно учитывать не только его образование и стаж, но и формат подачи материала. Кому-то нужны строгие академические занятия, а кому-то — интерактив с примерами из практики. Обязательно уточняйте, есть ли пробное занятие, и не стесняйтесь задавать вопросы о методике." },
    { id: 2, title: "5 причин учиться на протяжении всей жизни", date: "10 марта 2026", category: "Мотивация",
      excerpt: "Непрерывное образование помогает не только в карьере, но и в личной жизни.",
      fullText: "Первая причина — конкурентоспособность на рынке труда. Вторая — расширение кругозора. Третья — тренировка памяти. Четвёртая — возможность сменить профессию. Пятая — удовольствие от познания." },
    { id: 3, title: "Интервью с лектором: как проходят занятия по Python", date: "5 марта 2026", category: "Интервью",
      excerpt: "Поговорили с Дмитрием Петровым о том, как построен его курс по анализу данных.",
      fullText: "Дмитрий рассказал, что курс построен от простого к сложному: сначала базовые типы данных, потом Pandas и NumPy, а в конце — полноценный проект. Главное — не бояться ошибок и много практиковаться." },
    { id: 4, title: "Как организовать корпоративное обучение сотрудников", date: "28 февраля 2026", category: "Бизнесу",
      excerpt: "Пошаговый гайд для HR и руководителей.",
      fullText: "Начните с определения целей: что именно должны уметь сотрудники после обучения. Затем подберите формат — офлайн-тренинг, вебинар или индивидуальные занятия. После обучения соберите обратную связь." }
  ];

  const [openedPost, setOpenedPost] = useState(null);

  if (openedPost) {
    return (
      <div style={{ padding: '60px 20px', maxWidth: '850px', margin: '0 auto', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
        <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}>
          <button
            onClick={() => setOpenedPost(null)}
            style={{ background: 'linear-gradient(90deg, #9ac1eb, #b3d0f2)', border: 'none', color: 'white', cursor: 'pointer', fontSize: '16px', marginBottom: '25px', fontWeight: 'bold', padding: '10px 20px', borderRadius: '25px' }}>
            ← Назад
          </button>
          <h1 style={{ marginBottom: '15px', color: '#2c3e50' }}>{openedPost.title}</h1>
          <p style={{ color: '#888', marginBottom: '10px' }}>
            <span style={{ backgroundColor: '#e8f0fe', color: '#1a73e8', padding: '4px 12px', borderRadius: '12px', fontSize: '14px', marginRight: '15px', fontWeight: 'bold' }}>
              {openedPost.category}
            </span>
            {openedPost.date}
          </p>
          <hr style={{ margin: '25px 0', border: 'none', borderTop: '2px solid #f0f4f8' }} />
          <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#444' }}>{openedPost.fullText}</p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ padding: '60px 20px', maxWidth: '1100px', margin: '0 auto', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '50px', fontSize: '32px', color: '#2c3e50' }}>Блог</h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '25px' }}>
        {posts.map((post) => (
          <div key={post.id} style={{
            backgroundColor: 'white', padding: '30px', borderRadius: '20px',
            display: 'flex', flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.08)'
          }}>
            <span style={{
              backgroundColor: '#e8f0fe', color: '#1a73e8',
              padding: '5px 14px', borderRadius: '15px', fontSize: '13px',
              alignSelf: 'flex-start', marginBottom: '15px', fontWeight: 'bold'
            }}>
              {post.category}
            </span>
            <h3 style={{ marginBottom: '10px', lineHeight: '1.3', color: '#2c3e50' }}>{post.title}</h3>
            <p style={{ color: '#888', fontSize: '14px', marginBottom: '15px' }}>{post.date}</p>
            <p style={{ lineHeight: '1.6', color: '#555', marginBottom: '20px' }}>{post.excerpt}</p>
            <button
              onClick={() => setOpenedPost(post)}
              style={{
                background: 'linear-gradient(90deg, #9ac1eb, #b3d0f2)',
                color: 'white', border: 'none', padding: '10px 22px',
                borderRadius: '25px', cursor: 'pointer',
                marginTop: 'auto', alignSelf: 'flex-start', fontWeight: 'bold'
              }}>
              Читать далее
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;