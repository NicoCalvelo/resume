import Head from "next/head";
import NavBar from "../components/Navbar";
import styles from "../components/resume/header.module.scss";

const siteTitle = "@nico.calvelo";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="og:title" content={siteTitle} />
        <meta name="description" content="Welcome to my web page! See my resume and learn about me." />
        <meta name="keywords" content="Nicolas, Calvelo" />
        <meta name="author" content="Nico Calvelo"></meta>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <title>{siteTitle}</title>
      </Head>
      <main id="main" className="relative mx-auto md:pl-16 md:pr-6 max-w-6xl text-palette-grey-blue space-y-16">
        <div className="mx-auto w-min h-64 flex items-center">
          <a href="/resume" rel="noreferrer" className="action-btn-green whitespace-nowrap">
            See resume
          </a>
        </div>
      </main>
    </>
  );
}
