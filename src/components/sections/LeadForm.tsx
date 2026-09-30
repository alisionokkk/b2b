import { useState, type FormEvent } from 'react';
import { Button } from '../ui/Button';
import { Section } from '../ui/Section';
import { quantityOptions, site } from '../../data/content';
import s from './LeadForm.module.css';

export function LeadForm() {
  const [sent, setSent] = useState(false);

  return (
    <Section id="zayavka">
      <div className={s.wrap}>
        <ContactInfo />
        {sent ? <SuccessMessage onReset={() => setSent(false)} /> : <RequestForm onSubmit={() => setSent(true)} />}
      </div>
    </Section>
  );
}

function ContactInfo() {
  return (
    <div>
      <h2 className={s.h2}>Получите коммерческое предложение</h2>
      <p className={s.lead}>Менеджер свяжется с вами в течение рабочего дня и подготовит КП под ваш бюджет.</p>
      <div className={s.contacts}>
        <a href={site.phoneHref} className={s.phone}>{site.phone}</a>
        <a href={`mailto:${site.email}`} className={s.email}>{site.email}</a>
        <span className={s.address}>{site.address}</span>
      </div>
    </div>
  );
}

function RequestForm({ onSubmit }: { onSubmit: () => void }) {
  const handle = (e: FormEvent) => {
    e.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handle} className={s.form}>
      <input className={s.field} name="company" required placeholder="Название организации" autoComplete="organization" />
      <input className={s.field} name="unp" placeholder="УНП" inputMode="numeric" />
      <input className={s.field} name="contact" required placeholder="Контактное лицо" autoComplete="name" />
      <input className={s.field} name="phone" required type="tel" placeholder="Телефон" autoComplete="tel" />
      <select className={`${s.field} ${s.full}`} name="quantity" aria-label="Количество">
        {quantityOptions.map((o) => <option key={o}>{o}</option>)}
      </select>
      <textarea className={`${s.field} ${s.full} ${s.textarea}`} name="comment" rows={3} placeholder="Комментарий: модели, цвета, сроки" />
      <div className={s.full}>
        <Button type="submit" block>Отправить заявку</Button>
      </div>
      <div className={`${s.full} ${s.privacy}`}>
        Нажимая кнопку, вы соглашаетесь с <a href={site.privacyUrl}>политикой конфиденциальности</a>
      </div>
    </form>
  );
}

function SuccessMessage({ onReset }: { onReset: () => void }) {
  return (
    <div className={s.success} role="status">
      <div className={s.check}>✓</div>
      <div className={s.successTitle}>Заявка отправлена</div>
      <div className={s.successText}>Менеджер свяжется с вами в течение рабочего дня.</div>
      <button type="button" onClick={onReset} className={s.reset}>Отправить ещё одну</button>
    </div>
  );
}
