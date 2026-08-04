export interface SheetAnalysis {
  rows: number;
  columns: number;
  duplicates: number;
  missing: number;
}

export interface AnalysisResponse {
  [sheet: string]: SheetAnalysis;
}