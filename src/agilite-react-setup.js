import React, { Suspense } from 'react'
import { Spin } from 'antd'

// Custom Components
import BasicApp from './examples/basic-crud-app/components/app-wrapper'
import TableFormApp from './examples/table-form-crud-app/components/app-wrapper'

// Custom Reducers
import basicCRUDAppReducer from './examples/basic-crud-app/reducer'
import tableFormCRUDAppReducer from './examples/table-form-crud-app/reducer'

export const initLeftMenuItems = () => {
  return [
    {
      key: 'basic_crud_app',
      title: 'Basic CRUD App'
    },
    {
      key: 'table_form_crud_app',
      title: 'Table Form CRUD App'
    }
  ]
}

export const generateContent = (key) => {
  switch (key) {
    case 'basic_crud_app':
      return {
        key,
        title: 'Basic CRUD App',
        closable: true,
        content: (
          <Suspense fallback={<Spin />}>
            <BasicApp />
          </Suspense>
        )
      }
    case 'table_form_crud_app':
      return {
        key,
        title: 'Table Form CRUD App',
        closable: true,
        content: (
          <Suspense fallback={<Spin />}>
            <TableFormApp />
          </Suspense>
        )
      }
    default:
  }
}

export const initCustomReducers = () => {
  return {
    basicCRUDApp: basicCRUDAppReducer,
    tableFormCRUDApp: tableFormCRUDAppReducer
  }
}
