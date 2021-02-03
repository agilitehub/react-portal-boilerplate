import React, { useEffect } from 'react'
import { Row, Col, Card, Button, Tooltip, Table, Popconfirm } from 'antd'
import { SyncOutlined, DeleteOutlined } from '@ant-design/icons'
import { useDispatch, useSelector } from 'react-redux'

import Enums from '../../../agilite-react/enums'

import BasicForm from './basic-form'

const ListView = () => {
  const dispatch = useDispatch()
  const data = useSelector(state => state.basicCRUDApp.data)

  useEffect(() => {
    console.log('list-view')
  })

  const createRecord = () => {
    dispatch({
      type: Enums.reducers.ADD_TAB,
      tab: {
        key: 'new_record',
        closable: true,
        title: 'New Record',
        content: <BasicForm />
      }
    })
  }

  return (
    <Row justify='center'>
      <Col span={24}>
        <Card title='List View' type='inner'>
          <Button
            onClick={createRecord}
            style={{ backgroundColor: '#29A745', color: 'white' }}
          >
            Create New
          </Button>
          <Button
            style={{ float: 'right' }}
          >
            <Tooltip title='Refresh'>
              <SyncOutlined style={{ fontSize: 19, color: '#29A745', marginTop: 2 }} />
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
                key: 'name'
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
                    >
                      <DeleteOutlined
                        style={{ cursor: 'pointer', color: '#DC3645' }}
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
