import twitterLogo from '../assets/logo-twitter.svg'
import { Bell, BookmarkSimple, DotsThreeCircle, Envelope, FileText, Hash, House, Pencil, User } from 'phosphor-react';

import './Sidebar.css'

// Contexto: locais que você tem acesso a informações e locais que não

// Nested routes: rotas em cascata

import { NavLink } from 'react-router-dom';

export function Sidebar() {
   return (
      <aside className='sidebar'>
        
        <img className='logo' src={twitterLogo} alt="Logo" />

        <nav className='main-navigation'>
          {/* <a className='active' href=""> */}
          {/* <Link className='active' to="/#"> */}
          <NavLink to='' >
            <House weight='fill' />
            <span>Home</span>
          {/* </Link> */}
          </NavLink>

          <a href="">
            <Hash />
            <span>Explore</span>
          </a>

          <a href="">
            <Bell />
            <span>Notifications</span>
          </a>

          <a href="">
            <Envelope />
            <span>Messages</span>
          </a>

          <a href="">
            <BookmarkSimple />
            <span>Bookmarks</span>
          </a>

          <a href="">
            <FileText />
            <span>Lists</span>
          </a>

          <a href="">
            <User />
            <span>Profile</span>
          </a>

          <a href="">
            <DotsThreeCircle />
            <span>More</span>
          </a>
        </nav>

        <button className='new-tweet' type='button'>
          <Pencil />
          <span>Tweet</span>
        </button>
      </aside>
   )
}