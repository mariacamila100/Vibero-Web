import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Instala: npm install react-helmet-async
// En tu App.jsx envuelve todo con <HelmetProvider>
import { Helmet } from 'react-helmet-async';

// --- COMPONENTE DE DECORACIÓN ---
const SectionDivider = () => (
  <div role="presentation" style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1.8rem 0',
    gap: '10px'
  }}>
    <img
      src="/iconvegas.png"
      alt="Icono decorativo Vegas del Verde"
      width="75"
      height="75"
      style={{ width: '75px', height: 'auto', objectFit: 'contain' }}
    />
    <div style={{
      width: '120px',
      height: '2px',
      backgroundColor: 'var(--terracota)',
      opacity: 0.5,
      borderRadius: '2px'
    }}></div>
  </div>
);

// --- SEPARADOR ORGÁNICO SVG entre secciones (evita el corte visual brusco) ---
const WaveDivider = ({ fromColor = '#FFFFFF', toColor = '#FFFFFF', flip = false }) => (
  <div
    role="presentation"
    style={{
      lineHeight: 0,
      overflow: 'hidden',
      transform: flip ? 'scaleX(-1)' : 'none',
      margin: 0,
      padding: 0,
      display: 'block'
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 60"
      preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: '60px' }}
    >
      <path
        d="M0,0 C360,60 1080,60 1440,0 L1440,60 L0,60 Z"
        fill={toColor}
      />
    </svg>
  </div>
);

export const Home = () => {
  const [formData, setFormData] = useState({ nombre: '', correo: '', mensaje: '' });
  const [enviando, setEnviando] = useState(false);
  const [mostrarExito, setMostrarExito] = useState(false);

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-section').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviando(true);
    const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz0DjgWIjF1u6Qwb1wWeSdUNBfrT13i7t2Xf-GHpwsrFWJwLuomVAezo9Q_MD4M114h/exec';
    const params = new URLSearchParams();
    params.append("nombre", formData.nombre);
    params.append("correo", formData.correo);
    params.append("mensaje", formData.mensaje);

    fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params.toString()
    }).catch(err => console.error("Error al enviar formulario:", err));

    setMostrarExito(true);
    setFormData({ nombre: '', correo: '', mensaje: '' });
    setTimeout(() => setMostrarExito(false), 4000);
    setEnviando(false);
  };

  const revealStyle = {
    opacity: 0,
    transform: 'translateY(40px)',
    transition: 'all 0.9s cubic-bezier(0.2, 0.8, 0.2, 1)',
    willChange: 'transform, opacity'
  };

  // JSON-LD: datos estructurados para Google (LodgingBusiness + TouristAttraction)
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "name": "Vegas del Verde – La Posada",
        "description": "Oasis metropolitano en Santander, Colombia. Alojamiento de lujo integrado con la biodiversidad forestal.",
        "url": "https://vegasdelverde.com",
        "image": "https://vegasdelverde.com/og-image.jpg",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Vereda Río Frío, Sector Vegas",
          "addressLocality": "Santander",
          "addressCountry": "CO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "6.9306",
          "longitude": "-73.0427"
        },
        "amenityFeature": [
          { "@type": "LocationFeatureSpecification", "name": "Naturaleza y Biodiversidad", "value": true },
          { "@type": "LocationFeatureSpecification", "name": "Silencio forestal", "value": true }
        ]
      },
      {
        "@type": "TouristAttraction",
        "name": "Vegas del Verde",
        "description": "Refugio natural en Santander, Colombia. Combina lujo, biodiversidad y descanso.",
        "url": "https://vegasdelverde.com",
        "touristType": "Ecoturismo"
      }
    ]
  };

  return (
    <main style={{
      width: '100%',
      position: 'relative',
      backgroundColor: 'var(--crema)',
      fontFamily: 'var(--sans)',
      minHeight: '100dvh'
    }}>

      {/* ── SEO: META DATOS COMPLETOS ── */}
      <Helmet>
        <title>Vegas del Verde | Refugio Natural en Santander, Colombia</title>
        <meta name="description" content="Vegas del Verde es un oasis metropolitano en Santander, Colombia. Descubre La Posada: alojamiento de lujo integrado con la biodiversidad forestal. Solicita información." />
        <meta name="keywords" content="ecoturismo Santander, alojamiento naturaleza Colombia, finca ecológica Santander, La Posada Vegas del Verde, refugio verde Colombia" />
        <link rel="canonical" href="https://vegasdelverde.com/" />

        {/* Open Graph (WhatsApp, Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://vegasdelverde.com/" />
        <meta property="og:title" content="Vegas del Verde | Refugio Natural en Santander, Colombia" />
        <meta property="og:description" content="Un oasis metropolitano en Santander. Cerca de todo, sumergido en un silencio forestal absoluto. Conoce La Posada." />
        <meta property="og:image" content="https://vegasdelverde.com/og-image.jpg" />
        <meta property="og:locale" content="es_CO" />
        <meta property="og:site_name" content="Vegas del Verde" />

        {/* Twitter / X Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vegas del Verde | Refugio Natural en Santander" />
        <meta name="twitter:description" content="Alojamiento de lujo integrado con la biodiversidad de Santander, Colombia." />
        <meta name="twitter:image" content="https://vegasdelverde.com/og-image.jpg" />

        {/* Datos estructurados JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* ── 1. HERO ── */}
      <section id="inicio" style={{ height: '100vh', width: '100%', position: 'relative', overflow: 'hidden' }}>
        <video
          autoPlay loop muted playsInline
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="/mariposa.mp4" type="video/mp4" />
        </video>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3))', zIndex: 1 }} />
        <div style={{ position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', zIndex: 2, padding: '0 5%' }}>
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6rem)',
            fontFamily: 'var(--serif)',
            fontWeight: '400',
            lineHeight: 1.1,
            margin: 0
          }}>
            Tu refugio verde <br /> te espera
          </h1>
          <p style={{ fontSize: '1.2rem', letterSpacing: '8px', textTransform: 'uppercase', marginTop: '1.5rem', marginBottom: '2.5rem', opacity: 0.9 }}>
            Santander, Colombia
          </p>
          <a
            href="#localizacion"
            style={{ backgroundColor: 'var(--terracota)', color: 'white', padding: '1.2rem 2.8rem', borderRadius: '50px', textDecoration: 'none', fontWeight: '700', fontSize: '1rem', letterSpacing: '2px', textTransform: 'uppercase', boxShadow: '0 10px 25px rgba(0,0,0,0.2)' }}
          >
            Solicitar Información
          </a>
        </div>
      </section>
      {/* ── 2. INTRODUCCIÓN OPTIMIZADA ── */}
{/* ── 2. INTRODUCCIÓN MEJORADA ── */}
<section
  id="nosotros"
  className="reveal-section"
  style={{ 
    ...revealStyle, 
    padding: '8rem 10%', 
    backgroundColor: 'var(--crema)', 
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")',
    overflow: 'hidden'
  }}
>
  <div style={{ 
    maxWidth: '1200px', 
    margin: '0 auto', 
    display: 'grid', 
    gridTemplateColumns: '1.2fr 0.8fr', 
    gap: '4rem', 
    alignItems: 'center' 
  }}>
    
    {/* TEXTO */}
    <div style={{ textAlign: 'left' }}>
      
      <span style={{ 
        color: 'var(--terracota)', 
        letterSpacing: '4px', 
        textTransform: 'uppercase', 
        fontSize: '0.75rem', 
        fontWeight: 'bold'
      }}>
        Más que un vivero
      </span>
      
      <h2 style={{ 
        fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', 
        color: 'var(--verde-selva)', 
        lineHeight: '1.1',
        fontFamily: 'var(--serif)',
        margin: '1rem 0 2rem 0'
      }}>
        Una pausa en medio del caos
      </h2>

      <p style={{ 
        fontSize: '1.2rem', 
        lineHeight: '1.7', 
        color: '#444',
        marginBottom: '1.5rem'
      }}>
        En <strong>Bucaramanga</strong>, creamos un espacio donde el tiempo baja la velocidad 
        y la naturaleza vuelve a tener sentido.
      </p>

      <p style={{ 
        fontSize: '1.05rem', 
        lineHeight: '1.7', 
        color: '#666'
      }}>
        Aquí no vienes solo a comprar plantas. Vienes a desconectar, respirar y reconectar contigo.
      </p>
    </div>

    {/* IMAGENES */}
    <div style={{ position: 'relative' }}>

      {/* Imagen principal */}
      <div style={{
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
        transform: 'rotate(-2deg)',
        transition: 'all 0.4s ease'
      }}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03) rotate(0deg)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}
      >
        <img 
          src="/yoga.png"
          alt="Naturaleza"
          style={{ width: '100%', display: 'block' }} 
        />
      </div>

      {/* Imagen secundaria flotante */}
      <div style={{
        position: 'absolute',
        bottom: '-40px',
        left: '-40px',
        width: '180px',
        borderRadius: '15px',
        overflow: 'hidden',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)',
        transform: 'rotate(5deg)'
      }}>
        <img 
          src="/aguila.png"
          alt="Detalle planta"
          style={{ width: '100%' }} 
        />
      </div>

    </div>
  </div>
</section>
      {/* ── 3. SERVICIOS ──
          CAMBIO: se eliminó el borderRadius 80px 80px 0 0 que creaba un "escalón" blanco
          y se añadió paddingBottom reducido para que el wave divider cierre la sección sin hueco. */}
      <section
        id="servicios"
        className="reveal-section"
        style={{ ...revealStyle, padding: '6rem 5% 5rem 5%', backgroundColor: '#FFFFFF', position: 'relative', zIndex: 5 }}
      >
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '6rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ position: 'absolute', top: '20px', left: '20px', right: '-20px', bottom: '-20px', border: '2px solid var(--terracota)', borderRadius: '40px', zIndex: 0 }}></div>
            <img
              src="/pos.png"
              alt="Instalaciones de La Posada en Vegas del Verde, Santander"
              loading="lazy"
              width="1000"
              height="600"
              style={{ width: '100%', height: '450px', objectFit: 'cover', borderRadius: '40px', position: 'relative', zIndex: 1 }}
            />
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700' }}>Exclusividad</span>
            <h2 style={{ fontSize: '4rem', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '1rem 0' }}>Ecoposada</h2>
            <SectionDivider />
            <p style={{ fontSize: '1.3rem', lineHeight: '1.8', color: '#555', marginBottom: '3rem' }}>
              Un concepto de alojamiento que integra el lujo con la biodiversidad de la región.
            </p>
            <Link
              to="/servicios"
              style={{ display: 'inline-block', padding: '1.3rem 3rem', backgroundColor: 'var(--verde-selva)', color: 'white', textDecoration: 'none', borderRadius: '50px', fontWeight: '600' }}
            >
              EXPLORAR SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRANSICIÓN VISUAL: ola que une Servicios (#FFF) con Galería (#FFF sobre fondo crema) ──
          Esto evita el corte brusco y los espacios vacíos entre secciones. */}
      <div style={{ backgroundColor: '#FFFFFF', lineHeight: 0, margin: 0, padding: 0 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '50px' }}
          aria-hidden="true"
        >
          <path
            d="M0,0 C480,50 960,50 1440,0 L1440,50 L0,50 Z"
            fill="var(--crema)"
          />
        </svg>
      </div>

      {/* ── 4. GALERÍA CON EFECTO POLAROID DINÁMICO ── */}
<section
  id="actividades"
  className="reveal-section"
  style={{ 
    ...revealStyle, 
    padding: '2rem 5% 6rem 5%', 
    backgroundColor: 'var(--crema)', 
    backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' 
  }}
>
  {/* Estilos para el efecto de las imágenes */}
  <style>{`
    .galeria-item {
      position: relative;
      transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
      cursor: pointer;
    }
    .galeria-item:hover {
      transform: rotate(0deg) scale(1.05) translateY(-10px) !important;
      z-index: 10;
    }
    .galeria-item:hover img {
      box-shadow: 0 30px 60px rgba(0,0,0,0.25) !important;
      border-color: #fcfcfc !important;
    }
    .galeria-item:hover .cinta-adhesiva {
      background-color: #d1d1d1 !important;
      transform: translateX(-50%) scale(1.1);
    }
  `}</style>

  <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
    <span style={{ color: 'var(--terracota)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold' }}>
      Galería
    </span>
    <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--verde-selva)', marginTop: '0.5rem' }}>
      Momentos Vegas
    </h2>
    <SectionDivider />

    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
      gap: '3.5rem', 
      marginTop: '4rem' 
    }}>
      {[
        { src: "/inspo2.png", alt: "Planta tropical en Vegas del Verde Santander" },
        { src: "/image.png", alt: "Helecho nativo del bosque en Vegas del Verde" },
        { src: "/inspo3.png", alt: "Sendero forestal de Vegas del Verde" },
        { src: "/inspov.png", alt: "Amanecer en la naturaleza de Santander Colombia" }
      ].map(({ src, alt }, index) => (
        <div 
          key={src} 
          className="galeria-item"
          style={{
            transform: `rotate(${index % 2 === 0 ? '-3deg' : '3deg'})`,
          }}
        >
          {/* Cinta adhesiva decorativa */}
          <div className="cinta-adhesiva" style={{ 
            position: 'absolute', 
            top: '-15px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            width: '40px', 
            height: '25px', 
            backgroundColor: 'rgba(189, 189, 189, 0.8)', 
            borderRadius: '2px', 
            zIndex: 2, 
            border: '1px solid rgba(0,0,0,0.1)',
            transition: '0.3s'
          }}></div>

          <img
            src={`${src}?auto=format&fit=crop&w=600&q=80`}
            alt={alt}
            loading="lazy"
            width="600"
            height="320"
            style={{ 
              width: '100%', 
              height: '350px', 
              objectFit: 'cover', 
              borderRadius: '2px', 
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)', 
              border: '10px solid white',
              borderBottomWidth: '40px' // Simula el espacio de una Polaroid
            }}
          />
        </div>
      ))}
    </div>
  </div>
</section>

      {/* ── TRANSICIÓN: crema → blanco para la sección de contacto ── */}
      <div style={{ backgroundColor: 'var(--crema)', lineHeight: 0, margin: 0, padding: 0 }}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 50"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '50px' }}
          aria-hidden="true"
        >
          <path
            d="M0,50 C480,0 960,0 1440,50 L1440,50 L0,50 Z"
            fill="#FFFFFF"
          />
        </svg>
      </div>

      {/* ── 5. CONTACTO ── */}
<section
  id="localizacion"
  className="reveal-section"
  style={{ 
    ...revealStyle, 
    padding: '3.5rem 5% 6rem 5%', 
    backgroundColor: '#FFFFFF', 
    position: 'relative' 
  }}
>
  <div style={{ maxWidth: '1050px', margin: '0 auto' }}>

    {/* HEADER MEJORADO */}
    <div style={{ 
      textAlign: 'center', 
      marginBottom: '4rem',
      position: 'relative'
    }}>
      <span style={{ 
        color: 'var(--terracota)', 
        letterSpacing: '6px', 
        textTransform: 'uppercase', 
        fontSize: '0.8rem', 
        fontWeight: 'bold'
      }}>
        Contacto
      </span>

      <h2 style={{ 
        fontFamily: 'var(--serif)', 
        fontSize: 'clamp(3rem, 6vw, 4.5rem)', 
        color: 'var(--verde-selva)', 
        lineHeight: '1.1',
        margin: '1rem 0'
      }}>
        ¿Hablamos?
      </h2>

      <div style={{
        width: '80px',
        height: '2px',
        background: 'var(--terracota)',
        margin: '0 auto',
        boxShadow: '0 0 10px rgba(191,122,91,0.4)'
      }}></div>

      <p style={{
        marginTop: '1.5rem',
        color: '#666',
        fontSize: '1.05rem'
      }}>
        Cuéntanos qué necesitas. Nosotros nos encargamos del resto.
      </p>
    </div>

    {/* GRID */}
    <div style={{ 
      display: 'grid', 
      gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
      gap: '2.5rem', 
      alignItems: 'start' 
    }}>

      {/* FORMULARIO */}
      <div 
        style={{ 
          backgroundColor: '#fff', 
          padding: '2.5rem', 
          borderRadius: '30px', 
          boxShadow: '0 30px 60px rgba(0,0,0,0.1)', 
          border: '1px solid #f5f5f5',
          position: 'relative',
          overflow: 'hidden',
          zIndex: 10,
          transition: 'all 0.3s ease'
        }}
        onMouseEnter={(e)=> e.currentTarget.style.transform='translateY(-5px)'}
        onMouseLeave={(e)=> e.currentTarget.style.transform='translateY(0px)'}
      >

        {/* ALERTA */}
        <div style={{
          position: 'absolute',
          top: mostrarExito ? '20px' : '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: 'var(--verde-selva)',
          color: 'white',
          padding: '1rem 2rem',
          borderRadius: '15px',
          zIndex: 100,
          transition: 'all 0.5s ease',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          width: '85%',
          justifyContent: 'center'
        }}>
          <span>🌿</span>
          <span style={{ fontWeight: '600' }}>¡Solicitud enviada con éxito!</span>
        </div>

        <h3 style={{ 
          fontSize: '1.8rem', 
          color: 'var(--verde-selva)', 
          marginBottom: '1.2rem', 
          fontFamily: 'var(--serif)' 
        }}>
          Envíanos un mensaje
        </h3>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

          {/* NOMBRE */}
          <input
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            type="text"
            placeholder="Tu nombre"
            style={{ 
              padding: '1rem', 
              borderRadius: '12px', 
              border: '1px solid #eee',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e)=> e.target.style.border='1px solid var(--terracota)'}
            onBlur={(e)=> e.target.style.border='1px solid #eee'}
          />

          {/* CORREO */}
          <input
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
            type="email"
            placeholder="Tu correo electrónico"
            style={{ 
              padding: '1rem', 
              borderRadius: '12px', 
              border: '1px solid #eee',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e)=> e.target.style.border='1px solid var(--terracota)'}
            onBlur={(e)=> e.target.style.border='1px solid #eee'}
          />

          {/* MENSAJE */}
          <textarea
            id="mensaje"
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            required
            rows="3"
            placeholder="Escribe tu mensaje..."
            style={{ 
              padding: '1rem', 
              borderRadius: '12px', 
              border: '1px solid #eee',
              resize: 'none',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e)=> e.target.style.border='1px solid var(--terracota)'}
            onBlur={(e)=> e.target.style.border='1px solid #eee'}
          />

          {/* BOTÓN */}
          <button
            type="submit"
            disabled={enviando}
            style={{ 
              background: 'linear-gradient(135deg, var(--verde-selva), #2f5d3a)',
              color: 'white', 
              padding: '1.2rem', 
              borderRadius: '14px', 
              border: 'none', 
              fontWeight: 'bold',
              letterSpacing: '1px',
              cursor: enviando ? 'not-allowed' : 'pointer',
              boxShadow: '0 10px 25px rgba(0,0,0,0.15)',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e)=> e.currentTarget.style.transform='scale(1.03)'}
            onMouseLeave={(e)=> e.currentTarget.style.transform='scale(1)'}
          >
            {enviando ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
          </button>

        </form>
      </div>

      {/* INFO + MAPA */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

        {/* UBICACIÓN */}
        <div style={{ 
          padding: '2rem', 
          backgroundColor: 'var(--crema)', 
          borderRadius: '25px', 
          borderLeft: '5px solid var(--terracota)' 
        }}>
          <h4 style={{ 
            color: 'var(--terracota)', 
            fontWeight: '800', 
            textTransform: 'uppercase', 
            fontSize: '0.75rem', 
            marginBottom: '0.8rem' 
          }}>
            Ubicación en Santander
          </h4>

          <address style={{ 
            fontStyle: 'normal', 
            fontSize: '1.2rem', 
            color: 'var(--verde-selva)', 
            fontFamily: 'var(--serif)' 
          }}>
            Vereda Río Frío, Sector Vegas, <br /> Santander, Colombia
          </address>
        </div>

        {/* MAPA MEJORADO */}
        <div style={{ 
          height: '300px', 
          borderRadius: '25px', 
          overflow: 'hidden', 
          position: 'relative',
          boxShadow: '0 20px 40px rgba(0,0,0,0.12)'
        }}>

          <iframe
            title="Mapa ubicación"
            src="https://maps.google.com/maps?q=Santander,Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            loading="lazy"
            style={{ 
              border: 0, 
              filter: 'grayscale(0.4) contrast(1.1)'
            }}
          ></iframe>

          <div style={{
            position: 'absolute',
            bottom: '0',
            width: '100%',
            padding: '1rem',
            background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
            color: 'white',
            fontSize: '0.9rem'
          }}>
            📍 Santander, Colombia
          </div>

        </div>
      </div>

    </div>
  </div>
</section>
    </main>
  );
};