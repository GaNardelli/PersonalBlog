import React from 'react';

import "./topbar.css";

export default function TopBar() {
  return (
    <div className='topbar'>
        <a className="item-nav logo nav-1" href='#'> logo-img </a>
        <ul className="nav-2">
            <li className="item-nav home"><a href='#'> Home </a></li>
            <li className="item-nav publi"><a href='#'> Publicações </a></li>
            <li className="item-nav forum"><a href='#'> Forum </a></li>
            <li className="item-nav sobre"><a href='#'> Sobre </a></li>
            <div className='item-nav social-media'>
                <a className="item-nav insta"href='#'><i class="fa-brands fa-instagram"></i></a>
                <a className='item-nav linkedin' href='#'><i class="fa-brands fa-linkedin"></i></a>
            </div>
        </ul>
    </div>
  )
}
