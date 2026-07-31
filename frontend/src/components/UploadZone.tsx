import { useState } from "react";
import { UploadCloud, FileSpreadsheet, Loader2 } from "lucide-react";
import * as apiService from "../services/api";

const analyzeFile = async (selectedFile: File) => {
  const uploadedFile = (apiService as any).analyzeFile;

  if (typeof uploadedFile !== "function") {
    throw new Error("The API service does not expose analyzeFile.");
  }

  return uploadedFile(selectedFile);
};

export default function UploadZone() {
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleFile(selectedFile: File) {
    setError("");
    setResult(null);

    if (!selectedFile.name.endsWith(".xlsx") && !selectedFile.name.endsWith(".xls")) {
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
      setError("Could not analyze the file. Please try again.");
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
    <div className="mt-10 w-full max-w-3xl">

      <label
        htmlFor="excel-upload"
        className="block cursor-pointer rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900 p-16 transition hover:border-blue-500 hover:bg-zinc-800"
      >

        <div className="flex flex-col items-center">

          {loading ? (
            <Loader2
              size={60}
              className="animate-spin text-blue-500"
            />
          ) : file ? (
            <FileSpreadsheet
              size={60}
              className="text-green-500"
            />
          ) : (
            <UploadCloud
              size={60}
              className="text-blue-500"
            />
          )}

          <h2 className="mt-6 text-2xl font-semibold">
            {loading
              ? "Analyzing your file..."
              : file
              ? file.name
              : "Upload your Excel file"}
          </h2>

          <p className="mt-3 text-center text-zinc-400">
            {loading
              ? "DataPilot is analyzing your spreadsheet."
              : file
              ? "Click to choose another file."
              : "Drag and drop your spreadsheet here"}
          </p>

          {!file && !loading && (
            <p className="mt-1 text-zinc-500">
              or click to browse
            </p>
          )}

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
        <div className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-center text-red-400">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-8 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

          <h3 className="text-2xl font-bold">
            Analysis completed
          </h3>

          <p className="mt-2 text-zinc-400">
            File: {result.filename}
          </p>

          <div className="mt-6">
            <p className="text-zinc-400">
              Sheets found
            </p>

            <p className="mt-1 text-3xl font-bold text-blue-500">
              {result.totalSheets}
            </p>
          </div>

          <pre className="mt-6 overflow-auto rounded-xl bg-zinc-950 p-4 text-sm text-zinc-300">
            {JSON.stringify(result.analysis, null, 2)}
          </pre>

        </div>
      )}

    </div>
  );
}