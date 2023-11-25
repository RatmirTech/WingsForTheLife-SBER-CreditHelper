import React from 'react';
import { TextBox, Button } from '@salutejs/plasma-ui';
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header } from '@salutejs/plasma-ui';
import {
    Link
  } from "react-router-dom";
import './UM.css';
export const UnderwriterAccount: React.FC = () => {
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
        <div className='um-acc-h1'>
        <H1>Здравствуйте, Алексей!</H1> <br/>
        </div>
      <Link to="/underwritter/applications" className='link-btn'>      
        <Button text="Заявки" />
      </Link>
      </Container>
      <div>
      </div>
      </div>
  );
};
