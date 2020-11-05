import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Nav from '../components/nav';
import MyCarousel from '../components/carousel';
import { ApolloClient, useQuery, ApolloProvider, HttpLink, InMemoryCache, gql } from '@apollo/client';

const name = 'Amber';
export const siteTitle = 'Next.js Sample Website';

const navStyle={
  marginLeft: '100px',
  marginTop: '20px'
};


const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({ uri: 'https://fine-hyena-77.hasura.app/v1/graphql' })
});


const Layout = ({
  children,
  home
}: {
  children: React.ReactNode
  home?: boolean
}) => {
  return (
    <ApolloProvider client={client}>

      <div>
        <div style={navStyle}>
          <Nav ></Nav>
        </div>
        <div className={styles.container}>

          <Head>
            <link rel="icon" href="/favicon.ico" />
            <meta
              name="description"
              content="Learn how to build a personal website using Next.js"
            />
            <meta
              property="og:image"
              content={`https://og-image.now.sh/${encodeURI(
                siteTitle
              )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
            />
            <meta name="og:title" content={siteTitle} />
            <meta name="twitter:card" content="summary_large_image" />
          </Head>


          <header className={styles.header}>
            {home ? (
              <>
                {/* <img
              src="/images/profile.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            /> */}
                <MyCarousel></MyCarousel>
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
              </>
            ) : (
              <>
                <Link href="/">
                  <a>
                    <img
                      src="/images/profile.png"
                      className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                      alt={name}
                    />
                  </a>
                </Link>
                <h2 className={utilStyles.headingLg}>
                  <Link href="/">
                    <a className={utilStyles.colorInherit}>{name}</a>
                  </Link>
                </h2>
              </>
            )}
          </header>
          <main>{children}</main>
          {!home && (
            <div className={styles.backToHome}>
              <Link href="/">
                <a>← Back to home</a>
              </Link>
            </div>
          )}
        </div>
      </div>
    </ApolloProvider>
  );
};

export default Layout;