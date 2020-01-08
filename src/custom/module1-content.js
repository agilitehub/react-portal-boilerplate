import React, { memo } from 'react'

function TempModule1Content () {
  return (
    <>
      <h2>
        <center>
        This is Module1Content
        </center>
      </h2>
    </>
  )
}

const Module1Content = memo(TempModule1Content)
export default Module1Content
