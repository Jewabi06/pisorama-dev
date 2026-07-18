import Image from "next/image";
import { SmartAddBar } from './SmartAddBar.js';

export function EmptyState({ onAdd }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-8 text-center">
      <Image src="/logo.png" width="100" height="100" alt="Pisorama Logo" />

      <h1 className="text-2xl font-semibold text-ink tracking-[0.1em]">PisoRama</h1>
      <p className="text-muted">Small expenses. Big insights.</p>

      <div className="m-5 w-full max-w-lg">
        <SmartAddBar onAdd={onAdd} barWidth="w-full" />
      </div>
    </div>
  );
}