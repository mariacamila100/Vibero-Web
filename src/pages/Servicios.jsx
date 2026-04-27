import React from 'react';

// Componente decorativo alineado a la izquierda para secciones oscuras
const LeftDivider = ({ color = 'var(--terracota)' }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', margin: '1rem 0', gap: '8px' }}>
    <img src="./src/assets/iconvegas.png" alt="decoración" style={{ width: '40px', height: 'auto', opacity: 0.8 }} />
    <div style={{ width: '60px', height: '1.5px', backgroundColor: color, opacity: 0.6 }}></div>
  </div>
);

export const Servicios = () => {
  return (
    <main style={{
      backgroundColor: 'var(--crema)',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
      minHeight: '100vh',
      paddingBottom: '80px',
      overflowX: 'hidden'
    }}>
      <style>{`
        .section-container { display: flex; flex-wrap: wrap; align-items: center; gap: 5rem; padding: 5rem 10%; }
        .responsive-img { height: 500px; box-shadow: 0 20px 40px rgba(0,0,0,0.15); width: 100%; object-fit: cover; border-radius: 40px; position: relative; z-index: 1; }
        .main-paragraph { font-size: 1.15rem; line-height: 1.8; color: #444; font-weight: 300; margin-bottom: 2rem; }
        .service-tag { color: var(--terracota); letter-spacing: 4px; font-weight: 800; font-size: 0.8rem; text-transform: uppercase; }
        @media (max-width: 768px) {
          .section-container { padding: 3rem 5%; gap: 3rem; }
          .responsive-img { height: 350px; }
          .reverse-mobile { flex-direction: column-reverse !important; }
        }
      `}</style>

      {/* 1. HERO - NUESTROS SERVICIOS */}
      <section style={{
        height: '45vh',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("/banner_actividad.png")', // Puedes usar el video como fondo si prefieres
        backgroundColor: 'var(--verde-selva)',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ zIndex: 2 }}>
          <span className="service-tag" style={{ color: 'var(--crema)' }}>Donde el bosque abraza la ciudad</span>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(3rem, 7vw, 5rem)', marginTop: '1rem' }}>Servicios</h1>
        </div>
      </section>

      {/* 2. ECOPOSADA (ESTADÍA) */}
      <section className="section-container">
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: '20px', left: '-20px', width: '100%', height: '100%', border: '1.5px solid var(--terracota)', borderRadius: '40px' }}></div>
          <img src="/pos.png" className="responsive-img" alt="Ecoposada" />
        </div>
        <div style={{ flex: '1 1 400px' }}>
          <span className="service-tag">Estadía Consciente</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--verde-selva)', margin: '0.5rem 0' }}>Ecoposada</h2>
          <LeftDivider />
          <p className="main-paragraph">
            Habitaciones diseñadas para el descanso profundo. Un concepto de exclusividad y conexión donde el único ruido es el de la quebrada y las aves al amanecer.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {['4 Habitaciones', 'Vistas al bosque', 'Desayuno orgánico', 'Paz absoluta'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--verde-selva)', fontWeight: '700' }}>
                <div style={{ width: '5px', height: '5px', backgroundColor: 'var(--terracota)', borderRadius: '50%' }}></div>
                {item.toUpperCase()}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. ALQUILER DE ESPACIOS (TERRAZA, CAFE, ALAMEDA) */}
      <section style={{ backgroundColor: 'var(--verde-selva)', padding: '6rem 10%', color: 'white' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="service-tag" style={{ color: 'var(--crema)' }}>Espacios Únicos</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '3.5rem', marginTop: '1rem' }}>Alquiler de Locaciones</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
          {[
            { title: "Terraza", desc: "Bajo pérgola de madera, ideal para yoga o talleres corporativos.", img: "/Terraza.png" },
            { title: "El Café", desc: "Zonas abiertas rodeadas de vegetación para eventos boutique y sociales.", img: "/cafe.png" },
            { title: "Santuario de Aves", desc: "Espacios reservados para fotografía de naturaleza y avistamiento.", img: "/taller_aves.png" }
          ].map((espacio, i) => (
            <div key={i} style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '20px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)' }}>
              <img src={espacio.img} style={{ width: '100%', height: '200px', objectFit: 'cover' }} alt={espacio.title} />
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.8rem', marginBottom: '0.5rem' }}>{espacio.title}</h3>
                <p style={{ opacity: 0.8, fontSize: '0.95rem', lineHeight: '1.6' }}>{espacio.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. VIVERO Y VENTA DE PLANTAS */}
      <section className="section-container reverse-mobile">
        <div style={{ flex: '1 1 400px' }}>
          <span className="service-tag">Nuestro Origen</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: '3rem', color: 'var(--verde-selva)', margin: '0.5rem 0' }}>Venta de Plantas</h2>
          <LeftDivider />
          <p className="main-paragraph">
            Lleva un pedazo de nuestro refugio a tu hogar. Especialistas en plantas ornamentales y especies nativas que atraen polinizadores y embellecen espacios urbanos.
          </p>
          <a href="https://wa.me/573167011872" style={{ backgroundColor: 'var(--terracota)', color: 'white', padding: '1rem 2.5rem', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
            CONSULTAR CATÁLOGO
          </a>
        </div>
        <div style={{ flex: '1 1 400px', position: 'relative' }}>
          <div style={{ position: 'absolute', bottom: '20px', right: '-20px', width: '100%', height: '100%', border: '1.5px solid var(--verde-selva)', borderRadius: '40px' }}></div>
          <img src="/planta.png" className="responsive-img" alt="Vivero" />
        </div>
      </section>
    </main>
  );
};

export default Servicios;