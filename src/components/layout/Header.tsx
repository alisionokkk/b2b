import { Container } from '../ui/Container';
import { site } from '../../data/content';
import s from './Header.module.css';

export function Header() {
  return (
    <header className={s.header}>
      <Container className={s.inner}>
        <a href={site.url} className={s.logo}>
          <img src={site.logo} alt="ICELAND" height={28} />
        </a>
        <a href={site.phoneHref} className={s.phone}>{site.phone}</a>
      </Container>
    </header>
  );
}
