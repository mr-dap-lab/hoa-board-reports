import * as React from "react";
export function Card({ className="", ...p }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border bg-white ${className}`} {...p} />;
}
export function CardHeader(p: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...p} className={`p-4 ${p.className||""}`} />;
}
export function CardTitle(p: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...p} className={`text-lg font-semibold ${p.className||""}`} />;
}
export function CardContent(p: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...p} className={`p-4 pt-0 ${p.className||""}`} />;
}
