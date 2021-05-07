import Head from 'next/head';
import Home from '@/components/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>UI Lab 3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </>
  );
}
