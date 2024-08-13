import styled from "styled-components";
import { ArtPiece } from "../Art Piece/ArtPiece";
import Image from "next/image";
import Link from "next/link";

const StyledArtPieceDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  gap: 20px;
  position: relative;

  .button {
    position: absolute;
    top: 5px;
    left: 5px;
  }
`;

export function ArtPieceDetails({ data }) {
  console.log(data);

  return (
    <StyledArtPieceDetails>
      <h2>{data.name}</h2>
      <Image src={data.imageSource} height={400} width={400} alt={data.name} />
      <span>
        Artist: {data.artist}&nbsp;-&nbsp; Year: {data.year}&nbsp;-&nbsp; Genre:{" "}
        {data.genre}
      </span>
      <Link href="/art-pieces" className="button">
        <button>Back</button>
      </Link>
    </StyledArtPieceDetails>
  );
}
