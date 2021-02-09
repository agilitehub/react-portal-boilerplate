import React from 'react'
import { Popconfirm } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import Theme from '../../../agilite-react/resources/theme'

const templates = {
  dataTemplate: {
    id: '',
    name: {
      key: 'name',
      required: true,
      validationMsg: 'Please provide a value'
    },
    age: {
      key: 'age',
      required: true,
      validationMsg: 'Please provide a value'
    },
    gender: {
      key: 'gender',
      required: true,
      validationMsg: 'Please provide a value',
      options: [
        {
          label: 'Male',
          value: 'Male'
        },
        {
          label: 'Female',
          value: 'Female'
        }
      ]
    },
    description: {
      key: 'description',
      required: false,
      validationMsg: ''
    }
  },
  columnTemplate: (editRecord, deleteRecord) => {
    return [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => {
          return (
            // eslint-disable-next-line
            <a onClick={() => editRecord(record)}>
              {text}
            </a>
          )
        }
      },
      {
        title: 'Description',
        dataIndex: 'description',
        key: 'description'
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'name'
      },
      {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'name'
      },
      {
        title: 'Action',
        key: 'action',
        width: '5%',
        render: (text, record) => {
          return (
            <Popconfirm
              title='Are you sure you want to delete this record?'
              okText='Yes'
              cancelText='No'
              onConfirm={() => deleteRecord(record.id)}
            >
              <DeleteOutlined
                style={{ cursor: 'pointer', color: Theme.twitterBootstrap.danger }}
              />
            </Popconfirm>
          )
        }
      }
    ]
  }
}

export default templates
