import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DropdownIcon } from '../../icons'
import * as Icons from '../../icons'
import { Transition } from '@windmill/react-ui'

function Icon({ icon, ...props }) {
  const Icon = Icons[icon]
  return <Icon {...props} />
}

function SidebarSubmenu({ route }) {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false)

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen)
  }

  return (
    <li className="relative py-1" key={route.name}>
      <button
      
        className="inline-flex items-center justify-between w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 text-secondaire"
        onClick={handleDropdownMenuClick}
        aria-haspopup="true"
      >
        <span className="inline-flex items-center">
          <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
          <span className="ml-4">{route.name}</span>
        </span>
        <DropdownIcon className="w-4 h-4" aria-hidden="true" />
      </button>
      <Transition
        show={isDropdownMenuOpen}
        enter="transition-all ease-in-out duration-300"
        enterFrom="opacity-25 max-h-0"
        enterTo="opacity-100 max-h-xl"
        leave="transition-all ease-in-out duration-300"
        leaveFrom="opacity-100 max-h-xl"
        leaveTo="opacity-0 max-h-0"
      >
        <ul
          className="p-2 bg-gray-100 mt-1 border border-gray-200 border-1 mx-2 space-y-2 overflow-hidden text-sm font-medium text-gray-500 rounded-md shadow-xl bg-gray-200 "
          aria-label="submenu"
        >
          {route.routes.map((r) => (
            <li
              className="px-2 relative  transition-colors duration-150 hover:text-gray-800 "
              key={r.name}
            >
             
              <NavLink
                exact
                to={r.path}
                
                className={({ isActive }) => 
                  isActive ? "py-2  rounded px-5 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 bg-secondaire text-white hover:text-white" : "py-2  rounded px-5 inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 text-secondaire"
                }                
              >
               
                {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                <span className="ml-4">{r.name}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </Transition>
    </li>
  )
}

export default SidebarSubmenu
