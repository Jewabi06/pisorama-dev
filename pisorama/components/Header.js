import Image from "next/image";

export function Header () {
  return (
    <header className="p-3">
      <div className="flex items-center gap-2">
        <div>
          <Image
            src="/logo.png"
            width={50}
            height={50}
            alt="Pisorama Logo"
            className="h-12 w-12"
          />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-[0.1em] text-ink">PisoRama</p>
        </div>
      </div>
    </header>
  )
}