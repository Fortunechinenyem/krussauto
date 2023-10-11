import "@/styles/globals.css";
import NoSSR from "@/layout/NoSSR";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { useRouter } from "next/router";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const router = useRouter();

  return (
    <SessionProvider session={session}>
      {Component.Layout ? (
        <NoSSR>
          <QueryClientProvider client={queryClient}>
            <Component.Layout>
              <Component {...pageProps} />
            </Component.Layout>
          </QueryClientProvider>
        </NoSSR>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      )}
    </SessionProvider>
  );
}

export default MyApp;
