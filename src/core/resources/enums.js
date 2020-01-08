const CoreEnums = {
  reducers: {
    SET_TOOLBAR: 'coreSetToolbar',
    SET_TABS: 'coreSetTabs'
  },
  values: {
    PRODUCTION: 'production',
    CORE_ROOT: 'core-root',
    AUTHENTICATING: 'authenticating',
    AUTHENTICATED: 'authenticated'
  },
  messages: {
    APP_CLOSE: `Are you sure you want to close the ${process.env.REACT_APP_NAME}?`,
    CANCEL_RECORD_PROMPT: 'Are you sure you want to close this record? Any unsaved changes will be discarded'
  }
}

export default CoreEnums
