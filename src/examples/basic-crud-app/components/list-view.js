import React, { memo } from 'react'
import { Row, Col, Card, Button, Tooltip, Table } from 'antd'
import { SyncOutlined } from '@ant-design/icons'

import Theme from '../../../agilite-react/resources/theme'
import Templates from '../resources/templates'

const _ListView = ({ data, refreshView, createRecord, editRecord, deleteRecord }) => {
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
            columns={Templates.columnTemplate(editRecord, deleteRecord)}
          />
        </Card>
      </Col>
    </Row>
  )
}

const ListView = memo(_ListView)

export default ListView
