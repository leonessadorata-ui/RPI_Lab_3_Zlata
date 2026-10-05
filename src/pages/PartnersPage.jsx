function PartnersPage() {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#f0f4f8', minHeight: '80vh' }}>
      <h2 style={{ textAlign: 'center', fontSize: '32px', marginBottom: '50px', color: '#2c3e50' }}>Партнеры</h2>

      <div style={{ display: 'flex', gap: '40px', flexWrap: 'wrap', justifyContent: 'center', maxWidth: '1200px', margin: '0 auto' }}>

        {/* Блок ICL  */}
        <div style={{
          flex: '1 1 450px', backgroundColor: 'white', padding: '40px',
          borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column'
        }}>
          {/* Логотип + стрелка */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px', minHeight: '80px' }}>
            <a
              href="https://icl.ru/" target="_blank" rel="noopener noreferrer"
              title="Перейти на сайт ICL"
            >
              <img
                src="/partners/icl.svg"
                alt="ICL"
                style={{
                  height: '70px',
                  maxWidth: '180px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

            <a
              href="https://icl.ru/" target="_blank" rel="noopener noreferrer"
              title="Перейти на сайт ICL"
            >
              <svg
                width="50" height="50" viewBox="0 0 24 24" fill="none"
                stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(5px, -5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
            ICL — высокотехнологичная, динамично развивающаяся группа компаний, входящая в число крупнейших ИТ-компаний России, предоставляющая весь спектр ИТ-услуг. Компания была основана в 1991 году на базе завода ЭВМ Казанским производственным объединением вычислительных систем (КПО ВС).
          </p>
        </div>

        {/*  Блок Татнефть  */}
        <div style={{
          flex: '1 1 450px', backgroundColor: 'white', padding: '40px',
          borderRadius: '25px', boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          display: 'flex', flexDirection: 'column'
        }}>
          {/* Логотип + стрелка */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '25px', minHeight: '80px' }}>
            <a
              href="https://www.tatneft.ru/" target="_blank" rel="noopener noreferrer"
              title="Перейти на сайт Татнефть"
            >
              <img
                src="/partners/tatneft-logo.svg"
                alt="Татнефть"
                style={{
                  height: '70px',
                  maxWidth: '180px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </a>

            <a
              href="https://www.tatneft.ru/" target="_blank" rel="noopener noreferrer"
              title="Перейти на сайт Татнефть"
            >
              <svg
                width="50" height="50" viewBox="0 0 24 24" fill="none"
                stroke="#1a73e8" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                style={{ transition: 'transform 0.2s', cursor: 'pointer' }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translate(5px, -5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translate(0, 0)'}
              >
                <line x1="7" y1="17" x2="17" y2="7"></line>
                <polyline points="7 7 17 7 17 17"></polyline>
              </svg>
            </a>
          </div>

          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
            «Татнефть» — одна из крупнейших российских вертикально-интегрированных компаний, в составе которой динамично развиваются нефтегазодобыча, нефтепереработка, нефтегазохимия, сеть АЗС, композитный кластер, электроэнергетика, разработка и производство оборудования для нефтегазовой отрасли и блок сервисных структур.
          </p>
        </div>

      </div>
    </div>
  );
}

export default PartnersPage;