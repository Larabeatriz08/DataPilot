import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface Props {
  rows: number;
  columns: number;
}

export default function OverviewChart({
  rows,
  columns,
}: Props) {

  const data = [
    {
      name: "Rows",
      value: rows,
    },
    {
      name: "Columns",
      value: columns,
    },
  ];

  return (
    <div className="h-72 w-full">

      <ResponsiveContainer width="100%" height="100%">

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" stroke="#333" />

          <XAxis dataKey="name" stroke="#aaa" />

          <YAxis stroke="#aaa" />

          <Tooltip />

          <Bar
            dataKey="value"
            fill="#3b82f6"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}