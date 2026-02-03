import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle, ArrowRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer style={{ 
      backgroundColor: 'var(--verde-selva)', // Usando tu variable corregida
      color: 'var(--crema)', 
      padding: '5rem 5% 2rem 5%',
      marginTop: '0'
    }}>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
        gap: '4rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* COLUMNA 1: IDENTIDAD */}
        <div>
          <h3 style={{ fontFamily: 'var(--serif)', fontSize: '2rem', marginBottom: '1.2rem', color: 'white' }}>
            Vegas del Verde
          </h3>
          <p style={{ opacity: 0.8, lineHeight: '1.8', fontSize: '0.95rem' }}>
            Ecoposada y refugio natural en Bucaramanga. Un espacio diseñado para el descanso, la desconexión y la vida en armonía con el bosque.
          </p>
        </div>

        {/* COLUMNA 2: SERVICIOS */}
        <div>
          <h4 style={{ color: 'var(--terracota)', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Servicios</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}><ArrowRight size={14} color="var(--terracota)" /> Posada de 4 habitaciones</li>
            <li style={listItemStyle}><ArrowRight size={14} color="var(--terracota)" /> Aire acondicionado y WiFi</li>
            <li style={listItemStyle}><ArrowRight size={14} color="var(--terracota)" /> Sendero Ecovital</li>
            <li style={listItemStyle}><ArrowRight size={14} color="var(--terracota)" /> Encuentros sociales y Yoga</li>
          </ul>
        </div>

        {/* COLUMNA 3: EXPLORA */}
        <div>
          <h4 style={{ color: 'var(--terracota)', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Explora</h4>
          <ul style={listStyle}>
            <li style={listItemStyle}>Sobre Nosotros</li>
            <li style={listItemStyle}>Galería</li>
            <li style={listItemStyle}>Blog Forestal</li>
            <li style={listItemStyle}>Tours Regionales</li>
          </ul>
        </div>

        {/* COLUMNA 4: CONTACTO CON ICONOS */}
        <div id="contacto">
          <h4 style={{ color: 'var(--terracota)', marginBottom: '1.5rem', fontSize: '1.1rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Contacto</h4>
          <div style={contactRowStyle}>
            <Phone size={18} color="var(--terracota)" />
            <span>+57 316 675 8362</span>
          </div>
          <div style={contactRowStyle}>
            <Mail size={18} color="var(--terracota)" />
            <span>vegasdelverde.1@gmail.com</span>
          </div>
          <div style={contactRowStyle}>
            <MapPin size={18} color="var(--terracota)" />
            <span>Bucaramanga, Santander</span>
          </div>
          
          <div style={{ display: 'flex', gap: '20px', marginTop: '2rem' }}>
            <a href="#" style={socialLinkStyle} aria-label="Instagram">
              <Instagram size={24} />
            </a>
            <a href="https://wa.me/573166758362" style={socialLinkStyle} aria-label="WhatsApp">
              <MessageCircle size={24} />
            </a>
          </div>
        </div>

      </div>

      {/* BARRA INFERIOR */}
      <div style={{ 
        borderTop: '1px solid rgba(255,255,255,0.1)', 
        marginTop: '5rem', 
        paddingTop: '2rem', 
        textAlign: 'center',
        fontSize: '0.75rem',
        opacity: 0.6,
        letterSpacing: '2px',
        fontFamily: 'var(--sans)'
      }}>
        © 2026 VEGAS DEL VERDE - ECOPOSADA Y REFUGIO NATURAL. DISEÑADO PARA LA NATURALEZA.
      </div>
    </footer>
  );
};

// ESTILOS DE APOYO
const listStyle = { listStyle: 'none', padding: 0, margin: 0 };

const listItemStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  marginBottom: '12px',
  fontSize: '0.9rem',
  opacity: 0.8,
  cursor: 'pointer'
};

const contactRowStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '15px',
  marginBottom: '15px',
  fontSize: '0.9rem',
  opacity: 0.9
};

const socialLinkStyle = {
  color: 'white',
  transition: 'color 0.3s ease',
  cursor: 'pointer',
  display: 'inline-block'
};