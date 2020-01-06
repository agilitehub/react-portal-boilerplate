const CoreEnums = {
  reducers: {
    SET_TOOLBAR: 'coreSetToolbar'
  },
  values: {
    PRODUCTION: 'production',
    ROOT: 'root',
    AUTHENTICATING: 'authenticating',
    AUTHENTICATED: 'authenticated',
    PORTAL_MENU: 'Portal Menu'
  },
  messages: {
    APP_CLOSE: `Are you sure you want to close the ${process.env.REACT_APP_NAME}?`,
    CANCEL_RECORD_PROMPT: 'Are you sure you want to close this record? Any unsaved changes will be discarded'
  }
}

export default CoreEnums
