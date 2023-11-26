import React, { useState, useEffect } from 'react';
import Table from "react-bootstrap/esm/Table";
import { H1, H2, H3, H4, H5 } from '@salutejs/plasma-ui';
import { Container } from '@salutejs/plasma-ui/components/Grid';
import { Header, Button } from '@salutejs/plasma-ui';
export const UApllications: React.FC = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/v1/credit')
      .then(response => response.json())
      .then(data => setApplications(data))
      .catch(error => console.error(error));
  }, []);
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
        <H2>Заявки на кредит</H2> <br/>
        </div>
        <div>
            <Table striped bordered hover variant="dark">
                 <thead>
                   <tr>
                     <th>№ заявки</th>
                     <th>ФИО клиента</th>
                     <th>Сумма кредита</th>
                     <th>Статус</th>
                   </tr>
                 </thead>
                 <tbody>
                 {applications.map(app => (
                    <tr>
                     <td><a href={"/client/appdetails?id="+app['id']}>{app['id']}</a></td>
                     <td>{app['fullName']}</td>
                     <td>{app['amount']}</td>
                     <td>{app['status']}</td>
                    </tr>
                  ))}
                 </tbody>
            </Table>
        </div>
        </Container>
    </div>
    );
  };