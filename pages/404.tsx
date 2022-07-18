import Link from "../node_modules/next/link";

export default function errorPage() {
  return (
    <>
      <h1>Error 404</h1>
      <p>
        Please
        <Link href={"./"}>
          <a>go back</a>
        </Link>
        to safty
      </p>
    </>
  );
}
