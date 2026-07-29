import { UploadCloud } from "lucide-react";

export default function UploadZone() {
  return (
    <div className="mt-10 rounded-3xl border-2 border-dashed border-zinc-700 bg-zinc-900 p-16 transition hover:border-blue-500 hover:bg-zinc-800">

      <div className="flex flex-col items-center">

        <UploadCloud
          size={60}
          className="text-blue-500"
        />

        <h2 className="mt-6 text-2xl font-semibold">
          Upload your Excel file
        </h2>

        <p className="mt-3 text-center text-zinc-400">
          Drag and drop your spreadsheet here
          <br />
          or click to browse.
        </p>

      </div>

    </div>
  );
}