import Head from "next/head";
import PizzaList from "../components/PizzaList";
import Featured from "../components/Featured";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pizza App - Jaipur</title>
        <meta name="description" content="Best Pizza App - Jaipur" />
      </Head>
      <Featured />
      <PizzaList />
    </div>
  );
}
