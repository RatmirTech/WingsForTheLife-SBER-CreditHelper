import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { LoanApplication } from './ClientMenu/LoanApplication';
import { ClientPersonalAccount } from './ClientMenu/ClientPersonalAccount';
import { MainMenu } from './MainPages/MainMenu';
import { Applications } from "./ClientMenu/Apllications";
import { UnderwriterAccount } from "./UnderwriterMenu/UnderwriterAccount";
import { UApllications } from "./UnderwriterMenu/UApllications";
import { ApplicationDetail } from "./ClientMenu/ApplicationDetail";
import {UApplicationDetail} from "./UnderwriterMenu/UApplicationDetail";
export default function App() {
  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainMenu />} />
            <Route path="/client/loanapplication" element={<LoanApplication />} />
            <Route path="/client/account" element={<ClientPersonalAccount />} />
            <Route path="/client/apllications" element={<Applications />} />
            <Route path="/underwritter/account" element={<UnderwriterAccount />} />
            <Route path="/underwritter/applications" element={<UApllications />} />
            <Route path="/client/appdetails" element={<ApplicationDetail />} />
            <Route path="/underwritter/appdetails" element={<UApplicationDetail  />} />
          </Routes>
        </BrowserRouter>
    </div>

  );
}