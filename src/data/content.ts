const SITE = 'https://dev.ice-land.by';

export const site = {
  url: SITE,
  phone: '+375 (29) 347-02-92',
  phoneHref: 'tel:+375293470292',
  email: 'info@ice-land.by',
  address: 'г. Минск, ул. Грушевская, 124, 3 этаж',
  mapUrl: 'https://yandex.by/maps/-/CDdWqNpT',
  workHours: 'магазин с 9:00 до 21:00',
  logo: `${SITE}/brand/iceland-wordmark.svg`,
  privacyUrl: `${SITE}/politika-konfidenczialnosti`,
};

export const socials = [
  { label: 'Instagram', href: 'https://www.instagram.com/iceland_by' },
  { label: 'Telegram', href: 'https://t.me/+375296252606' },
  { label: 'Viber', href: 'viber://chat?number=%2B375336252606' },
  { label: 'YouTube', href: 'https://www.youtube.com/@iceland_by' },
];

export const nav = [
  { label: 'Каталог', href: `${SITE}/#katalog` },
  { label: 'Доставка', href: `${SITE}/dostavka-i-oplata` },
  { label: 'О компании', href: `${SITE}/o-kompanii` },
  { label: 'Юрлицам', href: '#', active: true },
  { label: 'Отзывы', href: `${SITE}/otzyvy` },
];

export const footerLinks = [
  { label: 'Отзывы', href: `${SITE}/otzyvy` },
  { label: 'О компании', href: `${SITE}/o-kompanii` },
  { label: 'Юридическим лицам', href: '#', active: true },
  { label: 'Сотрудники', href: `${SITE}/sotrudniki` },
  { label: 'Доставка', href: `${SITE}/dostavka-i-oplata` },
  { label: 'Блог', href: `${SITE}/blog` },
  { label: 'Публичная оферта', href: `${SITE}/publichnaya-oferta` },
];

export const heroContent = {
  badge: 'Для юридических лиц и ИП',
  title: 'Чемоданы для бизнеса оптом и в подарок',
  lead: 'Корпоративные подарки, экипировка для команд и сотрудников. Работаем по договору, оплата по безналичному расчёту.',
  bullets: [
    '500+ моделей в наличии на складе в Минске',
    'Скидки от объёма заказа',
    'Полный пакет закрывающих документов',
  ],
  image: `${SITE}/_next/image?url=%2Fsite%2Fhome%2Fhero-catalog-bg.webp&w=1920&q=75`,
};

export const audience = [
  { title: 'Корпоративные подарки', text: 'Подарки сотрудникам и партнёрам к праздникам и юбилеям компании.' },
  { title: 'Туроператоры и агентства', text: 'Чемоданы для программ лояльности, розыгрышей и призов клиентам.' },
  { title: 'Спортивные команды', text: 'Одинаковые чемоданы для выездов на сборы и соревнования.' },
  { title: 'Магазины и маркетплейсы', text: 'Оптовые поставки для перепродажи с прямыми ценами от поставщика.' },
];

export const terms = [
  { icon: '₽', title: 'Безналичный расчёт', text: 'Выставляем счёт на оплату, работаем с ООО и ИП.' },
  { icon: '§', title: 'Договор и документы', text: 'Договор поставки, ТТН, акты — всё для бухгалтерии.' },
  { icon: '✓', title: 'Заводская гарантия 2 года', text: 'На каждый чемодан в заказе.' },
  { icon: '→', title: 'Доставка по Беларуси', text: 'Привезём в офис или на склад. Самовывоз из шоурума в Минске.' },
];

export const discounts = [
  { from: 'от 5 шт.', value: '−5%' },
  { from: 'от 20 шт.', value: '−10%' },
  { from: 'от 50 шт.', value: '−15%', accent: true },
];

export const steps = [
  { title: 'Заявка', text: 'Оставляете заявку на сайте или звоните менеджеру.' },
  { title: 'Подбор', text: 'Подбираем модели под бюджет и отправляем КП.' },
  { title: 'Договор и счёт', text: 'Подписываем договор, выставляем счёт.' },
  { title: 'Отгрузка', text: 'Доставляем заказ с полным пакетом документов.' },
];

const img = (f: string) =>
  `${SITE}/_next/image?url=https%3A%2F%2Fdev.ice-land.by%2Fmedia%2Fimages%2Fuploads%2F2026%2F07%2F${f}&w=640&q=75`;
const url = (s: string) => `${SITE}/katalog/${s}`;

export interface Product {
  name: string;
  spec: string;
  price: string;
  img: string;
  url: string;
}

export const products: Product[] = [
  { name: 'Чемодан MyBag Origin S (оранжевый)', spec: 'Размер S · 25-34 л · 2.5-2.9 кг', price: '99', img: img('0114080e-chat-234.webp'), url: url('chemodan-mybag-origin-s-oranzhevyj') },
  { name: 'Чемодан Aolard Elegance M (графит)', spec: 'Размер M · 50 л · 3.4 кг', price: '159', img: img('cbb9e9af-ai-751.webp'), url: url('dorozhnyj-chemodan-na-kolesikah__chemodan-aolard-elegance-m-grafit') },
  { name: 'Чемодан MyBag Lumo S (голубой)', spec: 'Размер S · 38 л · 2.5 кг', price: '164', img: img('466826ec-chat-remaster-398.webp'), url: url('chemodany-mybag__chemodan-mybag-lumo-s-goluboj') },
  { name: 'Чемодан MyBag Vibe L (изумрудный)', spec: 'Размер L · 108 л · 4.6 кг', price: '294', img: img('cd726f74-chat-96.webp'), url: url('bolshie-chemodany__chemodan-mybag-vibe-l-izumrudnyj') },
];

export const quantityOptions = [
  'Количество: 5–19 шт.',
  'Количество: 20–49 шт.',
  'Количество: 50+ шт.',
  'Пока не знаю',
];

export const legal = {
  tagline: 'Интернет-магазин чемоданов и дорожных аксессуаров в Беларуси',
  lines: [
    ['ООО «Стильный путь»', 'Свидетельство о государственной регистрации № 193784763. Выдано Минским горисполкомом 22.08.2024'],
    ['Торговый реестр: 753605 от 17.07.2025 года'],
    ['Юр. адрес: 220089, Республика Беларусь, г. Минск, ул. Грушевская 124, пом. 231'],
    ['р/с BY29ALFA30122F48570010270000', 'ЗАО «Альфа-банк», БИК ALFABY2X', 'УНП 193784763'],
  ],
};
