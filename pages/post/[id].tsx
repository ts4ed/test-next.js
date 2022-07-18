import Link from "../../node_modules/next/link";
import { useEffect, useState } from "react";
import { MainLayout } from "../../components/MainLayout";
import { useRouter } from "../../node_modules/next/router";
import { NextPageContext } from "../../node_modules/next/dist/shared/lib/utils";
import { MyPost } from "../../interfaces/post";

interface PostPageProps {
  post: MyPost;
}

export default function Post({ post: serverPost }: PostPageProps) {
  const [post, setPost] = useState(serverPost);
  const router = useRouter();

  useEffect(() => {
    async function load() {
      const response = await fetch(
        `http://localhost:4040/posts/${router.query.id}`
      );
      const data = await response.json();
      setPost(data);
    }

    if (!serverPost) {
      load();
    }
  }, []);

  if (!post) {
    return (
      <MainLayout>
        <p>Loading...</p>
      </MainLayout>
    );
  }
  return (
    <MainLayout>
      <h1>{post.title}</h1>
      <hr />
      <p>{post.body}</p>
      <Link href={"/posts"}>
        <a>Back to all posts</a>
      </Link>
    </MainLayout>
  );
}

// Post.getInitialProps = async ({ query, req }) => {
//   if (!req) {
//     return { posts: null };
//   }
//   const response = await fetch(`http://localhost:4040/posts/${query.id}`);
//   const post = await response.json();
//   return { post };
// };

interface PostNextPageContext extends NextPageContext {
  query: {
    id: string;
  };
}

export async function getServerSideProps({ query, req }: PostNextPageContext) {
  const response = await fetch(`${process.env.API_URl}/posts/${query.id}`);
  const post: MyPost = await response.json();
  return {
    props: { post }, // will be passed to the page component as props
  };
}
