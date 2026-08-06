import { MessageCircle, Mail, Palette } from "lucide-react";

const contacts = [
  {
    label: "Telegram",
    value: "@dmitriyyadrin",
    href: "https://t.me/dmitriyyadrin",
    icon: MessageCircle,
  },
  {
    label: "Email",
    value: "d.jadrin520@gmail.com",
    href: "mailto:d.jadrin520@gmail.com",
    icon: Mail,
  },
  {
    label: "Behance",
    value: "behance.net/dmitriyyadrin",
    href: "https://www.behance.net/dmitriyyadrin",
    icon: Palette,
  },
];

export function ContactsSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold tracking-tight text-center mb-8">
        Контакты
      </h2>
      <div className="flex flex-wrap items-center justify-center gap-6">
        {contacts.map((contact) => {
          const Icon = contact.icon;
          return (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-2 ring-1 ring-foreground/5 bg-card transition-colors hover:ring-primary/40"
            >
              <Icon className="h-5 w-5 text-primary" />
              <div>
                <div className="text-xs text-muted-foreground">
                  {contact.label}
                </div>
                <div className="text-sm font-medium group-hover:text-primary">
                  {contact.value}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
}
