// MNS-University Quality Point Tables
// Maps obtained marks to quality points and grades for each total marks type

export type TotalMarksType = 20 | 40 | 60 | 80 | 100;

export type Grade = "A" | "B" | "C" | "D" | "F";

export type QualityPointEntry = {
  minMarks: number;
  maxMarks: number;
  qualityPoint: number;
  grade: Grade;
};

// Quality Points for marks out of 20
// D: 40-49% (8-9), C: 50-64% (10-12), B: 65-79% (13-15), A: 80-100% (16-20)
export const QUALITY_POINTS_20: QualityPointEntry[] = [
  { minMarks: 0, maxMarks: 7, qualityPoint: 0.0, grade: "F" },
  { minMarks: 8, maxMarks: 8, qualityPoint: 1.0, grade: "D" },
  { minMarks: 9, maxMarks: 9, qualityPoint: 1.5, grade: "D" },
  { minMarks: 10, maxMarks: 10, qualityPoint: 2.0, grade: "C" },
  { minMarks: 11, maxMarks: 11, qualityPoint: 2.3, grade: "C" },
  { minMarks: 12, maxMarks: 12, qualityPoint: 2.7, grade: "C" },
  { minMarks: 13, maxMarks: 13, qualityPoint: 3.0, grade: "B" },
  { minMarks: 14, maxMarks: 14, qualityPoint: 3.3, grade: "B" },
  { minMarks: 15, maxMarks: 15, qualityPoint: 3.7, grade: "B" },
  { minMarks: 16, maxMarks: 16, qualityPoint: 4.0, grade: "A" },
  { minMarks: 17, maxMarks: 17, qualityPoint: 4.0, grade: "A" },
  { minMarks: 18, maxMarks: 18, qualityPoint: 4.0, grade: "A" },
  { minMarks: 19, maxMarks: 19, qualityPoint: 4.0, grade: "A" },
  { minMarks: 20, maxMarks: 20, qualityPoint: 4.0, grade: "A" },
];

// Quality Points for marks out of 40
// D: 40-49% (16-19), C: 50-64% (20-25), B: 65-79% (26-31), A: 80-100% (32-40)
export const QUALITY_POINTS_40: QualityPointEntry[] = [
  { minMarks: 0, maxMarks: 15, qualityPoint: 0.0, grade: "F" },
  { minMarks: 16, maxMarks: 17, qualityPoint: 1.0, grade: "D" },
  { minMarks: 18, maxMarks: 19, qualityPoint: 1.5, grade: "D" },
  { minMarks: 20, maxMarks: 21, qualityPoint: 2.0, grade: "C" },
  { minMarks: 22, maxMarks: 23, qualityPoint: 2.3, grade: "C" },
  { minMarks: 24, maxMarks: 25, qualityPoint: 2.7, grade: "C" },
  { minMarks: 26, maxMarks: 27, qualityPoint: 3.0, grade: "B" },
  { minMarks: 28, maxMarks: 29, qualityPoint: 3.3, grade: "B" },
  { minMarks: 30, maxMarks: 31, qualityPoint: 3.7, grade: "B" },
  { minMarks: 32, maxMarks: 40, qualityPoint: 4.0, grade: "A" },
];

// Quality Points for marks out of 60
// D: 40-49% (24-29), C: 50-64% (30-38), B: 65-79% (39-47), A: 80-100% (48-60)
export const QUALITY_POINTS_60: QualityPointEntry[] = [
  { minMarks: 0, maxMarks: 23, qualityPoint: 0.0, grade: "F" },
  { minMarks: 24, maxMarks: 26, qualityPoint: 1.0, grade: "D" },
  { minMarks: 27, maxMarks: 29, qualityPoint: 1.5, grade: "D" },
  { minMarks: 30, maxMarks: 32, qualityPoint: 2.0, grade: "C" },
  { minMarks: 33, maxMarks: 35, qualityPoint: 2.3, grade: "C" },
  { minMarks: 36, maxMarks: 38, qualityPoint: 2.7, grade: "C" },
  { minMarks: 39, maxMarks: 41, qualityPoint: 3.0, grade: "B" },
  { minMarks: 42, maxMarks: 44, qualityPoint: 3.3, grade: "B" },
  { minMarks: 45, maxMarks: 47, qualityPoint: 3.7, grade: "B" },
  { minMarks: 48, maxMarks: 60, qualityPoint: 4.0, grade: "A" },
];

// Quality Points for marks out of 80
// D: 40-49% (32-39), C: 50-64% (40-51), B: 65-79% (52-63), A: 80-100% (64-80)
export const QUALITY_POINTS_80: QualityPointEntry[] = [
  { minMarks: 0, maxMarks: 31, qualityPoint: 0.0, grade: "F" },
  { minMarks: 32, maxMarks: 35, qualityPoint: 1.0, grade: "D" },
  { minMarks: 36, maxMarks: 39, qualityPoint: 1.5, grade: "D" },
  { minMarks: 40, maxMarks: 43, qualityPoint: 2.0, grade: "C" },
  { minMarks: 44, maxMarks: 47, qualityPoint: 2.3, grade: "C" },
  { minMarks: 48, maxMarks: 51, qualityPoint: 2.7, grade: "C" },
  { minMarks: 52, maxMarks: 55, qualityPoint: 3.0, grade: "B" },
  { minMarks: 56, maxMarks: 59, qualityPoint: 3.3, grade: "B" },
  { minMarks: 60, maxMarks: 63, qualityPoint: 3.7, grade: "B" },
  { minMarks: 64, maxMarks: 80, qualityPoint: 4.0, grade: "A" },
];

// Quality Points for marks out of 100
// D: 40-49% (40-49), C: 50-64% (50-64), B: 65-79% (65-79), A: 80-100% (80-100)
export const QUALITY_POINTS_100: QualityPointEntry[] = [
  { minMarks: 0, maxMarks: 39, qualityPoint: 0.0, grade: "F" },
  { minMarks: 40, maxMarks: 44, qualityPoint: 1.0, grade: "D" },
  { minMarks: 45, maxMarks: 49, qualityPoint: 1.5, grade: "D" },
  { minMarks: 50, maxMarks: 54, qualityPoint: 2.0, grade: "C" },
  { minMarks: 55, maxMarks: 59, qualityPoint: 2.3, grade: "C" },
  { minMarks: 60, maxMarks: 64, qualityPoint: 2.7, grade: "C" },
  { minMarks: 65, maxMarks: 69, qualityPoint: 3.0, grade: "B" },
  { minMarks: 70, maxMarks: 74, qualityPoint: 3.3, grade: "B" },
  { minMarks: 75, maxMarks: 79, qualityPoint: 3.7, grade: "B" },
  { minMarks: 80, maxMarks: 100, qualityPoint: 4.0, grade: "A" },
];

// Map total marks type to its quality point table
export const QUALITY_POINT_TABLES: Record<TotalMarksType, QualityPointEntry[]> = {
  20: QUALITY_POINTS_20,
  40: QUALITY_POINTS_40,
  60: QUALITY_POINTS_60,
  80: QUALITY_POINTS_80,
  100: QUALITY_POINTS_100,
};

// Valid total marks values
export const VALID_TOTAL_MARKS: TotalMarksType[] = [20, 40, 60, 80, 100];

/**
 * Get quality point, grade, and percentage for given marks and total
 */
export function getQualityPoint(
  obtainedMarks: number,
  totalMarks: TotalMarksType
): { qualityPoint: number; grade: Grade; percentage: number } {
  // Calculate percentage
  const percentage = (obtainedMarks / totalMarks) * 100;

  // Get the appropriate table
  const table = QUALITY_POINT_TABLES[totalMarks];

  // Find the matching entry
  const entry = table.find(
    (e) => obtainedMarks >= e.minMarks && obtainedMarks <= e.maxMarks
  );

  // If no entry found (shouldn't happen with valid input), return failing grade
  if (!entry) {
    return { qualityPoint: 0.0, grade: "F", percentage };
  }

  return {
    qualityPoint: entry.qualityPoint,
    grade: entry.grade,
    percentage: Math.round(percentage * 100) / 100,
  };
}

/**
 * Check if total marks is a valid value
 */
export function isValidTotalMarks(marks: number): marks is TotalMarksType {
  return VALID_TOTAL_MARKS.includes(marks as TotalMarksType);
}
