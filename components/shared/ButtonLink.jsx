import Link from "next/link";

export default function ButtonLink({ href, children, variant = "primary", className = "" }) {
  const base = "inline-flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-200";
  const variants = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white hover:glow-effect",
    outline: "border border-gray-600 hover:border-gray-500 text-white hover:bg-slate-800",
  };
  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}


