import React, { useState } from 'react';
import {
  Card,
  Table,
  Button,
  Modal,
  Form,
  Input,
  Select,
  Space,
  Tag,
  message,
  InputNumber,
} from 'antd';
import {
  PlusOutlined,
  EditOutlined,
  DeleteOutlined,
  MedicineBoxOutlined,
} from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const Medications = () => {
  const [form] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingMedication, setEditingMedication] = useState(null);

  // Mock data - replace with real data from your backend
  const [medications, setMedications] = useState([
    {
      key: '1',
      name: 'Tenofovir',
      type: 'Antiretroviral',
      dosage: '300mg',
      frequency: 'Once daily',
      status: 'Active',
      notes: 'Take with food',
    },
    {
      key: '2',
      name: 'Emtricitabine',
      type: 'Antiretroviral',
      dosage: '200mg',
      frequency: 'Once daily',
      status: 'Active',
      notes: 'Take with water',
    },
  ]);

  const columns = [
    {
      title: 'Medication Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Type',
      dataIndex: 'type',
      key: 'type',
    },
    {
      title: 'Dosage',
      dataIndex: 'dosage',
      key: 'dosage',
    },
    {
      title: 'Frequency',
      dataIndex: 'frequency',
      key: 'frequency',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: (status) => (
        <Tag color={status === 'Active' ? 'green' : 'red'}>
          {status}
        </Tag>
      ),
    },
    {
      title: 'Notes',
      dataIndex: 'notes',
      key: 'notes',
      ellipsis: true,
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
    setEditingMedication(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleEdit = (record) => {
    setEditingMedication(record);
    form.setFieldsValue(record);
    setIsModalVisible(true);
  };

  const handleDelete = (record) => {
    Modal.confirm({
      title: 'Are you sure you want to delete this medication?',
      content: 'This action cannot be undone.',
      okText: 'Yes',
      okType: 'danger',
      cancelText: 'No',
      onOk() {
        setMedications(medications.filter(item => item.key !== record.key));
        message.success('Medication deleted successfully');
      },
    });
  };

  const handleModalOk = () => {
    form.validateFields().then(values => {
      const newMedication = {
        ...values,
        key: editingMedication?.key || String(medications.length + 1),
      };

      if (editingMedication) {
        setMedications(medications.map(item =>
          item.key === editingMedication.key ? newMedication : item
        ));
        message.success('Medication updated successfully');
      } else {
        setMedications([...medications, newMedication]);
        message.success('Medication added successfully');
      }

      setIsModalVisible(false);
      form.resetFields();
    });
  };

  return (
    <div>
      <Card
        title="Medications"
        extra={
          <Button
            type="primary"
            icon={<PlusOutlined />}
            onClick={handleAdd}
          >
            Add Medication
          </Button>
        }
      >
        <Table
          columns={columns}
          dataSource={medications}
          pagination={{ pageSize: 10 }}
        />
      </Card>

      <Modal
        title={editingMedication ? 'Edit Medication' : 'Add Medication'}
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
            name="name"
            label="Medication Name"
            rules={[{ required: true, message: 'Please enter medication name' }]}
          >
            <Input prefix={<MedicineBoxOutlined />} />
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[{ required: true, message: 'Please select medication type' }]}
          >
            <Select placeholder="Select type">
              <Option value="Antiretroviral">Antiretroviral</Option>
              <Option value="Antibiotic">Antibiotic</Option>
              <Option value="Pain Relief">Pain Relief</Option>
              <Option value="Other">Other</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="dosage"
            label="Dosage"
            rules={[{ required: true, message: 'Please enter dosage' }]}
          >
            <Input placeholder="e.g., 300mg" />
          </Form.Item>

          <Form.Item
            name="frequency"
            label="Frequency"
            rules={[{ required: true, message: 'Please select frequency' }]}
          >
            <Select placeholder="Select frequency">
              <Option value="Once daily">Once daily</Option>
              <Option value="Twice daily">Twice daily</Option>
              <Option value="Three times daily">Three times daily</Option>
              <Option value="As needed">As needed</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: 'Please select status' }]}
          >
            <Select placeholder="Select status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="notes"
            label="Notes"
          >
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Medications; 