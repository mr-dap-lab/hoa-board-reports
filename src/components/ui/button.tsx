type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default"|"outline"|"secondary"; size?: "sm"|"md";
};
export function Button({ className="", variant="default", size="md", ...p }: Props) {
  const v = {
    default: "bg-black text-white hover:opacity-90",
    outline: "border bg-white hover:bg-gray-50",
    secondary: "bg-gray-800 text-white hover:bg-gray-700",
  }[variant];
  const s = { sm: "px-2 py-1 text-sm", md: "px-3 py-2" }[size];
  return <button className={`rounded-xl ${v} ${s} ${className}`} {...p} />;
}
