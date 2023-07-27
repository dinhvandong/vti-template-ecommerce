/* eslint-disable react/prop-types */
import React from 'react'
import { Modal } from 'antd'

const CategoryInsert = ({ isVisible, handleOk, handleCancel }) => (
  <Modal title="Basic Modal" visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
    <p>Some contents...</p>
    <p>Some contents...</p>
    <p>Some contents...</p>
  </Modal>
)

export default CategoryInsert
