import React from 'react';
import { Row, Col, Card, Button, Typography, Space, Menu, Input, Carousel } from 'antd';
import {
  SearchOutlined,
  TeamOutlined,
  CalendarOutlined,
  MedicineBoxOutlined,
  UserOutlined,
  HeartOutlined,
  FileTextOutlined,
  BellOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const { Title, Paragraph } = Typography;
const { Search } = Input;

const Home = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const mainMenuItems = [
    {
      key: 'conditions',
      label: 'Điều kiện sức khỏe',
      children: [
        { key: 'hiv', label: 'HIV/AIDS' },
        { key: 'diabetes', label: 'Tiểu đường' },
        { key: 'heart', label: 'Bệnh tim' },
        { key: 'cancer', label: 'Ung thư' },
      ],
    },
    {
      key: 'medications',
      label: 'Thuốc & Thực phẩm chức năng',
      children: [
        { key: 'antiretroviral', label: 'Thuốc kháng virus' },
        { key: 'supplements', label: 'Thực phẩm chức năng' },
        { key: 'interactions', label: 'Kiểm tra tương tác thuốc' },
      ],
    },
    {
      key: 'wellbeing',
      label: 'Sức khỏe & Đời sống',
      children: [
        { key: 'diet', label: 'Chế độ ăn' },
        { key: 'exercise', label: 'Tập thể dục' },
        { key: 'mental', label: 'Sức khỏe tinh thần' },
      ],
    },
    {
      key: 'tools',
      label: 'Công cụ',
      children: [
        { key: 'calculator', label: 'Máy tính BMI' },
        { key: 'tracker', label: 'Theo dõi sức khỏe' },
        { key: 'calendar', label: 'Lịch tiêm chủng' },
      ],
    },
  ];

  const featuredArticles = [
    {
      title: 'Hiểu về HIV và cách điều trị',
      image: 'https://via.placeholder.com/300x200',
      category: 'HIV/AIDS',
    },
    {
      title: 'Chế độ dinh dưỡng cho người nhiễm HIV',
      image: 'https://via.placeholder.com/300x200',
      category: 'Dinh dưỡng',
    },
    {
      title: 'Tập thể dục an toàn cho người nhiễm HIV',
      image: 'https://via.placeholder.com/300x200',
      category: 'Tập luyện',
    },
  ];

  const healthTools = [
    {
      title: 'Máy tính BMI',
      icon: <HeartOutlined style={{ fontSize: '24px' }} />,
      description: 'Kiểm tra chỉ số BMI của bạn',
    },
    {
      title: 'Theo dõi thuốc',
      icon: <MedicineBoxOutlined style={{ fontSize: '24px' }} />,
      description: 'Quản lý lịch uống thuốc',
    },
    {
      title: 'Lịch hẹn',
      icon: <CalendarOutlined style={{ fontSize: '24px' }} />,
      description: 'Đặt lịch khám bệnh',
    },
  ];

  return (
    <div className="home-page">
      {/* Header Section */}
      <div className="header-section" style={{ background: '#fff', padding: '20px 0', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Row align="middle" justify="space-between">
            <Col>
              <Title level={3} style={{ margin: 0, color: '#1890ff' }}>HIV Healthcare</Title>
            </Col>
            <Col>
              <Search
                placeholder="Tìm kiếm thông tin sức khỏe..."
                style={{ width: 400 }}
                prefix={<SearchOutlined />}
              />
            </Col>
            <Col>
              <Space>
                <Button type="primary" onClick={handleLogin}>Đăng nhập</Button>
                <Button onClick={handleRegister}>Đăng ký</Button>
              </Space>
            </Col>
          </Row>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-nav" style={{ background: '#f0f2f5', padding: '10px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Menu mode="horizontal" items={mainMenuItems} />
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero-section" style={{ background: '#e6f7ff', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Row gutter={[24, 24]}>
            <Col span={16}>
              <Carousel autoplay>
                {featuredArticles.map((article, index) => (
                  <div key={index}>
                    <Card
                      hoverable
                      cover={<img alt={article.title} src={article.image} />}
                    >
                      <Card.Meta
                        title={article.title}
                        description={article.category}
                      />
                    </Card>
                  </div>
                ))}
              </Carousel>
            </Col>
            <Col span={8}>
              <Card title="Công cụ sức khỏe">
                {healthTools.map((tool, index) => (
                  <Card.Grid key={index} style={{ width: '100%', padding: '16px' }}>
                    <Space>
                      {tool.icon}
                      <div>
                        <Title level={5}>{tool.title}</Title>
                        <Paragraph>{tool.description}</Paragraph>
                      </div>
                    </Space>
                  </Card.Grid>
                ))}
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Main Content */}
      <div className="main-content" style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Row gutter={[24, 24]}>
            <Col span={16}>
              <Title level={3}>Bài viết mới nhất</Title>
              <Row gutter={[24, 24]}>
                {featuredArticles.map((article, index) => (
                  <Col span={8} key={index}>
                    <Card
                      hoverable
                      cover={<img alt={article.title} src={article.image} />}
                    >
                      <Card.Meta
                        title={article.title}
                        description={article.category}
                      />
                    </Card>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col span={8}>
              <Card title="Thông báo">
                <Space direction="vertical" style={{ width: '100%' }}>
                  <div>
                    <BellOutlined /> Lịch hẹn khám bệnh sắp tới
                  </div>
                  <div>
                    <FileTextOutlined /> Kết quả xét nghiệm mới
                  </div>
                  <div>
                    <MedicineBoxOutlined /> Nhắc nhở uống thuốc
                  </div>
                </Space>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      {/* Footer */}
      <div className="footer" style={{ background: '#001529', color: '#fff', padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <Row gutter={[24, 24]}>
            <Col span={8}>
              <Title level={4} style={{ color: '#fff' }}>Về chúng tôi</Title>
              <Paragraph style={{ color: '#fff' }}>
                Hệ thống quản lý chăm sóc sức khỏe HIV cung cấp thông tin và công cụ
                để giúp bạn quản lý sức khỏe tốt hơn.
              </Paragraph>
            </Col>
            <Col span={8}>
              <Title level={4} style={{ color: '#fff' }}>Liên kết nhanh</Title>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#" style={{ color: '#fff' }}>Trang chủ</a></li>
                <li><a href="#" style={{ color: '#fff' }}>Tìm bác sĩ</a></li>
                <li><a href="#" style={{ color: '#fff' }}>Đặt lịch hẹn</a></li>
                <li><a href="#" style={{ color: '#fff' }}>Liên hệ</a></li>
              </ul>
            </Col>
            <Col span={8}>
              <Title level={4} style={{ color: '#fff' }}>Liên hệ</Title>
              <Paragraph style={{ color: '#fff' }}>
                Email: support@hivhealthcare.com<br />
                Điện thoại: (84) 123-456-789<br />
                Địa chỉ: 123 Đường ABC, Quận XYZ, TP. Hồ Chí Minh
              </Paragraph>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Home; 