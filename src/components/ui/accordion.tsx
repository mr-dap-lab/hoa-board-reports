"use client";
export function Accordion({ children, ...p }: any){ return <div {...p}>{children}</div>; }
export function AccordionItem({ children, ...p }: any){ return <div className="border rounded-xl mb-3" {...p}>{children}</div>; }
export function AccordionTrigger({ children }: any){
  return <div className="w-full text-left p-4 font-medium cursor-pointer">{children}</div>;
}
export function AccordionContent({ children }: any){ return <div className="px-4 pb-4">{children}</div>; }
