import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
    >
      <Image
        src="https://drive.google.com/uc?export=view&id=1X2y6snVWPUHWYwG1cCHbHeqUJkM9bgH_"
        alt="logo"
        width={30}
        height={30}
        className="rounded-full"
      />
      <span className="font-medium">Dimas Mufid</span>
    </Link>
  );
}
