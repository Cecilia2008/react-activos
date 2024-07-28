// lib/apolloClient.js
import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { useMemo } from 'react';

let apolloClient;

function createApolloClient() {
  return new ApolloClient({
    // http://localhost:8080/graphiql?path=/graphql
    // https://rickandmortyapi.com/graphql
    uri: 'http://3.129.58.104:8080/graphql', fetch,// URL de tu endpoint GraphQL
    cache: new InMemoryCache(),
  });
}

export function initializeApollo(initialState = null) {
  const _apolloClient = apolloClient ?? createApolloClient();

  // Si tu página tiene métodos de obtención de datos de Next.js que usan Apollo Client,
  // el estado inicial se hidrata aquí
  if (initialState) {
    _apolloClient.cache.restore(initialState);
  }

  // Para SSG y SSR siempre crea un nuevo Apollo Client
  if (typeof window === 'undefined') return _apolloClient;
  // Crea el Apollo Client una vez en el cliente
  if (!apolloClient) apolloClient = _apolloClient;

  return _apolloClient;
}

export function useApollo(initialState) {
  const store = useMemo(() => initializeApollo(initialState), [initialState]);
  return store;
}

// import { HttpLink } from "@apollo/client";
// import {
//   registerApolloClient,
//   ApolloClient,
//   InMemoryCache,
// } from "@apollo/experimental-nextjs-app-support";

// export const { getClient, query, PreloadQuery } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: "http://localhost:8080/graphiql",
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       // fetchOptions: { cache: "no-store" },
//     }),
//   });
// });
