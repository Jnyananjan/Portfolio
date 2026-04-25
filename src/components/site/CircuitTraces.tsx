export function CircuitTraces() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-40"
      viewBox="0 0 1200 800"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="traceGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="var(--acid)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--acid)" stopOpacity="1" />
          <stop offset="100%" stopColor="var(--acid)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0,200 L300,200 L350,250 L600,250 L650,200 L900,200 L950,260 L1200,260"
        fill="none" stroke="url(#traceGrad)" strokeWidth="1.5" className="animate-trace"
      />
      <path
        d="M0,500 L200,500 L260,440 L500,440 L560,500 L800,500 L860,560 L1200,560"
        fill="none" stroke="url(#traceGrad)" strokeWidth="1.5" className="animate-trace"
        style={{ animationDelay: "1s" }}
      />
      <circle cx="300" cy="200" r="4" fill="var(--acid)" />
      <circle cx="600" cy="250" r="4" fill="var(--acid)" />
      <circle cx="900" cy="200" r="4" fill="var(--acid)" />
      <circle cx="500" cy="440" r="4" fill="var(--acid)" />
      <circle cx="800" cy="500" r="4" fill="var(--acid)" />
    </svg>
  );
}
