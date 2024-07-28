import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { registerApolloClient } from "@apollo/experimental-nextjs-app-support/rsc";

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      // https://studio.apollographql.com/public/spacex-l4uc6p/
      //https://rickandmortyapi.com/graphql
      //http://127.0.0.1:8000/graphql
      uri: "http://127.0.0.1:8000/graphql",
      // you can disable result caching here if you want to
      // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
      // fetchOptions: { cache: "no-store" },
    }),
  });
});

const client = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql',
  cache: new InMemoryCache()
});

export default client

// import { ApolloClient, InMemoryCache, HttpLink, ApolloLink, concat } from '@apollo/client';
// import Cookies from 'js-cookie'; // Asegúrate de tener esta biblioteca instalada

// const httpLink = new HttpLink({ uri: 'http://127.0.0.1:8000/graphql' });

// const csrfMiddleware = new ApolloLink((operation, forward) => {
//   // Obtener el token CSRF de las cookies
//   const csrfToken = Cookies.get('csrftoken');

//   // Añadir el token CSRF a los headers de la solicitud
//   operation.setContext(({ headers = {} }) => ({
//     headers: {
//       ...headers,
//       'X-CSRFToken': csrfToken,
//     }
//   }));

//   return forward(operation);
// });

// // export const {getClient} = new ApolloClient({
// //   link: concat(csrfMiddleware, httpLink),
// //   cache: new InMemoryCache(),
// // });

// export const { getClient } = registerApolloClient(() => {
//   return new ApolloClient({
//     cache: new InMemoryCache(),
//     link: concat(csrfMiddleware, httpLink),
//     })
// });

// lib/apolloClient.js




// import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
// import { useMemo } from 'react';

// let apolloClient;

// function createApolloClient() {
//   return new ApolloClient({
//     // http://localhost:8080/graphiql?path=/graphql
//     // https://rickandmortyapi.com/graphql
//     uri: 'http://127.0.0.1:8000/graphql', // URL de tu endpoint GraphQL
//     cache: new InMemoryCache(),
//   });
// }

// export function initializeApollo(initialState = null) {
//   const _apolloClient = apolloClient ?? createApolloClient();

//   // Si tu página tiene métodos de obtención de datos de Next.js que usan Apollo Client,
//   // el estado inicial se hidrata aquí
//   if (initialState) {
//     _apolloClient.cache.restore(initialState);
//   }

//   // Para SSG y SSR siempre crea un nuevo Apollo Client
//   if (typeof window === 'undefined') return _apolloClient;
//   // Crea el Apollo Client una vez en el cliente
//   if (!apolloClient) apolloClient = _apolloClient;

//   return _apolloClient;
// }

// export function useApollo(initialState) {
//   const store = useMemo(() => initializeApollo(initialState), [initialState]);
//   return store;
// }

