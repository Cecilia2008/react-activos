

// have a function to create a client for you
// const makeClientDjango = () => {
//   const httpLink = new HttpLink({
//     // this needs to be an absolute url, as relative urls cannot be used in SSR
//     uri: "http://127.0.0.1:8000/graphql",
//     // you can disable result caching here if you want to
//     // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//     fetchOptions: { cache: "no-store" },
//     // you can override the default `fetchOptions` on a per query basis
//     // via the `context` property on the options passed as a second argument
//     // to an Apollo Client data fetching hook, e.g.:
//     // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
//   });

//   // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
//   return new ApolloClient({
//     // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
//     cache: new InMemoryCache(),
//     link: httpLink,
//   });
// }

import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientSpring = new ApolloClient({
  /* uri: 'http://3.129.58.104:8080/graphql', */ // Reemplaza con tu endpoint GraphQL de Spring
  uri: 'http://127.0.0.1:8080/graphql',
  cache: new InMemoryCache(),
});

export default clientSpring;
// you need to create a component to wrap your app in
//: React.PropsWithChildren
// export function ApolloWrapper({ children }) {
//   return (
//     <ApolloNextAppProvider makeClient={makeClientDjango}>
//         <ApolloNextAppProvider makeClient={makeClientSpring}>
//         {children}
//         </ApolloNextAppProvider>
//     </ApolloNextAppProvider>
//   );
// }
