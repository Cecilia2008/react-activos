

// have a function to create a client for you
import { ApolloClient, InMemoryCache } from '@apollo/client';

const clientDjango = new ApolloClient({
  uri: 'http://127.0.0.1:8000/graphql', // Reemplaza con tu endpoint GraphQL de Django
  cache: new InMemoryCache(),
});

export default clientDjango

// function makeClientSpring() {
//     const httpLink = new HttpLink({
//       // this needs to be an absolute url, as relative urls cannot be used in SSR
//       uri: "http://3.129.58.104:8080/graphql",
//       // you can disable result caching here if you want to
//       // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
//       fetchOptions: { cache: "no-store" },
//       // you can override the default `fetchOptions` on a per query basis
//       // via the `context` property on the options passed as a second argument
//       // to an Apollo Client data fetching hook, e.g.:
//       // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
//     });
// }

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
