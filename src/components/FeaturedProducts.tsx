import ProductCard from "./ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import product7 from "@/assets/product-7.jpg";
import product8 from "@/assets/product-8.jpg";

const products = [
  {
    id: 1,
    name: "Pachet Stickere Florale Vintage",
    price: 29,
    originalPrice: 39,
    rating: 4.8,
    reviews: 124,
    category: "Stickere Vinil",
    image: product1,
    isNew: true,
  },
  {
    id: 2,
    name: "Magneți Animale Haioase - Set 6 buc",
    price: 45,
    rating: 4.9,
    reviews: 89,
    category: "Magneți Frigider",
    image: product2,
    isBestseller: true,
  },
  {
    id: 3,
    name: "Stickere Holografice Cosmic",
    price: 35,
    originalPrice: 45,
    rating: 4.7,
    reviews: 67,
    category: "Stickere Vinil",
    image: product3,
  },
  {
    id: 4,
    name: "Magneți Personalizați cu Poze",
    price: 55,
    rating: 5.0,
    reviews: 203,
    category: "Design Custom",
    image: product4,
    isBestseller: true,
  },
  {
    id: 5,
    name: "Stickere Motivaționale Pack",
    price: 25,
    rating: 4.6,
    reviews: 45,
    category: "Stickere Vinil",
    image: product5,
    isNew: true,
  },
  {
    id: 6,
    name: "Set Cadou Premium - Stickere & Magneți",
    price: 89,
    originalPrice: 120,
    rating: 4.9,
    reviews: 156,
    category: "Seturi Cadou",
    image: product6,
  },
  {
    id: 7,
    name: "Magneți Litere Alfabet pentru Copii",
    price: 65,
    rating: 4.8,
    reviews: 78,
    category: "Magneți Frigider",
    image: product7,
  },
  {
    id: 8,
    name: "Stickere Kawaii Characters",
    price: 32,
    rating: 4.7,
    reviews: 92,
    category: "Stickere Vinil",
    image: product8,
    isNew: true,
  },
];

const FeaturedProducts = () => {
  return (
    <section id="stickere" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Produse Populare
            </h2>
            <p className="font-body text-lg text-muted-foreground max-w-xl">
              Cele mai îndrăgite stickere și magneți alese de clienții noștri
            </p>
          </div>
          
          <Button variant="outline" className="font-body font-semibold gap-2 self-start md:self-auto">
            Vezi toate produsele
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
