import GlobalStyle from "../styles";
import useSWR from "swr";
import Layout from "@/components/Layout/Layout";
import { useEffect, useState } from "react";
import useLocalStorageState from "use-local-storage-state";

const URL = "https://example-apis.vercel.app/api/art";

export default function App({ Component, pageProps }) {
  const [artData, setArtData] = useState(null);
  const [artPiecesInfo, setArtPiecesInfo] = useLocalStorageState(
    "artPiecesInfo",
    { defaultValue: null }
  );

  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  useEffect(() => {
    if (data) {
      setArtData(data);
      if (!artPiecesInfo) {
        setArtPiecesInfo(
          data.map((artPiece) => {
            return { slug: artPiece.slug, isFavourite: false, comments: [] };
          })
        );
      }
    }
  }, [data, artData]);

  function handleToggleFavourite(slug) {
    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        return artPiece.slug === slug
          ? { ...artPiece, isFavourite: !artPiece.isFavourite }
          : artPiece;
      })
    );
  }

  function handleSubmitComment(slug, comment) {
    const currentDate = new Date();
    const dateData = `${currentDate.toLocaleTimeString()}, ${currentDate.toLocaleDateString()}`;

    setArtPiecesInfo(
      artPiecesInfo.map((artPiece) => {
        return artPiece.slug === slug
          ? {
              ...artPiece,
              comments: [
                ...artPiece.comments,
                { comment: comment, time: dateData },
              ],
            }
          : artPiece;
      })
    );
  }

  console.log(artPiecesInfo);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!artData) return <div>no data</div>;

  console.log(artPiecesInfo);

  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component
          {...pageProps}
          data={artData}
          onToggleFavourite={handleToggleFavourite}
          artPiecesInfo={artPiecesInfo}
          onSubmitComment={handleSubmitComment}
        />
      </Layout>
    </>
  );
}
