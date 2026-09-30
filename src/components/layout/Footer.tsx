import { Container } from '../ui/Container';
import { footerLinks, legal, site } from '../../data/content';
import s from './Footer.module.css';

export function Footer() {
  return (
    <footer className={s.footer}>
      <Container className={s.grid}>
        <div className={s.about}>
          <div className={s.brand}>ICELAND</div>
          <div>{legal.tagline}</div>
          {legal.lines.map((lines, i) => (
            <div key={i}>
              {lines.map((l, j) => (j === 0 ? l : [<br key={j} />, l]))}
            </div>
          ))}
        </div>
        <div className={s.col}>
          <div className={s.heading}>Информация</div>
          {footerLinks.map((l) => (
            <a key={l.label} href={l.href} className={l.active ? s.current : undefined}>{l.label}</a>
          ))}
        </div>
        <div className={s.col}>
          <div className={s.heading}>Контакты</div>
          <a href={site.phoneHref} className={s.phone}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address}</span>
        </div>
      </Container>
      <Container className={s.copy}>© 2026 ICELAND. Все права защищены.</Container>
    </footer>
  );
}
