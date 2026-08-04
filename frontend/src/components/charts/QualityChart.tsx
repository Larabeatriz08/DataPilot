import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

interface Props {
  missing: number;
  rows: number;
}

export default function QualityChart({
  missing,
  rows,
}: Props) {

  const valid = rows - missing;

  const data = [
    {
      name: "Valid",
      value: valid,
    },
    {
      name: "Missing",
      value: missing,
    },
  ];

  const COLORS = [
    "#3b82f6",
    "#ef4444",
  ];

  return (
    <div className="h-72 w-full">

      <ResponsiveContainer>

        <PieChart>

          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius={60}
            outerRadius={90}
            paddingAngle={5}
          >

            {data.map((_, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}

          </Pie>

          <Tooltip />

        </PieChart>

      </ResponsiveContainer>

    </div>
  );
}