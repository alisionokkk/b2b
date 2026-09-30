import type { ReactNode } from 'react';

const icons: Record<string, ReactNode> = {
  Instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" />
    </>
  ),
  Telegram: (
    <path
      fill="currentColor"
      d="M21.5 3.5 2.8 10.8c-.8.3-.8 1.4 0 1.7l4.6 1.7 1.8 5.6c.2.6.9.8 1.4.4l2.6-2.2 4.7 3.5c.5.4 1.3.1 1.4-.6l3-15.2c.2-.8-.6-1.5-1.4-1.1zM9.4 13.4l7.6-5.2-5.8 6.3z"
      fillRule="evenodd"
    />
  ),
  Viber: (
    <>
      <path
        d="M12 3c-4.6 0-8 2.9-8 7 0 2.3 1 4.2 2.8 5.5V20l3.3-2.2c.6.1 1.3.2 1.9.2 4.6 0 8-2.9 8-7s-3.4-7-8-7z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <path fill="currentColor" d="M9.6 8.2c.3 2.2 2 3.9 4.2 4.2l1-1.1-1.6-1-.7.5c-.6-.3-1-.8-1.3-1.3l.5-.7-1-1.6z" />
    </>
  ),
  YouTube: (
    <>
      <rect x="2.5" y="5.5" width="19" height="13" rx="4" fill="none" stroke="currentColor" strokeWidth="1.8" />
      <path fill="currentColor" d="M10 9.2v5.6l4.8-2.8z" />
    </>
  ),
};

export function SocialIcon({ name, size = 20 }: { name: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {icons[name]}
    </svg>
  );
}
