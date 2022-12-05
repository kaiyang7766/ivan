import React from 'react';
import { Link } from 'react-router-dom';
import './canvas.scss';

export default function Navbar() {
  return (
  <>
    <ul>
      <Link to="/portfolio" className="portfolio"><span>Check</span> <span>out</span> <span>my</span> <span>projects</span> <span>here!</span></Link>
    </ul>
  </>
  );
};
