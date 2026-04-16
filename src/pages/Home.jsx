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

      {/* ── 2. INTRODUCCIÓN ── */}
      <section
        id="nosotros"
        className="reveal-section"
        style={{ ...revealStyle, padding: '8rem 10%', backgroundColor: 'var(--crema)', backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
      >
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: 'var(--terracota)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.9rem', fontWeight: 'bold' }}>Bienvenido al Origen</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--verde-selva)', marginTop: '1rem', fontFamily: 'var(--serif)' }}>
            Cultivamos Vida, Creamos Espacios Verdes
          </h2>
          <SectionDivider />
          <p style={{ fontSize: '1.4rem', lineHeight: '1.8', color: '#444', fontWeight: '300' }}>
            Vegas del Verde es un oasis metropolitano en Santander. Cerca de todo, pero sumergido en un silencio forestal absoluto.
          </p>
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
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000"
              alt="Instalaciones de La Posada en Vegas del Verde, Santander"
              loading="lazy"
              width="1000"
              height="600"
              style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '40px', position: 'relative', zIndex: 1 }}
            />
          </div>
          <div style={{ flex: '1 1 400px', textAlign: 'center' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '700' }}>Exclusividad</span>
            <h2 style={{ fontSize: '4rem', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '1rem 0' }}>La Posada</h2>
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

      {/* ── 4. GALERÍA ──
          CAMBIO: fondo cambiado a var(--crema) para conectar visualmente con el wave divider
          y eliminar el contraste blanco/blanco que generaba espacios vacíos sin sentido. */}
      <section
        id="actividades"
        className="reveal-section"
        style={{ ...revealStyle, padding: '3rem 5% 8rem 5%', backgroundColor: 'var(--crema)', backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: 'var(--terracota)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold' }}>Galería</span>
          <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--verde-selva)', marginTop: '0.5rem' }}>
            Momentos del Paraíso
          </h2>
          <SectionDivider />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2.5rem', marginTop: '3rem' }}>
            {[
              { src: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", alt: "Planta tropical en Vegas del Verde Santander" },
              { src: "https://images.unsplash.com/photo-1497250681960-ef046c08a56e", alt: "Helecho nativo del bosque en Vegas del Verde" },
              { src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9", alt: "Sendero forestal de Vegas del Verde" },
              { src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e", alt: "Amanecer en la naturaleza de Santander Colombia" }
            ].map(({ src, alt }, index) => (
              <div key={src} style={{
                position: 'relative',
                transform: `rotate(${index % 2 === 0 ? '-2deg' : '2deg'})`,
                transition: 'all 0.4s ease'
              }}>
                <div style={{ position: 'absolute', top: '-15px', left: '50%', transform: 'translateX(-50%)', width: '35px', height: '25px', backgroundColor: '#BDBDBD', borderRadius: '4px', zIndex: 2, border: '1px solid #999' }}></div>
                <img
                  src={`${src}?auto=format&fit=crop&w=600&q=80`}
                  alt={alt}
                  loading="lazy"
                  width="600"
                  height="320"
                  style={{ width: '100%', height: '320px', objectFit: 'cover', borderRadius: '8px', boxShadow: '0 15px 35px rgba(0,0,0,0.18)', border: '8px solid white' }}
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
        style={{ ...revealStyle, padding: '6rem 5% 8rem 5%', backgroundColor: '#FFFFFF', position: 'relative' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '5px', textTransform: 'uppercase', fontSize: '0.85rem', fontWeight: 'bold', display: 'block', marginBottom: '0.5rem' }}>Contacto</span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--verde-selva)', lineHeight: '1.1' }}>¿Hablamos?</h2>
            <SectionDivider />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem', alignItems: 'start' }}>
            <div style={{ backgroundColor: '#fff', padding: '2.5rem', borderRadius: '30px', boxShadow: '0 20px 50px -12px rgba(0, 0, 0, 0.08)', border: '1px solid #f0f0f0', position: 'relative', overflow: 'hidden', zIndex: 10 }}>
              <div style={{
                position: 'absolute', top: mostrarExito ? '20px' : '-100px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: 'var(--verde-selva)', color: 'white', padding: '1rem 2rem', borderRadius: '15px',
                zIndex: 100, transition: 'all 0.5s ease', display: 'flex', alignItems: 'center', gap: '10px', width: '85%', justifyContent: 'center'
              }}>
                <span>🌿</span> <span style={{ fontWeight: '600' }}>¡Solicitud enviada con éxito!</span>
              </div>

              <h3 style={{ fontSize: '1.8rem', color: 'var(--verde-selva)', marginBottom: '1.2rem', fontFamily: 'var(--serif)' }}>Envíanos un mensaje</h3>
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="nombre" style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--verde-selva)', marginBottom: '5px' }}>NOMBRE</label>
                  <input id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} required type="text" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="correo" style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--verde-selva)', marginBottom: '5px' }}>CORREO ELECTRÓNICO</label>
                  <input id="correo" name="correo" value={formData.correo} onChange={handleChange} required type="email" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee' }} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="mensaje" style={{ fontSize: '0.7rem', fontWeight: '800', color: 'var(--verde-selva)', marginBottom: '5px' }}>MENSAJE</label>
                  <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange} required rows="3" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid #eee', resize: 'none' }}></textarea>
                </div>
                <button
                  type="submit"
                  disabled={enviando}
                  style={{ backgroundColor: enviando ? '#ccc' : 'var(--verde-selva)', color: 'white', padding: '1.1rem', borderRadius: '12px', border: 'none', fontWeight: 'bold', cursor: enviando ? 'not-allowed' : 'pointer' }}
                >
                  {enviando ? 'ENVIANDO...' : 'ENVIAR SOLICITUD'}
                </button>
              </form>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div style={{ padding: '2rem', backgroundColor: 'var(--crema)', borderRadius: '25px', borderLeft: '5px solid var(--terracota)' }}>
                <h4 style={{ color: 'var(--terracota)', fontWeight: '800', textTransform: 'uppercase', fontSize: '0.75rem', marginBottom: '0.8rem' }}>Ubicación en Santander</h4>
                <address style={{ fontStyle: 'normal', fontSize: '1.2rem', color: 'var(--verde-selva)', fontFamily: 'var(--serif)' }}>
                  Vereda Río Frío, Sector Vegas, <br /> Santander, Colombia
                </address>
                <nav aria-label="Navegación rápida" style={{ marginTop: '1rem', display: 'flex', gap: '10px' }}>
                  <a href="#inicio" rel="nofollow" style={{ fontSize: '0.7rem', color: 'gray', textDecoration: 'none' }}>Inicio</a> |
                  <a href="#servicios" rel="nofollow" style={{ fontSize: '0.7rem', color: 'gray', textDecoration: 'none' }}>Servicios</a> |
                  <a href="#actividades" rel="nofollow" style={{ fontSize: '0.7rem', color: 'gray', textDecoration: 'none' }}>Galería</a>
                </nav>
              </div>
              <div style={{ height: '300px', borderRadius: '25px', overflow: 'hidden', boxShadow: '0 15px 30px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0' }}>
                <iframe
                  title="Mapa ubicación Vegas del Verde, Vereda Río Frío, Santander, Colombia"
                  src="https://maps.google.com/maps?q=Santander,Colombia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  loading="lazy"
                  style={{ border: 0, filter: 'grayscale(0.3)' }}
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};