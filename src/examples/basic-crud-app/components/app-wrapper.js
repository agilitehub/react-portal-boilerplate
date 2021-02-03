import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import ListView from './list-view'
import BasicForm from './basic-form'

import AgiliteReactEnums from '../../../agilite-react/enums'
import BasicCRUDAppEnums from '../enums'

const AppWrapper = () => {
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
        content: <BasicForm data={record} isNewRecord={false} />
      }
    })
  }

  const deleteRecord = (id) => {
    dispatch({ type: BasicCRUDAppEnums.reducers.DELETE_RECORD, id })
  }

  return (
    <ListView data={viewData} createRecord={createRecord} editRecord={editRecord} deleteRecord={deleteRecord} refreshView={refreshView} />
  )
}

export default AppWrapper
