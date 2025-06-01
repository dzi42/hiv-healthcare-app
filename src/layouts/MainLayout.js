import React, { useState } from 'react';
import { Layout, Menu, theme, Avatar, Dropdown } from 'antd';
import {
  UserOutlined,
  DashboardOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const { Header, Sider, Content } = Layout;

const MainLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/appointments',
      icon: <CalendarOutlined />,
      label: 'Appointments',
    },
    {
      key: '/medications',
      icon: <MedicineBoxOutlined />,
      label: 'Medications',
    },
    {
      key: '/patients',
      icon: <TeamOutlined />,
      label: 'Patients',
    },
  ];

  const userMenu = [
    {
      key: 'profile',
      icon: <UserOutlined />,
      label: 'Profile',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: 'Logout',
      onClick: () => {
        logout();
        navigate('/login');
      },
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider 
        collapsible 
        collapsed={collapsed} 
        onCollapse={(value) => setCollapsed(value)}
        theme="light"
      >
        <div style={{ 
          height: '64px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          borderBottom: '1px solid #f0f0f0'
        }}>
          <h2 style={{ 
            color: '#1890ff', 
            margin: 0,
            fontSize: collapsed ? '16px' : '20px'
          }}>
            HIV Healthcare
          </h2>
        </div>
        <Menu
          theme="light"
          selectedKeys={[location.pathname]}
          mode="inline"
          items={menuItems}
          onClick={({ key }) => navigate(key)}
        />
      </Sider>
      <Layout>
        <Header style={{ 
          padding: '0 24px', 
          background: colorBgContainer,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          boxShadow: '0 1px 4px rgba(0,21,41,.08)'
        }}>
          <Dropdown
            menu={{ items: userMenu }}
            placement="bottomRight"
            arrow
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              cursor: 'pointer',
              padding: '0 12px'
            }}>
              <Avatar 
                icon={<UserOutlined />} 
                style={{ marginRight: 8 }}
              />
              <span>{user?.name || 'User'}</span>
            </div>
          </Dropdown>
        </Header>
        <Content style={{ 
          margin: '24px 16px', 
          padding: 24, 
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          minHeight: 280
        }}>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;