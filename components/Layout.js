import Header from './Header';
import Meta from './Meta';
import layoutStyles from '../styles/Layout.module.css';

const Layout = ({ children }) => {
    return (
        <>
            <Meta />
            <div className={layoutStyles.container}>
                <main className={layoutStyles.main}>
                    <Header />
                    {children}
                </main>
            </div>
        </>
    );
};

export default Layout;
