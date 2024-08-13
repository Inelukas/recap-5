import useSWR from "swr";
import { ArtPiece } from "@/components/Art Piece/ArtPiece";

const URL = "https://example-apis.vercel.app/api/art";

export default function HomePage() {
  const fetcher = (...args) =>
    fetch(...args).then((response) => response.json());

  const { data, error, isLoading } = useSWR(URL, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  if (!data) return <div>no data</div>;

  console.log(data);

  return (
    <div>
      <h1>Art Gallery</h1>
      {data.map((pic, index) => {
        return (
          <ArtPiece
            key={index}
            src={data[index].imageSource}
            name={pic.name}
            artist={pic.artist}
          />
        );
      })}
    </div>
  );
}
