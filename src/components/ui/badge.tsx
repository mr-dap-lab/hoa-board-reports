export function Badge({ className="", variant="default", ...p }: any) {
  const v = {
    default: "bg-gray-100 text-gray-900",
    secondary: "bg-gray-200",
    destructive: "bg-red-600 text-white",
  }[variant];
  return <span className={`inline-flex items-center px-2 py-0.5 rounded ${v} ${className}`} {...p} />;
}
