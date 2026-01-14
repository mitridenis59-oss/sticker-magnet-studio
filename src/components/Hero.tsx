import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/50 to-background py-16 md:py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/30 rounded-full blur-2xl" />
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-6">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-body font-medium text-sm animate-bounce-soft">
              <Star className="w-4 h-4 text-accent fill-accent" />
              <span>Livrare rapidă în toată România</span>
            </div>
            
            <h1 className="font-display font-bold text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground leading-tight">
              Transformă ideile în{" "}
              <span className="text-primary relative">
                stickere
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                  <path d="M2 8C50 2 150 2 198 8" stroke="hsl(var(--secondary))" strokeWidth="4" strokeLinecap="round"/>
                </svg>
              </span>{" "}
              și{" "}
              <span className="text-secondary">magneți</span>
            </h1>
            
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0">
              Creează produse personalizate unice cu design-urile tale preferate. Perfect pentru cadouri, decorațiuni sau afacerea ta!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="font-body font-semibold text-lg px-8 group">
                Începe să creezi
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" className="font-body font-semibold text-lg px-8">
                Vezi colecțiile
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-center lg:justify-start gap-8 pt-8">
              <div className="text-center">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">500+</p>
                <p className="font-body text-sm text-muted-foreground">Design-uri</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">10k+</p>
                <p className="font-body text-sm text-muted-foreground">Clienți fericiți</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div className="text-center">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">4.9</p>
                <p className="font-body text-sm text-muted-foreground">Rating</p>
              </div>
            </div>
          </div>
          
          {/* Hero Image Placeholder */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-8 aspect-square flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {/* Sticker placeholders */}
                <div className="aspect-square bg-card rounded-2xl shadow-lg p-4 animate-float hover:scale-105 transition-transform cursor-pointer">
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 rounded-xl flex items-center justify-center">
                    <span className="font-display text-4xl">🎨</span>
                  </div>
                </div>
                <div className="aspect-square bg-card rounded-2xl shadow-lg p-4 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "0.5s" }}>
                  <div className="w-full h-full bg-gradient-to-br from-secondary/20 to-secondary/5 rounded-xl flex items-center justify-center">
                    <span className="font-display text-4xl">✨</span>
                  </div>
                </div>
                <div className="aspect-square bg-card rounded-2xl shadow-lg p-4 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "1s" }}>
                  <div className="w-full h-full bg-gradient-to-br from-accent/30 to-accent/10 rounded-xl flex items-center justify-center">
                    <span className="font-display text-4xl">🧲</span>
                  </div>
                </div>
                <div className="aspect-square bg-card rounded-2xl shadow-lg p-4 animate-float hover:scale-105 transition-transform cursor-pointer" style={{ animationDelay: "1.5s" }}>
                  <div className="w-full h-full bg-gradient-to-br from-teal/20 to-teal/5 rounded-xl flex items-center justify-center">
                    <span className="font-display text-4xl">💝</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-60 animate-bounce-soft" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary rounded-full opacity-40 animate-float" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
