import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import PatientDashboard from './pages/patient/PatientDashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="register" element={<RegisterPage />} />
            <Route path="patient/dashboard" element={<PatientDashboard />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
