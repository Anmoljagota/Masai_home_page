import React, { useState } from 'react';
import Styles from './Navbar.module.css';

const Hamburger1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div  onClick={toggleMenu}>
     
    </div>
  );
};

export default Hamburger1;
