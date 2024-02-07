import React from 'react'
import './navbar.css'
import Logo from '../../public/logo.png'
import Image from 'next/image'
import Options from './options'
import Search from './search'

function navbar() {
  return (
    <div id='body'>
        <div id='logo'>
            <Image 
                src={Logo} 
                height={40}
                alt=""/>
        </div>
        <div id='options'>
            <Options/>
        </div>
        <div id='search'>
          <Search/>
        </div>
    </div>
  )
}

export default navbar