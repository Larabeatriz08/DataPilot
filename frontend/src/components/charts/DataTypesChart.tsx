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
  columnTypes: Record<string, string>;
}

export default function DataTypesChart({
  columnTypes,
}: Props) {
  const counter: Record<string, number> = {};

  Object.values(columnTypes).forEach((type) => {
    counter[type] = (counter[type] || 0) + 1;
  });

  const data = Object.entries(counter).map(([type, total]) => ({
    type,
    total,
  }));

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#333" />
          <XAxis dataKey="type" stroke="#aaa" />
          <YAxis stroke="#aaa" />
          <Tooltip />
          <Bar
            dataKey="total"
            fill="#10b981"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}