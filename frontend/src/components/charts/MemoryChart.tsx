import {
  ResponsiveContainer,
  RadialBarChart,
  RadialBar,
} from "recharts";

interface Props {
  memory: number;
}

export default function MemoryChart({ memory }: Props) {
  const data = [
    {
      name: "Memory",
      value: memory,
      fill: "#3b82f6",
    },
  ];

  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart
          innerRadius="70%"
          outerRadius="100%"
          data={data}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            dataKey="value"
            cornerRadius={10}
          />
        </RadialBarChart>
      </ResponsiveContainer>

      <div className="-mt-32 text-center">
        <p className="text-4xl font-bold">{memory} KB</p>
        <p className="text-zinc-400">Memory Usage</p>
      </div>
    </div>
  );
}