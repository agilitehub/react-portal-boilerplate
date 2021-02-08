import React, { lazy, Suspense, memo } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import AgiliteReactEnums from '../../../agilite-react/enums'
import BasicCRUDAppEnums from '../enums'
import { Spin } from 'antd'

const ListView = lazy(() => import('./list-view'))
const BasicForm = lazy(() => import('./basic-form'))

const _AppWrapper = () => {
  const dispatch = useDispatch()
  const viewData = useSelector(state => state.basicCRUDApp.data)

  const refreshView = () => {
    console.log('Refreshed')
  }

  const createRecord = () => {
    dispatch({
      type: AgiliteReactEnums.reducers.ADD_TAB,
      tab: {
        key: 'new_record',
        closable: true,
        title: 'New Record',
        content: (
          <Suspense fallback={<Spin>Loading...</Spin>}>
            <BasicForm
              data={{
                id: `${Date.now()}`,
                name: '',
                description: '',
                gender: '',
                age: ''
              }}
              isNewRecord
            />
          </Suspense>
        )
      }
    })
  }

  const editRecord = (record) => {
    dispatch({
      type: AgiliteReactEnums.reducers.ADD_TAB,
      tab: {
        key: record.id,
        closable: true,
        title: `Record: ${record.name}`,
        content: (
          <Suspense fallback={<Spin>Loading...</Spin>}>
            <BasicForm data={record} isNewRecord={false} />
          </Suspense>
        )
      }
    })
  }

  const deleteRecord = (id) => {
    dispatch({ type: BasicCRUDAppEnums.reducers.DELETE_RECORD, id })
  }

  return (
    <Suspense fallback={<Spin>Loading...</Spin>}>
      <ListView data={viewData} createRecord={createRecord} editRecord={editRecord} deleteRecord={deleteRecord} refreshView={refreshView} />
    </Suspense>
  )
}

const AppWrapper = memo(_AppWrapper)

export default AppWrapper
