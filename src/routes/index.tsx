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
  { label: "Производство", href: "#services" },
  { label: "Цены", href: "#price" },
  { label: "Как работаем", href: "#workflow" },
  { label: "О заводе", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

/** Позиции прайса — единственный источник и для калькулятора, и для таблицы. */
const priceList = [
  {
    id: "bolt",
    title: "Изготовление фундаментных болтов",
    gost: "ГОСТ 24379.1-2012",
    price: 150,
  },
  {
    id: "stud",
    title: "Фундаментная шпилька",
    gost: "ГОСТ 24379.1-2012",
    price: 357,
  },
  {
    id: "plate",
    title: "Изготовление закладных деталей стальных",
    gost: "серия МН",
    price: 100,
  },
  {
    id: "clamp",
    title: "Скоба накладная",
    gost: "ГОСТ 14098-91",
    price: 35,
  },
];

const defaultPosition = priceList[0] ?? {
  id: "bolt",
  title: "Изготовление фундаментных болтов",
  gost: "ГОСТ 24379.1-2012",
  price: 150,
};

const noCoating = "Без покрытия";
const coatings = [noCoating, "Оцинковка", "Порошковая окраска"];

function TopBar() {
  return (
    <div className="border-b border-white/5 bg-ink text-steel">
      <div className="container-factory">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 py-2 text-xs">
          <span className="flex min-w-0 items-center gap-1.5">
            <MapPin aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-accent" />
            <span className="truncate">г. Ростов-на-Дону, ул. Монтажная, 6</span>
          </span>
          <span className="hidden items-center gap-1.5 sm:flex">
            <Clock aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-accent" />
            пн–пт 7:00–16:00
          </span>
          <a
            href="mailto:rvrs@rambler.ru"
            className="ml-auto flex items-center gap-1.5 transition-colors hover:text-white"
          >
            <Mail aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-accent" />
            rvrs@rambler.ru
          </a>
        </div>
      </div>
    </div>
  );
}

function Logo({ tone = "dark" }: { tone?: "dark" | "light" }) {
  const title = tone === "dark" ? "text-white" : "text-graphite";
  return (
    <a href="#top" className="flex min-w-0 items-center gap-3">
      <svg viewBox="0 0 48 48" className="h-10 w-10 shrink-0" aria-hidden="true">
        <path d="M7 35c0-11 8-19 19-19h13" stroke="#d9761a" strokeWidth="5" fill="none" />
        <path d="M7 35h11" stroke="currentColor" strokeWidth="5" />
        <circle cx="39" cy="16" r="4.5" fill="currentColor" />
      </svg>
      <span className="min-w-0">
        <span
          className={`block truncate text-base font-black leading-tight tracking-tight ${title} sm:text-lg`}
        >
          Ростовский гибочный завод
        </span>
        <span className="hidden text-[11px] font-semibold uppercase tracking-[0.14em] text-steel sm:block">
          Металлоизделия по ГОСТ · с 2014 года
        </span>
      </span>
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-ink/95 text-white backdrop-blur">
      <div className="container-factory">
        <div className="flex items-center gap-6 py-3">
          {/* min-w-0 обязателен: без него обёртка логотипа не сжимается и на
              узком экране выдавливает кнопку меню за край страницы. */}
          <span className="min-w-0 flex-1 text-white xl:flex-none">
            <Logo />
          </span>

          <nav className="ml-auto hidden items-center gap-6 xl:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-steel-light transition-colors hover:text-accent-light"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a href="tel:+79287771888" className="ml-auto hidden flex-col items-end xl:ml-0 xl:flex">
            <span className="text-lg font-black leading-tight tracking-tight text-white">
              +7 928 777-18-88
            </span>
            <span className="text-[11px] font-medium text-steel">пн–пт, 7:00–16:00</span>
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="ml-auto grid h-11 w-11 shrink-0 place-items-center rounded-md text-white hover:bg-white/10 xl:hidden"
            aria-label={open ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={open}
          >
            {open ? (
              <X aria-hidden="true" className="h-6 w-6" />
            ) : (
              <Menu aria-hidden="true" className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink xl:hidden">
          <div className="container-factory flex flex-col py-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-2.5 text-sm font-semibold text-steel-light hover:text-accent-light"
              >
                {item.label}
              </a>
            ))}
            <a
              href="tel:+79287771888"
              className="mt-3 flex items-center gap-2 border-t border-white/10 pt-3 text-base font-black text-white"
            >
              <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
              +7 928 777-18-88
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

/**
 * Калькулятор оформлен как пульт станка: тёмная панель, моноширинный итог.
 * Считает по ценам «от» из прайса. Надбавку за покрытие не выдумываем —
 * коэффициентов мы не знаем, покрытие уходит словами в расшифровку.
 */
function CalculatorPanel() {
  const [itemId, setItemId] = useState(defaultPosition.id);
  const [qty, setQty] = useState("100");
  const [coating, setCoating] = useState(noCoating);

  const item = priceList.find((i) => i.id === itemId) ?? defaultPosition;
  const count = Math.max(1, Number(qty) || 1);
  const total = item.price * count;

  return (
    <div className="rounded-md border border-white/10 bg-panel p-6 shadow-2xl sm:p-7">
      <div className="flex items-center gap-2">
        <Crosshair aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
        <h2 className="text-xs font-bold uppercase tracking-[0.16em] text-accent">
          Смета за 15 секунд
        </h2>
      </div>
      <p className="mt-3 text-sm text-steel-light">
        По ценам прайса. Точную сумму посчитаем по вашему чертежу.
      </p>

      <label
        htmlFor="calc-item"
        className="mt-5 mb-1.5 block text-xs font-bold uppercase tracking-wider text-steel"
      >
        Изделие
      </label>
      <select
        id="calc-item"
        value={itemId}
        onChange={(e) => setItemId(e.target.value)}
        className="w-full rounded-sm border border-white/15 bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
      >
        {priceList.map((i) => (
          <option key={i.id} value={i.id}>
            {i.title} — от {i.price} ₽/шт.
          </option>
        ))}
      </select>

      <label
        htmlFor="calc-qty"
        className="mt-4 mb-1.5 block text-xs font-bold uppercase tracking-wider text-steel"
      >
        Количество, шт.
      </label>
      <input
        id="calc-qty"
        type="number"
        min={1}
        inputMode="numeric"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        className="w-full rounded-sm border border-white/15 bg-ink px-4 py-3 text-sm text-white focus:border-accent focus:outline-none"
      />

      <span className="mt-4 mb-1.5 block text-xs font-bold uppercase tracking-wider text-steel">
        Покрытие
      </span>
      <div className="grid grid-cols-3 gap-2">
        {coatings.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setCoating(c)}
            className={
              "min-h-11 rounded-sm border px-2 py-2 text-xs font-semibold transition-colors " +
              (coating === c
                ? "border-accent bg-accent/15 text-accent-light"
                : "border-white/15 bg-ink text-steel-light hover:border-steel")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-5 border-t border-dashed border-white/15 pt-5">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="text-3xl font-black tracking-tight text-accent-light">
            от {total.toLocaleString("ru-RU")} ₽
          </span>
          <span className="text-xs text-steel">
            {count.toLocaleString("ru-RU")} шт. × от {item.price} ₽
            {coating !== noCoating ? ` · ${coating.toLowerCase()} по прайсу` : ""}
          </span>
        </div>
      </div>

      <a
        href="#request"
        className="mt-5 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
      >
        <Upload aria-hidden="true" className="h-4 w-4 shrink-0" />
        Уточнить по чертежу
      </a>
    </div>
  );
}

function HeroSection() {
  return (
    <section id="top" className="blueprint relative overflow-hidden text-white">
      <div className="pointer-events-none absolute -top-40 -left-32 h-[420px] w-[420px] rounded-full bg-accent/20 blur-[120px]" />
      <div className="container-factory relative py-14 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-sm border border-accent/40 bg-accent/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-accent-light">
              <Flame aria-hidden="true" className="h-3.5 w-3.5 shrink-0" />
              Собственное производство · Ростов-на-Дону
            </span>

            <h1 className="heading-tighter mt-6 break-words text-[30px] font-black uppercase min-[430px]:text-4xl sm:text-5xl lg:text-[62px]">
              {/* Перенос после «и»: отдельной строкой союз выглядит обрывком. */}
              Анкерные болты и<span className="mt-1 block text-accent">металлоконструкции</span>
              <span className="mt-1 block">по ГОСТ</span>
            </h1>

            <p className="mt-6 max-w-xl text-base text-steel-light sm:text-lg">
              Режем лазером с ЧПУ, гнём на прессах, варим и красим порошком — всё в одном цеху.
              Изготовим по вашему чертежу, от одной детали до партии на объект.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#request"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-accent px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
              >
                <FilePenLine aria-hidden="true" className="h-4 w-4 shrink-0" />
                Прислать чертёж
              </a>
              <a
                href="#price"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-white/25 px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
              >
                Прайс и каталог
              </a>
            </div>
          </div>

          <CalculatorPanel />
        </div>
      </div>
    </section>
  );
}

/** Лента номенклатуры: сплошной поток того, что завод делает каждый день. */
function MarqueeStrip() {
  const items = [
    "Анкерные болты ГОСТ 24379.1-2012",
    "Закладные детали МН",
    "Фундаментные шпильки",
    "Скобы накладные ГОСТ 14098-91",
    "Металлоконструкции",
    "Лазерная резка ЧПУ",
    "Гибка на прессах",
    "Порошковая окраска RAL",
    "Изделия по чертежу",
  ];
  const line = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-white/10 bg-graphite py-3">
      <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
        {line.map((text, i) => (
          <span
            key={`${text}-${i}`}
            className="flex items-center gap-8 text-sm font-semibold text-steel-light"
          >
            {text}
            <span className="h-1.5 w-1.5 shrink-0 rotate-45 bg-accent" />
          </span>
        ))}
      </div>
    </div>
  );
}

function FactsStrip() {
  const facts = [
    { value: "2014", label: "год основания — 12 лет в металле" },
    { value: "ГОСТ", label: "и по чертежу заказчика" },
    { value: "РФ", label: "доставка в любой регион" },
    { value: "2020", label: "«Лучшее предприятие отрасли»" },
  ];

  return (
    <section className="bg-graphite text-white">
      <div className="container-factory">
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={fact.label}
              className={
                "border-white/10 px-2 py-7 sm:px-4 " +
                (i < 2 ? "border-b lg:border-b-0 " : "") +
                (i % 2 === 0 ? "border-r " : "") +
                (i === 1 ? "lg:border-r " : "") +
                (i === 2 ? "lg:border-r " : "")
              }
            >
              <div className="text-3xl font-black tracking-tight text-accent-light sm:text-4xl">
                {fact.value}
              </div>
              <div className="mt-1.5 text-sm text-steel-light">{fact.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SectionHead({
  eyebrow,
  title,
  text,
  tone = "light",
  action,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  tone?: "light" | "dark";
  action?: { label: string; href: string };
}) {
  const titleColor = tone === "dark" ? "text-white" : "text-graphite";
  const textColor = tone === "dark" ? "text-steel-light" : "text-steel";

  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
      <div className="max-w-3xl">
        <span className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-px w-8 bg-accent" />
          {eyebrow}
        </span>
        <h2
          className={`heading-tight mt-4 text-2xl font-black uppercase sm:text-3xl lg:text-[40px] ${titleColor}`}
        >
          {title}
        </h2>
        {text ? <p className={`mt-4 text-base sm:text-lg ${textColor}`}>{text}</p> : null}
      </div>
      {action ? (
        <a
          href={action.href}
          className="inline-flex min-h-12 shrink-0 items-center justify-center rounded-md bg-accent px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
        >
          {action.label}
        </a>
      ) : null}
    </div>
  );
}

/** Каталог сеткой разного калибра: две ходовые позиции крупнее остальных. */
function CatalogSection() {
  const big = [
    {
      icon: Anchor,
      title: "Анкерные болты и блоки",
      description:
        "Фундаментные болты по ГОСТ 24379.1-2012 и блоки в сборе, готовые к монтажу на объекте.",
    },
    {
      icon: Building2,
      title: "Металлоконструкции",
      description: "Фермы, балки, каркасы — раскрой, сварка и покраска в одном цеху.",
    },
  ];
  const small = [
    { icon: Puzzle, title: "Закладные детали", description: "стальные МН, по чертежу" },
    { icon: Layers, title: "Метизная продукция", description: "шпильки, скобы, крепёж" },
    { icon: PanelTop, title: "Гибка листа", description: "листогибочные прессы" },
    { icon: ScanLine, title: "Резка металла", description: "лазерные станки с ЧПУ" },
    { icon: Droplets, title: "Порошковая окраска", description: "цвет по каталогу RAL" },
    { icon: FilePenLine, title: "Изделия по чертежу", description: "пришлите эскиз — посчитаем" },
  ];

  return (
    <section id="catalog" className="scroll-mt-20 bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <SectionHead
          eyebrow="Каталог"
          title="Что мы производим"
          text="По ГОСТ и по чертежам заказчика — от одиночной детали до партии на объект."
          action={{ label: "Запросить прайс", href: "#request" }}
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {big.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-md bg-graphite p-7 text-white sm:col-span-2 lg:col-span-3 lg:flex lg:items-center lg:gap-8"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border border-accent/40 bg-accent/10">
                  <Icon
                    aria-hidden="true"
                    className="h-7 w-7 text-accent-light"
                    strokeWidth={1.5}
                  />
                </div>
                <div className="relative mt-5 lg:mt-0">
                  <h3 className="text-xl font-black uppercase tracking-tight sm:text-2xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm text-steel-light sm:text-base">
                    {item.description}
                  </p>
                </div>
                <a
                  href="#request"
                  className="relative mt-5 inline-flex min-h-11 items-center gap-2 text-sm font-bold uppercase tracking-wide text-accent-light transition-colors hover:text-white lg:mt-0 lg:ml-auto"
                >
                  Рассчитать
                  <span aria-hidden="true">→</span>
                </a>
              </div>
            );
          })}

          {small.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group rounded-md border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:border-accent"
              >
                <Icon aria-hidden="true" className="h-8 w-8 text-accent" strokeWidth={1.4} />
                <h3 className="mt-4 text-lg font-bold text-graphite">{item.title}</h3>
                <p className="mt-1 text-sm text-steel">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Производство шахматкой: крупный номер участка и что он делает. */
function ProductionSection() {
  const steps = [
    {
      n: "01",
      icon: ScanLine,
      title: "Лазерная резка",
      text: "Раскрой листа на станках с ЧПУ: точная геометрия, чистый рез, повторяемость в партии.",
    },
    {
      n: "02",
      icon: CornerUpLeft,
      title: "Гибка",
      text: "Листогибочные прессы: гнутые профили и детали по вашим размерам.",
    },
    {
      n: "03",
      icon: Flame,
      title: "Сварка",
      text: "Сборка конструкций и блоков анкерных болтов в готовые узлы.",
    },
    {
      n: "04",
      icon: Droplets,
      title: "Порошковая окраска",
      text: "Камеры полимерного напыления: защита металла и цвет по каталогу RAL.",
    },
  ];

  return (
    <section id="services" className="blueprint scroll-mt-20 py-16 text-white sm:py-20 lg:py-24">
      <div className="container-factory">
        <SectionHead
          eyebrow="Производство"
          title="Четыре участка, один цех"
          text="Лазерные станки с ЧПУ, листогибочные прессы, сварочные аппараты и камеры полимерного напыления от ведущих мировых производителей."
          tone="dark"
        />

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md border border-white/10 bg-white/10 md:grid-cols-2">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.n}
                className="group relative bg-graphite p-7 transition-colors hover:bg-panel sm:p-9"
              >
                <div className="flex items-start gap-5">
                  <span className="text-4xl font-black tracking-tighter text-white/10 transition-colors group-hover:text-accent/40 sm:text-5xl">
                    {step.n}
                  </span>
                  <div>
                    <div className="flex items-center gap-2.5">
                      <Icon
                        aria-hidden="true"
                        className="h-5 w-5 shrink-0 text-accent"
                        strokeWidth={1.5}
                      />
                      <h3 className="text-lg font-bold sm:text-xl">{step.title}</h3>
                    </div>
                    <p className="mt-2.5 text-sm text-steel-light sm:text-base">{step.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/** Прайс таблицей: заводу привычнее строка с ГОСТом и ценой, а не витрина. */
function PriceSection() {
  return (
    <section id="price" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <SectionHead
          eyebrow="Прайс"
          title="Ходовые позиции"
          text="Цена «от» — окончательная зависит от объёма, марки стали и покрытия."
        />

        <div className="mt-10 overflow-hidden rounded-md border border-border">
          <table className="hidden w-full border-collapse text-left sm:table">
            <thead>
              <tr className="bg-light text-xs font-bold uppercase tracking-wider text-steel">
                <th className="px-6 py-4">Наименование</th>
                <th className="px-6 py-4">Стандарт</th>
                <th className="px-6 py-4 text-right">Цена от</th>
                <th className="px-6 py-4" />
              </tr>
            </thead>
            <tbody>
              {priceList.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-border transition-colors hover:bg-light"
                >
                  <td className="px-6 py-5 text-base font-bold text-graphite">{item.title}</td>
                  <td className="px-6 py-5 text-sm text-steel">{item.gost}</td>
                  <td className="px-6 py-5 text-right text-lg font-black tracking-tight text-graphite">
                    {item.price} ₽<span className="text-sm font-semibold text-steel">/шт.</span>
                  </td>
                  <td className="px-6 py-5 text-right">
                    <a
                      href="#request"
                      className="inline-flex min-h-11 items-center justify-center rounded-md border border-graphite px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-graphite hover:text-white"
                    >
                      Заказать
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="divide-y divide-border sm:hidden">
            {priceList.map((item) => (
              <div key={item.id} className="p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-steel">
                  {item.gost}
                </div>
                <div className="mt-1 text-base font-bold text-graphite">{item.title}</div>
                <div className="mt-3 flex items-center justify-between gap-4">
                  <span className="text-xl font-black tracking-tight text-graphite">
                    от {item.price} ₽<span className="text-sm font-semibold text-steel">/шт.</span>
                  </span>
                  <a
                    href="#request"
                    className="inline-flex min-h-11 items-center justify-center rounded-md border border-graphite px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-graphite"
                  >
                    Заказать
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-4 text-sm text-steel">
          [Полный прайс и фотографии изделий — из каталога клиента.]
        </p>
      </div>
    </section>
  );
}

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
      description: "Счёт, договор, отгрузочные — штатный порядок для юрлиц.",
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
    <section className="bg-light py-16 sm:py-20 lg:py-24">
      <div className="container-factory">
        <SectionHead eyebrow="Почему к нам" title="Что получает заказчик" />
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {advantages.map((adv) => {
            const Icon = adv.icon;
            return (
              <div key={adv.title} className="rounded-md border border-border bg-white p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-sm bg-accent-soft">
                  <Icon aria-hidden="true" className="h-5 w-5 text-accent" strokeWidth={1.6} />
                </div>
                <h3 className="mt-4 text-lg font-bold text-graphite">{adv.title}</h3>
                <p className="mt-1 text-sm text-steel">{adv.description}</p>
              </div>
            );
          })}
        </div>
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
    <section id="workflow" className="scroll-mt-20 bg-graphite py-16 text-white sm:py-20 lg:py-24">
      <div className="container-factory">
        <SectionHead eyebrow="Порядок работы" title="Как проходит заказ" tone="dark" />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-6">
          {steps.map((step, i) => (
            <div key={step} className="relative">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                  {i + 1}
                </span>
                <span className="h-px flex-1 bg-white/15 lg:block" />
              </div>
              <p className="mt-4 text-sm font-bold sm:text-base">{step}</p>
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
      <div className="container-factory grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-16">
        <div>
          <SectionHead eyebrow="О заводе" title="Ростовский гибочный завод" />
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
            <p className="text-sm text-steel">
              [Добавим: площадь производства, число сотрудников, крупные объекты — со слов клиента.]
            </p>
          </div>
        </div>

        <div className="rounded-md border border-border bg-light p-8 text-center">
          <Medal aria-hidden="true" className="mx-auto h-14 w-14 text-accent" strokeWidth={1.2} />
          <div className="mt-4 text-xl font-black uppercase tracking-tight text-graphite">
            Лучшее предприятие
            <br />
            отрасли — 2020
          </div>
          <p className="mt-2 text-sm text-steel">
            Национальный сертификат
            <br />
            [скан сертификата]
          </p>
        </div>
      </div>
    </section>
  );
}

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
        <SectionHead eyebrow="Вопросы" title="Коротко о главном" />
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

/**
 * Заявка на заводе начинается с чертежа, а не с телефона — поэтому зона
 * загрузки стоит первой. Файл никуда не уходит: приёмник заявок на сервере
 * владельца ещё не написан, это демонстрация поведения.
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

  return (
    <section id="request" className="blueprint scroll-mt-20 py-16 text-white sm:py-20 lg:py-24">
      <div className="container-factory grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="max-w-xl">
          <SectionHead eyebrow="Заявка" title="Пришлите чертёж — посчитаем" tone="dark" />
          <p className="mt-6 text-base text-steel-light sm:text-lg">
            Ответим в рабочее время: пн–пт с 7:00 до 16:00. Если удобнее голосом — звоните на{" "}
            <a
              href="tel:+79287771888"
              className="font-bold text-white underline hover:text-accent-light"
            >
              +7 928 777-18-88
            </a>{" "}
            или пишите в WhatsApp.
          </p>
          <p className="mt-4 text-sm text-steel">
            [Срок ответа и минимальный объём заказа — уточнить у клиента.]
          </p>
        </div>

        <div className="rounded-md bg-white p-6 text-graphite sm:p-8">
          {submitted ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-soft">
                <Check aria-hidden="true" className="h-7 w-7 text-accent" strokeWidth={2} />
              </div>
              <p className="mt-4 text-lg font-bold">
                Заявка отправлена. Перезвоним в рабочее время.
              </p>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
            >
              <DrawingDropzone />
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Имя
                  </label>
                  <input
                    id="name"
                    required
                    placeholder="Ваше имя"
                    className="w-full rounded-sm border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    Телефон
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-sm border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="task" className="mb-1 block text-sm font-medium">
                  Что нужно изготовить
                </label>
                <textarea
                  id="task"
                  rows={3}
                  placeholder="Например: анкерные болты М24×800, 120 шт., с покрытием"
                  className="w-full rounded-sm border border-border px-4 py-3 text-sm focus:border-accent focus:outline-none"
                />
              </div>
              <label className="flex items-start gap-2 text-xs text-steel">
                <input type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-accent" />
                Согласен на обработку персональных данных
              </label>
              <button
                type="submit"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-md bg-accent px-6 py-4 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-accent-hover"
              >
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function ContactsSection() {
  return (
    <section id="contacts" className="scroll-mt-20 bg-white py-16 sm:py-20 lg:py-24">
      <div className="container-factory grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHead eyebrow="Контакты" title="Приезжайте или звоните" />
          <dl className="mt-8 space-y-5">
            {[
              { t: "Адрес", d: "г. Ростов-на-Дону, ул. Монтажная, 6, офис 19", icon: MapPin },
              { t: "Режим работы", d: "пн–пт, 7:00–16:00", icon: Clock },
            ].map((row) => {
              const Icon = row.icon;
              return (
                <div key={row.t} className="flex gap-4">
                  <Icon
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                    strokeWidth={1.6}
                  />
                  <div>
                    <dt className="text-sm text-steel">{row.t}</dt>
                    <dd className="text-base font-bold text-graphite">{row.d}</dd>
                  </div>
                </div>
              );
            })}
            <div className="flex gap-4">
              <Phone
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.6}
              />
              <div>
                <dt className="text-sm text-steel">Телефоны</dt>
                <dd className="text-base font-bold text-graphite">
                  <a href="tel:+79287771888" className="hover:text-accent">
                    +7 928 777-18-88
                  </a>
                  <br />
                  <a href="tel:+79081709954" className="hover:text-accent">
                    +7 908 170-99-54
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.6}
              />
              <div>
                <dt className="text-sm text-steel">Почта</dt>
                <dd className="text-base font-bold text-graphite">
                  <a href="mailto:rvrs@rambler.ru" className="hover:text-accent">
                    rvrs@rambler.ru
                  </a>
                </dd>
              </div>
            </div>
            <div className="flex gap-4">
              <Box
                aria-hidden="true"
                className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                strokeWidth={1.6}
              />
              <div>
                <dt className="text-sm text-steel">Реквизиты</dt>
                <dd className="text-base text-steel">
                  [ИНН, ОГРН, расчётный счёт — со слов клиента]
                </dd>
              </div>
            </div>
          </dl>
        </div>

        <div className="flex min-h-[320px] flex-col gap-4 rounded-md border border-border bg-light p-6">
          <div className="flex flex-1 items-center justify-center rounded-sm border border-dashed border-steel-light p-6 text-center text-sm text-steel">
            [карта проезда: ул. Монтажная, 6 — поставим Яндекс.Карту]
          </div>
          <a
            href="https://yandex.ru/maps/?text=Ростов-на-Дону, улица Монтажная, 6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center rounded-md bg-graphite px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-ink"
          >
            Построить маршрут
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-ink py-12 text-steel">
      <div className="container-factory">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <Logo />
            <p className="mt-4 text-sm">
              Анкерные болты, закладные детали и металлоконструкции по ГОСТ. Собственное
              производство в Ростове-на-Дону.
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-semibold">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>
          <div className="text-sm">
            <a href="tel:+79287771888" className="text-lg font-black text-white">
              +7 928 777-18-88
            </a>
            <p className="mt-1">пн–пт, 7:00–16:00</p>
            <a href="mailto:rvrs@rambler.ru" className="mt-2 block hover:text-white">
              rvrs@rambler.ru
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-3 pt-6 text-xs">
          <span>© ООО «РГЗ», 2014–2026</span>
          <span>[политика обработки персональных данных]</span>
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
      className="fixed bottom-20 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg transition-transform hover:scale-110 hover:bg-whatsapp-hover lg:bottom-6 lg:right-6"
    >
      <MessageCircle aria-hidden="true" className="h-7 w-7" strokeWidth={1.5} />
    </a>
  );
}

/** Липкая панель на телефоне: позвонить и прислать чертёж — под большим пальцем. */
function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-px border-t border-white/10 bg-white/10 lg:hidden">
      <a
        href="tel:+79287771888"
        className="flex min-h-14 items-center justify-center gap-2 bg-graphite text-sm font-bold text-white"
      >
        <Phone aria-hidden="true" className="h-4 w-4 shrink-0 text-accent" />
        Позвонить
      </a>
      <a
        href="#request"
        className="flex min-h-14 items-center justify-center gap-2 bg-accent text-sm font-bold text-white"
      >
        <Upload aria-hidden="true" className="h-4 w-4 shrink-0" />
        Чертёж
      </a>
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-white pb-14 lg:pb-0">
      <TopBar />
      <Header />
      <main>
        <HeroSection />
        <MarqueeStrip />
        <FactsStrip />
        <CatalogSection />
        <ProductionSection />
        <PriceSection />
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
