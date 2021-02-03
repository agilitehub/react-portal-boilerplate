import React from 'react'
import { Row, Col, Card, Button, Tooltip, Table, Popconfirm } from 'antd'
import { SyncOutlined, DeleteOutlined } from '@ant-design/icons'

import Theme from '../../../agilite-react/theme'

const ListView = ({ data, refreshView, createRecord, editRecord, deleteRecord }) => {
  return (
    <Row justify='center'>
      <Col span={24}>
        <Card title='List View' type='inner'>
          <Button
            onClick={createRecord}
            style={{ backgroundColor: Theme.twitterBootstrap.success, color: 'white' }}
          >
            Create New
          </Button>
          <Button
            style={{ float: 'right' }}
            onClick={refreshView}
          >
            <Tooltip title='Refresh'>
              <SyncOutlined style={{ fontSize: 19, color: Theme.twitterBootstrap.success, marginTop: 2 }} />
            </Tooltip>
          </Button>
          <Table
            rowKey={record => record.name}
            dataSource={data}
            style={{ marginTop: 10 }}
            pagination={false}
            columns={[
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
            ]}
          />
        </Card>
      </Col>
    </Row>
  )
}

export default ListView
