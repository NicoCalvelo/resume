
//To see more of metadata visit -->  https://nextjs.org/learn/basics/assets-metadata-css/metadata
import Head from "next/head";

//To see more of 3rd party scripts visit --> https://nextjs.org/learn/basics/assets-metadata-css/third-party-javascript
import Script from 'next/script'
import Image from "next/image";
//More on Link component https://nextjs.org/learn/basics/navigate-between-pages/link-component
import Link from "next/link";
import Layout from "../../components/layout";

export default function TeBusco() {
  return (
    <Layout>
      <Head>
        <title>Te busco</title>
      </Head>
      {/* <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      /> */}
      <h1>Te busco</h1>
      <Image
        src="/images/fotixo.jpg" // Route of the image file
        height={400} // Desired size with correct aspect ratio
        width={400} // Desired size with correct aspect ratio
        alt="Profile picture"
      />
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
