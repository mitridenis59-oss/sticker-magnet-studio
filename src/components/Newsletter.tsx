import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send, Gift } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Mulțumim pentru abonare! 🎉",
        description: "Vei primi codul de reducere pe email în câteva minute.",
      });
      setEmail("");
    }
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary via-coral-dark to-primary relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl mb-6">
            <Gift className="w-8 h-8 text-primary-foreground" />
          </div>
          
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-4">
            Primește 15% reducere
          </h2>
          
          <p className="font-body text-lg text-primary-foreground/90 mb-8">
            Abonează-te la newsletter și primești cod de reducere 15% pentru prima comandă plus noutăți și oferte exclusive!
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Adresa ta de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white/95 border-0 font-body text-foreground placeholder:text-muted-foreground h-12"
              required
            />
            <Button
              type="submit"
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold gap-2 h-12 px-6"
            >
              Abonează-te
              <Send className="w-4 h-4" />
            </Button>
          </form>
          
          <p className="font-body text-sm text-primary-foreground/70 mt-4">
            Ne pasă de datele tale. Citește{" "}
            <a href="#" className="underline hover:text-primary-foreground transition-colors">
              Politica de confidențialitate
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
