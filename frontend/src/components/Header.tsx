import { Database } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full border-b border-zinc-800 bg-zinc-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-blue-600 p-2">
            <Database size={22} />
          </div>

          <div>
            <h1 className="text-lg font-bold">DataPilot</h1>
            <p className="text-xs text-zinc-400">
              AI Spreadsheet Analyzer
            </p>
          </div>
        </div>

      </div>
    </header>
  );
}