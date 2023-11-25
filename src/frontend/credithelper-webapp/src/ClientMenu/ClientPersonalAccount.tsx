import React from 'react';
import { TextBox, Button } from '@salutejs/plasma-ui';
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header } from '@salutejs/plasma-ui';
import './LoanApplication.css';
import {
    Link
  } from "react-router-dom";

export const ClientPersonalAccount: React.FC = () => {
  return (
    <div>
      <Container>
          <Header
              title="Credit Helper SBER"
              subtitle="Smartapp по работе с кредитами  "
              >
              <a href='/'>
              <Button>Главная</Button>
              </a>
            </Header>
          </Container>
      <Container>
      <div className='cm-acc-h1'>
        <H1>Здравствуйте, Николай!</H1> <br/>
        </div>
      <Link to="/client/loanapplication" className='link-btn'>      
        <Button text="Новая Заявка на кредит" />
      </Link> <br/>
      <Link to="/client/apllications" className='link-btn'>      
        <Button text="Мои заявки" />
      </Link> 
      </Container>
      <div>
      </div>
      </div>
  );
};
