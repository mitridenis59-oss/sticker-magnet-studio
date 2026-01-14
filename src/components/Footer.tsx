import { Sparkles, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-cream py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-coral-dark flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-xl">
                Sticker<span className="text-primary">Magnet</span>
              </span>
            </a>
            <p className="font-body text-cream/70 mb-6">
              Creăm stickere și magneți personalizați de calitate premium pentru tine și afacerea ta.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-cream/10 hover:bg-primary rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Produse</h4>
            <ul className="space-y-3">
              {["Stickere Vinil", "Magneți Frigider", "Design Custom", "Seturi Cadou", "Corporate"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-cream/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Informații</h4>
            <ul className="space-y-3">
              {[
                "Despre noi",
                "Cum comandăm",
                "Termeni și condiții",
                "Politica de retur",
                "FAQ",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="font-body text-cream/70 hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="font-body text-cream/70">
                  Str. Creativității nr. 10, București, România
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+40712345678"
                  className="font-body text-cream/70 hover:text-primary transition-colors"
                >
                  +40 712 345 678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:hello@stickermagnet.ro"
                  className="font-body text-cream/70 hover:text-primary transition-colors"
                >
                  hello@stickermagnet.ro
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-sm text-cream/50">
            © {currentYear} StickerMagnet. Toate drepturile rezervate.
          </p>
          <div className="flex gap-6">
            <a href="#" className="font-body text-sm text-cream/50 hover:text-primary transition-colors">
              Politica de confidențialitate
            </a>
            <a href="#" className="font-body text-sm text-cream/50 hover:text-primary transition-colors">
              Cookie-uri
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
