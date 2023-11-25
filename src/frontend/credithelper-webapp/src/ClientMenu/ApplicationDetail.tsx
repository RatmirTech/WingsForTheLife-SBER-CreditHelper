import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/esm/Table";
import { H1, H2, H3, H4, H5, TextM } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header, Button } from '@salutejs/plasma-ui';

export const ApplicationDetail = () => {
   const queryParams = new URLSearchParams(window.location.search)
   const applicationId = queryParams.get("id")
   const [fieldsToCorrect, setFieldsToCorrect] = useState([]);
   const [corrections, setCorrections] = useState({});
   const [application, setApplication] = useState(null);
   const comment = "Доработки не требуются. Всё в порядке.";

   useEffect(() => {
       fetch(`http://localhost:8080/api/v1/applications/${applicationId}`)
           .then(response => response.json())
           .then(data => setApplication(data))
           .catch(error => console.error(error));
   }, [applicationId]);

   useEffect(() => {
    fetch(`http://localhost:8080//api/v1/applications/${applicationId}/corrections`)
        .then(response => response.json())
        .then(data => setFieldsToCorrect(data))
        .catch(error => console.error(error));
}, [applicationId]);

const handleInputChange = (e: React.ChangeEvent<any>) => {
    setCorrections({...corrections, [e.target.name]: e.target.value});
};

const handleSubmitCorrections = () => {
    fetch(`http://localhost:8080/api/v1/applications/${applicationId}/corrections`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(corrections),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
};
   return (
       <div>
       <Container>
         <Header
             title="Credit Helper SBER"
             subtitle="Smartapp по работе с кредитами "
             >
             <a href='/'>
             <Button>Главная</Button>
             </a>
           </Header>
         </Container>
       <Container>
           <div className='cm-acc-h1'>
             <H2>Заявка на кредит № {applicationId}</H2> <br/>
             </div>
             <div>
                <Table striped bordered hover variant="dark">
                     <thead>
                       <tr>
                         <th>Общая инфорация</th>
                         <th>Документы</th>
                         <th>Сумма кредита</th>
                         <th>Статус</th>
                       </tr>
                     </thead>
                     <tbody>
                          {application && 
                              <tr>
                                 <td>{application['location']}</td>
                                 <td>{application['documents']}</td>
                                 <td>{application['creditAmount']}</td>
                                 <td>{application['status']}</td>
                              </tr>
                          }
                     </tbody>
                </Table>
             </div>
               <H2 className='cm-edit-form'>Доработка заявки</H2>
               <Container>
                {fieldsToCorrect.length === 0 ? (
                    <TextM className='cm-edit-form'>{comment}</TextM>
                ) : (
                    <div>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Пункты для исправления</th>
                                    <th>Новое значение</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fieldsToCorrect.map((field, index) => (
                                    <tr key={index}>
                                        <td>{field['name']}</td>
                                        <td>
                                            <input type="text" name={field['name']} onChange={handleInputChange} />
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button onClick={handleSubmitCorrections}>Отправить исправления</Button>
                    </div>
                )}
            </Container>
       </Container>
       </div>
   );
}