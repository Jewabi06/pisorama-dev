import Image from "next/image";
import { SmartAddBar } from './SmartAddBar.js';

export function EmptyState() {
  return (
    <>
      <div className="bg-canvas flex flex-col items-center justify-center min-h-screen">
        <Image src="/logo.png" width="100" height="100" alt="Pisorama Logo"/>
        <p className="text-3xl">pisorama</p>
        <p className="">Try typing below - no forms, just describe the expense.</p>
        <SmartAddBar />
      </div>
    </>
  );
}