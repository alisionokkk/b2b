import { Container } from '../ui/Container';
import { SocialIcon } from '../ui/SocialIcon';
import { site, socials } from '../../data/content';
import s from './TopBar.module.css';

export function TopBar() {
  return (
    <div className={s.bar}>
      <Container className={s.inner}>
        <div className={s.info}>
          <a href={site.mapUrl} className={s.address}>{site.address}</a>
          <span className={s.hours}>{site.workHours}</span>
        </div>
        <div className={s.socials}>
          {socials.map((x) => (
            <a key={x.label} href={x.href} className={s.icon} aria-label={x.label} title={x.label}>
              <SocialIcon name={x.label} />
            </a>
          ))}
        </div>
      </Container>
    </div>
  );
}
