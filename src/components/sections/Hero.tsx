import { Button } from '../ui/Button';
import { heroContent as c, site } from '../../data/content';
import s from './Hero.module.css';

export function Hero() {
  return (
    <section className={s.hero}>
      <img src={c.image} alt="" className={s.bg} />
      <div className={s.overlay} />
      <div className={s.content}>
        <div className={s.badge}>{c.badge}</div>
        <h1 className={s.title}>{c.title}</h1>
        <p className={s.lead}>{c.lead}</p>
        <ul className={s.list}>
          {c.bullets.map((b) => (
            <li key={b}><span className={s.dot} />{b}</li>
          ))}
        </ul>
        <div className={s.actions}>
          <Button href="#zayavka">Получить коммерческое предложение</Button>
          <Button href={site.phoneHref} variant="outline">Позвонить менеджеру</Button>
        </div>
      </div>
      <a href="#zayavka" className={s.scroll} aria-label="Перейти к форме заявки">
        <svg width="22" height="22" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="m6 9 6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </section>
  );
}
