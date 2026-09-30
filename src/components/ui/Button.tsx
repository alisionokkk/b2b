import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import s from './Button.module.css';

type Variant = 'primary' | 'outline';

type CommonProps = { variant?: Variant; block?: boolean; children: ReactNode };
type AnchorProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export function Button(props: AnchorProps | NativeProps) {
  const { variant = 'primary', block, children, ...rest } = props;
  const cls = `${s.button} ${s[variant]} ${block ? s.block : ''}`;
  if ('href' in rest && rest.href !== undefined) {
    return <a {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)} className={cls}>{children}</a>;
  }
  return <button {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)} className={cls}>{children}</button>;
}
