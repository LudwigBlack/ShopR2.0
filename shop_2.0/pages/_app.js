//import  SnacksProvider  from "../contexts/SnacksProvider";
import { Providers } from "../components/Providers";
import "../styles/globals.css";

import Layout from "../components/Layout";
//import Snacks from "./Button/button";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Providers>
  );
}

export default MyApp;
