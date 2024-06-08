import React, { useContext, useState } from 'react'
import { SidebarContext } from '../context/SidebarContext'
import { useAuth } from "../provider/authProvider";
import StorageService from '../services/StorageService';

import {
  SearchIcon,
  MoonIcon,
  SunIcon,
  BellIcon,
  MenuIcon,
  OutlinePersonIcon,
  OutlineCogIcon,
  OutlineLogoutIcon,
} from '../icons'
import { Avatar, Badge, Dropdown, DropdownItem, WindmillContext } from '@windmill/react-ui'

function Header() {
  const { mode, toggleMode } = useContext(WindmillContext)
  const { toggleSidebar } = useContext(SidebarContext)

  const [isNotificationsMenuOpen, setIsNotificationsMenuOpen] = useState(false)
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)

  function handleNotificationsClick() {
    setIsNotificationsMenuOpen(!isNotificationsMenuOpen)
  }

  function handleProfileClick() {
    setIsProfileMenuOpen(!isProfileMenuOpen)
  }

  const logout = () => {
    console.log("logout")
    StorageService.clear();
      setToken(null);

  }

  const { setToken } = useAuth();

  return (
    <header className="z-40 p-4 lg:px-8 bg-my_white shadow-bottom  border border-b-gray-100">
      <div className="container flex items-center justify-between h-full mx-auto text-purple-600 ">
        {/* <!-- Mobile hamburger --> */}
        <div>
          <button
            className="p-1 mr-5 -ml rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            onClick={toggleSidebar}
            aria-label="Menu"
          >
            <MenuIcon className="w-6 h-6" aria-hidden="true" />
          </button>

        </div>


        {/* <!-- Search input --> */}
        {/* <div className="flex justify-center flex-1 lg:mr-32 bg-white py-1 rounded-3xl">
          <div className="relative w-full max-w-xl focus-within:text-primaire">
            <div className="absolute inset-y-0 flex items-center pl-2">
              <SearchIcon className="w-4 h-4" aria-hidden="true" />
            </div>
            <Input 
              className=" w-full pl-8 text-gray-700 bg-my_white py-2"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
        </div> */}

        <div className="rounded-3xl bg-white pr-2 py-2 min-w-96 flex justify-end">

        <div className="relative w-full mx-4 lg:min-w-96  max-w-xl focus-within:text-primaire">
            
            <div className="absolute inset-y-0 flex items-center ml-2">
              <SearchIcon className="w-4 h-4 fill-tertiaire" aria-hidden="true" />
            </div>
            <input type = "search" 
              className=" w-full pl-8 text-gray-700 bg-my_white py-2 rounded-3xl"
              placeholder="Search for projects"
              aria-label="Search"
            />
          </div>
          <ul className="flex items-center flex-shrink-0 space-x-6">
            
            
            {/* <!-- Notifications menu --> */}
            <li className="relative">
              <button
                className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
                onClick={handleNotificationsClick}
                aria-label="Notifications"
                aria-haspopup="true"
              >
                <BellIcon className="w-5 h-5 fill-tertiaire" aria-hidden="true" />
                {/* <!-- Notification badge --> */}
                <span
                  aria-hidden="true"
                  className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-my_white rounded-full "
                ></span>
              </button>

              <Dropdown
                align="right"
                isOpen={isNotificationsMenuOpen}
                onClose={() => setIsNotificationsMenuOpen(false)}
              >
                <DropdownItem tag="a" href="#" className="justify-between">
                  <span>Messages</span>
                  <Badge type="danger">13</Badge>
                </DropdownItem>
                <DropdownItem tag="a" href="#" className="justify-between">
                  <span>Sales</span>
                  <Badge type="danger">2</Badge>
                </DropdownItem>
                <DropdownItem onClick={() => alert('Alerts!')}>
                  <span>Alerts</span>
                </DropdownItem>
              </Dropdown>
            </li>
            {/* <!-- Profile menu --> */}
            <li className="relative">
              <button
                className="rounded-full focus:shadow-outline-purple focus:outline-none"
                onClick={handleProfileClick}
                aria-label="Account"
                aria-haspopup="true"
              >
                <Avatar
                size ="large"
                  className="align-middle p-1 bg-gris_clair"
                  src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
                  alt=""
                  aria-hidden="true"
                />
              </button>
              <Dropdown
                align="right"
                isOpen={isProfileMenuOpen}
                onClose={() => setIsProfileMenuOpen(false)}
              >
                <DropdownItem tag="a" href="#">
                  <OutlinePersonIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Profile</span>
                </DropdownItem>
                <DropdownItem tag="a" href="#">
                  <OutlineCogIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Settings</span>
                </DropdownItem>
                <DropdownItem onClick={logout}>
                  <OutlineLogoutIcon className="w-4 h-4 mr-3" aria-hidden="true" />
                  <span>Log out</span>
                </DropdownItem>
              </Dropdown>
            </li>
          </ul>

        </div>
      </div>
    </header>
  )
}

export default Header
