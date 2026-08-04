import { useState } from "react";
import {
  UploadCloud,
  FileSpreadsheet,
  Loader2,
  Database,
  AlertTriangle,
  Copy,
  MemoryStick,
} from "lucide-react";
import { analyzeFile } from "../services/api";
import QualityChart from "./charts/QualityChart";
import OverviewChart from "./charts/OverviewChart";
import DataTypesChart from "./charts/DataTypesChart";
import MemoryChart from "./charts/MemoryChart";
import ColumnChart from "./charts/ColumnChart";

export default function UploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleFile(selectedFile: File) {
    setError("");
    setResult(null);

    if (
      !selectedFile.name.endsWith(".xlsx") &&
      !selectedFile.name.endsWith(".xls")
    ) {
      setError("Please upload an Excel file (.xlsx or .xls).");
      return;
    }

    setFile(selectedFile);
    setLoading(true);

    try {
      const data = await analyzeFile(selectedFile);
      setResult(data);
    } catch (err) {
      console.error(err);
      setError("Could not analyze the file.");
    } finally {
      setLoading(false);
    }
  }

  function handleInputChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    const selectedFile = event.target.files?.[0];

    if (selectedFile) {
      handleFile(selectedFile);
    }
  }

  return (
    <div className="mt-10 w-full max-w-5xl">
      <label
        htmlFor="excel-upload"
        className="block cursor-pointer rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900 p-16 transition hover:border-blue-500 hover:bg-zinc-800"
      >
        <div className="flex flex-col items-center">
          {loading ? (
            <Loader2 size={60} className="animate-spin text-blue-500" />
          ) : file ? (
            <FileSpreadsheet size={60} className="text-green-500" />
          ) : (
            <UploadCloud size={60} className="text-blue-500" />
          )}

          <h2 className="mt-6 text-2xl font-semibold">
            {loading
              ? "Analyzing..."
              : file
              ? file.name
              : "Upload your Excel file"}
          </h2>

          <p className="mt-3 text-center text-zinc-400">
            {loading
              ? "DataPilot is processing your spreadsheet..."
              : file
              ? "Click to choose another file."
              : "Drag & Drop or click here"}
          </p>
        </div>

        <input
          id="excel-upload"
          type="file"
          accept=".xlsx,.xls"
          className="hidden"
          onChange={handleInputChange}
        />
      </label>

      {error && (
        <div className="mt-5 rounded-xl border border-red-500 bg-red-500/10 p-4 text-red-400">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-10">
          <div className="mb-8">
            <h2 className="text-3xl font-bold">
              Analysis Completed
            </h2>

            <p className="mt-2 text-zinc-400">
              {result.filename}
            </p>

            <p className="text-blue-400">
              {result.totalSheets} worksheet(s) analyzed
            </p>
          </div>

          <div className="grid gap-8">
            {Object.entries(result.analysis).map(
              ([sheetName, sheet]: any) => (
                <div
                  key={sheetName}
                  className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8"
                >
                  <h3 className="mb-6 text-2xl font-bold">
                    📄 {sheetName}
                  </h3>

                  <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                    <div className="rounded-xl bg-zinc-800 p-4">
                      <Database className="mb-2 text-blue-400" />
                      <p className="text-sm text-zinc-400">Rows</p>
                      <p className="text-3xl font-bold">
                        {sheet.rows}
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-4">
                      <FileSpreadsheet className="mb-2 text-green-400" />
                      <p className="text-sm text-zinc-400">Columns</p>
                      <p className="text-3xl font-bold">
                        {sheet.columns}
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-4">
                      <AlertTriangle className="mb-2 text-yellow-400" />
                      <p className="text-sm text-zinc-400">
                        Missing
                      </p>
                      <p className="text-3xl font-bold">
                        {sheet.missing}
                      </p>
                    </div>

                    <div className="rounded-xl bg-zinc-800 p-4">
                      <Copy className="mb-2 text-pink-400" />
                      <p className="text-sm text-zinc-400">
                        Duplicates
                      </p>
                      <p className="text-3xl font-bold">
                        {sheet.duplicates}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center gap-2">
                    <MemoryStick className="text-blue-400" />

                    <span className="text-zinc-300">
                      Memory usage:
                    </span>

                    <span className="font-bold">
                      {sheet.memory} KB
                    </span>
                  </div>

                  <div className="mt-8">
                    <h4 className="mb-3 text-lg font-semibold">
                      Columns
                    </h4>

                    <div className="flex flex-wrap gap-2">
                      {sheet.columns_list.map((column: string) => (
                        <span
                          key={column}
                          className="rounded-full bg-blue-500/20 px-4 py-2 text-blue-300"
                        >
                          {column}
                        </span>
                      ))}
                    </div>
                  </div>

                

                  <div className="mt-10 border-t border-zinc-800 pt-8">
                    <h4 className="mb-6 text-xl font-semibold">
                      📊 Data Quality
                    </h4>

                    <QualityChart
                      rows={sheet.rows}
                      missing={sheet.missing}
                    />
                  </div>
                  <div className="mt-10 border-t border-zinc-800 pt-8">

                  <h4 className="mb-6 text-xl font-semibold">
                    📈 Dataset Overview
                  </h4>

                  <OverviewChart
                    rows={sheet.rows}
                    columns={sheet.columns}
                  />

                </div>

                <div className="mt-10 border-t border-zinc-800 pt-8">

                  <h4 className="mb-6 text-xl font-semibold">
                    🧬 Data Types
                  </h4>

                  <DataTypesChart
                    columnTypes={sheet.column_types}
                  />

                </div>

                                  <div className="mt-10 border-t border-zinc-800 pt-8">
                    <h4 className="mb-6 text-xl font-semibold">
                      💾 Memory Usage
                    </h4>

                    <MemoryChart memory={sheet.memory} />
                  </div>

                  <div className="mt-10 border-t border-zinc-800 pt-8">
                    <h4 className="mb-6 text-xl font-semibold">
                      📑 Dataset Columns
                    </h4>

                    <ColumnChart columns={sheet.columns_list} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      )}
    </div>
  );
}