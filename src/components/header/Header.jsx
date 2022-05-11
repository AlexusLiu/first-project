import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

function Header() {
  return (
    <Header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alex Liu</h1>
        <h5 className="text-light">UIUX & web Developer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </Header>
  )
}

export default Header