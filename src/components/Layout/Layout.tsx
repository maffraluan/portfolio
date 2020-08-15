import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarVertical from '../NavbarVertical/NavbarVertical'

interface ILayoutProps {
}

const Layout: React.FC<ILayoutProps> = ({ children }) => {

    return (
      <div className="main-content">
        <Navbar />
        <NavbarVertical /> 
        {children}
      </div>
    )
}

export default Layout;