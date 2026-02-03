import React from 'react';
import { Compass, Map, Coffee, Camera, Trees, Utensils } from 'lucide-react';

export const Actividades = () => {
  return (
    <main style={{ backgroundColor: 'var(--crema)', minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* 1. HERO MINI */}
      <section style={{ 
        height: '40vh', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white'
      }}>
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ fontFamily: 'var(--serif)', fontSize: '4rem', marginBottom: '1rem' }}>Experiencias</h1>
          <div style={{ width: '50px', height: '2px', backgroundColor: 'var(--terracota)', margin: '0 auto' }}></div>
        </div>
      </section>

      {/* 2. GRID DE ACTIVIDADES LOCALES (Naturaleza) */}
      <section style={{ padding: '8rem 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>Inmersión Natural</span>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', marginTop: '1rem' }}>Dentro del Refugio</h2>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2rem', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          {[
            { icon: <Trees size={32} />, title: "Sendero Ecovital", desc: "Caminatas bajo búcaros y caracolíes milenarios siguiendo la quebrada Aranzoque." },
            { icon: <Camera size={32} />, title: "Avistamiento", desc: "Reconocimiento de aves exóticas y mariposas en su hábitat natural preservado." },
            { icon: <Coffee size={32} />, title: "Yoga & Relax", desc: "Claros de bosque diseñados para el silencio absoluto y la restauración del espíritu." }
          ].map((act, i) => (
            <div key={i} style={{ 
              backgroundColor: 'white', padding: '3rem 2rem', borderRadius: '40px', textAlign: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)', border: '1px solid rgba(0,0,0,0.05)'
            }}>
              <div style={{ color: 'var(--terracota)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{act.icon}</div>
              <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--verde-selva)', marginBottom: '1rem', fontSize: '1.4rem' }}>{act.title}</h3>
              <p style={{ color: '#777', lineHeight: '1.7', fontWeight: '300' }}>{act.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SECCIÓN: CONECTIVIDAD URBANA Y TURÍSTICA */}
      <section style={{ padding: '4rem 10% 10rem 10%' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', 
          gap: '6rem', 
          alignItems: 'center',
          maxWidth: '1300px',
          margin: '0 auto'
        }}>
          
          {/* GALERÍA MOSAICO DINÁMICA - IMÁGENES CORREGIDAS */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px' }}>
            {/* Imagen 1 Corregida (Chicamocha/Santander) */}
            <img src="https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=800" alt="Chicamocha" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '40px 10px 10px 10px' }} />
            {/* Imagen 2 Corregida (Bucaramanga/Ciudad) */}
            <img src="https://images.unsplash.com/photo-1536431311719-398b6704d4cc?auto=format&fit=crop&q=80&w=800" alt="Bucaramanga" style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '10px 40px 10px 10px' }} />
            
            <div style={{ 
              gridColumn: 'span 2', height: '250px', backgroundColor: 'var(--verde-selva)', borderRadius: '10px 10px 40px 40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem', color: 'white', textAlign: 'center'
            }}>
              <div>
                <Map size={40} color="var(--terracota)" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem' }}>Eje Estratégico de Santander</h4>
              </div>
            </div>
          </div>

          {/* TEXTO DE CONECTIVIDAD */}
          <div>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>Ubicación Privilegiada</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '1.5rem 0', lineHeight: '1.1' }}>
              Cerca de todo, <br /> lejos de lo cotidiano
            </h2>
            
            <p style={{ fontSize: '1.1rem', lineHeight: '1.9', color: '#555', fontWeight: '300', marginBottom: '2rem' }}>
              Nuestra excepcional ubicación le permite desplazarse en cuestión de minutos al <strong>centro histórico de Bucaramanga</strong>, complejos médicos especializados, y los centros comerciales más exclusivos.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '3rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--verde-selva)', fontSize: '0.9rem', fontWeight: '600' }}>
                <Utensils size={18} color="var(--terracota)" /> Gastronomía Top
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--verde-selva)', fontSize: '0.9rem', fontWeight: '600' }}>
                <Compass size={18} color="var(--terracota)" /> Pueblos Patrimonio
              </div>
            </div>

            <div style={{ 
              backgroundColor: 'white', padding: '2.5rem', borderRadius: '30px', 
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)', borderLeft: '6px solid var(--terracota)' 
            }}>
              <p style={{ margin: 0, color: '#444', fontStyle: 'italic', lineHeight: '1.7' }}>
                "Vegas del Verde organiza excursiones y tours guiados personalizados a los sitios de mayor interés cultural y turístico de la región, como el imponente Cañón del Chicamocha."
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. BANNER FINAL CTA */}
      <section style={{ backgroundColor: '#1a2e1a', padding: '6rem 10%', textAlign: 'center', color: 'white' }}>
        <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2.5rem', marginBottom: '2rem' }}>¿Listo para explorar Santander?</h3>
        <p style={{ opacity: 0.7, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem' }}>Permítanos ser su guía en esta aventura entre la montaña y la ciudad.</p>
        <button style={{ 
          backgroundColor: 'var(--terracota)', color: 'white', border: 'none', padding: '1.2rem 3rem', 
          borderRadius: '50px', fontWeight: '700', cursor: 'pointer', transition: '0.3s'
        }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
           onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          SOLICITAR TOUR GUIADO
        </button>
      </section>
    </main>
  );
};

export default Actividades;