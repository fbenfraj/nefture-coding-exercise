import { useDataFetch } from "../hooks/useDataFetch";

export default function StatsComponent() {
  const { data: stats, error } = useDataFetch<Stat[]>({
    url: "http://localhost:3001/stats",
    initialValue: [],
  });

  if (error) {
    return <p>Failed to fetch stats: {error}</p>;
  }

  return (
    stats && (
      <div>
        <h2>General Stats:</h2>
        {stats.map((stat) => (
          <p key={stat.side}>
            {stat.side}: {stat.count}
          </p>
        ))}
      </div>
    )
  );
}
