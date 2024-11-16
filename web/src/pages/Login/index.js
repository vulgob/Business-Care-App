import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Panel, Message } from 'rsuite';
import 'rsuite/dist/rsuite.min.css';
import './Login.css';

import logo from '../../assets/logo.png';

const Login = () => {
  const navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!formValue.email || !formValue.password) {
      setError('Por favor, preencha todos os campos');
      return;
    }
    // Simular login
    localStorage.setItem('token', 'dummy-token');
    navigate('/layout/servicos');
  };

  return (
    <div className="login-container">
      <Panel className="login-panel" bordered>
        <div className="logo-container-2">
          <div className="logo-wrapper">
            <img
              src={logo}
              alt="Logo Clínica"
              className="logo"
            />
          </div>
        </div>
        <h2 className="login-title">
          Business Care App
        </h2>
        <h3 className='login-title'>Bem-vinda ao seu espaço de beleza</h3>

        {error && (
          <Message type="error" className="login-error">
            {error}
          </Message>
        )}

        <Form
          fluid
          formValue={formValue}
          onChange={formValue => setFormValue(formValue)}
          className="login-form"
        >
          <Form.Group>
            <Form.ControlLabel>Email</Form.ControlLabel>
            <Form.Control
              name="email"
              type="email"
              placeholder="seu@email.com"
              className="login-input"
            />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Senha</Form.ControlLabel>
            <Form.Control
              name="password"
              type="password"
              placeholder="Sua senha"
              className="login-input"
            />
          </Form.Group>

          <Form.Group>
            <Button
              appearance="primary"
              onClick={handleSubmit}
              block
              size="lg"
              className="login-button"
            >
              Entrar
            </Button>
          </Form.Group>
        </Form>
      </Panel>
    </div>

  );
};

export default Login;