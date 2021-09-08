import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <div>
      <Head>
        <meta name="description" content="Next.js page" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Next.js Page</title>
      </Head>
      <h1>About us</h1>
      <Link href="/" as={process.env.BACKEND_URL + "/"}>
        <a>Back to home</a>
      </Link>
    </div>
  );
}

export default About;