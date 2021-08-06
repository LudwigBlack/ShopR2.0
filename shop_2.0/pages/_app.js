import  SnacksProvider  from "../contexts/SnacksProvider";

import "../styles/globals.css";

import Layout from "../components/Layout";
//import Snacks from "./Button/button";

function MyApp({ Component, pageProps }) {
  return (
    <SnacksProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SnacksProvider>
  );
}

export default MyApp;
