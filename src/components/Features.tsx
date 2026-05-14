import Icon from "@/components/ui/icon";

const features = [
  {
    icon: "BookOpen",
    title: "Обычаи двух народов",
    description: "Свадебные, праздничные, застольные — сотни живых обычаев России и Британии с историей их происхождения.",
  },
  {
    icon: "Sparkles",
    title: "Суеверия и приметы",
    description: "Чёрная кошка, разбитое зеркало, стук по дереву — разбираем, откуда берутся суеверия и что за ними стоит.",
  },
  {
    icon: "Calendar",
    title: "Праздничные традиции",
    description: "Масленица и Guy Fawkes Night, Рождество и Старый Новый год — как два народа отмечают главные события года.",
  },
  {
    icon: "Globe",
    title: "Сравнительный взгляд",
    description: "Параллели и различия: одинаковые суеверия с разными объяснениями, схожие ритуалы из разных эпох.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-sm uppercase tracking-widest text-terracotta mb-4 block">Что внутри</span>
          <h2 className="font-serif text-4xl md:text-5xl tracking-tight text-foreground text-balance">
            Народная мудрость двух культур
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-10 rounded-2xl bg-card border border-border hover:border-sage/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 rounded-full bg-sage/10 flex items-center justify-center mb-6 group-hover:bg-sage/20 transition-colors duration-500">
                <Icon name={feature.icon} size={24} className="text-sage" />
              </div>
              <h3 className="font-serif text-2xl text-foreground mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
