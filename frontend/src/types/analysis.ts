export interface SheetAnalysis {
  rows: number;
  columns: number;
  missing: number;
  duplicates: number;
}

export type AnalysisResponse = Record<string, SheetAnalysis>;