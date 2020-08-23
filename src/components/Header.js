import React from 'react'
import content from '../const/Content'

const Header = ({title, subTitle}) => (
  <header className='header'>
    <div className='container'>
      <h1 className='header__title'>{title}</h1>
      {subTitle && <h2 className='header__subtitle'>{subTitle}</h2>}
    </div>
  </header>
)

Header.defaultProps = {
  title: content.title 
}

export default Header
