import React from 'react';

export const Servicios = () => {
  const textContainerStyle = {
    flex: '1 1 350px',
    padding: '1rem 0'
  };

  const imageWrapperStyle = {
    flex: '1 1 400px',
    position: 'relative',
    width: '100%'
  };

  return (
    <main style={{ backgroundColor: 'var(--crema)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', overflowX: 'hidden' }}>
      
      {/* CSS INTERNO PARA RESPONSIVE */}
      <style>{`
        .section-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 4rem;
          padding: 4rem 10%;
          margin-bottom: 4rem;
        }
        .header-box { padding: 0 10%; margin-bottom: 4rem; }
        .responsive-img { height: 500px; }

        @media (max-width: 768px) {
          .section-container { 
            padding: 2rem 5%; 
            gap: 2rem;
            margin-bottom: 2rem;
          }
          .header-box { margin-bottom: 2rem; }
          .responsive-img { height: 350px; }
          .reverse-mobile { flexDirection: column-reverse !important; }
          .mobile-center { text-align: center !important; }
        }
      `}</style>
      
      {/* CABECERA */}
      <div className="header-box" style={{ textAlign: 'center' }}>
        <span style={{ color: 'var(--terracota)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.7rem', fontWeight: '700' }}>Explora el Refugio</span>
        <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.2rem, 8vw, 3.5rem)', color: 'var(--verde-selva)', marginTop: '0.5rem', fontWeight: '400' }}>Nuestros Servicios</h1>
        <div style={{ width: '40px', height: '1.5px', backgroundColor: 'var(--terracota)', margin: '1rem auto' }}></div>
      </div>

      {/* 1. LA POSADA */}
      <section className="section-container">
        <div style={imageWrapperStyle}>
          <div style={{ position: 'absolute', top: '15px', left: '-15px', width: '100%', height: '100%', border: '1px solid var(--terracota)', borderRadius: '24px', zIndex: 0 }}></div>
          <img 
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200" 
            alt="La Posada" 
            className="responsive-img"
            style={{ width: '100%', objectFit: 'cover', borderRadius: '24px', position: 'relative', zIndex: 1 }} 
          />
        </div>
        <div style={textContainerStyle}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', color: 'var(--verde-selva)', marginBottom: '1.2rem' }}>La Posada</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
            Escondida entre guayacanes y árboles frutales, nuestra posada de <strong>cuatro habitaciones</strong> ofrece un refugio de paz con vistas directas al bosque y el susurro relajante de la quebrada Aranzoque.
          </p>
          <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem' }}>
            {['Baño Privado', 'Aire Acondicionado', 'Wifi Alta Velocidad', 'Desayuno Incluido'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.7rem', color: 'var(--verde-selva)', letterSpacing: '1px', fontWeight: '600' }}>
                <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--terracota)', borderRadius: '50%' }}></div>
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. AVISTAMIENTO (Fondo Verde) */}
      <section style={{ backgroundColor: 'var(--verde-selva)', padding: '5rem 10%', color: 'white' }}>
        <div className="section-container" style={{ padding: 0, margin: 0 }}>
          <div style={{ flex: '1 1 350px' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '3px', fontSize: '0.7rem', fontWeight: '600' }}>BIODIVERSIDAD</span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', margin: '1rem 0' }}>Aves & Mariposas</h2>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', opacity: 0.9 }}>
              Nuestros setos de plantas de flor atraen variedad de aves e insectos polinizadores que facilitan el reconocimiento de fauna y flora local.
            </p>
          </div>
          <div style={{ flex: '1 1 450px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
            <img src="https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '40px 10px 10px 10px' }} alt="Ave" />
            <img src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?auto=format&fit=crop&q=80&w=800" style={{ width: '100%', height: '250px', objectFit: 'cover', borderRadius: '10px 40px 10px 10px' }} alt="Mariposa" />
          </div>
        </div>
      </section>

      {/* 3. SENDERO ECOVITAL */}
      <section className="section-container reverse-mobile" style={{ display: 'flex' }}>
        <div style={textContainerStyle}>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', color: 'var(--verde-selva)', marginBottom: '1.2rem' }}>Sendero Ecovital</h2>
          <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#555' }}>
            Sombreado por guaduas y especies forestales como el <strong>Búcaro y el Caracolí</strong>, el sendero bordea el riachuelo La Florida, ofreciendo un ambiente ideal para terapias forestales.
          </p>
        </div>
        <div style={imageWrapperStyle}>
          <div style={{ position: 'absolute', bottom: '15px', right: '-15px', width: '100%', height: '100%', border: '1px solid var(--verde-selva)', borderRadius: '24px' }}></div>
          <img 
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200" 
            alt="Sendero" 
            className="responsive-img"
            style={{ width: '100%', objectFit: 'cover', borderRadius: '24px', position: 'relative' }} 
          />
        </div>
      </section>

      {/* 4. ENCUENTROS SOCIALES */}
      <section style={{ padding: '4rem 10%', borderTop: '1px solid #eee' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          <div style={{ flex: '1 1 300px' }}>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', color: 'var(--verde-selva)' }}>Escenarios Naturales</h2>
          </div>
          <div style={{ flex: '2 1 400px' }}>
            <p style={{ fontSize: '1rem', lineHeight: '1.8', color: '#666' }}>
              Claros de bosque que ofrecen atractivos escenarios para el encuentro social, el yoga, ceremonias, talleres y otras actividades desarrolladas en conjunto con la naturaleza.
            </p>
            <button style={{ 
              marginTop: '2rem', padding: '0.8rem 2rem', backgroundColor: 'var(--verde-selva)', 
              color: 'white', border: 'none', borderRadius: '50px', cursor: 'pointer', 
              fontSize: '0.75rem', letterSpacing: '2px', fontWeight: '600'
            }}>CONSULTAR EVENTOS</button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Servicios;