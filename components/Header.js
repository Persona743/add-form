import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <ul className={headerStyles.title}>
                <li>
                    <a>ITEM 05</a>
                </li>
                <li>
                    <a>ITEM 04</a>
                </li>
                <li>
                    <a>ITEM 03</a>
                </li>
                <li>
                    <a>ITEM 02</a>
                </li>
                <li>
                    <a>ITEM 01</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;
