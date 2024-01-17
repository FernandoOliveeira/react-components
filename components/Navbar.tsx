import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>

        <ul className='flexEnd hidden h-full gap-12 lg:flex basis-1/2'>
            {NAV_LINKS.map((link) =>(
                <Link href={link.href} key={link.key} className='cursor-pointer pb-1.5 transition-all hover:font-bold text-white'>
                    {link.label}
                </Link>
            ))}
        </ul>


        <div className='lg:flexCenter hidden '>
          <Button
            type='button'
            title='Whatsapp'
            icon='/whatsapp.svg'
            variant='btn_green'
          />
        </div>
    </nav>
  )
}

export default Navbar