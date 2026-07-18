import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-primary/30">
      <div className="mx-auto max-w-[1200px] px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <Image
          src="/logo-blue-bg.png"
          alt="VertexShell"
          width={32}
          height={32}
          className="w-8 h-8 rounded"
        />
        <p className="text-white/50 text-xs text-center">
          &copy; 2026 VertexShell Solutions. All rights reserved.
        </p>
        <p className="text-white/40 text-xs">Cairo, Egypt</p>
      </div>
    </footer>
  );
}
