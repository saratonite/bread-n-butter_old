import Link from 'next/link'
export default () => (
  <nav className='navbar' role='navigation' aria-label='main navigation'>
    <div className='navbar-brand'>
      <a className='navbar-item' href='/'>
        <span>BNB</span>
      </a>

      <a
        role='button'
        className='navbar-burger'
        aria-label='menu'
        aria-expanded='false'
      >
        <span aria-hidden='true' />
        <span aria-hidden='true' />
        <span aria-hidden='true' />
      </a>
    </div>

    <div className='navbar-menu' id='navMenu'>
      <Link href='/'><a className='navbar-item'>Home</a></Link>
      <Link href='/about'><a className='navbar-item'>About</a></Link>
      <Link href='/login'><a className='navbar-item'>Login</a></Link>
    </div>
  </nav>
)
