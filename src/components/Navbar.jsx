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

  const linkStyle = (isMobile = false) => ({
    textDecoration: 'none',
    color: isMobile ? 'var(--verde-selva)' : (scrolled ? 'var(--verde-selva)' : 'white'),
    fontSize: isMobile ? '1.1rem' : '0.75rem',
    fontWeight: '500',
    letterSpacing: '2px',
    transition: '0.3s'
  });

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%', zIndex: 1000,
        backgroundColor: scrolled || isOpen ? 'white' : 'transparent',
        display: 'flex', justifyContent: 'space-between', 
        padding: '1.2rem 5%', alignItems: 'center',
        transition: '0.4s ease',
        boxShadow: scrolled ? '0 10px 30px rgba(0,0,0,0.05)' : 'none'
      }}>
        <Link to="/" style={{ 
          fontFamily: 'var(--serif)', fontSize: '1.1rem', letterSpacing: '2px',
          textDecoration: 'none', color: scrolled || isOpen ? 'var(--verde-selva)' : 'white' 
        }}>
          VEGAS DEL VERDE
        </Link>

        {/* Menú Desktop */}
        <div className="nav-desktop" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
          <Link to="/" style={linkStyle()}>INICIO</Link>
          <Link to="/servicios" style={linkStyle()}>SERVICIOS</Link>
          <Link to="/actividades" style={linkStyle()}>ACTIVIDADES</Link>
          <Link to="/sobreNosotros" style={linkStyle()}>NOSOTROS</Link>
          <Link to="/reservas" style={{ 
            ...linkStyle(), 
            backgroundColor: 'var(--terracota)', 
            color: 'white',
            padding: '0.7rem 1.5rem', 
            borderRadius: '50px',
            marginLeft: '1rem'
          }}>PLANEA TU VISITA</Link>
        </div>

        {/* Icono Hamburguesa (Solo móvil) */}
        <div className="hamburger" onClick={toggleMenu} style={{ cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '5px', zIndex: 1001 }}>
          <div style={{ width: '25px', height: '2px', backgroundColor: scrolled || isOpen ? 'var(--verde-selva)' : 'white', transition: '0.3s', transform: isOpen ? 'rotate(45deg) translate(5px, 5px)' : '' }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: scrolled || isOpen ? 'var(--verde-selva)' : 'white', opacity: isOpen ? 0 : 1 }}></div>
          <div style={{ width: '25px', height: '2px', backgroundColor: scrolled || isOpen ? 'var(--verde-selva)' : 'white', transition: '0.3s', transform: isOpen ? 'rotate(-45deg) translate(5px, -5px)' : '' }}></div>
        </div>
      </nav>

      {/* Menú Móvil Overlay */}
      <div style={{
        position: 'fixed', top: 0, right: isOpen ? 0 : '-100%',
        width: '100%', height: '100vh', backgroundColor: 'white',
        zIndex: 999, transition: '0.5s cubic-bezier(0.77, 0.2, 0.05, 1.0)',
        display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '2.5rem'
      }}>
        <Link to="/" onClick={toggleMenu} style={linkStyle(true)}>INICIO</Link>
        <Link to="/servicios" onClick={toggleMenu} style={linkStyle(true)}>SERVICIOS</Link>
        <Link to="/actividades" onClick={toggleMenu} style={linkStyle(true)}>ACTIVIDADES</Link>
        <Link to="/sobreNosotros" onClick={toggleMenu} style={linkStyle(true)}>SOBRE NOSOTROS</Link>
        <Link to="/reservas" onClick={toggleMenu} style={{ ...linkStyle(true), backgroundColor: 'var(--terracota)', color: 'white', padding: '1rem 2rem', borderRadius: '50px' }}>PLANEA TU VISITA</Link>
      </div>

      <style>{`
        @media (min-width: 1024px) {
          .nav-desktop { display: flex !important; }
          .hamburger { display: none !important; }
        }
      `}</style>
    </>
  );
};