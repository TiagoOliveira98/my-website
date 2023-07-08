import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>About Me</Link>
                    </li>
                    <li>
                        <Link to='/my-journey'>My Journey</Link>
                    </li>
                    <li>
                        <Link to='/certs'>Courses and Certifications</Link>
                    </li>
                </ul>
            </nav>
            <div className={classes.name}>Tiago Oliveira</div>
        </header>
    );
}

export default MainNavigation;