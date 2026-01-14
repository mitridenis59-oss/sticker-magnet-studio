import { Sticker, Magnet, Palette, Gift } from "lucide-react";
import stickersImg from "@/assets/stickers-collection.jpg";
import magnetsImg from "@/assets/magnets-collection.jpg";

const categories = [
  {
    icon: Sticker,
    title: "Stickere Vinil",
    description: "Rezistente la apă, perfecte pentru laptop, sticle și multe altele",
    color: "primary",
    count: "200+ modele",
    image: stickersImg,
  },
  {
    icon: Magnet,
    title: "Magneți Frigider",
    description: "Magneți puternici cu design-uri personalizate pentru casa ta",
    color: "secondary",
    count: "150+ modele",
    image: magnetsImg,
  },
  {
    icon: Palette,
    title: "Design Custom",
    description: "Încarcă propriul design și noi îl transformăm în realitate",
    color: "accent",
    count: "Nelimitat",
  },
  {
    icon: Gift,
    title: "Seturi Cadou",
    description: "Combinații perfecte de stickere și magneți pentru cei dragi",
    color: "teal",
    count: "50+ seturi",
  },
];

const colorVariants: Record<string, string> = {
  primary: "from-primary/20 to-primary/5 group-hover:from-primary/30 group-hover:to-primary/10",
  secondary: "from-secondary/20 to-secondary/5 group-hover:from-secondary/30 group-hover:to-secondary/10",
  accent: "from-accent/30 to-accent/10 group-hover:from-accent/40 group-hover:to-accent/20",
  teal: "from-teal/20 to-teal/5 group-hover:from-teal/30 group-hover:to-teal/10",
};

const iconColorVariants: Record<string, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  accent: "text-accent-foreground",
  teal: "text-teal",
};

const Categories = () => {
  return (
    <section id="categories" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Explorează Categoriile
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            De la stickere cool pentru laptop până la magneți adorabili pentru frigider, avem tot ce îți trebuie!
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="group bg-card rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${colorVariants[category.color]} flex items-center justify-center mb-4 transition-all duration-300`}>
                <category.icon className={`w-8 h-8 ${iconColorVariants[category.color]}`} />
              </div>
              
              <h3 className="font-display font-semibold text-xl text-foreground mb-2">
                {category.title}
              </h3>
              
              <p className="font-body text-muted-foreground mb-4 text-sm">
                {category.description}
              </p>
              
              <span className="inline-block font-body font-medium text-sm text-primary bg-primary/10 px-3 py-1 rounded-full">
                {category.count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
