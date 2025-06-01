import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

// Danh sách tài khoản mẫu
const MOCK_USERS = [
  {
    id: '1',
    email: 'doctor@example.com',
    password: '123456',
    fullName: 'Bác sĩ Nguyễn Văn A',
    role: 'doctor',
    phone: '0123456789'
  },
  {
    id: '2',
    email: 'patient@example.com',
    password: '123456',
    fullName: 'Bệnh nhân Trần Thị B',
    role: 'patient',
    phone: '0987654321'
  },
  {
    id: '3',
    email: 'admin@example.com',
    password: '123456',
    fullName: 'Admin',
    role: 'admin',
    phone: '0123456788'
  }
];

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    try {
      // Tìm user trong danh sách mẫu
      const foundUser = MOCK_USERS.find(
        user => user.email === email && user.password === password
      );

      if (!foundUser) {
        throw new Error('Email hoặc mật khẩu không đúng');
      }

      // Tạo user object không bao gồm password
      const { password: _, ...userWithoutPassword } = foundUser;
      
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    } catch (error) {
      throw new Error(error.message || 'Đăng nhập thất bại');
    }
  };

  const register = async (userData) => {
    try {
      // Kiểm tra email đã tồn tại chưa
      const existingUser = MOCK_USERS.find(user => user.email === userData.email);
      if (existingUser) {
        throw new Error('Email đã được sử dụng');
      }

      // Tạo user mới
      const newUser = {
        id: String(MOCK_USERS.length + 1),
        ...userData
      };

      // Thêm vào danh sách mẫu
      MOCK_USERS.push(newUser);

      // Tạo user object không bao gồm password
      const { password: _, ...userWithoutPassword } = newUser;
      
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    } catch (error) {
      throw new Error(error.message || 'Đăng ký thất bại');
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
    isDoctor: user?.role === 'doctor',
    isPatient: user?.role === 'patient',
    isAdmin: user?.role === 'admin'
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext; 