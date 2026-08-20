import { createFileRoute } from "@tanstack/react-router";
import { useRef, useState } from "react";
import {
  Anchor,
  Box,
  Building2,
  Check,
  Clock,
  CornerUpLeft,
  Crosshair,
  Droplets,
  FilePenLine,
  Flame,
  Layers,
  Mail,
  MapPin,
  Medal,
  Menu,
  MessageCircle,
  PanelTop,
  Phone,
  Puzzle,
  ScanLine,
  ShieldCheck,
  Truck,
  Upload,
  X,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Ростовский гибочный завод — анкерные болты и металлоконструкции по ГОСТ, Ростов-на-Дону",
      },
      {
        name: "description",
        content:
          "Производство анкерных болтов, закладных деталей и металлоконструкций по ГОСТ с 2014 года. Лазерная резка ЧПУ, гибка, порошковая окраска. Доставка по всей России.",
      },
      {
        property: "og:title",
        content:
          "Ростовский гибочный завод — анкерные болты и металлоконструкции по ГОСТ, Ростов-на-Дону",
      },
      {
        property: "og:description",
        content:
          "Производство анкерных болтов, закладных деталей и металлоконструкций по ГОСТ с 2014 года. Лазерная резка ЧПУ, гибка, порошковая окраска. Доставка по всей России.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:site_name", content: "ООО «Ростовский гибочный завод»" },
      { property: "og:locale", content: "ru_RU" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Ростовский гибочный завод — анкерные болты и металлоконструкции по ГОСТ, Ростов-на-Дону",
      },
      {
        name: "twitter:description",
        content:
          "Производство анкерных болтов, закладных деталей и металлоконструкций по ГОСТ с 2014 года. Лазерная резка ЧПУ, гибка, порошковая окраска. Доставка по всей России.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: "ООО «Ростовский гибочный завод»",
          alternateName: "РГЗ",
          description:
            "Производство анкерных болтов, закладных деталей и металлоконструкций по ГОСТ. Лазерная резка ЧПУ, гибка, сварка, порошковая окраска металла.",
          foundingDate: "2014",
          telephone: "+7 928 777-18-88",
          email: "rvrs@rambler.ru",
          address: {
            "@type": "PostalAddress",
            streetAddress: "ул. Монтажная, 6",
            addressLocality: "Ростов-на-Дону",
            addressCountry: "RU",
          },
          openingHoursSpecification: [
            {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "07:00",
              closes: "16:00",
            },
          ],
          areaServed: "RU",
        }),
      },
    ],
  }),

  component: Index,
});

const navItems = [
  { label: "Каталог", href: "#catalog" },
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#workflow" },
  { label: "О заводе", href: "#about" },
  { label: "Вопросы", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

function TopBar() {
  return (
    <div className="bg-graphite-dark text-steel-light">
      <div className="container-factory">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-2 text-xs sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
          <div className="flex min-w-0 items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-steel" />
            <span className="truncate">г. Ростов-на-Дону, ул. Монтажная, 6</span>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden items-center gap-1.5 sm:flex">
              <Clock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-steel" />
              <span>пн–пт 7:00–16:00</span>
            </div>
            <a
              href="mailto:rvrs@rambler.ru"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-steel" />
              <span className="hidden sm:inline">rvrs@rambler.ru</span>
              <span className="sm:hidden">Почта</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white shadow-sm">
      <div className="container-factory">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-3 sm:flex sm:flex-wrap sm:justify-between">
          <a href="/" className="flex min-w-0 flex-col">
            <span className="text-lg font-bold leading-tight tracking-tight text-graphite sm:text-xl">
              Ростовский гибочный завод
            </span>
            <span className="text-[11px] font-medium tracking-wide text-steel sm:text-xs">
              производство с 2014 года
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-graphite transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-end gap-6 md:flex">
            <a href="tel:+79287771888" className="flex min-h-11 flex-col items-end justify-center">
              <span className="text-lg font-bold leading-tight tracking-tight text-graphite">
                +7 928 777-18-88
              </span>
              <span className="text-[11px] font-medium text-steel">звоните: пн–пт, 7:00–16:00</span>
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-md text-graphite hover:bg-light lg:hidden"
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-white lg:hidden">
          <div className="container-factory flex flex-col py-3">
            <nav className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm font-medium text-graphite transition-colors hover:text-accent"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:+79287771888"
              className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-base font-bold text-graphite"
            >
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
              +7 928 777-18-88
            </a>
            <span className="mt-1 text-xs text-steel">звоните: пн–пт, 7:00–16:00</span>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Калькулятор на первом экране — главный крючок прототипа: на старом сайте
 * цену можно узнать только звонком.
 *
 * Считает по ценам «от» из их прайса. Надбавку за покрытие НЕ добавляем и
 * коэффициентов не выдумываем: их мы не знаем. Выбранное покрытие уходит
 * словами в расшифровку под суммой.
 */
// Первая позиция и «без покрытия» вынесены отдельными константами не для
// красоты: в проекте включён noUncheckedIndexedAccess, и calcItems[0] для
// компилятора может быть undefined.
const defaultItem = {
  id: "bolt",
  price: 150,
  label: "Фундаментные болты ГОСТ 24379.1-2012 — от 150 ₽/шт.",
};

const calcItems = [
  defaultItem,
  { id: "stud", price: 357, label: "Фундаментная шпилька ГОСТ 24379.1-2012 — от 357 ₽/шт." },
  { id: "plate", price: 100, label: "Закладные детали стальные МН — от 100 ₽/шт." },
  { id: "clamp", price: 35, label: "Скоба накладная ГОСТ 14098-91 — от 35 ₽/шт." },
];

const noCoating = "Без покрытия";
const coatings = [noCoating, "Оцинковка", "Порошковая окраска"];

function CalculatorCard() {
  const [itemId, setItemId] = useState(defaultItem.id);
  const [qty, setQty] = useState("100");
  const [coating, setCoating] = useState(noCoating);

  const item = calcItems.find((i) => i.id === itemId) ?? defaultItem;
  const count = Math.max(1, Number(qty) || 1);
  const total = item.price * count;

  return (
    <div className="rounded-md bg-white p-6 shadow-2xl sm:p-7">
      <h2 className="text-xl font-bold tracking-tight text-graphite">Прикинуть стоимость</h2>
      <p className="mt-1 text-sm text-steel">По ценам прайса. Точную сумму посчитаем по чертежу.</p>

      <label htmlFor="calc-item" className="mt-5 mb-1 block text-sm font-medium text-graphite">
        Что нужно
      </label>
      <select
        id="calc-item"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-graphite focus:border-accent focus:outline-none"
      >
        {calcItems.map((i) => (
          <option key={i.id} value={i.id}>
            {i.label}
          </option>
        ))}
      </select>

      <label htmlFor="calc-qty" className="mt-4 mb-1 block text-sm font-medium text-graphite">
        Количество, шт.
      </label>
      <input
        id="calc-qty"
        type="number"
        min={1}
        inputMode="numeric"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-graphite focus:border-accent focus:outline-none"
      />

      <span className="mt-4 mb-1 block text-sm font-medium text-graphite">Покрытие</span>
      <div className="grid grid-cols-3 gap-2">
        {coatings.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCoating(c)}
            className={
              "min-h-11 rounded-sm border px-2 py-2 text-xs font-medium transition-colors " +
              (coating === c
                ? "border-accent bg-accent-soft text-accent"
                : "border-border bg-white text-graphite hover:border-steel")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-baseline justify-between gap-2 rounded-sm bg-light px-4 py-4">
        <span className="text-2xl font-black tracking-tight text-accent sm:text-3xl">
          от {total.toLocaleString("ru-RU")} ₽
        </span>
        <span className="text-xs text-steel">
          {count.toLocaleString("ru-RU")} шт. × от {item.price} ₽
          {coating !== noCoating ? ` · ${coating.toLowerCase()} по прайсу` : ""}
        </span>
      </div>

      <a
        href="#request"
        className="mt-4 inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
      >
        Уточнить по чертежу
      </a>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="section-metal relative overflow-hidden">
      <div className="container-factory relative py-16 sm:py-20 lg:py-28">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start lg:gap-14">
          <div>
            <h1 className="heading-tighter break-words text-[22px] font-black uppercase text-white min-[380px]:text-[26px] min-[430px]:text-3xl sm:text-5xl lg:text-6xl">
              Анкерные болты и <span className="text-accent-light">металлоконструкции</span> по ГОСТ
            </h1>
            <p className="mt-5 max-w-2xl text-base text-steel-light sm:text-lg">
              Собственное производство в Ростове-на-Дону: лазерная резка с ЧПУ, гибка на
              листогибочных прессах, сварка и порошковая окраска. Изготовим по вашему чертежу.
              Доставка по всей России.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-accent px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
              >
                Рассчитать по чертежу
              </a>
              <a
                href="#catalog"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-4 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Смотреть каталог
              </a>
            </div>
          </div>

          <CalculatorCard />
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "12 лет", label: "работаем с 2014 года" },
            { value: "Свой парк", label: "станки ЧПУ, прессы, покраска" },
            { value: "По России", label: "доставка в любой регион" },
            { value: "2020", label: "«Лучшее предприятие отрасли»" },
          ].map((fact) => (
            <div key={fact.label} className="bg-graphite px-5 py-5 sm:px-6 sm:py-6">
              <div className="text-lg font-bold tracking-tight text-white sm:text-xl">
                {fact.value}
              </div>
              <div className="mt-1 text-sm text-steel-light">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProductsSection() {
  const products = [
    {
      icon: Anchor,
      title: "Анкерные болты",
      description: "фундаментные, по ГОСТ 24379.1-2012",
    },
    {
      icon: Layers,
      title: "Блоки анкерных болтов",
      description: "в сборе, готовые к монтажу",
    },
    {
      icon: Building2,
      title: "Металлоконструкции",
      description: "фермы, балки, каркасы",
    },
    {
      icon: Puzzle,
      title: "Закладные детали",
      description: "стальные МН, по чертежу",
    },
    {
      icon: PanelTop,
      title: "Гибка листового металла",
      description: "листогибочные прессы",
    },
    {
      icon: ScanLine,
      title: "Резка металла",
      description: "лазерные станки с ЧПУ",
    },
    {
      icon: Box,
      title: "Другие товары",
      description: "метизная продукция",
    },
    {
      icon: FilePenLine,
      title: "Изделия по чертежу",
      description: "пришлите эскиз, посчитаем",
    },
  ];

  return (
    <section id="catalog" className="bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
              Что мы производим
            </h2>
            <p className="mt-4 max-w-2xl text-base text-steel sm:text-lg">
              Изготавливаем по ГОСТ и по чертежам заказчика — от одиночных деталей до партий на
              объект
            </p>
          </div>
          <a
            href="#request"
            className="inline-flex items-center justify-center rounded-md bg-accent min-h-12 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover shrink-0"
          >
            Запросить прайс
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.title}
                className="group rounded-md border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-accent sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-light">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-graphite"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-graphite">{product.title}</h3>
                <p className="mt-1 text-sm text-steel">{product.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ManufacturingSection() {
  const capabilities = [
    {
      icon: Crosshair,
      title: "Лазерная резка",
      description:
        "Раскрой листа на станках с ЧПУ: точная геометрия, чистый рез, повторяемость в партии.",
    },
    {
      icon: CornerUpLeft,
      title: "Гибка",
      description: "Листогибочные прессы: гнутые профили и детали по вашим размерам.",
    },
    {
      icon: Flame,
      title: "Сварка",
      description: "Сборка конструкций и блоков анкерных болтов в готовые узлы.",
    },
    {
      icon: Droplets,
      title: "Порошковая окраска",
      description: "Камеры полимерного напыления: защита металла и цвет по каталогу RAL.",
    },
  ];

  return (
    <section id="services" className="scroll-mt-20 bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="max-w-3xl">
          <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
            Производство
          </h2>
          <p className="mt-4 text-base text-steel sm:text-lg">
            Лазерные станки с ЧПУ, листогибочные прессы, сварочные аппараты и камеры полимерного
            напыления от ведущих мировых производителей.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group rounded-md border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-accent sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-light">
                  <Icon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-graphite"
                    strokeWidth={1.5}
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-graphite">{cap.title}</h3>
                <p className="mt-1 text-sm text-steel">{cap.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PopularPositionsSection() {
  const items = [
    {
      title: "Изготовление фундаментных болтов ГОСТ 24379.1-2012",
      price: "от 150 ₽/шт.",
      photo: "[фото: фундаментные болты]",
    },
    {
      title: "Изготовление закладных деталей стальных МН",
      price: "от 100 ₽/шт.",
      photo: "[фото: закладные детали]",
    },
    {
      title: "Фундаментная шпилька ГОСТ 24379.1-2012",
      price: "от 357 ₽/шт.",
      photo: "[фото: фундаментная шпилька]",
    },
    {
      title: "Скоба накладная ГОСТ 14098-91",
      price: "от 35 ₽/шт.",
      photo: "[фото: скоба накладная]",
    },
  ];

  return (
    <section id="popular" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
              Популярные позиции
            </h2>
            <p className="mt-4 max-w-2xl text-base text-steel sm:text-lg">
              Цены — от, окончательная зависит от объёма, марки стали и покрытия.
            </p>
          </div>
          <a
            href="#catalog"
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-white min-h-12 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:border-accent hover:text-accent"
          >
            Весь каталог с ценами
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-md border border-border bg-white transition-all hover:-translate-y-1 hover:border-accent"
            >
              <div
                role="img"
                aria-label={`${item.title} — изображение будет добавлено`}
                className="flex aspect-[4/3] items-center justify-center bg-light p-4"
              >
                <span className="text-center text-sm font-medium text-steel">{item.photo}</span>
              </div>

              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-base font-bold leading-snug text-graphite">{item.title}</h3>
                <p className="mt-3 text-xl font-black text-graphite">{item.price}</p>
                <a
                  href="#request"
                  className="mt-5 inline-flex items-center justify-center rounded-md border border-graphite bg-white min-h-12 px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-graphite hover:text-white"
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Блок «почему мы» на их же фактах: свой парк, работа по документам, ГОСТ. */
function AdvantagesSection() {
  const advantages = [
    {
      icon: Building2,
      title: "Завод, а не посредник",
      description:
        "Режем, гнём, варим и красим сами — без наценки перекупщика и без «ждём от поставщика».",
    },
    {
      icon: ShieldCheck,
      title: "Работа по документам",
      description: "Счёт, договор, отгрузочные — как в вашей же схеме заказа.",
    },
    {
      icon: FilePenLine,
      title: "По ГОСТ и по чертежу",
      description: "Стандартные позиции и нестандарт по вашему эскизу.",
    },
    {
      icon: Truck,
      title: "Доставка по России",
      description: "Отгружаем в любой регион.",
    },
    {
      icon: Medal,
      title: "12 лет и награда отрасли",
      description: "С 2014 года, «Лучшее предприятие отрасли — 2020».",
    },
    {
      icon: Clock,
      title: "[Сроки изготовления]",
      description: "[Уточнить у клиента: типовой срок по партии и по нестандарту.]",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="max-w-3xl">
          <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
            Что получает заказчик
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div
                key={adv.title}
                className="rounded-md border border-border border-l-4 border-l-accent bg-light p-5 sm:p-6"
              >
                <Icon
                  aria-hidden="true"
                  className="h-6 w-6 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mt-3 text-lg font-bold text-graphite">{adv.title}</h3>
                <p className="mt-1 text-sm text-steel">{adv.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Ответы только по фактам с их сайта; чего не знаем — в квадратных скобках. */
function FaqSection() {
  const faq = [
    {
      q: "Изготовите по нашему чертежу?",
      a: "Да. Заказ и начинается с чертежа: вы присылаете, мы согласовываем работы и выставляем счёт.",
    },
    {
      q: "Работаете с юридическими лицами?",
      a: "Да, по договору и счёту — это штатный порядок: счёт, договор, изготовление, отгрузка.",
    },
    {
      q: "Доставляете в другой регион?",
      a: "Доставка производится по всей России. [Транспортные компании и условия — уточнить у клиента.]",
    },
    {
      q: "Какое покрытие можно нанести?",
      a: "Порошковая окраска в собственных камерах полимерного напыления, цвет по каталогу RAL. [Оцинковка — уточнить.]",
    },
    {
      q: "Сколько ждать заказ?",
      a: "[Срок изготовления — уточнить у клиента: типовые позиции и нестандарт.]",
    },
  ];

  return (
    <section id="faq" className="scroll-mt-20 bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="max-w-3xl">
          <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
            Коротко о главном
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="faq-0" className="mt-10 max-w-3xl">
          {faq.map((item, i) => (
            <AccordionItem key={item.q} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-base font-bold text-graphite hover:text-accent sm:text-lg">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-steel sm:text-base">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const steps = [
    "Заявка с чертежом",
    "Согласование работ",
    "Выставление счёта",
    "Заключение договора",
    "Изготовление",
    "Доставка и отгрузка",
  ];

  return (
    <section id="workflow" className="scroll-mt-20 bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <h2 className="heading-tight text-center text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
          Как проходит заказ
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {steps.map((step, index) => (
            <div key={step} className="group flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-accent text-lg font-black text-white transition-transform group-hover:scale-110">
                {index + 1}
              </div>
              <p className="mt-4 text-base font-bold text-graphite">{step}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
              О заводе
            </h2>
            <div className="mt-6 space-y-4 text-base text-graphite sm:text-lg">
              <p>
                ООО «Ростовский гибочный завод» с 2014 года занимается производством и продажей
                металлоконструкций, анкерных болтов и метизной продукции.
              </p>
              <p>
                Для изготовления используются лазерные станки с ЧПУ, листогибочные прессы, сварочные
                аппараты и камеры для нанесения полимерного напыления от ведущих мировых
                производителей. Компания предлагает услуги по гибке, резке и порошковой окраске
                металла.
              </p>
              <p>Доставка производится по всей России.</p>
            </div>
            <p className="mt-6 text-sm text-steel">
              [Здесь добавим: площадь производства, число сотрудников, крупные объекты — со слов
              клиента.]
            </p>
          </div>

          <div className="flex items-start">
            <div className="w-full rounded-md border border-border bg-light p-6 sm:p-8">
              <div className="flex items-start gap-4 sm:gap-5">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm bg-white sm:h-16 sm:w-16">
                  <Medal
                    aria-hidden="true"
                    className="h-8 w-8 text-accent sm:h-9 sm:w-9"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <p className="text-lg font-black text-graphite sm:text-xl">
                    Лучшее предприятие отрасли — 2020
                  </p>
                  <p className="mt-1 text-sm text-steel">Национальный сертификат</p>
                  <p className="mt-4 text-xs text-steel">[скан сертификата]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Заявка на заводе начинается с чертежа, а не с телефона — поэтому зона
 * загрузки стоит первой в форме. Файл никуда не уходит: приёмник заявок на
 * сервере владельца ещё не написан, это демонстрация поведения.
 */
function DrawingDropzone() {
  const [names, setNames] = useState<string[]>([]);
  const [over, setOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const take = (files: FileList | null) => {
    if (!files?.length) return;
    setNames(Array.from(files).map((f) => f.name));
  };

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setOver(true);
      }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => {
        e.preventDefault();
        setOver(false);
        take(e.dataTransfer.files);
      }}
      onClick={() => inputRef.current?.click()}
      className={
        "cursor-pointer rounded-sm border border-dashed px-4 py-6 text-center transition-colors " +
        (over ? "border-accent bg-accent-soft" : "border-steel-light bg-white hover:border-accent")
      }
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        className="hidden"
        onChange={(e) => take(e.target.files)}
      />
      <Upload
        aria-hidden="true"
        className="mx-auto h-6 w-6 shrink-0 text-accent"
        strokeWidth={1.5}
      />
      <p className="mt-2 text-sm font-bold text-graphite">
        {names.length === 0
          ? "Перетащите чертёж сюда"
          : names.length === 1
            ? names[0]
            : `Файлов: ${names.length}`}
      </p>
      <p className="mt-1 text-xs text-steel">
        {names.length === 0
          ? "или нажмите, чтобы выбрать файл — PDF, DWG, JPG"
          : "нажмите, чтобы заменить"}
      </p>
    </div>
  );
}

function RequestSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="request" className="bg-graphite py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="heading-tight text-2xl font-black uppercase text-white sm:text-3xl lg:text-4xl">
              Пришлите чертёж — посчитаем
            </h2>
            <p className="mt-5 text-base text-steel-light sm:text-lg">
              Ответим в рабочее время: пн–пт с 7:00 до 16:00. Если удобнее голосом — звоните на{" "}
              <a href="tel:+79287771888" className="font-bold text-white hover:text-accent">
                +7 928 777-18-88
              </a>{" "}
              или пишите в WhatsApp.
            </p>
            <p className="mt-4 text-sm text-steel">
              [Срок ответа и минимальный объём заказа — уточнить у клиента.]
            </p>
          </div>

          <div className="rounded-md bg-white p-6 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-100">
                  <Check aria-hidden="true" className="h-7 w-7 text-green-600" strokeWidth={2} />
                </div>
                <p className="mt-4 text-lg font-bold text-graphite">
                  Заявка отправлена. Перезвоним в рабочее время.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <DrawingDropzone />
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium text-graphite">
                    Имя
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Ваше имя"
                    className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-graphite placeholder:text-steel focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium text-graphite">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-sm border border-border bg-white px-4 py-3 text-sm text-graphite placeholder:text-steel focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="details" className="mb-1 block text-sm font-medium text-graphite">
                    Что нужно изготовить
                  </label>
                  <textarea
                    id="details"
                    required
                    rows={4}
                    placeholder="Например: анкерные болты М24×800, 120 шт."
                    className="w-full resize-none rounded-sm border border-border bg-white px-4 py-3 text-sm text-graphite placeholder:text-steel focus:border-accent focus:outline-none"
                  />
                </div>
                <label className="flex items-start gap-3">
                  <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-accent" />
                  <span className="text-sm text-steel">
                    Согласие на обработку персональных данных
                  </span>
                </label>
                <button
                  type="submit"
                  className="w-full rounded-md bg-accent min-h-12 px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
                >
                  Отправить заявку
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <h2 className="heading-tight text-2xl font-black uppercase text-graphite sm:text-3xl lg:text-4xl">
              Контакты
            </h2>
            <div className="mt-6 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-bold text-graphite">Адрес</p>
                  <p className="text-steel">г. Ростов-на-Дону, ул. Монтажная, 6, офис 19</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-bold text-graphite">Телефоны</p>
                  <a
                    href="tel:+79287771888"
                    className="block py-1.5 text-base text-steel hover:text-accent"
                  >
                    +7 928 777-18-88
                  </a>
                  <a
                    href="tel:+79081709954"
                    className="block py-1.5 text-base text-steel hover:text-accent"
                  >
                    +7 908 170-99-54
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-bold text-graphite">Почта</p>
                  <a
                    href="mailto:rvrs@rambler.ru"
                    className="inline-block py-1.5 text-base text-steel hover:text-accent"
                  >
                    rvrs@rambler.ru
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                  strokeWidth={1.5}
                />
                <div>
                  <p className="font-bold text-graphite">Режим работы</p>
                  <p className="text-steel">пн–пт, 7:00–16:00</p>
                </div>
              </div>
              <div className="pt-2 text-sm text-steel">
                Реквизиты: [ИНН, ОГРН, расчётный счёт — со слов клиента]
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-center rounded-md border border-border bg-white p-6">
            <span className="text-sm font-medium text-steel">[карта проезда: Монтажная, 6]</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-graphite-dark py-10 sm:py-12">
      <div className="container-factory">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="/" className="flex flex-col">
              <span className="text-lg font-bold leading-tight tracking-tight text-white sm:text-xl">
                ООО «Ростовский гибочный завод»
              </span>
              <span className="mt-1 text-xs text-steel">
                Анкерные болты, закладные детали, металлоконструкции
              </span>
            </a>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-steel-light transition-colors hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="text-sm text-steel-light">
            <p>© ООО «РГЗ», 2014–2026</p>
            <p className="mt-2">[политика обработки персональных данных]</p>
          </div>

          <div className="text-sm text-steel-light lg:text-right">
            <p>г. Ростов-на-Дону, ул. Монтажная, 6</p>
            <a
              href="tel:+79287771888"
              className="mt-1 inline-block py-1.5 text-base hover:text-white"
            >
              +7 928 777-18-88
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/79287771888"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Написать в WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 hover:bg-whatsapp-hover"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
    </a>
  );
}

/**
 * Липкая панель на телефоне: позвонить и прислать чертёж — две единственные
 * цели заводского сайта, обе должны быть под большим пальцем.
 */
function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-border bg-border shadow-[0_-6px_24px_rgba(0,0,0,0.12)] lg:hidden">
      <a
        href="tel:+79287771888"
        className="flex min-h-14 items-center justify-center gap-2 bg-white text-sm font-bold text-graphite"
      >
        <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
        Позвонить
      </a>
      <a
        href="#request"
        className="flex min-h-14 items-center justify-center gap-2 bg-accent text-sm font-bold text-white"
      >
        <Upload aria-hidden="true" className="h-4 w-4 shrink-0" />
        Прислать чертёж
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-light">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <ProductsSection />
        <ManufacturingSection />
        <PopularPositionsSection />
        <AdvantagesSection />
        <WorkflowSection />
        <AboutSection />
        <FaqSection />
        <RequestSection />
        <ContactsSection />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  );
}
