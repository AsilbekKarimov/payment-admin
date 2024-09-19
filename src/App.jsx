import React from 'react'
import { Outlet } from 'react-router'

const App = () => {
  return (
    <>
      <header></header>
      <main>
        <aside></aside>
        <Outlet />
      </main>
    </>

  )
}

export default App