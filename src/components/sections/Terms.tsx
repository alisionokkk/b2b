import { discounts, terms } from '../../data/content';
import { Section } from '../ui/Section';
import s from './Terms.module.css';

export function Terms() {
  return (
    <Section>
      <div className={s.grid}>
        <TermsCard />
        <DiscountsCard />
      </div>
    </Section>
  );
}

function TermsCard() {
  return (
    <div className={s.panel}>
      <h2 className={s.h2}>Условия работы</h2>
      <div className={s.terms}>
        {terms.map((t) => (
          <div key={t.title} className={s.term}>
            <div className={s.icon} aria-hidden="true">{t.icon}</div>
            <div>
              <div className={s.termTitle}>{t.title}</div>
              <div className={s.termText}>{t.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function DiscountsCard() {
  return (
    <div className={`${s.panel} ${s.dark}`}>
      <h2 className={`${s.h2} ${s.h2Tight}`}>Скидки от объёма</h2>
      <p className={`${s.note} ${s.noteTop}`}>Цена фиксируется в коммерческом предложении.</p>
      <div className={s.tiers}>
        {discounts.map((d) => (
          <div key={d.from} className={`${s.tier} ${d.accent ? s.accent : ''}`}>
            <span className={s.from}>{d.from}</span>
            <span className={s.value}>{d.value}</span>
          </div>
        ))}
      </div>
      <p className={`${s.note} ${s.noteBottom}`}>Для крупных партий — индивидуальные условия.</p>
    </div>
  );
}
