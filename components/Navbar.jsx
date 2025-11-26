import React from 'react'
import "@/styles/globals.css"
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'


const navigation = [
  { name: 'Event Details', href: '/#details', current: false },
  { name: 'Travel & Accommodations', href: '/#t&a', current: false },
    { name: 'Gallery', href: '/gallery', current: false },
    { name: 'RSVP', href: '/rsvp', current: false },
    { name: 'Registry', href: 'https://registry.theknot.com/alan-moreno-doli-patel-april-2026-az/75265407', current: false },
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }

const Navbar = () => {
  return (
    <Disclosure as="nav" className="relative z-30 backgdrop-blur-lg">
    <div className="mx-auto max-w-7xl px-2 sm:px-2 md:px-10 lg:px-20 font-primary text-xl text-white">
      <div className="relative flex h-10 items-center justify-between">
        <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          {/* Mobile menu button*/}
          <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 m-2 bg-white text-black hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-gray-500">
            <span className="absolute -inset-0.5" />
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
          </DisclosureButton>
        </div>
        <div className="flex flex-1 mx-auto items-center justify-centersm:items-stretch sm:justify-start">
          <div className="hidden mx-auto  sm:block">
            <div className="flex space-x-[150px]">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.name === "Registry" ? "_blank" : "_self"}
                  aria-current={item.current ? 'page' : undefined}
                  className={'text-white text-shadow-sm text-shadow-black/50'}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
       
      </div>
    </div>

    <DisclosurePanel className="sm:hidden z-40">
      <div className="space-y-1 px-2 pt-2 pb-3 bg-primary-2 text-blue-950 font-extrabold">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            target={item.name === "Registry" ? "_blank" : "_self"}
            aria-current={item.current ? 'page' : undefined}
            className={classNames(
              item.current ? 'text-white' : 'text-white hover:text-white',
              'block rounded-md px-3 py-2 text-lg',
            )}
          >
            {item.name}
          </DisclosureButton>
        ))}
      </div>
    </DisclosurePanel>
  </Disclosure>
  )
}

export default Navbar