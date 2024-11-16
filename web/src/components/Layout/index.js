import React from 'react';
import './layout.css'
import { Link, useLocation } from 'react-router-dom';
import { Sidenav, Nav } from 'rsuite';
import { Outlet } from 'react-router-dom';
import {
  Calendar as CalendarIcon,
  Users as ClientsIcon,
  Scissors as ServicesIcon,
  Package as ProductsIcon,
  DollarSign as FinanceIcon,
  CreditCard as ChargesIcon,
  TrendingUp as DashboardIcon
} from 'lucide-react';

import Logo from '../../assets/logo.png'

const Layout = ({ children }) => {
  const location = useLocation();

  return (
    <div className="container">
      <div className="sidebar">
        
        <Sidenav className="sidebar-nav"  defaultOpenKeys={['3', '4']}>
          <Sidenav.Body>
            <Nav activeKey={location.pathname}>
              <Nav.Item
                as={Link}
                to="/layout/servicos"
                icon={<ServicesIcon className="icon" size={20} />}
                className={location.pathname === "/layout/servicos" ? 'active' : ''}
              >
                <span>Serviços</span>
              </Nav.Item>
              <Nav.Item
                as={Link}
                to="/layout/agendamentos"
                icon={<CalendarIcon className="icon" size={20} />}
              >
               <span>Agendamentos</span>
              </Nav.Item>
              <Nav.Item
                as={Link}
                to="/layout/clientes"
                icon={<ClientsIcon className="icon" size={20} />}
              >
                <span>Clientes</span>
              </Nav.Item>
              <Nav.Item
                as={Link}
                to="/layout/produtos"
                icon={<ProductsIcon className="icon" size={20} />}
              >
                <span>Produtos</span>
              </Nav.Item>
              <Nav.Item
                as={Link}
                to="/layout/financeiro"
                icon={<FinanceIcon className="icon" size={20} />}
              >
                <span>Financeiro</span>
              </Nav.Item>
              <Nav.Item
                as={Link}
                to="/layout/cobrancas"
                icon={<ChargesIcon className="icon" size={20} />}
              >
                <span>Cobranças</span>
              </Nav.Item>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
      </div>
      <div className="main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
