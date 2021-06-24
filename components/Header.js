import Link from 'next/link';
import styles from '@/styles/Header.module.css';

const Header = () => {
    const homeATagStyle = {color: '#f00', fontSize: '1.25rem', fontWeight: '600'};

    return (
        <header className={styles.header}>
            <div classname={styles.logo}>
                <Link href='/'>
                    <a style={homeATagStyle}>DJ Event</a>
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link href="/events">
                            <a>Events</a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
