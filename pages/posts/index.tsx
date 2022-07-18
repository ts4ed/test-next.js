import Head from "../../node_modules/next/head";
import Link from "../../node_modules/next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { MyPost } from "../../interfaces/post";
import { NextPageContext } from "../../node_modules/next/dist/shared/lib/utils";

interface PostsPageProps {
  posts: MyPost[];
}

export default function Posts({ posts: serverPosts }: PostsPageProps) {
  const [posts, setPosts] = useState(serverPosts);
  useEffect(() => {
    async function load() {
      const response = await fetch("http://localhost:4040/posts");
      const json = await response.json();
      setPosts(json);
    }
    if (!serverPosts) {
      load();
    }
  }, []);

  if (!posts) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <Head>
        <title>Post Page</title>
      </Head>
      <h1>Posts page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post/[id]`} as={`/post/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </MainLayout>
  );
}

Posts.getInitialProps = async ({ req }: NextPageContext) => {
  if (!req) {
    return { posts: null };
  }
  const response = await fetch(`${process.env.API_URl}/posts`);
  const posts: MyPost[] = await response.json();
  return { posts };
};
