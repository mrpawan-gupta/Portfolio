import React from 'react'

function Header() {
  return (
    <nav>
      <NavbarContent />
    </nav>
  )
}

const NavbarContent = ()=>(
  <>
  <h2> Pawan. </h2>
  <div>
    <a href='#home'>Home</a>
    <a href='#work'>Work</a>
    <a href='#experience'>Experience</a>
    <a href='#services'>Services</a>
    <a href='#testimonial'>Testimonial</a>
    <a href='#contact'>Contact</a>
  </div>
  <a href="mailto:guptapawanro2017@gmail.com">
    <button>Email</button>
  </a>
  </>
)

export default Header