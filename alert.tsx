import { useEffect } from "react";
import { Download, Globe, Github } from "lucide-react";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import logoImg from "@/imports/download-removebg-preview.png";

const packages = [
  {
    name: "TerminalX APK",
    description: "Android package for the TerminalX terminal emulator",
    tag: "APK",
    url: "https://drive.google.com/file/d/1yoe_dlU2sWK6SQomkMc_vgwQimDJsG7d/view?pli=1",
  },
  {
    name: "Main",
    description: "Foundational bootstrap scripts and utilities",
    tag: "REPO",
    url: "https://packages.termux.dev/apt/termux-main/",
  },
  {
    name: "X11-REPO",
    description: "X11 windowing system repository and packages",
    tag: "REPO",
    url: "https://packages.termux.dev/apt/termux-x11/",
  },
  {
    name: "ROOT-REPO",
    description: "Root-level repository for core system packages",
    tag: "REPO",
    url: "https://packages.termux.dev/apt/termux-root/",
  },
];

export default function App() {
  useEffect(() => {
    const link: HTMLLinkElement =
      document.querySelector("link[rel~='icon']") ||
      document.createElement("link");
    link.type = "image/png";
    link.rel = "shortcut icon";
    link.href = logoImg as string;
    document.head.appendChild(link);
    document.title = "Packages";
  }, []);

  return (
    <div className="min-h-screen w-full bg-black text-white font-mono">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-4 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
          <ImageWithFallback
            src={logoImg}
            alt="TerminalX logo"
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-sm text-white/40 tracking-widest uppercase">TerminalX</span>
      </header>

      {/* Main */}
      <main className="max-w-2xl mx-auto px-6 py-16">
        {/* Title */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold tracking-tight mb-2">Packages</h1>
          <p className="text-white/40 text-sm tracking-wide">
            {packages.length} available
          </p>
        </div>

        {/* About */}
        <div className="mb-12 border border-white/10 rounded-lg p-6 bg-white/[0.03]">
          <h2 className="text-xs font-bold tracking-widest text-white/40 uppercase mb-3">
            About TerminalX
          </h2>
          <p className="text-sm text-white/80 leading-relaxed mb-5">
            TerminalX is a terminal emulator application for Android OS which can be extended
            by packages of ported common GNU/Linux utilities. Running with Termux data to help
            us continue providing you the best of data for your work.
          </p>
          <div className="flex gap-3">
            <a
              href="https://TerminalX.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-150"
            >
              <Globe size={14} strokeWidth={1.5} />
              Main Website
            </a>
            <a
              href="https://github.com/TerminalX-Offical"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 text-sm text-white/70 hover:text-white hover:border-white/40 transition-colors duration-150"
            >
              <Github size={14} strokeWidth={1.5} />
              GitHub
            </a>
          </div>
        </div>

        {/* Package list */}
        <ul className="space-y-0 divide-y divide-white/10 border-t border-white/10">
          {packages.map((pkg) => (
            <li
              key={pkg.name}
              className="flex items-center justify-between py-5 group"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 text-[10px] font-bold tracking-widest text-white/30 border border-white/15 rounded px-1.5 py-0.5 min-w-[52px] text-center">
                  {pkg.tag}
                </span>
                <div>
                  <p className="text-base font-semibold leading-snug">{pkg.name}</p>
                  <p className="text-sm text-white/40 mt-0.5">{pkg.description}</p>
                </div>
              </div>
              <button
                className="ml-6 flex-shrink-0 p-2 rounded-md border border-white/10 text-white/30 hover:text-white hover:border-white/40 transition-colors duration-150 disabled:opacity-30 disabled:cursor-not-allowed"
                aria-label={`Download ${pkg.name}`}
                disabled={!pkg.url}
                onClick={() => pkg.url && window.open(pkg.url, "_blank", "noopener,noreferrer")}
              >
                <Download size={16} strokeWidth={1.5} />
              </button>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
