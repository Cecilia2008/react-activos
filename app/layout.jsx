import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "./Provider";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { ApolloWrapperDjango } from "./ApolloWrapperDjango";
import { ApolloWrapperSprint } from "./ApolloWrapperSprint";
import { ApolloWrapper } from "./ApolloWrapper";
import AuthContextProvider from "@/contexts/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Activos App",
  description: "Activos Admin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider >
          <ApolloWrapperSprint>{children}</ApolloWrapperSprint>
        </AuthContextProvider>
      </body>
    </html>
  );
}
