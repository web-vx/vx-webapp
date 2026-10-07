"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

const options = [
  { value: "general", label: "General enquiry" },
  { value: "advanced-solutions", label: "VertexShell Advanced Solutions" },
  { value: "trading-solutions", label: "VertexShell Trading Solutions" },
];

const fieldClassName =
  "w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white text-sm focus:outline-none focus:border-accent transition-colors";

function Select() {
  const requested = useSearchParams().get("enquiry");
  const defaultValue = options.some((o) => o.value === requested)
    ? requested!
    : "general";

  return (
    <select
      id="enquiry"
      name="enquiry"
      defaultValue={defaultValue}
      className={fieldClassName}
    >
      {options.map((o) => (
        <option key={o.value} value={o.value} className="text-foreground">
          {o.label}
        </option>
      ))}
    </select>
  );
}

function Fallback() {
  return (
    <select id="enquiry" name="enquiry" defaultValue="general" className={fieldClassName}>
      {options.map((o) => (
        <option key={o.value} value={o.value} className="text-foreground">
          {o.label}
        </option>
      ))}
    </select>
  );
}

export default function EnquirySelect() {
  return (
    <div>
      <label htmlFor="enquiry" className="sr-only">
        Enquiring about
      </label>
      <Suspense fallback={<Fallback />}>
        <Select />
      </Suspense>
    </div>
  );
}
