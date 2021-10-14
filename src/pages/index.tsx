import type { NextPage } from "next";
import Head from "next/head";

import Imagem from '../assets/image1.svg'
import { Container } from "../styles/pages/Home";

const Home: NextPage = () => {
  return (
    <Container>
      <Head>
        <title>HomePage</title>
      </Head>

        <Imagem/>
        <h1>Hello world!</h1>
    </Container>
  );
};

export default Home;
