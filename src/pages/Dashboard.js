import React from 'react';
import { Row, Col, Card, Statistic } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  FileTextOutlined,
} from '@ant-design/icons';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, isDoctor } = useAuth();

  const stats = [
    {
      title: 'Tổng số bệnh nhân',
      value: 150,
      icon: <UserOutlined />,
      color: '#1890ff',
    },
    {
      title: 'Lịch hẹn hôm nay',
      value: 8,
      icon: <CalendarOutlined />,
      color: '#52c41a',
    },
    {
      title: 'Đơn thuốc đang xử lý',
      value: 12,
      icon: <MedicineBoxOutlined />,
      color: '#faad14',
    },
    {
      title: 'Báo cáo mới',
      value: 5,
      icon: <FileTextOutlined />,
      color: '#f5222d',
    },
  ];

  return (
    <MainLayout>
      <div className="dashboard">
        <h1>Xin chào, {user?.fullName}</h1>
        <p>Đây là tổng quan về hệ thống của bạn</p>

        <Row gutter={[16, 16]} className="stats-row">
          {stats.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                  valueStyle={{ color: stat.color }}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Row gutter={[16, 16]} className="dashboard-content">
          <Col xs={24} lg={16}>
            <Card title="Hoạt động gần đây">
              {/* TODO: Add activity list component */}
              <p>Danh sách hoạt động sẽ được hiển thị ở đây</p>
            </Card>
          </Col>
          <Col xs={24} lg={8}>
            <Card title="Thông báo">
              {/* TODO: Add notifications component */}
              <p>Danh sách thông báo sẽ được hiển thị ở đây</p>
            </Card>
          </Col>
        </Row>
      </div>
    </MainLayout>
  );
};

export default Dashboard; 