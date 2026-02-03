"use client";

import { Award, Clock, TrendingUp, BookOpen } from "lucide-react";

interface StatCardsProps {
  cgpa: number;
  totalCreditHours: number;
  totalQualityPoints: number;
  semesterCount: number;
}

export function StatCards({
  cgpa,
  totalCreditHours,
  totalQualityPoints,
  semesterCount,
}: StatCardsProps) {
  const getGPAStatus = (gpa: number) => {
    if (gpa >= 3.5) return { label: "Excellent", color: "text-emerald-600" };
    if (gpa >= 3.0) return { label: "Good", color: "text-blue-600" };
    if (gpa >= 2.5) return { label: "Average", color: "text-amber-600" };
    return { label: "Needs Work", color: "text-red-600" };
  };

  const gpaStatus = getGPAStatus(cgpa);
  const gpaProgress = (cgpa / 4.0) * 100;
  const creditProgress = Math.min((totalCreditHours / 130) * 100, 100);
  const semesterProgress = Math.min((semesterCount / 8) * 100, 100);

  const stats = [
    {
      icon: Award,
      iconBg: "bg-blue-50",
      iconColor: "text-blue-600",
      value: cgpa.toFixed(2),
      change: gpaStatus.label,
      changeColor: gpaStatus.color,
      label: "Cumulative GPA",
      sublabel: "Progress",
      progress: gpaProgress,
      progressColor: "bg-blue-600",
    },
    {
      icon: Clock,
      iconBg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      value: totalCreditHours.toString(),
      change: "+15% this sem",
      changeColor: "text-emerald-600",
      label: "Credit Hours",
      sublabel: "Completed",
      progress: creditProgress,
      progressColor: "bg-emerald-600",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-violet-50",
      iconColor: "text-violet-600",
      value: totalQualityPoints.toFixed(1),
      change: "Total Earned",
      changeColor: "text-violet-600",
      label: "Quality Points",
      sublabel: "Accumulated",
      progress: Math.min((totalQualityPoints / 520) * 100, 100),
      progressColor: "bg-violet-600",
    },
    {
      icon: BookOpen,
      iconBg: "bg-amber-50",
      iconColor: "text-amber-600",
      value: semesterCount.toString(),
      change: `${semesterCount}/8 semesters`,
      changeColor: "text-amber-600",
      label: "Semesters",
      sublabel: "Completion",
      progress: semesterProgress,
      progressColor: "bg-amber-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-xl p-5 shadow-sm border border-slate-100"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
              <stat.icon className={`h-6 w-6 ${stat.iconColor}`} />
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold text-slate-900">{stat.value}</span>
              <p className={`text-xs font-medium ${stat.changeColor}`}>{stat.change}</p>
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-slate-900 mb-2">{stat.label}</p>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-1.5">
              <span>{stat.sublabel}</span>
              <span>{stat.progress.toFixed(0)}%</span>
            </div>
            <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
              <div
                className={`h-full ${stat.progressColor} rounded-full transition-all duration-500`}
                style={{ width: `${stat.progress}%` }}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
