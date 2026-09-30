import type { CSSProperties, ReactNode } from 'react';
import s from './Section.module.css';

export function Section({ children, id, style }: { children: ReactNode; id?: string; style?: CSSProperties }) {
  return <section id={id} className={s.section} style={style}>{children}</section>;
}

export function SectionTitle({ children, light }: { children: ReactNode; light?: boolean }) {
  return <h2 className={`${s.title} ${light ? s.light : ''}`}>{children}</h2>;
}
