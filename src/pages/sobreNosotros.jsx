import React from 'react';
import { Leaf, Wind, ShieldCheck, Heart, Sprout, Trees } from 'lucide-react';

export const SobreNosotros = () => {
  return (
    <main style={{ backgroundColor: 'var(--crema)', minHeight: '100vh' }}>
      {/* 1. HERO CON PARALLAX SUTIL */}
      <section style={{
        height: '70vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed', // Efecto parallax
        color: 'white',
        textAlign: 'center'
      }}>
        <div style={{ zIndex: 2 }}>
          <span style={{ letterSpacing: '8px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>Más que una Posada</span>
          <h1 style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', fontFamily: 'var(--serif)', fontWeight: '400', lineHeight: '1' }}>El Origen del Verde</h1>
        </div>
      </section>

      {/* 2. HISTORIA Y EL ALMA DEL VIVERO */}
      <section style={{ padding: '10rem 10%', maxWidth: '1300px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '8rem', alignItems: 'center' }}>

          <div style={{ position: 'relative' }}>
            {/* Imagen del Vivero/Naturaleza */}
            <div style={{
              position: 'absolute', top: '-40px', left: '-40px', width: '200px', height: '200px',
              backgroundColor: 'var(--terracota)', borderRadius: '50%', zIndex: 0, opacity: 0.1
            }}></div>
            <img
              src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&q=80&w=1200"
              alt="Vivero Vegas del Verde"
              style={{ width: '100%', height: '700px', objectFit: 'cover', borderRadius: '100px 20px 100px 20px', position: 'relative', zIndex: 1, boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}
            />
            <div style={{
              position: 'absolute', bottom: '40px', right: '-20px', backgroundColor: 'white', padding: '2rem',
              borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 2, maxWidth: '250px'
            }}>
              <Sprout size={30} color="var(--terracota)" />
              <p style={{ fontSize: '0.9rem', color: 'var(--verde-selva)', fontWeight: '600', marginTop: '10px' }}>
                Cada árbol en nuestra posada fue cultivado primero en nuestro vivero.
              </p>
            </div>
          </div>

          <div>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700' }}>Desde la semilla</span>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '1.5rem 0 2.5rem', lineHeight: '1.1' }}>
              Nuestra historia florece en el <span style={{ color: 'var(--terracota)' }}>Vivero</span>
            </h2>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.9', color: '#555', fontWeight: '300', marginBottom: '2rem' }}>
              Ubicado en el corazón del área metropolitana de Bucaramanga, **Vegas del Verde** comenzó no como un hotel, sino como un acto de amor por la botánica. Lo que hoy es un oasis urbano fue primero un vivero dedicado a la preservación de especies nativas.
            </p>

            <p style={{ fontSize: '1.15rem', lineHeight: '1.9', color: '#555', fontWeight: '300', marginBottom: '3rem' }}>
              Entendimos que la mejor forma de proteger el bosque era invitando a la gente a vivir en él. Así evolucionamos: de cultivar plantas a cultivar experiencias, creando un espacio donde puedes **alojarte, celebrar o simplemente respirar** rodeado de la misma vegetación que hemos visto crecer desde hace años.
            </p>

            <div style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
              <div>
                <h4 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--terracota)', fontFamily: 'var(--serif)' }}>10+</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>Años cultivando</p>
              </div>
              <div style={{ width: '1px', height: '50px', backgroundColor: '#ddd' }}></div>
              <div>
                <h4 style={{ margin: 0, fontSize: '2.5rem', color: 'var(--terracota)', fontFamily: 'var(--serif)' }}>100%</h4>
                <p style={{ margin: 0, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', color: '#888' }}>Orgánico</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. PROPÓSITO: LA POSADA + EVENTOS */}
      <section style={{ padding: '8rem 10%', backgroundColor: 'var(--verde-selva)', color: 'white' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '3rem', fontFamily: 'var(--serif)', marginBottom: '4rem' }}>Un Refugio Multidimensional</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem' }}>
            <div>
              <Heart size={40} color="var(--terracota)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--serif)' }}>Alojamiento</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.7' }}>Cuatro suites diseñadas para el descanso profundo, donde el único ruido es el del agua y las aves.</p>
            </div>
            <div>
              <Trees size={40} color="var(--terracota)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--serif)' }}>Eventos Sociales</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.7' }}>Bodas, retiros y encuentros que buscan la magia de lo natural en plena ciudad.</p>
            </div>
            <div>
              <Wind size={40} color="var(--terracota)" style={{ marginBottom: '1.5rem' }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', fontFamily: 'var(--serif)' }}>Recreación</h3>
              <p style={{ opacity: 0.8, lineHeight: '1.7' }}>Espacios abiertos para caminar, aprender del vivero y reconectar con la esencia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CIERRE INVITACIÓN */}
      <section style={{ padding: '10rem 10%', textAlign: 'center' }}>
        <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>El viaje continúa</span>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '2rem 0' }}>
          Ven a conocer nuestras raíces.
        </h2>
        <a href="https://wa.me/573166758362" target="_blank" rel="noopener noreferrer" style={{
          display: 'inline-block', padding: '1.5rem 4rem', backgroundColor: 'var(--terracota)',
          color: 'white', textDecoration: 'none', borderRadius: '50px', fontWeight: '600',
          fontSize: '1rem', boxShadow: '0 20px 40px rgba(210, 105, 30, 0.2)'
        }}>
          RESERVAR UNA VISITA AL VIVERO
        </a>
      </section>
    </main>
  );
};

export default SobreNosotros;