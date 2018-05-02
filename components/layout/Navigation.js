import Link from 'next/link'
export default () => (
    <nav className="main-nav">
    <h1 className="brand">BNB</h1>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>About</a></Link></li>
        </ul>
    </nav>
)