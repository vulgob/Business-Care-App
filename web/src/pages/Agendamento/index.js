import React, { useState } from 'react';

import './agendamento.css'
import { 
  Form, 
  Button, 
  DatePicker, 
  SelectPicker,
  Panel
} from 'rsuite';
import 'rsuite/dist/rsuite.min.css';

const Agendamento = () => {
  const [formValue, setFormValue] = useState({
    service: '',
    date: null,
    time: ''
  });

  // Dados de exemplo
  const services = [
    { label: 'Corte de Cabelo', value: 'corte' },
    { label: 'Manicure', value: 'manicure' },
    { label: 'Pedicure', value: 'pedicure' },
    { label: 'Massagem', value: 'massagem' }
  ];

  const timeSlots = [
    { label: '09:00', value: '09:00' },
    { label: '10:00', value: '10:00' },
    { label: '11:00', value: '11:00' },
    { label: '14:00', value: '14:00' },
    { label: '15:00', value: '15:00' },
    { label: '16:00', value: '16:00' }
  ];

  const handleSubmit = () => {
    // Aqui você implementaria a lógica para salvar o agendamento
    console.log('Agendamento:', formValue);
    alert('Agendamento realizado com sucesso!');
  };

  return (
    <div>
      <Panel className="container-form-agen" header={<h3>Agendar Horário</h3>} bordered>
        <Form 
          fluid
          formValue={formValue}
          onChange={formValue => setFormValue(formValue)}
        >
          <Form.Group>
            <Form.ControlLabel>Serviço</Form.ControlLabel>
            <SelectPicker 
              name="service"
              data={services}
              block
            />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Data</Form.ControlLabel>
            <DatePicker 
              name="date"
              format="dd/MM/yyyy"
              block
            />
          </Form.Group>

          <Form.Group>
            <Form.ControlLabel>Horário</Form.ControlLabel>
            <SelectPicker 
              name="time"
              data={timeSlots}
              block
            />
          </Form.Group>

          <Form.Group>
            <Button className="button-agendamento" onClick={handleSubmit} block>
              Agendar
            </Button>
          </Form.Group>
        </Form>
      </Panel>
    </div>
  );
};

export default Agendamento;