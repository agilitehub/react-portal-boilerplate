import React, { useState } from 'react'
import { Tabs, Modal } from 'antd'
// import CoreTabHome from './core-tab-home'

// import MemoryStore from '../../resources/memory-store'
// import CoreEnums from '../resources/enums'

const TabPane = Tabs.TabPane

export default function CoreLanding (props) {
  // const [activeKey, setActiveKey] = useState(props.activeKey)

  // useEffect(() => {
  //   this.props.addTab({
  //     content: <CoreTabHome />,
  //     title: CoreEnums.values.HOME,
  //     key: CoreEnums.facets.HOME,
  //     app: CoreEnums.facets.HOME,
  //     tabType: '',
  //     closable: false
  //   })
  // }, [])

  // useEffect(() => {
  //   if (props.activeKey !== activeKey) {
  //     setActiveKey(nextProps.activeKey)
  //   }

  //   if (props.tabs.length === 0) {
  //     props.addTab({
  //       content: <CoreTabHome />,
  //       title: CoreEnums.values.HOME,
  //       key: CoreEnums.facets.HOME,
  //       app: CoreEnums.facets.HOME,
  //       tabType: '',
  //       closable: false
  //     })
  //   }
  // })

  // handleOnEdit (targetTab) {
  //   props.closeTab(activeKey, targetTab, props.tabs)
  // }

  // handleOnChange (key) {
  //   props.changeTab(key, props.tabs)
  // }

  // handlePromptTabClose (key) {
  //   let tmpValue = false

  //   // Loop through the activeEntries
  //   for (const x in MemoryStore.activeEntries) {
  //     // if the current tab key that was passed matches the activeEntry id
  //     if (key === MemoryStore.activeEntries[x]._id) {
  //       // if the activeEntry is modified
  //       if (MemoryStore.activeEntries[x].custom.isModified) {
  //         tmpValue = true
  //       }
  //     }
  //   }

  //   if (tmpValue) {
  //     Modal.confirm({
  //       onOk: () => this.handleOnEdit(key),
  //       okText: CoreEnums.values.YES_PROPER,
  //       cancelText: CoreEnums.values.NO_PROPER,
  //       content: CoreEnums.messages.CANCEL_CONTENT,
  //       title: CoreEnums.values.CONFIRMATION,
  //       centered: true,
  //       width: 500
  //     })
  //   } else {
  //     this.handleOnEdit(key)
  //   }
  // }

  return (
    <div />
    // <div className='App'>
    //   <Tabs
    //     type='editable-card'
    //     hideAdd
    //     activeKey={this.state.activeKey}
    //     onEdit={this.handlePromptTabClose}
    //     onChange={this.handleOnChange}
    //     tabBarStyle={{ textAlign: 'left' }}
    //     animated={false}
    //   >
    //     {this.props.tabs.map(pane => (
    //       <TabPane
    //         forceRender
    //         tab={pane.title}
    //         key={pane.key}
    //         closable={pane.closable}
    //       >
    //         {pane.content}
    //         <div style={{ width: '100%', height: 50 }}>
    //           {/* This is used to create spacing below cards when resolution is around 1280 x 720 */}
    //         </div>
    //       </TabPane>
    //     ))}
    //   </Tabs>
    // </div>
  )
}
