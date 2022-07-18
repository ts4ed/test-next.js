import Head from "../node_modules/next/head";
import Link from "../node_modules/next/link";
import { MainLayout } from "../components/MainLayout";
import s from "../styles/styles.module.css";

export default function Index() {
  return (
    <MainLayout title={"Home Page"}>
      <h1 className={s.title}>Hello Next.JS</h1>
      <p>
        <Link href={"./about"}>
          <a>About</a>
        </Link>
      </p>
      <p>
        <Link href={"./posts"}>
          <a>Posts</a>
        </Link>
      </p>
    </MainLayout>
  );
}
