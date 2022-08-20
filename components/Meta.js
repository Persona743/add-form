import Head from 'next/head';

const Meta = ({ title, keywords, description }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
            {/* bootstrap cdn */}
            {/* <link
                href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
                rel="stylesheet"
            /> */}
        </Head>
    );
};

Meta.defaultProps = {
    title: 'form task',
    keywords: 'form, add, nextjs',
    description: ' task for sina corp',
};

export default Meta;
