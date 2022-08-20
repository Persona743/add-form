import Layout from '../components/Layout';
import Link from '../components/Link';
import Alert from '../components/Alert';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            {/* <Alert /> */}
            <Component {...pageProps} />
        </Layout>
    );
}

export default MyApp;
