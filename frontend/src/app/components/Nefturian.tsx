import { useDataFetch } from "../hooks/useDataFetch";
import Image from "next/image";

export default function NefturianComponent({ heroId }: { heroId: number }) {
  const { data: nefturian, error } = useDataFetch<Nefturian | null>({
    url: `https://api.nefturians.io/metadata/${heroId}`,
    initialValue: null,
  });

  if (error) {
    return <p>Failed to fetch nefturian: {error}</p>;
  }

  return (
    nefturian && (
      <div>
        <h2>Your Nefturian:</h2>
        <p>Name: {nefturian.name}</p>
        <Image
          src={nefturian.image}
          width={300}
          height={300}
          alt={nefturian.name}
        />
      </div>
    )
  );
}
