import { Section, SectionTitle } from '../ui/Section';
import { audience } from '../../data/content';
import s from './Audience.module.css';

export function Audience() {
  return (
    <Section id="audience">
      <SectionTitle>Кому мы помогаем</SectionTitle>
      <div className={s.grid}>
        {audience.map((a, i) => (
          <AudienceCard key={a.title} index={i + 1} title={a.title} text={a.text} />
        ))}
      </div>
    </Section>
  );
}

function AudienceCard({ index, title, text }: { index: number; title: string; text: string }) {
  return (
    <div className={s.card}>
      <div className={s.num}>{String(index).padStart(2, '0')}</div>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{text}</p>
    </div>
  );
}
