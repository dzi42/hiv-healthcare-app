import React, { useState } from 'react';
import { 
  Card, 
  Table, 
  Button, 
  Modal, 
  Form, 
  Input, 
  DatePicker, 
  Select,
  Space,
  Tag,
  message
} from 'antd';
import { PlusOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';
import dayjs from 'dayjs';

const { Option } = Select;

const Appointments = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingAppointment, setEditingAppointment] = useState(null);

  // Mock data - replace with real data from your backend
  const [appointments, setAppointments] = useState([
    {
      key: '1',
      patient: 'John Doe',
      doctor: 'Dr. Smith',
      date: '2024-03-20 09:00',
      status: 'Scheduled',
      notes: 'Regular checkup',
    },
    {
      key: '2',
      patient: 'Jane Smith',
      doctor: 'Dr. Johnson',
      date: '2024-03-20 10:30',
      status: 'Completed',
      notes: 'Follow-up appointment',
    },
  ]);

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
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <Space>
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            danger
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  const handleAdd = () => {
    setEditingAppointment(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingAppointment(record);
    form.setFieldsValue({
      ...record,
      date: dayjs(record.date),
    });
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this appointment?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setAppointments(appointments.filter(item => item.key !== record.key));
        message.success('Appointment deleted successfully');
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      const newAppointment = {
        ...values,
        key: editingAppointment?.key || String(appointments.length + 1),
        date: values.date.format('YYYY-MM-DD HH:mm'),
      };

      if (editingAppointment) {
        setAppointments(appointments.map(item =>
          item.key === editingAppointment.key ? newAppointment : item
        ));
        message.success('Appointment updated successfully');
      } else {
        setAppointments([...appointments, newAppointment]);
        message.success('Appointment created successfully');
      }

      setIsModalVisible(false);
      form.resetFields();
    });
  };

  return (
    <div>
      <Card
        title="Appointments"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          >
            New Appointment
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={appointments}
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title={editingAppointment ? 'Edit Appointment' : 'New Appointment'}
        open={isModalVisible}
        onOk={handleModalOk}
        onCancel={() => {
          setIsModalVisible(false);
          form.resetFields();
        }}
        width={600}
      >
        <Form
          form={form}
          layout="vertical"
        >
          <Form.Item
            name="patient"
            label="Patient"
            rules={[{ required: true, message: 'Please select a patient' }]}
          >
            <Select placeholder="Select patient">
              <Option value="John Doe">John Doe</Option>
              <Option value="Jane Smith">Jane Smith</Option>
              <Option value="Mike Johnson">Mike Johnson</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="doctor"
            label="Doctor"
            rules={[{ required: true, message: 'Please select a doctor' }]}
          >
            <Select placeholder="Select doctor">
              <Option value="Dr. Smith">Dr. Smith</Option>
              <Option value="Dr. Johnson">Dr. Johnson</Option>
              <Option value="Dr. Williams">Dr. Williams</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="date"
            label="Date & Time"
            rules={[{ required: true, message: 'Please select date and time' }]}
          >
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm"
              style={{ width: '100%' }}
            />
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select status">
              <Option value="Scheduled">Scheduled</Option>
              <Option value="Completed">Completed</Option>
              <Option value="Cancelled">Cancelled</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="notes"
            label="Notes"
          >
            <Input.TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Appointments; 