import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";
import {ChakraProvider} from '@chakra-ui/react';

const client = new ApolloClient({
  uri: 'https://graphql-pokemon2.vercel.app/',
  // キャッシュを参照しにに行く
  cache: new InMemoryCache()
})

function MyApp({Component, pageProps}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}

export default MyApp
