interface Props {
  name: string;
  data: any;
}

export default function SheetCard({ name, data }: Props) {

  return (

    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

      <h3 className="text-2xl font-bold">
        {name}
      </h3>

      <div className="mt-5 space-y-2 text-zinc-300">

        <p>Rows: {data.rows}</p>

        <p>Columns: {data.columns}</p>

        <p>Duplicates: {data.duplicates}</p>

        <p>Missing Values: {data.missing}</p>

      </div>

    </div>

  );
}