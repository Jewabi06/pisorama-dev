import Image from "next/image";
import { SmartAddBar } from './SmartAddBar.js';

export function EmptyState({ onAdd }) {
  return (
    <div className="bg-canvas flex flex-col items-center justify-center min-h-screen px-4 py-8 text-center">
      <Image src="/logo.png" width="100" height="100" alt="Pisorama Logo"/>

      <p className="mt-3 text-2xl font-semibold sm:text-3xl">pisorama</p>
      <p className="mt-2 max-w-md text-sm text-dim sm:text-base">Small expenses. Big insights.</p>
      
      <div className="mt-4 w-full max-w-xl">
        <SmartAddBar onAdd={onAdd} barWidth="w-full"/>
      </div>
    </div>
  );
}