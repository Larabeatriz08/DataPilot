import { useState } from "react";

import Header from "../components/Header";
import UploadZone from "../components/UploadZone";
import type { AnalysisResponse } from "../types/analysis";

export default function Home() {
  const [analysis, setAnalysis] = useState<AnalysisResponse | null>(null);

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-24">

        <h1 className="text-center text-6xl font-extrabold">
          Analyze Excel Files
          <br />
          with Artificial Intelligence
        </h1>

        <p className="mt-6 max-w-2xl text-center text-lg text-zinc-400">
          Upload spreadsheets, generate insights, discover patterns,
          detect inconsistencies and create reports automatically.
        </p>

        <UploadZone {...({ onAnalyze: setAnalysis } as any)} />

        {analysis && (
          <pre className="mt-12 w-full rounded-xl bg-zinc-900 p-6 text-left">
            {JSON.stringify(analysis, null, 2)}
          </pre>
        )}

      </section>
    </main>
  );
}