import { Section, SectionTitle } from '../ui/Section';
import { ProductCard } from './ProductCard';
import { products, site } from '../../data/content';
import s from './Popular.module.css';

export function Popular() {
  return (
    <Section>
      <div className={s.head}>
        <SectionTitle>Чаще всего заказывают компании</SectionTitle>
        <a href={`${site.url}/#katalog`} className={s.all}>Весь каталог →</a>
      </div>
      <div className={s.grid}>
        {products.map((p) => <ProductCard key={p.url} product={p} />)}
      </div>
    </Section>
  );
}
