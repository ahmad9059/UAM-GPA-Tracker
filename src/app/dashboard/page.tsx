export const dynamic = 'force-dynamic';

import Link from "next/link";
import { Plus, BookOpen, ChevronRight, Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";

import { getAllSemesters } from "@/app/actions/semester-actions";
import { CreateSemesterDialog } from "@/components/dashboard/create-semester-dialog";
import { DeleteSemesterButton } from "@/components/dashboard/delete-semester-button";
import { GPAChart } from "@/components/dashboard/gpa-chart";
import { StatCards } from "@/components/dashboard/stat-cards";

export default async function DashboardPage() {
  const result = await getAllSemesters();

  if (!result.success || !result.data) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Failed to load dashboard data.</p>
        <p className="text-sm text-red-500 mt-2">{result.error}</p>
      </div>
    );
  }

  const { semesters, cgpa, totalCreditHours, totalQualityPoints } = result.data;

  const getGPAColor = (gpa: number) => {
    if (gpa >= 3.5) return "bg-emerald-50 text-emerald-700";
    if (gpa >= 3.0) return "bg-blue-50 text-blue-700";
    if (gpa >= 2.5) return "bg-amber-50 text-amber-700";
    if (gpa >= 2.0) return "bg-orange-50 text-orange-700";
    return "bg-red-50 text-red-700";
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">Dashboard</h1>
          <p className="text-sm text-slate-500 mt-0.5">
            Welcome back! Track your academic progress.
          </p>
        </div>
        <CreateSemesterDialog />
      </div>

      {/* Stat Cards */}
      <StatCards
        cgpa={cgpa}
        totalCreditHours={totalCreditHours}
        totalQualityPoints={totalQualityPoints}
        semesterCount={semesters.length}
      />

      {/* Charts Section */}
      {semesters.length > 0 && (
        <div>
          <h2 className="text-base font-semibold text-slate-900 mb-4">Analytics Overview</h2>
          <div className="grid lg:grid-cols-2 gap-4">
            <GPAChart semesters={semesters} type="bar" />
            <GPAChart semesters={semesters} type="line" />
          </div>
        </div>
      )}

      {/* Semesters List */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-slate-900">Your Semesters</h2>
          {semesters.length > 0 && (
            <Link href="#" className="text-sm text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1">
              View all <ChevronRight className="h-4 w-4" />
            </Link>
          )}
        </div>

        {semesters.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-slate-200 p-12">
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-slate-400" />
              </div>
              <h3 className="text-base font-semibold text-slate-900 mb-1">No Semesters Yet</h3>
              <p className="text-sm text-slate-500 mb-6 max-w-sm">
                Start tracking your academic progress by creating your first semester.
              </p>
              <CreateSemesterDialog />
            </div>
          </div>
        ) : (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {semesters.map((semester, index) => (
              <div
                key={semester.id}
                className="bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center text-blue-600 font-semibold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900">{semester.name}</h3>
                        <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5">
                          <Calendar className="h-3 w-3" />
                          {semester.courseCount || semester.courses.length} courses
                        </p>
                      </div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${getGPAColor(semester.gpa)}`}>
                      {semester.gpa.toFixed(2)}
                    </span>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 py-3 border-y border-slate-100">
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Credit Hours</p>
                      <p className="text-sm font-semibold text-slate-900">{semester.totalCreditHours}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 mb-0.5">Quality Points</p>
                      <p className="text-sm font-semibold text-slate-900">{semester.totalQualityPoints.toFixed(1)}</p>
                    </div>
                  </div>

                  {/* GPA Progress Bar */}
                  <div className="mt-3 mb-4">
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="text-slate-500">GPA Progress</span>
                      <span className="font-medium text-slate-700">{((semester.gpa / 4) * 100).toFixed(0)}%</span>
                    </div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-blue-600 rounded-full transition-all duration-500"
                        style={{ width: `${(semester.gpa / 4) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="flex-1 text-xs h-9"
                    >
                      <Link href={`/dashboard/semester/${semester.id}`}>
                        View Details
                        <ChevronRight className="h-3.5 w-3.5 ml-1" />
                      </Link>
                    </Button>
                    <DeleteSemesterButton semesterId={semester.id} semesterName={semester.name} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
