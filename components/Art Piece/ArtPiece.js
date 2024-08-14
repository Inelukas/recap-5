import styled from "styled-components";
import Image from "next/image";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import Link from "next/link";
// import { useRouter } from "next/router";

const StyledArtPiece = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 600px;
  border: 2px solid black;
  position: relative;
`;

export function ArtPiece({
  src,
  name,
  artist,
  onToggleFavourite,
  slug,
  artPiecesInfo,
}) {
  // const router = useRouter()

  console.log(slug);

  return (
    <StyledArtPiece>
      <h2>{name}</h2>
      <Link href={`/art-pieces/${slug}`}>
        <Image src={src} height={400} width={400} alt={name} />
      </Link>
      <h3>{artist}</h3>
      {!slug ? null : (
        <FavouriteButton
          onToggleFavourite={() => onToggleFavourite(slug)}
          artPiecesInfo={artPiecesInfo}
          slug={slug}
        />
      )}
    </StyledArtPiece>
  );
}
