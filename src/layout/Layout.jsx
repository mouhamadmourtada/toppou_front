import React, { useContext, Suspense, useEffect, lazy } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import routes from '../routes'

import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Main from './/Main'
import ThemedSuspense from '../components/ThemedSuspense'
import { SidebarContext } from '../context/SidebarContext'

const Page404 = lazy(() => import('../pages/404'))

function Layout({children}) {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext)
  let location = useLocation()

  useEffect(() => {
    closeSidebar()
  }, [location])

  return (
    <div
      className={`flex h-screen bg-gray-50 ${isSidebarOpen && 'overflow-hidden'}`}
    >
      <Sidebar />

      <div className="bg-my_white flex flex-col flex-1 h-full w-full ">
        <Header />
        <Main  >
          {children}
        </Main>
      </div>
    </div>
  )
}

export default Layout