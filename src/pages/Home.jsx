import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Compass, ArrowRight } from 'lucide-react';
// Importaciones de Leaflet
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Corrección de Iconos de Leaflet para React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});
L.Marker.prototype.options.icon = DefaultIcon;

export const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const position = [7.0574, -73.1144]; // Coordenadas Río Frío, Floridablanca

  const slides = [
    "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=2000"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <main style={{ scrollBehavior: 'smooth', overflowX: 'hidden' }}>
      
      {/* 1. HERO DINÁMICO (CARRUSEL) */}
      <section id="inicio" style={{ height: '100vh', position: 'relative', overflow: 'hidden' }}>
        {slides.map((img, index) => (
          <div key={index} style={{
            position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.2)), url("${img}")`,
            backgroundSize: 'cover', backgroundPosition: 'center',
            opacity: currentSlide === index ? 1 : 0,
            transition: 'opacity 1.5s ease-in-out',
            transform: currentSlide === index ? 'scale(1.05)' : 'scale(1)',
            transitionProperty: 'opacity, transform'
          }} />
        ))}
        
        <div style={{ 
          position: 'relative', height: '100%', display: 'flex', flexDirection: 'column', 
          justifyContent: 'center', alignItems: 'center', color: 'white', textAlign: 'center', zIndex: 2 
        }}>
          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', fontFamily: 'var(--serif)', fontWeight: '400', marginBottom: '1.5rem' }}>
            Tu refugio verde te espera
          </h1>
          <p style={{ fontSize: '1.1rem', letterSpacing: '6px', textTransform: 'uppercase', opacity: 0.9 }}>
            Floridablanca, Santander
          </p>
          <div style={{ marginTop: '3rem', display: 'flex', gap: '20px' }}>
             {slides.map((_, i) => (
               <div key={i} style={{ width: '40px', height: '2px', backgroundColor: currentSlide === i ? 'white' : 'rgba(255,255,255,0.3)', transition: '0.3s' }} />
             ))}
          </div>
        </div>
      </section>

      {/* 2. INTRODUCCIÓN */}
      <section style={{ padding: '8rem 10%', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem' }}>Bienvenido al Origen</span>
          <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', color: 'var(--verde-selva)', margin: '1.5rem 0' }}>
            Cultivamos Vida, Creamos Espacios Verdes
          </h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#555', fontWeight: '300' }}>
            Vegas del Verde es un oasis metropolitano. Cerca de todo, pero sumergido en un silencio forestal absoluto donde la naturaleza dicta el ritmo.
          </p>
        </div>
      </section>

{/* 3. NUESTROS SERVICIOS - LA POSADA */}
      <section id="servicios" style={{ padding: '4rem 5% 6rem 5%', backgroundColor: '#FFFFFF' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '4rem', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <div style={{ 
              position: 'absolute', top: '-20px', left: '-20px', width: '100%', height: '100%', 
              border: '1px solid var(--terracota)', borderRadius: '30px', zIndex: 0 
            }}></div>
            <img 
              src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=1000" 
              alt="La Posada"
              style={{ width: '100%', height: '600px', objectFit: 'cover', borderRadius: '30px', position: 'relative', zIndex: 1 }}
            />
          </div>

          <div style={{ flex: '1 1 400px' }}>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '600' }}>Exclusividad</span>
            <h3 style={{ fontSize: '3.5rem', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '1rem 0' }}>La Posada</h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.7', color: '#666', marginBottom: '2.5rem' }}>
              Un concepto de alojamiento que integra el lujo con la biodiversidad. Cuatro suites privadas donde el bosque es tu única pared.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '3rem' }}>
              {['Piscina Natural', 'Vistas al Bosque', 'Desayuno Gourmet', 'Wifi Premium'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.85rem', color: 'var(--verde-selva)', fontWeight: '500' }}>
                  <div style={{ width: '5px', height: '5px', backgroundColor: 'var(--terracota)', borderRadius: '50%' }}></div>
                  {item}
                </div>
              ))}
            </div>
            <Link to="/servicios" style={{
              display: 'inline-block', padding: '1.2rem 2.5rem', backgroundColor: 'var(--verde-selva)', color: 'white',
              textDecoration: 'none', borderRadius: '50px', fontSize: '0.9rem', letterSpacing: '2px', transition: '0.3s'
            }} onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'var(--terracota)'}
               onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'var(--verde-selva)'}>
              EXPLORAR TODOS LOS SERVICIOS
            </Link>
          </div>
        </div>
      </section>

      {/* DIVISOR ASIMÉTRICO ENTRE SECCIONES */}
      <div style={{ backgroundColor: '#FFFFFF', lineHeight: 0 }}>
        <svg viewBox="0 0 1440 100" style={{ fill: '#F9F7F2', display: 'block' }}>
          <path d="M0,96L1440,32L1440,100L0,100Z"></path>
        </svg>
      </div>

      {/* 4. ACTIVIDADES Y ENTORNO - Fondo Crema Suave */}
      <section id="actividades" style={{ 
        padding: '2rem 10% 10rem 10%', 
        backgroundColor: '#F9F7F2', 
        position: 'relative' 
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center', maxWidth: '1200px', margin: '0 auto' }}>
          <div>
            <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '1rem' }}>
              Explora el Corazón de Santander
            </span>
            <h2 style={{ fontFamily: 'var(--serif)', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', color: 'var(--verde-selva)', marginBottom: '2rem', fontWeight: '400', lineHeight: '1.1' }}>
              Actividades y <br /> Entorno
            </h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', color: '#555', fontWeight: '300', marginBottom: '2rem' }}>
              La ubicación de <strong>Vegas del Verde</strong> permite disfrutar de la tranquilidad de Río Frío sin alejarse de la comodidad de la ciudad.
            </p>
            <div style={{ padding: '1.5rem', borderLeft: '3px solid var(--terracota)', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '0 20px 20px 0' }}>
              <p style={{ fontSize: '1rem', color: 'var(--verde-selva)', fontWeight: '600', margin: 0 }}>
                Un entorno privilegiado perfecto para senderismo, avistamiento de aves y descanso absoluto.
              </p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '15px', position: 'relative' }}>
            <div style={{ gridColumn: '1 / 3', height: '350px', overflow: 'hidden', borderRadius: '40px 40px 5px 40px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Entorno" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '5px 5px 5px 40px' }}>
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Naturaleza" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ height: '200px', overflow: 'hidden', borderRadius: '5px 40px 40px 5px' }}>
              <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" alt="Floridablanca" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          </div>
        </div>

        {/* Divisor Visual para unir con la siguiente sección */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', overflow: 'hidden', lineHeight: 0 }}>
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" style={{ width: '100%', height: '60px', fill: '#FFFFFF' }}>
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.23,103.19,118.57,105.79,176.85,95.8c61.45-10.51,118-28.58,176.85-39.36H321.39Z"></path>
            </svg>
        </div>
      </section>
      {/* 5. SECCIÓN LOCALIZACIÓN - Fondo Blanco Puro */}
      <section id="localizacion" style={{ padding: '4rem 10% 8rem 10%', backgroundColor: '#FFFFFF', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'center' }}>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
                <Compass size={20} color="var(--terracota)" />
                <span style={{ color: 'var(--terracota)', letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontWeight: '800' }}>
                  Tu Destino Eco-Turístico
                </span>
              </div>
              
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontFamily: 'var(--serif)', color: 'var(--verde-selva)', margin: '0 0 1.5rem 0', fontWeight: '400', lineHeight: '1.2' }}>
                ¿Cómo llegar? <br /> <span style={{ color: 'var(--terracota)', fontSize: '0.7em' }}>Ruta a la desconexión.</span>
              </h2>
              
              <p style={{ fontSize: '1.1rem', color: '#555', lineHeight: '1.7', marginBottom: '2.5rem', fontWeight: '300' }}>
                Vegas del Verde se encuentra estratégicamente ubicado para ofrecerte paz sin perder la conectividad.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                  <div style={{ padding: '10px', backgroundColor: '#F9F7F2', borderRadius: '12px' }}>
                    <MapPin size={22} color="var(--terracota)" />
                  </div>
                  <div>
                    <h4 style={{ margin: 0, color: 'var(--verde-selva)', fontSize: '1rem' }}>Sector Río Frío</h4>
                    <span style={{ color: '#777', fontSize: '0.9rem' }}>Granja Potosí, Floridablanca.</span>
                  </div>
                </div>
              </div>

              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ 
                display: 'inline-flex', alignItems: 'center', gap: '12px', padding: '1.2rem 2.8rem', 
                backgroundColor: 'var(--verde-selva)', color: 'white', textDecoration: 'none', 
                borderRadius: '50px', fontWeight: '600', fontSize: '0.85rem', letterSpacing: '1px',
                boxShadow: '0 15px 30px rgba(26, 46, 26, 0.15)', transition: '0.3s'
              }} onMouseOver={e => e.currentTarget.style.backgroundColor = 'var(--terracota)'}
                 onMouseOut={e => e.currentTarget.style.backgroundColor = 'var(--verde-selva)'}>
                ABRIR EN GOOGLE MAPS <ArrowRight size={16} />
              </a>
            </div>

            <div style={{ position: 'relative' }}>
              <div style={{ 
                position: 'relative', height: '500px', borderRadius: '40px', overflow: 'hidden', 
                boxShadow: '0 30px 60px rgba(0,0,0,0.12)', border: '8px solid white', zIndex: 1
              }}>
                <iframe
                  title="Google Maps Vegas del Verde"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3959.3473183577583!2d-73.1144!3d7.0574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2sco!4v1700000000000"
                  width="100%" height="100%" style={{ border: 0 }} loading="lazy"
                ></iframe>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};