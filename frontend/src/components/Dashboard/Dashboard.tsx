import StatsCards from "./StatsCards.tsx";
import SheetCard from "./SheetCard";

interface DashboardProps {
  data: any;
}

export default function Dashboard({ data }: DashboardProps) {
  return (
    <section className="mt-16 w-full max-w-7xl">

      <h2 className="mb-8 text-4xl font-bold">
        Analysis Results
      </h2>

      <StatsCards data={data} />

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {Object.entries(data).map(([sheet, info]) => (
          <SheetCard
            key={sheet}
            name={sheet}
            data={info}
          />
        ))}
      </div>

    </section>
  );
}