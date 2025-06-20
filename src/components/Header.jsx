import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Mini Uber Eats</h1>
      <nav>
        <ul style={styles.navList}>
          <li><Link to="/" style={styles.link}>Inicio</Link></li>
          <li><Link to="/cart" style={styles.link}>Carrito</Link></li>
          <li><Link to="/checkout" style={styles.link}>Checkout</Link></li>
        </ul>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    margin: 0
  },
  navList: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    margin: 0,
    padding: 0
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}

export default Header
