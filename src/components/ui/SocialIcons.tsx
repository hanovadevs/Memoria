import { LucideProps } from "lucide-react";

export const InstagramIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export const DribbbleIcon = (props: LucideProps) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.size || 24}
    height={props.size || 24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={props.strokeWidth || 2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M8.5 2.8c3.5 1 6 4.5 6 9.5 0 5-2.5 8.5-6 9.5" />
    <path d="M2.8 15.5c3.5-1 8.5-2.5 9.5-6 1-3.5-.5-8.5-3.5-9.5" />
    <path d="M15.5 21.2c-1-3.5-2.5-8.5-6-9.5-3.5-1-8.5.5-9.5 3.5" />
  </svg>
);
