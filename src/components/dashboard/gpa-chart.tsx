"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface SemesterData {
  id: string;
  name: string;
  gpa: number;
  totalCreditHours: number;
}

interface GPAChartProps {
  semesters: SemesterData[];
  type: "bar" | "line";
}

export function GPAChart({ semesters, type }: GPAChartProps) {
  const data = semesters.map((semester) => ({
    name: semester.name,
    GPA: semester.gpa,
    creditHours: semester.totalCreditHours,
  }));

  if (data.length === 0) {
    return null;
  }

  const averageGPA = data.reduce((sum, d) => sum + d.GPA, 0) / data.length;

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white px-3 py-2 rounded-lg shadow-lg border border-slate-200">
          <p className="text-xs font-medium text-slate-600 mb-1">{label}</p>
          <p className="text-sm font-semibold text-slate-900">
            GPA: {payload[0].value?.toFixed(2)}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-semibold text-slate-900">
            {type === "bar" ? "GPA Overview" : "GPA Trend"}
          </h3>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-xs text-slate-500">Average GPA:</span>
            <span className="text-sm font-bold text-slate-900">{averageGPA.toFixed(2)}</span>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-slate-100 rounded-lg p-0.5">
          <button className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${type === "bar" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>
            Bar
          </button>
          <button className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${type === "line" ? "bg-white text-slate-900 shadow-sm" : "text-slate-500"}`}>
            Line
          </button>
        </div>
      </div>

      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id={`gradient-${type}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.2} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" vertical={false} />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              domain={[0, 4]}
              tick={{ fontSize: 11, fill: "#94a3b8" }}
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => value.toFixed(1)}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="GPA"
              stroke="#3b82f6"
              strokeWidth={2}
              fill={`url(#gradient-${type})`}
              dot={{ fill: "#3b82f6", strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
