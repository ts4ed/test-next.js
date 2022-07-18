import Router from "../../node_modules/next/router";
import { MainLayout } from "../../components/MainLayout";
import { NextPageContext } from "../../node_modules/next/dist/shared/lib/utils";

export default function About() {
  const linkClickHandler = () => {
    Router.push("./");
  };
  return (
    <MainLayout title={"About Page"}>
      <h1>About Page</h1>
      <button onClick={linkClickHandler}>Go back to home</button>
      <button onClick={() => Router.push("./posts")}>Go to Posts</button>
    </MainLayout>
  );
}

About.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { title: null };
  }
  const response = await fetch(`${process.env.API_URl}/about`);
  const data = await response.json();
  return {
    title: data.title,
  };
};
