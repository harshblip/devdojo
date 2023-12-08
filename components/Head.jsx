import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="title"
        content="DevDojo - The Social Network for Developers"
      />
      <meta
        name="description"
        content="Discover creative websites and developers across the globe. "
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="" />
      <meta
        property="og:title"
        content="DevDojo - The Social Network for Developers"
      />
      <meta
        property="og:description"
        content="Discover creative websites and developers across the globe. "
      />
      <meta property="og:image" content="https://imgur.com/e0p2qaM.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="" />
      <meta
        property="twitter:title"
        content="DevDojo - The Social Network for Developers"
      />
      <meta
        property="twitter:description"
        content="Discover creative websites and developers across the globe. "
      />
      <meta property="twitter:image" content="https://imgur.com/e0p2qaM.png" />
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'DevDojo',
};
