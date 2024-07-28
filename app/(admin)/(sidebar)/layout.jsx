import { Inter } from "next/font/google";
import "@/app/globals.css";
import Provider from "@/app/Provider";
import { SidebarWrapper } from "@/components/sidebar/sidebar";
import { ApolloWrapperDjango } from "@/app/ApolloWrapperDjango";
import { ApolloWrapperSprint } from "@/app/ApolloWrapperSprint";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Activos App",
  description: "Activos Admin",
};

export default function sidebarLayout({ children }) {
  return (
    <div className="flex">
      <SidebarWrapper />
      <div className="w-full p-8">
      <Provider>
        {children}
      </Provider>
      </div>
    </div>
  );
}
