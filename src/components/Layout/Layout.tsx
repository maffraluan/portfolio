import React from 'react'
import Navbar from '../Navbar/Navbar'
import NavbarVertical from '../NavbarVertical/NavbarVertical'

const Layout: React.FC = ({ children }) => {
    return (
      <div className="main-content">
        <Navbar />
        <NavbarVertical /> 
        {children}
      </div>
    )
};

export default Layout;