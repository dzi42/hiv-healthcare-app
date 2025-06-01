import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import viVN from 'antd/lib/locale/vi_VN';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Appointments from './pages/Appointments';
import Medications from './pages/Medications';
import Patients from './pages/Patients';
import './App.css';
import MainLayout from './layouts/MainLayout';

// Import các components khác sẽ được tạo sau
const PatientProfile = () => <div>Patient Profile</div>;
const DoctorProfile = () => <div>Doctor Profile</div>;
const Unauthorized = () => <div>Unauthorized Access</div>;

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();
  return user ? <MainLayout>{children}</MainLayout> : <Navigate to="/login" />;
};

function App() {
  return (
    <ConfigProvider locale={viVN} theme={{ token: { colorPrimary: '#1890ff', } }}>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/unauthorized" element={<Unauthorized />} />

            {/* Protected routes */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/appointments"
              element={
                <PrivateRoute>
                  <Appointments />
                </PrivateRoute>
              }
            />
            <Route
              path="/medications"
              element={
                <PrivateRoute>
                  <Medications />
                </PrivateRoute>
              }
            />
            <Route
              path="/patients"
              element={
                <PrivateRoute>
                  <Patients />
                </PrivateRoute>
              }
            />

            {/* Patient routes */}
            <Route
              path="/patient/profile"
              element={
                <ProtectedRoute requiredRole="patient">
                  <PatientProfile />
                </ProtectedRoute>
              }
            />

            {/* Doctor routes */}
            <Route
              path="/doctor/profile"
              element={
                <ProtectedRoute requiredRole="doctor">
                  <DoctorProfile />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </AuthProvider>
    </ConfigProvider>
  );
}

export default App;
