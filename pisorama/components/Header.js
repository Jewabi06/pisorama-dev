import Image from "next/image";

export function Header () {
  return (
    <header className="bg-surface border-b border-line p-2 flex justify-between items-center">
      <Image src="/logo.png" width="50" height="50" alt="Pisorama Logo"/>
    </header>
  )
}