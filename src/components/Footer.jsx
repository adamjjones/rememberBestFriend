import React from 'react';
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="footer">
      <span>&copy; 2020 </span>
      <span>Remember Best Friends, All rights reserved. |</span>
      <span><Link to="/Privacy"> Privacy Statement</Link></span>

    </div>
  );
}

export default Footer;