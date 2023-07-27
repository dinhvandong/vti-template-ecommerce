/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import { CCard, CCardBody, CCol, CCardHeader, CRow } from '@coreui/react'
import {
  CChartBar,
  CChartDoughnut,
  CChartLine,
  CChartPie,
  CChartPolarArea,
  CChartRadar,
} from '@coreui/react-chartjs'
import { DocsCallout } from 'src/components'
import { Button, Space, Table } from 'antd';
import CategoryInsert from './CategoryInsert';

const Category = () => {
  const random = () => Math.round(Math.random() * 100)

const dataSource = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney',
  },
];

const columns = [
  {
    title: 'STT',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Description',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <Space size="middle">
        <Button style={{ backgroundColor:'green', color:'white' }} onClick={() => handleEdit(record)}>Edit</Button>
        <Button style={{ backgroundColor:'red', color:'white' }} onClick={() => handleDelete(record)}>Delete</Button>
      </Space>
    ),
  },
];
const handleEdit = (record) => {
  console.log('Edit button clicked for record: ', record);
};

const handleDelete = (record) => {
  console.log('Delete button clicked for record: ', record);
};
const handleButtonClick = (record) => {
  console.log('Button clicked for record: ', record);
};

const handleInsert = ()=>{
  console.log('Insert')
}


const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (

    <div>
      <CategoryInsert isVisible={isModalVisible} handleOk={handleOk} handleCancel={handleCancel} />
      <Button style={{ backgroundColor:'green', color:'white' }} onClick={()=>showModal()}>Insert Category </Button>
      <Table dataSource={dataSource} columns={columns} />
    </div>

  )
}

export default Category
