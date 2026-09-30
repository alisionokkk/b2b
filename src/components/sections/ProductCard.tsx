import type { Product } from '../../data/content';
import s from './ProductCard.module.css';

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <a href={p.url} className={s.card}>
      <div className={s.media}>
        <img src={p.img} alt={p.name} loading="lazy" />
      </div>
      <div className={s.body}>
        <div className={s.name}>{p.name}</div>
        <div className={s.spec}>{p.spec}</div>
        <div className={s.price}>
          Розница {p.price} BYN · <span className={s.opt}>опт по запросу</span>
        </div>
      </div>
    </a>
  );
}
