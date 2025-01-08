import { HTMLProps } from "react";

export const FlagIcon = (props: HTMLProps<SVGSVGElement>) => (
  <svg width="12" height="18" viewBox="0 0 12 18" {...props}>
    <g fill="none" fillRule="evenodd">
      <path d="M-14-11h40v40h-40z" />
      <path
        d="M.007 0v17.955l5.56-3.943 5.56 3.943V0z"
        fill="currentColor"
        fillRule="nonzero"
      />
    </g>
  </svg>
);