import Link from "../node_modules/next/link";
import Head from "../node_modules/next/head";
import s from "../styles/styles.module.css";

export function MainLayout({ children, title = "Next App" }) {
  return (
    <>
      <Head>
        <title>{title} | Next js</title>
        <meta name="keywords" content="next,nextjs,javascript,react" />
        <meta name="description" content="this is my app next.js" />
      </Head>
      <header>
        <nav className={s.nav}>
          <Link href={"./"}>
            <a>Home</a>
          </Link>
          <Link href={"./about"}>
            <a>About</a>
          </Link>
          <Link href={"./posts"}>
            <a>Posts</a>
          </Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
