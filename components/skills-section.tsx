import { Music, PenTool, Briefcase, Languages } from "lucide-react";

const skills = [
  {
    title: "Музыкальный продакшн",
    icon: Music,
    items: ["Ableton Live", "Sound Design", "Synthesis", "Сведение"],
  },
  {
    title: "Дизайн",
    icon: PenTool,
    items: ["Figma", "UI/UX", "AI Tools", "Дизайн-системы"],
  },
  {
    title: "Управление",
    icon: Briefcase,
    items: ["Project Management", "Scrum", "Бюджетирование", "Команды"],
  },
  {
    title: "Языки",
    icon: Languages,
    items: ["Русский — родной", "Английский — B2"],
  },
];

export function SkillsSection() {
  return (
    <section className="py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-16">
          Навыки и стек
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((category) => {
            const Icon = category.icon;
            return (
              <div
                key={category.title}
                className="card-hover bg-card p-6 ring-1 ring-foreground/5"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg mb-3">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="text-base text-muted-foreground flex items-start gap-2"
                    >
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
