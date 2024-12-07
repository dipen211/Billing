import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router and Routes
import { ThemeProvider } from '@mui/material';
import { theme } from "./theme";
import CompanyList from "./components/modules/company/CompanyList";
import AddCompanyForm from "./components/modules/company/AddCompanyForm";
import CompanyPage from "./components/modules/items/ItemsList";
import Invoice from "./components/modules/invoice/Invoice";
import Layout from "./components/shared/Layout.js";
import InvoiceDetails from "./components/modules/invoice/InvoiceDetails.js";
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<CompanyList />} />
            <Route path="/add-company" element={<AddCompanyForm />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/invoice/your-invoice/:id" element={<InvoiceDetails />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
