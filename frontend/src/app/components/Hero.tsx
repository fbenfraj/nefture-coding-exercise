import { useDataFetch } from "../hooks/useDataFetch";

export default function HeroComponent({
  address,
  isConnected,
}: {
  address: string | undefined;
  isConnected: boolean;
}) {
  const { data: hero, error } = useDataFetch<Hero | null>({
    url:
      isConnected && address ? `http://localhost:3001/heroes/${address}` : "",
    initialValue: null,
  });

  if (error) {
    return <p>{error}</p>;
  }

  return (
    hero && (
      <div>
        <h2>Your Hero:</h2>
        <p>
          Address: {hero.address} ({hero.side})
        </p>
      </div>
    )
  );
}
