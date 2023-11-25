import React, { useState } from 'react';
import { TextBox, Button } from '@salutejs/plasma-ui';
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header } from '@salutejs/plasma-ui';
import './LoanApplication.css';
import { createAssistant, createSmartappDebugger } from '@salutejs/client';

export const LoanApplication: React.FC = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let formData = new FormData(e.currentTarget);   
    // Отправка данных на сервер с помощью fetch или axios
    console.log(formData.getAll("fullName"))
    console.log(formData)
    fetch('http://localhost:8080/api/v1/applications/apply', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Network response was not ok.');
    })
    .then(data => {
      console.log('Data sent successfully:', data);
    })
    .catch(error => {
      console.error('Error sending data:', error);
    });
  };

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
      <div>      
        <div className='la-body'>
        <form onSubmit={handleSubmit} className='la-form'>
        <H2>Заполните форму для подачи заявки</H2> <br/>
        <input type="text" className='la-input' name="fullName" placeholder="ФИО"/>
        <input type="text" className='la-input' name="creditSum" placeholder="Сумма кредита в руб"/>
        <input type="text" className='la-input' name="dob" placeholder="Дата рождения"/>
        <input type="text" className='la-input' name="passportData" placeholder="Паспортные данные"/>
        <input type="text" className='la-input' name="registrationAddress" placeholder="Адрес регистрации"/>
        <input type="text" className='la-input' name="residentialAddress" placeholder="Адрес проживания"/>
        <input type="text" className='la-input' name="maritalStatus" placeholder="Семейное положение"/>
        <input type="text" className='la-input' name="children" placeholder="Наличие детей"/>
        <input type="text" className='la-input' name="employer" placeholder="Место работы"/>
        <input type="text" className='la-input' name="workExperience" placeholder="Стаж работы"/>
        <input type="text" className='la-input' name="position" placeholder="Должность"/>
        <input type="text" className='la-input' name="monthlyIncome" placeholder="Ежемесячный подтвержденный доход"/>
        <input type="text" className='la-input' name="incomeDocument" placeholder="Документ, подтверждающий доход"/>
        <input type="text" className='la-input' name="additionalIncome" placeholder="Ежемесячный дополнительный доход"/>
        <input type="text" className='la-input' name="additionalIncomeDocument" placeholder="Дополнительный доход подтвержден документально"/>
        <input type="text" className='la-input' name="savings" placeholder="Наличие сбережений на счетах в Банке"/>
          <input type="tel" id="phone" className='la-input' name="phone" placeholder="+71234567890" required/>
          <H4>Паспорт с пропиской</H4>
          <input type="file" className='la-input' name="file1"/>
          <H4>Доп файл</H4>
          <input type="file" className='la-input' name="file2"/>
          <Button type="submit">Отправить</Button>
        </form>
        </div>
      </div>
      <div></div>
      </div>
  );
};
