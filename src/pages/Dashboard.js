import React from 'react';
import { Row, Col, Card, Statistic, Table, Tag } from 'antd';
import {
  UserOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import MainLayout from '../layouts/MainLayout';
import { useAuth } from '../contexts/AuthContext';

const Dashboard = () => {
  const { user, isDoctor } = useAuth();

  // Mock data - replace with real data from your backend
  const statistics = [
    {
      title: 'Total Patients',
      value: 156,
      icon: <TeamOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
    },
    {
      title: 'Today\'s Appointments',
      value: 8,
      icon: <CalendarOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
    },
    {
      title: 'Active Medications',
      value: 45,
      icon: <MedicineBoxOutlined style={{ fontSize: '24px', color: '#faad14' }} />,
    },
    {
      title: 'Staff Members',
      value: 12,
      icon: <UserOutlined style={{ fontSize: '24px', color: '#eb2f96' }} />,
    },
  ];

  const recentAppointments = [
    {
      key: '1',
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      date: '2024-03-20 09:00',
      status: 'Scheduled',
    },
    {
      key: '2',
      patient: 'Jane Smith',
      doctor: 'Dr. Johnson',
      date: '2024-03-20 10:30',
      status: 'Completed',
    },
    {
      key: '3',
      patient: 'Mike Johnson',
      doctor: 'Dr. Williams',
      date: '2024-03-20 14:00',
      status: 'Scheduled',
    },
  ];

  const columns = [
    {
      title: 'Patient',
      dataIndex: 'patient',
      key: 'patient',
    },
    {
      title: 'Doctor',
      dataIndex: 'doctor',
      key: 'doctor',
    },
    {
      title: 'Date & Time',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Completed' ? 'green' : 'blue'}>
          {status}
        </Tag>
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="dashboard">
        <h1>Xin chào, {user?.fullName}</h1>
        <p>Đây là tổng quan về hệ thống của bạn</p>

        <Row gutter={[16, 16]} className="stats-row">
          {statistics.map((stat, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card>
                <Statistic
                  title={stat.title}
                  value={stat.value}
                  prefix={stat.icon}
                />
              </Card>
            </Col>
          ))}
        </Row>

        <Card
          title="Recent Appointments"
          style={{ marginTop: 16 }}
        >
          <Table
            columns={columns}
            dataSource={recentAppointments}
            pagination={false}
          />
        </Card>

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