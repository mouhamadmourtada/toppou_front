import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { DropdownIcon } from '../../icons'
import * as Icons from '../../icons'
import { Transition } from '@windmill/react-ui'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
    <li className="relative py-1 my-1 px-3 hover:bg-gris_clair " key={route.name}>
      
      <Accordion type="single" collapsible className="w-full pl-5 ">
          <AccordionItem value="item-1">
              <AccordionTrigger className = "text-tertiaire hover:no-underline 
              border-b-2 border-gray-200">
              <span className="inline-flex items-center">
                <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} />
                <span className="ml-4">{route.name}</span>
              </span>
              </AccordionTrigger>
              <AccordionContent>
              <ul
                className="border-2 border-gris_clair overflow-hidden text-sm font-medium text-gray-500 shadow"
                aria-label="submenu"
              >
                {route.routes.map((r) => (
                  <li
                    className="relative"
                    key={r.name}
                  >
                  
                    <NavLink
                      exact
                      to={r.path}
                      
                      className={({ isActive }) => {
                        const baseClasses = "font-bold rounded-lg w-full py-2 px-5 inline-flex items-center text-sm font-semibold transition-colors duration-150 ";
                        const activeClasses = "text-white bg-primaire border-r-4 border-r-primaire";
                        const inactiveClasses = "hover:bg-white text-tertiaire";
                        return `${baseClasses} ${isActive ? activeClasses : inactiveClasses}`;
                      }}                     
                    >
                    
                      {/* <Icon className="w-5 h-5" aria-hidden="true" icon={route.icon} /> */}
                      <span className="ml-4">{r.name}</span>
                    </NavLink>
                  </li>
                ))}
              </ul>
              </AccordionContent>
          </AccordionItem>
      </Accordion>
    </li>
  )
}

export default SidebarSubmenu
