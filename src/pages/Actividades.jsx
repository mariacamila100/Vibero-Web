import React from 'react';
import { Camera, Bird, Heart, Baby, Trees, Compass } from 'lucide-react';

export const Actividades = () => {
  // Estilo base para las tarjetas tipo "Nota" para evitar espacios excesivos
  const cardStyle = {
    backgroundColor: 'white',
    padding: '1.5rem',
    borderRadius: '2px',
    boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    border: '1px solid rgba(0,0,0,0.03)'
  };

  return (
    <main style={{
      backgroundColor: 'var(--crema)',
      backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")', // Textura integrada
      minHeight: '100vh'
    }}>

      {/* 1. HERO COMPACTO */}
      {/* 1. HERO COMPACTO - USANDO FOTO REAL ADJUNTA */}
      <section style={{
        height: '40vh', // Aumenté un poco la altura para que la foto se luzca más
        // CAMBIO DE RUTA: Apunta a tu archivo local
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url("/banner_actividad.png")', // Asegúrate de que esta ruta sea correcta
        backgroundSize: 'cover',
        backgroundPosition: 'center', // Ajusta esto (ej: 'center 60%') si el encuadre no te gusta
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        position: 'relative' // Necesario para el wave divider inferior si lo añades
      }}>
        <h1 style={{
          fontFamily: 'var(--serif)',
          fontSize: 'clamp(3rem, 7vw, 5rem)', // Un poco más grande para el nuevo height
          margin: 0,
          textShadow: '0 2px 10px rgba(0,0,0,0.4)' // Mejora legibilidad
        }}>
          Experiencias
        </h1>
      </section>

      {/* 2. SANTUARIO DE AVES (PAJAREO) */}
      <section style={{ padding: '4rem 10%' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: 'bold' }}>Nuestra Joya</span>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '0.5rem 0' }}>Santuario de Aves</h2>
          <div style={{ width: '50px', margin: '0 auto' }}>
            <img src="/src/assets/iconvegas.png" alt="Icono" style={{ width: '100%', opacity: 0.8 }} /> {/* Icono centrado */}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', maxWidth: '1100px', margin: '0 auto' }}>
          {[
            {
              title: "Avistamiento",
              img: "/ave.png",
              desc: "Sábados 7-11 AM. 101 especies registradas." // Datos reales
            },
            {
              title: "Taller Iniciación",
              img: "/info.png",
              desc: "Aprende identificación por canto y plumaje." // Datos reales
            },
            {
              title: "Pajareo Guiado",
              img: "/aguila.png",
              desc: "Recorrido especializado con expertos locales."
            }
          ].map((item, i) => (
            <div key={i} style={cardStyle}>
              <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '1rem' }} />
              <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--verde-selva)', fontSize: '1.3rem' }}>{item.title}</h3>
              <p style={{ color: '#666', fontSize: '0.9rem', marginTop: '0.5rem' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BIENESTAR Y NIÑOS (FILA COMPACTA) */}
      <section style={{ padding: '2rem 10% 6rem 10%' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>

          {/* ADULTOS */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--verde-selva)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Bienestar Adultos</h3>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '2px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem' }}><strong>Yoga Mayores:</strong> Miér. y Vier. 9:30 AM</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem' }}><strong>Caminata Ecovital:</strong> Lun. a Vier. 7-11 AM</p>
              <img src="/pilates.png" alt="Pilates" style={{ width: '100%', height: '300px', objectFit: 'cover', marginTop: '1rem' }} />
            </div>
          </div>

          {/* NIÑOS */}
          <div style={{ textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--serif)', color: 'var(--verde-selva)', fontSize: '1.8rem', marginBottom: '1.5rem' }}>Niños y Juego</h3>
            <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '2px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', textAlign: 'left' }}>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem' }}><strong>We Grow:</strong> Prep. escolar y vacacionales</p>
              <p style={{ fontSize: '0.9rem', marginBottom: '0.8rem' }}><strong>Naturjuegos:</strong> Lunes a Viernes tarde</p>
              <img src="/circo.png" alt="Niños" style={{ width: '100%', height: '300px', objectFit: 'cover', marginTop: '1rem' }} />
            </div>
          </div>

        </div>
      </section>

      {/* 4. CTA CONTACTO COMPACTO - VERSIÓN FONDO BLANCO */}
      <section style={{
        backgroundColor: '#ffffff', // Fondo blanco solicitado
        backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")', // Mantiene la textura de las otras secciones
        padding: '5rem 10%',
        textAlign: 'center',
        color: 'var(--verde-selva)', // Texto en verde para contraste sobre blanco
        borderTop: '1px solid rgba(0,0,0,0.05)'
      }}>
        <h3 style={{
          fontFamily: 'var(--serif)',
          fontSize: '2.2rem',
          marginBottom: '1rem',
          color: 'var(--verde-selva)'
        }}>
          Reserva tu experiencia
        </h3>

        <p style={{
          fontSize: '1rem',
          opacity: 0.8,
          marginBottom: '2.5rem',
          color: '#444',
          maxWidth: '600px',
          margin: '0 auto 2.5rem'
        }}>
          Inscripción previa requerida para todos los talleres y guianzas.
        </p>

        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://wa.me/573167011872" // Contacto para talleres y niños
            style={{
              backgroundColor: 'var(--terracota)',
              color: 'white',
              padding: '1rem 2.2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              boxShadow: '0 4px 15px rgba(204, 115, 81, 0.3)',
              transition: 'transform 0.3s ease'
            }}
            onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
          >
            RESERVAR ACTIVIDAD
          </a>

          <a
            href="https://wa.me/573166758362" // Contacto específico para pajareo
            style={{
              backgroundColor: 'transparent',
              color: 'var(--terracota)',
              padding: '1rem 2.2rem',
              borderRadius: '50px',
              textDecoration: 'none',
              fontWeight: 'bold',
              fontSize: '0.85rem',
              border: '2px solid var(--terracota)',
              transition: 'all 0.3s ease'
            }}
          >
            INFO PAJAREO
          </a>
        </div>
      </section>
    </main>
  );
};

export default Actividades;