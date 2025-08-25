"use client";
export function Tabs({ value, onValueChange, children }: any) {
  // simple passthrough container; your triggers can call onValueChange
  return typeof children === "function" ? children({ value, onValueChange }) : <div data-value={value}>{children}</div>;
}
export function TabsList({ children }: any){ return <div className="flex gap-2">{children}</div>; }
export function TabsTrigger({ value, children, onSelect }: any){
  return <button className="px-3 py-1 rounded-xl border" onClick={()=>onSelect?.(value)}>{children}</button>;
}
