import React from 'react'
import routes from '../../routes/sidebar'
import { NavLink, Route } from 'react-router-dom'
import * as Icons from '../../icons'
import SidebarSubmenu from './SidebarSubmenu'
import { Button } from '@windmill/react-ui'
import Logo from '../Logo'
import MdIcon from '../MdIcon'

// function Icon({ icon, ...props }) {
//   const Icon = Icons[icon]
//   return <Icon {...props} />
// }

function SidebarContent() {
  return (
    <div className="py-4 text-gray-500 ">
      
      <Logo/>
      <hr className="mt-3" />

      <ul className="mt-6">
        {routes.map((route) =>
          route.routes ? (
            <SidebarSubmenu route={route} key={route.name} />
          ) : (
            <li className="relative py-1 my-1 px-3" key={route.name}>
              <NavLink
                exact
                to={route.path}
                
                className={({ isActive }) => {
                  const baseClasses = "font-bold rounded-lg w-full py-2 px-5 inline-flex items-center text-sm font-semibold transition-colors duration-150 ";
                  const activeClasses = "text-white bg-primaire border-r-4 border-r-primaire";
                  const inactiveClasses = "hover:bg-gris_clair text-tertiaire";
                  return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
                }}             
              >
               
                <MdIcon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </NavLink>
            </li>
          )
        )}
      </ul>
      <div className="px-6 my-6">
        <Button>
          Create account
          <span className="ml-2" aria-hidden="true">
            +
          </span>
        </Button>
      </div>
    </div>
  )
}

export default SidebarContent
