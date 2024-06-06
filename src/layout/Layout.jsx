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

      <div className="flex flex-col flex-1 w-full bg-gray-100">
        <Header />
        <Main >
          {children}
        </Main>
      </div>
    </div>
  )
}

export default Layout