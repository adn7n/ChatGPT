import type React from "react";
export function Label({
  number,
  children,
}: {
  number: string;
  children: React.ReactNode;
}) {
  return (
    <div className="eyebrow">
      <span>{number}</span>
      <span>{children}</span>
    </div>
  );
}
