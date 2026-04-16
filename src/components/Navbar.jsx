import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Colores dinámicos
  const activeColor = scrolled || isOpen ? 'var(--verde-selva)' : 'white';

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        backgroundColor: scrolled || isOpen ? 'rgba(255, 255, 255, 0.98)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        display: 'flex', justifyContent: 'space-between',
        padding: scrolled ? '1rem 5%' : '1.8rem 5%', // Se encoge al hacer scroll
        alignItems: 'center',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.08)' : 'none'
      }}>

        {/* LOGO CON IMAGEN E IMPACTO VISUAL */}
        <Link to="/" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px', // Espacio entre la imagen y el texto
          textDecoration: 'none',
          transition: 'transform 0.3s ease'
        }}
          onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
          onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
        >
          {/* La imagen del logo que me mostraste */}
          <img
            src="./src/assets/iconvegas.png"
            alt="Logo Vegas del Verde"
            style={{
              height: '45px', // Tamaño ideal para una barra de navegación
              width: 'auto',
              filter: activeColor === 'white'
                ? 'brightness(0) invert(1) drop-shadow(0 2px 4px rgba(0,0,0,0.2))' // Si el texto es blanco, el logo también
                : 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              transition: '0.3s'
            }}
          />

          {/* El texto del logo con la tipografía que ya tenías */}
          <div style={{
            fontFamily: 'var(--serif)',
            fontSize: '1.2rem',
            letterSpacing: '3px',
            color: activeColor,
            fontWeight: '400',
            lineHeight: '1',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <span>VEGAS</span>
            <span style={{ fontSize: '0.7rem', fontWeight: '300', opacity: 0.8, letterSpacing: '5px' }}>
              DEL VERDE
            </span>
          </div>
        </Link>

        {/* Menú Desktop */}
        <div className="nav-desktop" style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }}>
          {['INICIO', 'SERVICIOS', 'ACTIVIDADES', 'NOSOTROS'].map((item) => (
            <Link
              key={item}
              to={item === 'INICIO' ? '/' : `/${item.toLowerCase()}`}
              className="nav-link"
              style={{
                textDecoration: 'none',
                color: activeColor,
                fontSize: '0.85rem',
                fontWeight: '600',
                letterSpacing: '2px',
                position: 'relative',
                transition: '0.3s'
              }}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Hamburguesa */}
        <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '6px', zIndex: 1001 }}>
          <div style={{ width: '28px', height: '2px', backgroundColor: activeColor, transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(6px, 6px)' : '' }}></div>
          <div style={{ width: '28px', height: '2px', backgroundColor: activeColor, opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ width: '28px', height: '2px', backgroundColor: activeColor, transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(6px, -6px)' : '' }}></div>
        </div>
      </nav>

      {/* Menú Móvil Overlay */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? 0 : '-100%',
        width: '100%', height: '100vh', backgroundColor: 'var(--crema)',
        zIndex: 999, transition: '0.6s cubic-bezier(0.77, 0, 0.175, 1)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2rem'
      }}>
        {['INICIO', 'SERVICIOS', 'ACTIVIDADES', 'NOSOTROS'].map((item) => (
          <Link
            key={item}
            to={item === 'INICIO' ? '/' : `/${item.toLowerCase()}`}
            onClick={toggleMenu}
            style={{
              textDecoration: 'none',
              color: 'var(--verde-selva)',
              fontSize: '2.0rem',
              fontFamily: 'var(--serif)',
              letterSpacing: '2px'
            }}
          >
            {item}
          </Link>
        ))}
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; }
          .hamburger { display: none !important; }
        }

        /* Efecto de línea en los links */
        .nav-link::after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -5px;
          left: 0;
          background-color: var(--terracota);
          transition: width 0.3s ease;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          opacity: 0.7;
        }

        .btn-reserva:hover {
          transform: translateY(-3px);
          filter: brightness(1.1);
        }
      `}</style>
    </>
  );
};