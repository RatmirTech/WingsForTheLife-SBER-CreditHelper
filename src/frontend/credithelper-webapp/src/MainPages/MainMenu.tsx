import React from 'react';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { TextBox, Button } from '@salutejs/plasma-ui';
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Header } from '@salutejs/plasma-ui';
import './MainMenu.css';
import {
    Link
  } from "react-router-dom";

export const MainMenu: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    // Отправка данных на сервер с помощью fetch или axios
  };

  return (
    <div>
      <Container>
          <Header
              title="Credit Helper SBER"
              subtitle="Smartapp по работе с кредитами  "
              >
              <Button>Главная</Button>
            </Header>
          </Container>
      <Container>
      <Link to="/client/account" className='link-btn'>      
        <Button text="Кабинет клиента" />
      </Link>
      <br/>
      <Link to="/underwritter/account" className='link-btn'>      
        <Button text="Кабинет андеррайтера" />
      </Link>
      <br/>
      </Container>       
    </div>       
  );
};
