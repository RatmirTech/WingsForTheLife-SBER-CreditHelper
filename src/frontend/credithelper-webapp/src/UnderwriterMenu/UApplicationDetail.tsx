import React, { useState, useEffect, ReactNode } from 'react';
import { Button, H1, H2, H3, H4, H5, TextM } from '@salutejs/plasma-ui';

export const UApplicationDetail = () => {
   const queryParams = new URLSearchParams(window.location.search);
   const applicationId = queryParams.get("id");
   const [applicationData, setApplicationData] = useState<any>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<Error | null>(null);

   useEffect(() => {
       fetch('http://localhost:8000/application')
           .then(response => {
               if (!response.ok) {
                  throw new Error('Network response was not ok');
               }
               return response.json();
           })
           .then(data => setApplicationData(data))
           .catch(error => setError(error))
           .finally(() => setLoading(false));
   }, [applicationId]);

   const handleSubmit = (isApproved: boolean) => {
       const url = isApproved ? 'http://localhost:8080/submit-application' : 'http://localhost:8000/request-revision';
       const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({ applicationId: applicationId })
       };

       fetch(url, requestOptions)
           .then(response => response.json())
           .then(data => console.log(data))
           .catch(error => console.error('Error:', error));
   };

   if (loading) return <div>Loading...</div>;
   if (error) return <div>Error: {error.message}</div>;

   return (
       <div>
           <H1>Управление заявкой на кредит</H1>
           <H2>Статус заявки: {applicationData && applicationData['status']}</H2>
           <table>
               <tbody>
                  {applicationData && Object.entries(applicationData).map(([key, value]: [string, any]): ReactNode => (
                      <tr key={key}>
                          <td>{key}</td>
                          <td>{value}</td>
                      </tr>
                  ))}
               </tbody>
           </table>
           {applicationData && applicationData['status'] === 'Новая' && (
               <>
                  <Button onClick={() => handleSubmit(true)}>Отправить далее</Button>
                  <Button onClick={() => handleSubmit(false)}>Отправить на доработку</Button>
               </>
           )}
       </div>
   );
};