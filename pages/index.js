import { ArtPiece } from "@/components/Art Piece/ArtPiece";

export default function HomePage({ data }) {
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
