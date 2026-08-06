import Image from "next/image";
import { Disc3, Radio, AudioWaveform } from "lucide-react";
import { SkillsSection } from "@/components/skills-section";
import { SkillsMarquee } from "@/components/skills-marquee";

const experience = [
  {
    period: "2024 — наст. время",
    company: "Asp Sound",
    role: "Музыкальный продюсер",
    results: [
      "Саунд-дизайн и аранжировка в жанрах House, Tech House, Deep Tech",
      "Запись, сведение и мастеринг треков",
      "Релизы на цифровых стриминговых платформах",
    ],
  },
  {
    period: "2021 — наст. время",
    company: "Банк Санкт-Петербург",
    role: "Project Manager / AI Business Analyst",
    results: [
      "Спроектировал AI-систему для юридического департамента (5 агентов)",
      "Сократил время обработки документов на 30%",
      "Внедрил продуктовый подход в управление проектами",
    ],
  },
  {
    period: "2019 — 2023",
    company: "Texture Records",
    role: "Co-founder",
    results: [
      "Основал лейбл электронной музыки",
      "Организовал релизы на виниле и цифровых платформах",
      "Провёл мероприятия в Москве и Санкт-Петербурге",
    ],
  },
  {
    period: "2023 — 2024",
    company: "Aezakmi Group",
    role: "UX/UI-дизайнер",
    results: [
      "Разработал дизайн-системы для веб- и мобильных приложений",
      "Спроектировал интерфейсы 15 мобильных приложений (iOS)",
      "Провёл пользовательские исследования и A/B-тестирование",
    ],
  },
  {
    period: "2018 — 2021",
    company: "Avito",
    role: "Главный специалист поддержки Pro-пользователей",
    results: [
      "Курировал сопровождение ключевых корпоративных клиентов",
      "Оптимизировал процессы поддержки, снизив время реакции на 25%",
      "Участвовал в запуске новых продуктов для бизнеса",
    ],
  },
];

const musicProjects = [
  {
    title: "Сольные альбомы",
    description:
      "Релизы в жанрах House, Tech House, Deep Techno и Industrial на всех стриминговых платформах. Экспериментальное звучание на стыке жанров.",
    icon: AudioWaveform,
    tags: ["House", "Tech House", "Deep Tech", "Techno", "Industrial"],
  },
  {
    title: "Texture Records",
    description:
      "Основатель лейбла электронной музыки. Релизы на виниле и цифре, организация мероприятий в Москве и Санкт-Петербурге, поддержка новых артистов.",
    icon: Disc3,
    tags: ["Лейбл", "Винил", "Мероприятия", "Артисты"],
  },
  {
    title: "Asp Sound",
    description:
      "Музыкальный продакшн и саунд-дизайн. Аранжировка, запись, сведение и мастеринг. Работа в жанрах от Tech House до Industrial.",
    icon: Radio,
    tags: ["Продакшн", "Саунд-дизайн", "Мастеринг"],
  },
];

const portfolioProjects = [
  {
    title: "AI-система для юрдепартамента",
    metrics: "5 агентов · −30% времени обработки",
    description:
      "Спроектировал и внедрил систему из 5 AI-агентов для автоматизации юридического департамента банка.",
  },
  {
    title: "15 мобильных приложений",
    metrics: "iOS · UX/UI",
    description:
      "Разработал дизайн и интерфейсы для 15 мобильных приложений, включая продуктовые и корпоративные решения.",
  },
  {
    title: "Дизайн-системы",
    metrics: "UI-kit · Atomic Design",
    description:
      "Создал модульные дизайн-системы для веб- и мобильных продуктов, обеспечив консистентность интерфейсов.",
  },
  {
    title: "Event-проекты",
    metrics: "Москва · Санкт-Петербург",
    description:
      "Организовал серию музыкальных мероприятий в крупнейших городах России — от концепции до реализации.",
  },
  {
    title: "Международные проекты",
    metrics: "QFII · 7 млрд руб.",
    description:
      "Участвовал в международном проекте QFII, секьюритизация активов на сумму 7 млрд рублей.",
  },
];

const marqueeLeft = [
  "Event Management",
  "Английский язык",
  "Sound Production",
  "Brand Building",
  "Создание креативов",
  "Figma",
  "Публичные выступления",
  "UX",
  "UI",
];

const marqueeRight = [
  "Исследования",
  "Sound Design",
  "Бюджетирование",
  "Написание сценариев",
  "Управление командой",
  "Продюсирование",
  "Организация мероприятий",
  "AI инструменты",
  "Vibe coding",
];

const education = [
  {
    institution: "Международная Школа Профессий",
    program: "Продюсирование проектов",
    year: "2026",
  },
  {
    institution: "Яндекс.Практикум",
    program: "Дизайнер интерфейсов",
    year: "2023",
  },
  {
    institution: "Сургутский государственный университет (СурГУ)",
    program: "Экономика, бухгалтерский учёт",
    year: "2015",
  },
];

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <section className="min-h-[calc(100vh-9rem)] flex flex-col items-center justify-center px-4 py-16">
        <div className="max-w-3xl w-full text-center space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
              Дмитрий Ядрин
            </h1>
            <p className="text-xl font-medium text-primary sm:text-2xl">
              Креативный продюсер / Продуктовый стратег
            </p>
          </div>
        </div>
        <div className="w-full mt-16 space-y-4">
          <SkillsMarquee skills={marqueeLeft} direction="left" />
          <SkillsMarquee skills={marqueeRight} direction="right" />
        </div>
      </section>

      {/* 2. Обо мне */}
      <section className="py-24 px-4 bg-muted/30 overflow-hidden">
        <div className="mx-auto w-full max-w-7xl">
          <div className="flex flex-col items-center gap-12">
            <div className="grid w-full items-center gap-6 lg:grid-cols-[auto_1fr] lg:gap-6">
              <div className="relative mx-auto w-40 sm:w-44 lg:mx-0">
                <div className="feather-edges relative aspect-square overflow-hidden">
                  <Image
                    src="/assets/814384624.jpeg"
                    alt="Дмитрий Ядрин"
                    fill
                    sizes="11rem"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="flex flex-col pt-3 lg:pt-0">
                <p className="w-full text-lg leading-relaxed font-medium italic sm:text-xl">
                  «Продюсирование требует ширины: не чтобы охватить всё, а чтобы
                  увидеть связи, которые другие не замечают. В этой оптике
                  музыка откликается дизайну, AI дополняет живую интуицию, а
                  управление становится не бюрократией, а дыханием проекта»
                </p>
                <div className="text-xl text-muted-foreground mt-4">
                  — личная философия
                </div>
              </div>
            </div>
            <div className="w-full max-w-3xl border-t border-border pt-6">
              <div className="flex flex-nowrap items-stretch justify-between gap-4">
                {[
                  { value: "5+ лет", label: "в продакшене" },
                  { value: "3 жанровых", label: "направления" },
                  { value: "Более 15", label: "успешных проектов" },
                ].map((item) => (
                  <div key={item.value} className="flex-1 text-center">
                    <div className="text-2xl font-bold text-primary sm:text-3xl">
                      {item.value}
                    </div>
                    <div className="text-sm text-muted-foreground sm:text-base">
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Опыт работы */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Опыт работы
          </h2>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />
            <div className="space-y-12">
              {experience.map((item) => (
                <div key={item.company + item.period} className="relative">
                  <div className="hidden md:flex items-center gap-8">
                    <div className="w-1/2 text-right pr-8">
                      <span className="text-sm text-muted-foreground font-medium">
                        {item.period}
                      </span>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-background" />
                    <div className="w-1/2 pl-8">
                      <div className="card-hover bg-card p-6 ring-1 ring-foreground/5">
                        <div className="text-xs text-muted-foreground mb-1 md:hidden">
                          {item.period}
                        </div>
                        <h3 className="font-semibold text-lg">
                          {item.company}
                        </h3>
                        <p className="text-base text-primary mb-3">
                          {item.role}
                        </p>
                        <ul className="space-y-1.5">
                          {item.results.map((result) => (
                            <li
                              key={result}
                              className="text-base text-muted-foreground flex items-start gap-2"
                            >
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="md:hidden relative pl-10">
                    <div className="absolute left-0 top-1 w-2 h-2 rounded-full bg-neutral-700 ring-4 ring-background" />
                    <div className="card-hover bg-card p-6 ring-1 ring-foreground/5">
                      <div className="text-xs text-muted-foreground mb-1">
                        {item.period}
                      </div>
                      <h3 className="font-semibold text-lg">{item.company}</h3>
                      <p className="text-base text-primary mb-3">{item.role}</p>
                      <ul className="space-y-1.5">
                        {item.results.map((result) => (
                          <li
                            key={result}
                            className="text-base text-muted-foreground flex items-start gap-2"
                          >
                            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Музыкальные проекты */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Музыкальные проекты
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {musicProjects.map((project) => {
              const Icon = project.icon;
              return (
                <div
                  key={project.title}
                  className="card-hover bg-card p-6 ring-1 ring-foreground/5"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Портфолио проектов */}
      <section className="py-24 px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Портфолио проектов
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjects.map((project) => (
              <div
                key={project.title}
                className="card-hover bg-card p-6 ring-1 ring-foreground/5 flex flex-col"
              >
                <h3 className="font-semibold mb-3">{project.title}</h3>
                <div className="text-xs font-mono text-primary mb-3">
                  {project.metrics}
                </div>
                <p className="text-base text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Навыки */}
      <SkillsSection />

      {/* 7. Образование */}
      <section className="py-24 px-4 bg-muted/30">
        <div className="mx-auto w-full max-w-7xl">
          <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
            Образование
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-nowrap items-stretch gap-6">
            {education.map((item) => (
              <div
                key={item.institution}
                className="card-hover flex-1 min-w-0 bg-card p-6 ring-1 ring-foreground/5"
              >
                <h3 className="font-semibold">{item.institution}</h3>
                <p className="text-base text-muted-foreground">
                  {item.program}
                </p>
                {item.year && (
                  <p className="text-xs text-primary mt-1">{item.year}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Контакты — в футере (layout.tsx) */}
    </>
  );
}
