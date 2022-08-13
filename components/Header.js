import headerStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                ITEM 01
            </h1>
            <h1 className={headerStyles.title}>
                ITEM 02
            </h1>
            <h1 className={headerStyles.title}>
                ITEM 03
            </h1>
            <h1 className={headerStyles.title}>
                ITEM 04
            </h1>
            <h1 className={headerStyles.title}>
                ITEM 05
            </h1>
        </div>
    );
};

export default Header;
