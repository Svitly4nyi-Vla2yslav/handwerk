interface PhoneIconProps {
  className?: string;
}

export function PhoneIcon({ className }: PhoneIconProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.944 4.5h2.112c.37 0 .695.253.786.611l.822 3.23a.813.813 0 0 1-.238.813L8.9 10.63a12.966 12.966 0 0 0 4.47 4.47l1.476-1.526a.813.813 0 0 1 .813-.238l3.23.822a.812.812 0 0 1 .611.786v2.112a1.444 1.444 0 0 1-1.444 1.444h-.611C10.192 19.5 4.5 13.808 4.5 6.556v-.612A1.444 1.444 0 0 1 5.944 4.5Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}
