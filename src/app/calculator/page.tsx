"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { v4 as uuidv4 } from "uuid";
import {
  Plus,
  Trash2,
  Calculator,
  GraduationCap,
  ArrowLeft,
  TrendingUp,
  BookOpen,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";

import { calculateGPA, type GPAResult } from "@/lib/gpa-calculator";
import { type TotalMarksType, VALID_TOTAL_MARKS } from "@/lib/quality-points";

type CalculatorCourse = {
  id: string;
  creditHours: string;
  totalMarks: TotalMarksType;
  obtainedMarks: string;
};

const emptyResult: GPAResult = {
  gpa: 0,
  totalQualityPoints: 0,
  totalCreditHours: 0,
  courses: [],
};

export default function CalculatorPage() {
  const [courses, setCourses] = useState<CalculatorCourse[]>([
    { id: uuidv4(), creditHours: "", totalMarks: 100, obtainedMarks: "" },
  ]);
  const [result, setResult] = useState<GPAResult>(emptyResult);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const calculateResult = useCallback(() => {
    const newErrors: Record<string, string> = {};

    const validCourses = courses.filter((course) => {
      const creditHours = parseFloat(course.creditHours);
      const obtainedMarks = parseFloat(course.obtainedMarks);

      if (!course.creditHours || !course.obtainedMarks) {
        return false;
      }

      if (isNaN(creditHours) || creditHours <= 0) {
        newErrors[`${course.id}-creditHours`] = "Credit hours must be positive";
        return false;
      }

      if (isNaN(obtainedMarks) || obtainedMarks < 0) {
        newErrors[`${course.id}-obtainedMarks`] = "Marks must be 0 or greater";
        return false;
      }

      if (obtainedMarks > course.totalMarks) {
        newErrors[`${course.id}-obtainedMarks`] = `Cannot exceed ${course.totalMarks}`;
        return false;
      }

      return true;
    });

    setErrors(newErrors);

    if (validCourses.length === 0) {
      setResult(emptyResult);
      return;
    }

    const courseInputs = validCourses.map((course) => ({
      creditHours: parseFloat(course.creditHours),
      totalMarks: course.totalMarks,
      obtainedMarks: parseFloat(course.obtainedMarks),
    }));

    const gpaResult = calculateGPA(courseInputs);
    setResult(gpaResult);
  }, [courses]);

  useEffect(() => {
    calculateResult();
  }, [calculateResult]);

  const addCourse = () => {
    setCourses([
      ...courses,
      { id: uuidv4(), creditHours: "", totalMarks: 100, obtainedMarks: "" },
    ]);
  };

  const removeCourse = (id: string) => {
    if (courses.length > 1) {
      setCourses(courses.filter((course) => course.id !== id));
    }
  };

  const updateCourse = (
    id: string,
    field: keyof CalculatorCourse,
    value: string | TotalMarksType
  ) => {
    setCourses(
      courses.map((course) =>
        course.id === id ? { ...course, [field]: value } : course
      )
    );
  };

  const getGradeColor = (grade: string) => {
    switch (grade) {
      case "A":
        return "bg-green-100 text-green-800 border-green-200";
      case "B":
        return "bg-blue-100 text-blue-800 border-blue-200";
      case "C":
        return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "D":
        return "bg-orange-100 text-orange-800 border-orange-200";
      default:
        return "bg-red-100 text-red-800 border-red-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <GraduationCap className="h-8 w-8" />
            <span className="text-xl font-bold">GPA Tracker</span>
          </Link>
          <div className="flex gap-3">
            <Button variant="ghost" asChild>
              <Link href="/">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Home
              </Link>
            </Button>
            <Button asChild>
              <Link href="/login">Sign In</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            GPA Calculator
          </h1>
          <p className="text-muted-foreground">
            Calculate your semester GPA using MNS-University&apos;s grading system
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Course Input Section */}
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Enter Your Courses
                </CardTitle>
                <CardDescription>
                  Add courses and enter marks to calculate your GPA
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {courses.map((course, index) => (
                  <div
                    key={course.id}
                    className="grid grid-cols-12 gap-3 items-start p-4 bg-muted/30 rounded-lg"
                  >
                    <div className="col-span-12 sm:col-span-1 flex items-center justify-center">
                      <span className="text-sm font-medium text-muted-foreground">
                        #{index + 1}
                      </span>
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Credit Hours
                      </label>
                      <Input
                        type="number"
                        placeholder="3"
                        value={course.creditHours}
                        onChange={(e) =>
                          updateCourse(course.id, "creditHours", e.target.value)
                        }
                        className={errors[`${course.id}-creditHours`] ? "border-red-500" : ""}
                        min="0"
                        step="0.5"
                      />
                      {errors[`${course.id}-creditHours`] && (
                        <span className="text-xs text-red-500">
                          {errors[`${course.id}-creditHours`]}
                        </span>
                      )}
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Total Marks
                      </label>
                      <Select
                        value={String(course.totalMarks)}
                        onValueChange={(value) =>
                          updateCourse(course.id, "totalMarks", parseInt(value) as TotalMarksType)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {VALID_TOTAL_MARKS.map((marks) => (
                            <SelectItem key={marks} value={String(marks)}>
                              {marks}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="col-span-10 sm:col-span-4">
                      <label className="text-xs text-muted-foreground mb-1 block">
                        Obtained Marks
                      </label>
                      <Input
                        type="number"
                        placeholder="0"
                        value={course.obtainedMarks}
                        onChange={(e) =>
                          updateCourse(course.id, "obtainedMarks", e.target.value)
                        }
                        className={errors[`${course.id}-obtainedMarks`] ? "border-red-500" : ""}
                        min="0"
                        max={course.totalMarks}
                      />
                      {errors[`${course.id}-obtainedMarks`] && (
                        <span className="text-xs text-red-500">
                          {errors[`${course.id}-obtainedMarks`]}
                        </span>
                      )}
                    </div>

                    <div className="col-span-2 sm:col-span-1 flex items-end">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeCourse(course.id)}
                        disabled={courses.length === 1}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}

                <Button variant="outline" onClick={addCourse} className="w-full">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Course
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-4">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center gap-2">
                  <Calculator className="h-5 w-5" />
                  Your GPA
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center py-4">
                  <div className="text-5xl font-bold text-primary mb-2">
                    {result.gpa.toFixed(2)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    out of 4.00
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t">
                  <div className="text-center">
                    <div className="text-lg font-semibold">{result.totalCreditHours}</div>
                    <div className="text-xs text-muted-foreground">Credit Hours</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-semibold">{result.totalQualityPoints.toFixed(2)}</div>
                    <div className="text-xs text-muted-foreground">Quality Points</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {result.courses.length > 0 && (
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-base flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Breakdown
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {result.courses.map((course, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between p-2 bg-muted/30 rounded"
                      >
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-muted-foreground">
                            #{index + 1}
                          </span>
                          <Badge variant="outline" className={getGradeColor(course.grade)}>
                            {course.grade}
                          </Badge>
                        </div>
                        <div className="text-right">
                          <div className="text-sm font-medium">
                            QP: {course.qualityPoint.toFixed(2)}
                          </div>
                          <div className="text-xs text-muted-foreground">
                            {course.percentage.toFixed(1)}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            <Alert>
              <AlertDescription className="text-sm">
                <strong>Note:</strong> This calculator uses MNS-University&apos;s
                grading system. Sign in to save your courses and track your CGPA
                over time.
              </AlertDescription>
            </Alert>

            <Button asChild className="w-full">
              <Link href="/register">
                Save Your Progress
              </Link>
            </Button>
          </div>
        </div>

        {/* Grade Reference Table */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Grade Reference</CardTitle>
            <CardDescription>
              MNS-University grading criteria based on percentage
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Grade</TableHead>
                  <TableHead>Percentage Range</TableHead>
                  <TableHead>Quality Points</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-800 border-green-200">A</Badge>
                  </TableCell>
                  <TableCell>80% - 100%</TableCell>
                  <TableCell>4.00</TableCell>
                  <TableCell>Excellent</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Badge className="bg-blue-100 text-blue-800 border-blue-200">B</Badge>
                  </TableCell>
                  <TableCell>65% - 79%</TableCell>
                  <TableCell>3.00 - 3.70</TableCell>
                  <TableCell>Good</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Badge className="bg-yellow-100 text-yellow-800 border-yellow-200">C</Badge>
                  </TableCell>
                  <TableCell>50% - 64%</TableCell>
                  <TableCell>2.00 - 2.70</TableCell>
                  <TableCell>Average</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Badge className="bg-orange-100 text-orange-800 border-orange-200">D</Badge>
                  </TableCell>
                  <TableCell>40% - 49%</TableCell>
                  <TableCell>1.00 - 1.50</TableCell>
                  <TableCell>Pass</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Badge className="bg-red-100 text-red-800 border-red-200">F</Badge>
                  </TableCell>
                  <TableCell>Below 40%</TableCell>
                  <TableCell>0.00</TableCell>
                  <TableCell>Fail</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
