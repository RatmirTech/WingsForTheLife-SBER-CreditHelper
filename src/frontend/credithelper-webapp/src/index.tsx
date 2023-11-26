
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GlobalStyle } from './GlobalStyle';  
import { DeviceThemeProvider, SSRProvider } from '@salutejs/plasma-ui';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
<DeviceThemeProvider responsiveTypo>
        <SSRProvider>
          <App />
          <GlobalStyle />
        </SSRProvider>
  </DeviceThemeProvider>
);
