import { Layout } from "@/Components/Layout";
import "@/styles/globals.css";
import '@aws-amplify/ui-react/styles.css'
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import awscongig from '../aws-exports';
import { Authenticator } from "@aws-amplify/ui-react";

Amplify.configure({
  ...awscongig
})
export default function App({ Component, pageProps }: AppProps) {
  return (

    <Authenticator.Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Authenticator.Provider>

  )

}
