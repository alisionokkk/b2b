import { Container } from '../ui/Container';
import { nav } from '../../data/content';
import s from './BottomNav.module.css';

export function BottomNav() {
  return (
    <div className={s.bar}>
      <Container>
        <nav className={s.nav} aria-label="Основная навигация">
          {nav.map((x) => (
            <a key={x.label} href={x.href} className={x.active ? s.active : undefined} aria-current={x.active ? 'page' : undefined}>
              {x.label}
            </a>
          ))}
        </nav>
      </Container>
    </div>
  );
}
