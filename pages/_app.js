import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artData, setArtData] = useState(null);

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      setArtData(data);
    }
  }, [data]);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!artData) return <div>no data</div>;

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} data={artData} />
      </Layout>
    </>
  );
}
