import Head from "next/head";

const Header = () => {
  return (
    <Head>
      <title>Najwa Norijan Portfolio</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/images/favicon/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`/images/favicon/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`/images/favicon/favicon-16x16.png`}
      />
      <meta name="keywords" content="Full Stack Engineer" />
      <meta name="description" content="Najwa Norijan Portfolio" />
      <meta name="author" content="Nor Najwa Fazleen Binti Norijan" />
    </Head>
  );
};

export default Header;
