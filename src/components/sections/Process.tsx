import { Section, SectionTitle } from '../ui/Section';
import { steps } from '../../data/content';
import s from './Process.module.css';

export function Process() {
  return (
    <Section>
      <SectionTitle>Как мы работаем</SectionTitle>
      <ol className={s.grid}>
        {steps.map((st, i) => (
          <li key={st.title} className={s.step}>
            <div className={s.num}>{i + 1}</div>
            <div className={s.title}>{st.title}</div>
            <div className={s.text}>{st.text}</div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
