import React, { useState, useEffect } from 'react';
import { TextBox, Button } from '@salutejs/plasma-ui';
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header } from '@salutejs/plasma-ui';
import { Card, CardBody, CardMedia, CardContent, TextBoxBigTitle, TextBoxBiggerTitle, TextBoxSubTitle} from '@salutejs/plasma-ui';
import './ClientMenuAll.css'

export const Applications: React.FC = () => {
 const [applications, setApplications] = useState([]);

 useEffect(() => {
   fetch('http://localhost:8080/api/v1/applications')
     .then(response => response.json())
     .then(data => setApplications(data))
     .catch(error => console.error(error));
 }, []);

 return (
   <div>
     <Container>
       <Header
         title="Credit Helper SBER"
         subtitle="Smartapp по работе с кредитами"
       >
         <a href='/'>
           <Button>Главная</Button>
         </a>
       </Header>
     </Container>
     <div style={{display:"block"}} className='appl-form'>
       <H2 className='a-list-h2'>Мои заявки</H2>
       {applications.map(app => (
         <Card className='appl-card' style={{ width: '22.5rem' }} key={app['id']}>
           <CardBody>
             <CardMedia
               src={app['status'] === 'Одобрено' ? "/success.png" : app['status'] === 'Отклонено' ? "/decline.png" : "/process.png"}
               placeholder={app['status'] === 'Одобрено' ? "/success.png" : app['status'] === 'Отклонено' ? "/decline.png" : "/process.png"}
               ratio="1 / 1"
             />
             <CardContent cover>
               <TextBox>
                <TextBoxBigTitle>Заявка № {app['id']}</TextBoxBigTitle>
                <TextBoxBiggerTitle>{app['amount']} руб</TextBoxBiggerTitle>
                <TextBoxSubTitle>Статус: {app['status']}</TextBoxSubTitle>
               </TextBox>
               <a href={"/client/appdetails?id="+app['id']}>
                <Button
                  text="Подробнее"
                  view="primary"
                  size="s"
                  scaleOnInteraction={false}
                  outlined={false}
                  stretch
                  style={{ marginTop: '1em' }}
                  tabIndex={-1}
                />
               </a>
             </CardContent>
           </CardBody>
         </Card>
       ))}
     </div>
   </div>
 );
};
