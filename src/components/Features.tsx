import { Truck, Shield, Sparkles, Clock, Headphones, Leaf } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Livrare Rapidă",
    description: "Transport gratuit pentru comenzi peste 100 Lei. Livrare în 2-4 zile lucrătoare.",
  },
  {
    icon: Shield,
    title: "Calitate Premium",
    description: "Materiale de înaltă calitate, rezistente la apă și UV, durabile în timp.",
  },
  {
    icon: Sparkles,
    title: "Design Unic",
    description: "Creează design-uri personalizate sau alege din biblioteca noastră de modele.",
  },
  {
    icon: Clock,
    title: "Producție Rapidă",
    description: "Comenzile sunt procesate și produse în maxim 48 de ore.",
  },
  {
    icon: Headphones,
    title: "Suport Dedicat",
    description: "Echipă prietenoasă disponibilă să te ajute cu orice întrebare.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Folosim materiale și procese prietenoase cu mediul înconjurător.",
  },
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            De ce să ne alegi pe noi?
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Ne dedicăm să oferim cea mai bună experiență și produse de calitate superioară
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="flex gap-4 p-6 rounded-2xl bg-card hover:bg-card/80 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
