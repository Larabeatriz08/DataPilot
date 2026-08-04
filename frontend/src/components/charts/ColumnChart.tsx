import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Bar,
} from "recharts";

interface Props {
  columns: string[];
}

export default function ColumnChart({
  columns,
}: Props) {

  const data = columns.map((column) => ({
    name: column,
    value: 1,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid stroke="#333" />
          <XAxis
            dataKey="name"
            angle={-30}
            textAnchor="end"
            interval={0}
            height={80}
          />
          <YAxis hide />
          <Tooltip />

          <Bar
            dataKey="value"
            fill="#10b981"
            radius={[5, 5, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}