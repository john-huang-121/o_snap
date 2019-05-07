import React from 'react';

const Footer = () => {
  return (
    <footer className='homepage-footer'>
      <p>Find me on these platforms!</p>
      <div className='homepage-footer-content-container'>
        <a href='https://www.linkedin.com/in/john-huang1/' className='LinkedIn-container'>
          <div className='LinkedIn-icon'>in</div>
          LinkedIn
          </a>
        <a href='https://angel.co/john-huang-21?public_profile=1' className='angel-list-container'>
          <img className='angel-list-icon' src="https://img.icons8.com/windows/32/000000/angelist.png" />
          AngelList
          </a>
        <a href='http://www.johnhuang.me' className='about-me-container'>
          <div className='about-me-icon' />
          About
          </a>
        <a href='https://github.com/john-huang-121' className='github-container'>
          <div className='github-icon' />
          Github
          </a>
      </div>
    </footer>
  )
}

export default Footer;