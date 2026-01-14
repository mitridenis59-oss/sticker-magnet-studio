import { Heart, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  category: string;
  image?: string;
  isNew?: boolean;
  isBestseller?: boolean;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  rating,
  reviews,
  category,
  image,
  isNew,
  isBestseller,
}: ProductCardProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const discount = originalPrice ? Math.round((1 - price / originalPrice) * 100) : 0;

  return (
    <div className="group bg-card rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-square bg-gradient-to-br from-muted to-muted/50 overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-24 h-24 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center">
              <span className="text-5xl">🎨</span>
            </div>
          </div>
        )}
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="bg-secondary text-secondary-foreground font-body font-semibold text-xs px-3 py-1 rounded-full">
              NOU
            </span>
          )}
          {isBestseller && (
            <span className="bg-accent text-accent-foreground font-body font-semibold text-xs px-3 py-1 rounded-full">
              BESTSELLER
            </span>
          )}
          {discount > 0 && (
            <span className="bg-primary text-primary-foreground font-body font-semibold text-xs px-3 py-1 rounded-full">
              -{discount}%
            </span>
          )}
        </div>
        
        {/* Wishlist Button */}
        <button
          onClick={() => setIsLiked(!isLiked)}
          className="absolute top-3 right-3 w-10 h-10 bg-card/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:scale-110 transition-transform"
        >
          <Heart
            className={`w-5 h-5 transition-colors ${
              isLiked ? "fill-primary text-primary" : "text-muted-foreground"
            }`}
          />
        </button>
        
        {/* Quick Add Button */}
        <div className="absolute bottom-3 left-3 right-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
          <Button className="w-full font-body font-semibold gap-2">
            <ShoppingCart className="w-4 h-4" />
            Adaugă în coș
          </Button>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <span className="font-body text-xs text-muted-foreground uppercase tracking-wide">
          {category}
        </span>
        
        <h3 className="font-display font-semibold text-foreground mt-1 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        {/* Rating */}
        <div className="flex items-center gap-1 mb-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-3.5 h-3.5 ${
                  i < Math.floor(rating)
                    ? "fill-accent text-accent"
                    : "text-muted"
                }`}
              />
            ))}
          </div>
          <span className="font-body text-xs text-muted-foreground">
            ({reviews})
          </span>
        </div>
        
        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-display font-bold text-lg text-foreground">
            {price} Lei
          </span>
          {originalPrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              {originalPrice} Lei
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
