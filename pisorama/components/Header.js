import Image from "next/image";

export function Header () {
  return (
    <header className="bg-surface px-3 py-3 sm:px-4 lg:px-6 flex justify-between items-center">
      <Image
        src="/logo.png"
        width={48}
        height={48}
        alt="Pisorama Logo"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    </header>
  )
}