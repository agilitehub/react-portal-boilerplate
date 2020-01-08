import React, { memo } from 'react'

function TempRootContent () {
  return (
    <>
      <h2>
        <center>
        This is RootContent
        </center>
      </h2>
    </>
  )
}

const RootContent = memo(TempRootContent)
export default RootContent
