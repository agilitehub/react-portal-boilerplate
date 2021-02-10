import React from 'react'
import { Popconfirm, Form, Select, Input } from 'antd'
import { DeleteOutlined, PlusCircleOutlined } from '@ant-design/icons'

import Theme from '../../../agilite-react/resources/theme'

const templates = {
  dataModel: {
    id: '',
    name: {
      key: 'name',
      required: true,
      validationMsg: 'Please provide a value'
    },
    description: {
      key: 'description',
      required: false,
      validationMsg: ''
    },
    entries: [
      {
        label: '',
        type: '',
        value: ''
      }
    ]
  },
  dataTemplate: () => {
    return {
      id: '',
      name: '',
      description: '',
      entries: [
        {
          label: '',
          type: '',
          value: ''
        }
      ]
    }
  },
  formTableColumns: (addRow, deleteRow, changeRow, data) => {
    return [
      {
        title: 'Label',
        dataIndex: 'label',
        key: 'label',
        width: '30%',
        render: (text, record, index) => {
          return (
            <Form.Item>
              <Input
                placeholder='Please provide a Label'
                defaultValue={record.label}
                onChange={e => changeRow(index, 'label', e.target.value)}
              />
            </Form.Item>
          )
        }
      },
      {
        title: 'Type',
        dataIndex: 'type',
        key: 'type',
        width: '30%',
        render: (text, record, index) => {
          return (
            <Form.Item>
              <Select
                placeholder='Select a Type'
                onChange={value => changeRow(index, 'type', value)}
                defaultValue={record.type}
              >
                <Select.Option value=''>-Select-</Select.Option>
                <Select.Option value='number'>Number</Select.Option>
                <Select.Option value='text'>Text</Select.Option>
              </Select>
            </Form.Item>
          )
        }
      },
      {
        title: 'Value',
        dataIndex: 'value',
        key: 'value',
        width: '30%',
        render: (text, record, index) => {
          return (
            <Form.Item>
              <Input
                placeholder='Please provide a Value'
                defaultValue={record.value}
                onChange={e => changeRow(index, 'value', e.target.value)}
              />
            </Form.Item>
          )
        }
      },
      {
        title: 'Actions',
        width: '10%',
        dataIndex: 'actions',
        render: (text, record, index) => {
          return (
            <div style={{ display: 'inline-block' }}>
              <div>
                {data.length > 1 ?
                  <DeleteOutlined onClick={() => deleteRow(index)} style={{ color: Theme.twitterBootstrap.danger }} />
                  :
                  <DeleteOutlined style={{ color: Theme.secondaryDark }} />
                }
                <PlusCircleOutlined
                  style={{ marginLeft: 20, color: Theme.twitterBootstrap.success }}
                  onClick={() => addRow(index)}
                />
              </div>
            </div>
          )
        }
      }
    ]
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
