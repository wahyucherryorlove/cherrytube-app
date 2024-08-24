import type { ComponentPropsWithRef } from "react";

export function MoonIcon({ className = "" }: ComponentPropsWithRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="M16.968,8.532,19.3,7.365l1.167-2.333,1.167,2.333,2.333,1.167L21.635,9.7l-1.167,2.333L19.3,9.7ZM23,17a1,1,0,0,0,0,2A1,1,0,0,0,23,17Zm-6-4a1,1,0,0,0,0,2A1,1,0,0,0,17,13Zm1.76,8.894,1.466-1.006-1.621-.731c-7.013-3.036-7.5-13.218-.8-16.906l1.542-.88-1.552-.862C10.032-2.985-.151,3.044,0,12A11.975,11.975,0,0,0,18.76,21.894Z" />
    </svg>
  );
}
