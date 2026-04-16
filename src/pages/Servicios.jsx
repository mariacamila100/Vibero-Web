import React from 'react';

// Reutilizamos el divisor decorativo solo para el título de transición
const SectionDivider = ({ color = 'var(--terracota)' }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.5rem 0',
    gap: '8px'
  }}>
    <img
      src="/iconvegas.png"
      alt="decoración"
      style={{ width: '60px', height: 'auto', objectFit: 'contain' }}
    />
    <div style={{
      width: '80px',
      height: '1.5px',
      backgroundColor: color,
      opacity: 0.6
    }}></div>
  </div>
);

export const Servicios = () => {
  const textContainerStyle = {
    flex: '1 1 400px',
    padding: '1.5rem 0'
  };

  const imageWrapperStyle = {
    flex: '1 1 450px',
    position: 'relative',
    width: '100%'
  };

  return (
    <main style={{
      backgroundColor: 'var(--crema)',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")', // Efecto papel rugoso
      minHeight: '100vh',
      paddingBottom: '80px',
      overflowX: 'hidden'
    }}>

      {/* Estilos CSS internos */}
      <style>{`
        .section-container {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 5rem;
          padding: 5rem 10%;
        }
        .responsive-img { 
          height: 550px; 
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        .main-paragraph {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #444;
          font-weight: 300;
        }
        /* Contenedor para alinear título e icono a la izquierda */
        .text-group-left {
          display: flex;
          flex-direction: column;
          align-items: flex-start; 
          gap: 12px;
          margin-bottom: 1.5rem;
        }

        @media (max-width: 768px) {
          .section-container { padding: 3rem 5%; gap: 3rem; }
          .responsive-img { height: 380px; }
          .reverse-mobile { flex-direction: column-reverse !important; }
        }
      `}</style>

      {/* 1. CABECERA HERO */}
      <section style={{
        height: '60vh',
        position: 'relative',
        backgroundImage: 'url("https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '0 5%'
      }}>
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3))', zIndex: 1
        }} />

        <div style={{ position: 'relative', zIndex: 2, textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}>
          <span style={{
            color: 'var(--crema)',
            letterSpacing: '6px',
            textTransform: 'uppercase',
            fontSize: '0.85rem',
            fontWeight: '800',
            display: 'block',
            marginBottom: '0.5rem'
          }}>
            Explora el Refugio
          </span>
          <h1 style={{
            fontFamily: 'var(--serif)',
            fontSize: 'clamp(3rem, 7vw, 4.5rem)',
            color: 'white',
            lineHeight: '1.1'
          }}>
            Nuestros Servicios
          </h1>
        </div>
      </section>


      {/* 2. LA POSADA (Icono alineado a la izquierda) */}
      <section className="section-container" style={{ paddingTop: '3rem' }}>
        <div style={imageWrapperStyle}>
          <div style={{
            position: 'absolute', top: '20px', left: '-20px', width: '100%', height: '100%',
            border: '1.5px solid var(--terracota)', borderRadius: '40px', zIndex: 0
          }}></div>
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80&w=1200"
            className="responsive-img"
            style={{ width: '100%', objectFit: 'cover', borderRadius: '40px', position: 'relative', zIndex: 1 }}
            alt="La Posada"
          />
        </div>
        <div style={textContainerStyle}>
          {/* Contenedor de Título e Icono Centrados */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centra horizontalmente el h2 y la img
            marginBottom: '1.5rem',
            gap: '10px' // Espacio entre texto e icono
          }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.2rem)',
              color: 'var(--verde-selva)',
              margin: 0,
              lineHeight: '1.1',
              textAlign: 'center'
            }}>
              La Posada
            </h2>
            <img
              src="./src/assets/iconvegas.png"
              style={{ width: '40px', opacity: 0.8 }}
              alt="icon"
            />
          </div>

          {/* Párrafo de descripción */}
          <p className="main-paragraph">
            Escondida entre guayacanes y árboles frutales, nuestra posada de <strong>cuatro habitaciones</strong> ofrece un refugio de paz con vistas directas al bosque y el susurro relajante de la quebrada Aranzoque.
          </p>

          {/* Grid de amenidades */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.2rem', marginTop: '2rem' }}>
            {['Baño Privado', 'Aire Acondicionado', 'Wifi Alta Velocidad', 'Desayuno Incluido'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.8rem', color: 'var(--verde-selva)', letterSpacing: '1px', fontWeight: '700' }}>
                <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--terracota)', borderRadius: '50%' }}></div>
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. AVISTAMIENTO (Efecto Inverso e Icono Izquierda) */}
      <section style={{ backgroundColor: 'var(--verde-selva)', padding: '6rem 10%', color: 'white', marginTop: '2rem' }}>
        <div className="section-container" style={{ padding: 0, margin: 0, gap: '4rem' }}>
          <div style={{ flex: '1 1 350px' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', fontSize: '0.8rem', fontWeight: '800' }}>BIODIVERSIDAD</span>
            <div className="text-group-left" style={{ marginTop: '1rem' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 3.2rem)', margin: 0, lineHeight: '1.1' }}>
                Aves & Mariposas
              </h2>

            </div>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', opacity: 0.9, fontWeight: '300' }}>
              Nuestros setos de plantas de flor atraen variedad de aves e insectos polinizadores que facilitan el reconocimiento de fauna y flora local.
            </p>
          </div>
          <div style={{ flex: '1 1 450px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <img src="https://images.unsplash.com/photo-1520808663317-647b476a81b9?auto=format&fit=crop&q=80&w=800"
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '50px 15px 15px 15px', border: '1px solid rgba(255,255,255,0.1)' }} alt="Ave" />
            <img src="https://images.unsplash.com/photo-1555037015-1498966bcd7c?auto=format&fit=crop&q=80&w=800"
              style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '15px 50px 15px 15px', border: '1px solid rgba(255,255,255,0.1)' }} alt="Mariposa" />
          </div>
        </div>
      </section>

      {/* 4. SENDERO ECOVITAL (Icono Izquierda) */}
      <section className="section-container reverse-mobile">
        <div style={textContainerStyle}>
          {/* Contenedor centralizado para Título e Icono */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center', // Centra horizontalmente el h2 y la img
            marginBottom: '1.5rem',
            gap: '10px'
          }}>
            <h2 style={{
              fontFamily: 'var(--serif)',
              fontSize: 'clamp(2.5rem, 5vw, 3.2rem)',
              color: 'var(--verde-selva)',
              margin: 0,
              textAlign: 'center',
              lineHeight: '1.1'
            }}>
              Sendero Ecovital
            </h2>
            <img
              src="./src/assets/iconvegas.png"
              style={{ width: '40px', opacity: 0.8 }}
              alt="icon"
            />
          </div>

          <p className="main-paragraph">
            Sombreado por guaduas y especies forestales como el <strong>Búcaro y el Caracolí</strong>, el sendero bordea el riachuelo La Florida, ofreciendo un ambiente ideal para terapias forestales y conexión profunda.
          </p>
        </div>

        <div style={imageWrapperStyle}>
          <div style={{
            position: 'absolute', bottom: '20px', right: '-20px', width: '100%', height: '100%',
            border: '1.5px solid var(--verde-selva)', borderRadius: '40px'
          }}></div>
          <img
            src="https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1200"
            className="responsive-img"
            style={{ width: '100%', objectFit: 'cover', borderRadius: '40px', position: 'relative' }}
            alt="Sendero"
          />
        </div>
      </section>

    </main>
  );
};

export default Servicios;