import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Maria Popescu",
    location: "București",
    rating: 5,
    text: "Am comandat magneți personalizați pentru frigiderul nostru și sunt absolut încântată! Calitatea este excelentă și culorile sunt vibrante.",
    product: "Magneți Personalizați",
  },
  {
    id: 2,
    name: "Andrei Ionescu",
    location: "Cluj-Napoca",
    rating: 5,
    text: "Stickere-le au rezistență uimitoare! Le-am pus pe laptop și după 6 luni arată ca noi. Recomand cu încredere!",
    product: "Stickere Vinil Premium",
  },
  {
    id: 3,
    name: "Elena Dumitrescu",
    location: "Timișoara",
    rating: 5,
    text: "Setul cadou a fost perfect pentru ziua de naștere a prietenei mele. Ambalajul frumos și produsele de calitate. Mulțumesc!",
    product: "Set Cadou Premium",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Ce spun clienții noștri
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Peste 10.000 de clienți fericiți din toată România
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 relative animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute -top-3 -left-3 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              
              {/* Text */}
              <p className="font-body text-foreground mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                  <span className="font-display font-bold text-lg text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-display font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {testimonial.location} • {testimonial.product}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
