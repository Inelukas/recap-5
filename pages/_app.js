import GlobalStyle from "../styles";
import useSWR from "swr";
import Footer from "@/components/Footer/Footer";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>no data</div>;

  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} data={data} />
      <Footer />
    </>
  );
}
