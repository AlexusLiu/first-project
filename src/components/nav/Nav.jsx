/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './nav.css'
import { FaHome } from 'react-icons/fa'
import { FaUserCircle } from 'react-icons/fa'
import { IoMdListBox } from 'react-icons/io'
import { MdDesignServices } from 'react-icons/md'
import { BsFillChatTextFill } from 'react-icons/bs'
import { useState } from 'react'

function Nav() {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav('#')}
        className={activeNav === '#' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav('#about')}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaUserCircle />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav('#experience')}
        className={activeNav === '#experience' ? 'active' : ''}
      >
        <IoMdListBox />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav('#services')}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <MdDesignServices />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav('#contact')}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <BsFillChatTextFill />
      </a>
    </nav>
  )
}

export default Nav
