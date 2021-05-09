import Head from 'next/head';
import Menu from '@/components/Menu';
import Hero from '@/components/Hero';

export default function Index() {
  return (
    <>
      <Head>
        <title>UI Lab 3</title>
        <link
          sizes="16x16"
          type="image/png"
          rel="icon"
          href="https://www.datocms-assets.com/11897/1563128266-favicon.png?h=16&amp;w=16"
        />
        <link
          sizes="32x32"
          type="image/png"
          rel="icon"
          href="https://www.datocms-assets.com/11897/1563128266-favicon.png?h=32&amp;w=32"
        />
        <link
          sizes="96x96"
          type="image/png"
          rel="icon"
          href="https://www.datocms-assets.com/11897/1563128266-favicon.png?h=96&amp;w=96"
        />
        <link
          sizes="192x192"
          type="image/png"
          rel="icon"
          href="https://www.datocms-assets.com/11897/1563128266-favicon.png?h=192&amp;w=192"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Menu />
      <Hero />
    </>
  );
}
