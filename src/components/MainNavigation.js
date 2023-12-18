import React from 'react'
import { NavLink } from 'react-router-dom';
import Classes from './MainNavigation.module.css'

export default function MainNavigation() {
  return (
    <header className={Classes.header}>
        <nav>
            <ul className={Classes.list}>
                <li><NavLink className={({isActive}) => isActive ? Classes.active : undefined} to='/'>Home</NavLink></li>
                <li><NavLink className={({isActive}) => isActive ? Classes.active : undefined} to='/products'>Products</NavLink></li>
            </ul>
        </nav>
    </header>
  )
}
