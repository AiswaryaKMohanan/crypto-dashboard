"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: [number, number][];
}

export default function PriceChart({ data }: Props) {
  const formattedData = data.map(([timestamp, price]) => ({
    date: new Date(timestamp).toLocaleDateString(),
    price,
  }));

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <LineChart data={formattedData}>
          <XAxis dataKey="date" hide />
          <YAxis domain={["auto", "auto"]} />
          <Tooltip />
          <Line type="monotone" dataKey="price" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}