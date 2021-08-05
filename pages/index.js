import Head from 'next/head';
import Feature from '../components/Feature';
import Layout from '../components/Layout/Layout/Layout';
import Pricing from '../components/Pricing';
import Hero from './../components/Hero';

export default function Home() {
  return (
    <>
      <Head>
        <title>VPN for Everyone</title>
        <link rel="stylesheet" href="favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Pricing />
      </Layout>
    </>
  );
}
