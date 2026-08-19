import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Anchor,
  Box,
  Building2,
  Clock,
  CornerUpLeft,
  Crosshair,
  Droplets,
  FilePenLine,
  Flame,
  Layers,
  Mail,
  MapPin,
  Menu,
  PanelTop,
  Phone,
  Puzzle,
  ScanLine,
  X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ростовский гибочный завод — анкерные болты и металлоконструкции по ГОСТ" },
      { name: "description", content: "ООО «Ростовский гибочный завод» изготавливает анкерные болты, закладные детали и металлоконструкции по ГОСТ. Лазерная резка ЧПУ, гибка, сварка, порошковая окраска. Ростов-на-Дону, доставка по России." },
      { property: "og:title", content: "Ростовский гибочный завод — анкерные болты и металлоконструкции по ГОСТ" },
      { property: "og:description", content: "Собственное производство в Ростове-на-Дону. Лазерная резка ЧПУ, гибка, сварка и порошковая окраска. Доставка по всей России." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navItems = [
  { label: "Каталог", href: "#catalog" },
  { label: "Услуги", href: "#services" },
  { label: "Как работаем", href: "#workflow" },
  { label: "О заводе", href: "#about" },
  { label: "Контакты", href: "#contacts" },
];

function TopBar() {
  return (
    <div className="bg-graphite-dark text-steel-light">
      <div className="container-factory">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-2 py-2 text-xs sm:flex sm:flex-wrap sm:justify-between sm:gap-4">
          <div className="flex min-w-0 items-center gap-1.5">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-steel" />
            <span className="truncate">г. Ростов-на-Дону, ул. Монтажная, 6</span>
          </div>
          <div className="flex shrink-0 items-center gap-4">
            <div className="hidden items-center gap-1.5 sm:flex">
              <Clock className="h-3.5 w-3.5 shrink-0 text-steel" />
              <span>пн–пт 7:00–16:00</span>
            </div>
            <a
              href="mailto:rvrs@rambler.ru"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <Mail className="h-3.5 w-3.5 shrink-0 text-steel" />
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
                className="text-sm font-medium text-graphite transition-colors hover:text-red"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-end gap-6 md:flex">
            <a href="tel:+79287771888" className="flex flex-col items-end">
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
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
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
                  className="py-2.5 text-sm font-medium text-graphite transition-colors hover:text-red"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <a
              href="tel:+79287771888"
              className="mt-4 flex items-center gap-2 border-t border-border pt-4 text-base font-bold text-graphite"
            >
              <Phone className="h-4 w-4 shrink-0 text-red" />
              +7 928 777-18-88
            </a>
            <span className="mt-1 text-xs text-steel">звоните: пн–пт, 7:00–16:00</span>
          </div>
        </div>
      )}
    </header>
  );
}

function HeroSection() {
  return (
    <section className="section-metal relative overflow-hidden">
      <div className="container-factory relative py-16 sm:py-20 lg:py-28">
        <div className="max-w-4xl">
          <h1 className="heading-tighter text-3xl font-black uppercase text-white sm:text-5xl lg:text-6xl">
            Анкерные болты и{" "}
            <span className="text-red">металлоконструкции</span>{" "}
            по ГОСТ
          </h1>
          <p className="mt-5 max-w-2xl text-base text-steel-light sm:text-lg">
            Собственное производство в Ростове-на-Дону: лазерная резка с ЧПУ, гибка на
            листогибочных прессах, сварка и порошковая окраска. Изготовим по вашему чертежу.
            Доставка по всей России.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#request"
              className="inline-flex items-center justify-center rounded-md bg-red px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-hover"
            >
              Рассчитать по чертежу
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-md border border-white/30 bg-transparent px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-white/10"
            >
              Смотреть каталог
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-md bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { value: "12 лет", label: "работаем с 2014 года" },
            { value: "Свой парк", label: "станки ЧПУ, прессы, покраска" },
            { value: "По России", label: "доставка в любой регион" },
            { value: "2020", label: "«Лучшее предприятие отрасли»" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="bg-graphite px-5 py-5 sm:px-6 sm:py-6"
            >
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
              Изготавливаем по ГОСТ и по чертежам заказчика — от одиночных деталей до партий на объект
            </p>
          </div>
          <a
            href="#request"
            className="inline-flex items-center justify-center rounded-md bg-red px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-red-hover shrink-0"
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
                className="group rounded-md border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-red sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-light">
                  <Icon className="h-6 w-6 shrink-0 text-graphite" strokeWidth={1.5} />
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
      description: "Раскрой листа на станках с ЧПУ: точная геометрия, чистый рез, повторяемость в партии.",
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
            Лазерные станки с ЧПУ, листогибочные прессы, сварочные аппараты и камеры
            полимерного напыления от ведущих мировых производителей.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            return (
              <div
                key={cap.title}
                className="group rounded-md border border-border bg-white p-5 transition-all hover:-translate-y-1 hover:border-red sm:p-6"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-border bg-light">
                  <Icon className="h-6 w-6 shrink-0 text-graphite" strokeWidth={1.5} />
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
            className="inline-flex shrink-0 items-center justify-center rounded-md border border-border bg-white px-6 py-3.5 text-center text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:border-red hover:text-red"
          >
            Весь каталог с ценами
          </a>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col rounded-md border border-border bg-white transition-all hover:-translate-y-1 hover:border-red"
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-light p-4">
                <span className="text-center text-sm font-medium text-steel">{item.photo}</span>
              </div>
              <div className="flex flex-col p-5 sm:p-6">
                <h3 className="text-base font-bold leading-snug text-graphite">{item.title}</h3>
                <p className="mt-3 text-xl font-black text-red">{item.price}</p>
                <a
                  href="#request"
                  className="mt-5 inline-flex items-center justify-center rounded-md border border-graphite bg-white px-5 py-3 text-center text-sm font-bold uppercase tracking-wide text-graphite transition-colors hover:bg-graphite hover:text-white"
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

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {steps.map((step, index) => (
            <div
              key={step}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red text-lg font-black text-white transition-transform group-hover:scale-110">
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
        <WorkflowSection />
      </main>
    </div>
  );
}
