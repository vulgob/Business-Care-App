import React from 'react';
import { Panel, Button } from 'rsuite';

import './servicos.css'
import Logo from '../../assets/logo.png'

const ServicesPage = () => {
  const services = [
    {
      id: 1,
      name: 'Limpeza de Pele',
      description: 'Tratamento completo para renovação da pele',
      duration: '60 min',
      price: 'R$ 150,00',
      image: '/assets/facial.jpg'
    },
    {
      id: 2,
      name: 'Massagem Relaxante',
      description: 'Massagem corporal para relaxamento',
      duration: '50 min',
      price: 'R$ 120,00',
      image: '/assets/massagem.jpg'
    },
    {
      id: 3,
      name: 'Depilação',
      description: 'Depilação com cera quente',
      duration: '30 min',
      price: 'A partir de R$ 50,00',
      image: '/assets/depilacao.jpg'
    },
    {
      id: 4,
      name: 'Manicure',
      description: 'Cuidados para unhas das mãos',
      duration: '40 min',
      price: 'R$ 40,00',
      image: '/assets/manicure.png'
    },
    {
      id: 5,
      name: 'Pedicure',
      description: 'Tratamento e cuidado para os pés',
      duration: '45 min',
      price: 'R$ 45,00',
      image: '/assets/pedicure.jpg'
    },
    {
      id: 6,
      name: 'Massagem Terapêutica',
      description: 'Técnicas para alívio de tensões',
      duration: '70 min',
      price: 'R$ 130,00',
      image: '/assets/terapeutica.jpg'
    }
  ];

  return (
    <div className="services-container">
      <div className='title-container'>
        <img className='logo' src={Logo} />
        <h2 className="services-title">Nossos Serviços</h2>
      </div>

      <div className="services-grid">
        {services.map(service => (
          <Panel key={service.id} className="service-card">
            <div className="service-image-container">
              <img
                src={service.image}
                alt={service.name}
                className="service-image"
              />
            </div>
            <h3 className="service-name">{service.name}</h3>
            <p className="service-description">{service.description}</p>
            <p className="service-duration">Duração: {service.duration}</p>
            <p className="service-price">{service.price}</p>
            <Button className="service-button">
              Agendar
            </Button>
          </Panel>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
