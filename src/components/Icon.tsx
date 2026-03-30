import type { IconName } from '../types/content';

interface IconProps {
  name: IconName;
}

export function Icon({ name }: IconProps) {
  switch (name) {
    case 'heat':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5C9.4 6 8 8.3 8 11a4 4 0 1 0 8 0c0-2.6-1.4-4.9-4-8.5Zm0 8.2c1.1 1.6 1.5 2.5 1.5 3.3a1.5 1.5 0 0 1-3 0c0-.8.4-1.7 1.5-3.3Z" />
          <path d="M5 19.5h14v2H5z" />
        </svg>
      );
    case 'pump':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h8A2.5 2.5 0 0 1 17 6.5v11A2.5 2.5 0 0 1 14.5 20h-8A2.5 2.5 0 0 1 4 17.5v-11Z" />
          <path d="M18 9h1.5A2.5 2.5 0 0 1 22 11.5v1A2.5 2.5 0 0 1 19.5 15H18v-2h1.5a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H18V9Z" />
          <path d="M7 8h7v2H7zm0 4h7v2H7zm0 4h4v2H7z" />
        </svg>
      );
    case 'bath':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 12a3 3 0 0 1 3-3h10v4H5v-1Z" />
          <path d="M4 14h15a1 1 0 0 1 1 1 4 4 0 0 1-4 4H8a4 4 0 0 1-4-4 1 1 0 0 1 1-1Z" />
          <path d="M8 7a2.5 2.5 0 0 1 5 0v1h-2V7a.5.5 0 0 0-1 0v1H8V7Z" />
        </svg>
      );
    case 'maintenance':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m13.5 4.5 1.3 1.1 1.7-.3.6 1.6 1.6.7-.3 1.7 1.1 1.2-1.1 1.3.3 1.7-1.6.6-.7 1.6-1.6-.3-1.3 1.1-1.2-1.1-1.7.3-.6-1.6-1.6-.7.3-1.6-1.1-1.3 1.1-1.2-.3-1.7 1.6-.6.7-1.6 1.7.3 1.2-1.1Zm-1.5 4a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
        </svg>
      );
    case 'repair':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m20.7 7.3-4 4a3.5 3.5 0 0 1-4.9 4.9l-6.5 6.5-1.4-1.4 6.5-6.5A3.5 3.5 0 0 1 15.3 10l4-4 1.4 1.3Z" />
          <path d="M14 4a4 4 0 0 0-4 4c0 .3 0 .7.1 1l4.9 4.9c.3.1.7.1 1 .1a4 4 0 0 0 0-8H14Z" />
        </svg>
      );
    case 'funding':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3 4 7v2h16V7l-8-4Z" />
          <path d="M6 11h2v7H6zm5 0h2v7h-2zm5 0h2v7h-2z" />
          <path d="M4 20h16v2H4z" />
        </svg>
      );
    case 'phone':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 4h3L11 7.7l-1.7 1a15.4 15.4 0 0 0 6 6l1-1.7L20 13.8v3c0 .8-.6 1.4-1.4 1.4A14.6 14.6 0 0 1 4.8 5.4C4.8 4.6 5.4 4 6.2 4Z" />
        </svg>
      );
    case 'location':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2.5a6.5 6.5 0 0 0-6.5 6.5c0 5 6.5 12.5 6.5 12.5S18.5 14 18.5 9A6.5 6.5 0 0 0 12 2.5Zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z" />
        </svg>
      );
    case 'clock':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 3.5a8.5 8.5 0 1 0 0 17 8.5 8.5 0 0 0 0-17Zm1 4v4.1l2.8 1.7-1 1.7-3.8-2.2V7.5h2Z" />
        </svg>
      );
    case 'process':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 5h6v4H5zm8 0h6v4h-6zM5 15h6v4H5zm8 0h6v4h-6z" />
          <path d="M10 7h4v2h-4zm-4 8h12v2H6z" />
        </svg>
      );
    case 'check':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="m9.5 16.4-4-4 1.4-1.4 2.6 2.6 7.6-7.6 1.4 1.4-9 9Z" />
        </svg>
      );
    default:
      return null;
  }
}
