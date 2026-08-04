interface Props {
  data: any;
}

export default function StatsCards({ data }: Props) {

  const totalSheets = Object.keys(data).length;

  const totalRows = Object.values(data)
    .reduce((acc: number, sheet: any) => acc + sheet.rows, 0);

  const totalColumns = Object.values(data)
    .reduce((acc: number, sheet: any) => acc + sheet.columns, 0);

  const totalDuplicates = Object.values(data)
    .reduce((acc: number, sheet: any) => acc + sheet.duplicates, 0);

  const cards = [
    {
      title: "Sheets",
      value: totalSheets
    },
    {
      title: "Rows",
      value: totalRows
    },
    {
      title: "Columns",
      value: totalColumns
    },
    {
      title: "Duplicates",
      value: totalDuplicates
    }
  ];

  return (
    <div className="grid gap-6 md:grid-cols-4">

      {cards.map(card => (

        <div
          key={card.title}
          className="rounded-2xl bg-zinc-900 p-6 border border-zinc-800"
        >

          <p className="text-zinc-400">
            {card.title}
          </p>

          <h3 className="mt-3 text-4xl font-bold">
            {card.value}
          </h3>

        </div>

      ))}

    </div>
  );
}