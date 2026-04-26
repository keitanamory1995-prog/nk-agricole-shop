 'use client';

import { Baby, Flame,  Sparkles, Truck, ShieldCheck, PhoneCall, ArrowRight } from 'lucide-react';

type Product = {
  id: string;
  name: string;
  category: 'Gaz' | 'Bébé' | 'Hygiène' | 'Parfums';
  description: string;
  note?: string;
};

// Ajoutez ici votre numéro WhatsApp (format international, sans +)
// Exemple: "https://wa.me/225XXXXXXXXX?text="
const whatsappBase = '';

const products: Product[] = [
  {
    id: 'gaz-6kg',
    category: 'Gaz',
    name: 'Bouteille de gaz 6kg',
    note: 'Sur commande',
    description: 'Livraison et échange rapide (selon stock & consigne).'
  },
  {
    id: 'gaz-12kg',
    category: 'Gaz',
    name: 'Bouteille de gaz 12kg',
    note: 'Sur commande',
    description: 'Pour une autonomie plus longue en cuisine.'
  },
  {
    id: 'gaz-accessoires',
    category: 'Gaz',
    name: 'Accessoires (tuyaux, détendeurs)',
    note: 'Nous confirmons avec vous',
    description: 'Tout le nécessaire pour une installation sécurisée.'
  },
  {
    id: 'bebe-couches',
    category: 'Bébé',
    name: 'Couches bébé',
    note: 'Tailles & marques au choix',
    description: 'Lot/prix selon disponibilité (import/Europe).'
  },
  {
    id: 'bebe-lingettes',
    category: 'Bébé',
    name: 'Lingettes',
    note: 'Import (qualité)',
    description: 'Pour l’hygiène quotidienne des tout-petits.'
  },
  {
    id: 'bebe-creme',
    category: 'Bébé',
    name: 'Crèmes & soins bébé',
    note: 'Sur demande',
    description: 'Produits doux et adaptés à la peau des bébés.'
  },
  {
    id: 'hygiene-savon',
    category: 'Hygiène',
    name: 'Savons & gels',
    note: 'Lots sur demande',
    description: 'Savons, gels douche et produits d’hygiène du quotidien.'
  },
  {
    id: 'hygiene-deodorant',
    category: 'Hygiène',
    name: 'Déodorants',
    note: 'Sur demande',
    description: 'Variété selon stock (import).' 
  },
  {
    id: 'parfum',
    category: 'Parfums',
    name: 'Parfums importés',
    note: 'Original / On confirme ensemble',
    description: 'Parfums de marque selon arrivage et localisation.'
  }
];

const categoryIcons = {
  Gaz: Flame,
  Bébé: Baby,
  Hygiène:   Parfums: Sparkles
};

const features = [
  {
    icon: Truck,
    title: 'Livraison & disponibilité',
    text: 'Côte d’Ivoire et Europe. Selon votre zone, on confirme les délais.'
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & transparence',
    text: 'Pas de surprise : on confirme ensemble la disponibilité et le total avant paiement.'
  },
  {
    icon: PhoneCall,
    title: 'Suivi client',
    text: 'Questions? On est là pour vous conseiller les bons produits.'
  }
];

function classNames(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

function ProductCard({ product }: { product: Product }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white/60 p-5 shadow-sm backdrop-blur">
      <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
      <p className="mt-2 text-sm text-gray-600">{product.description}</p>

      <div className="mt-3 flex items-center justify-between gap-3">
        <span className="text-xs font-medium text-green-700">{product.note ?? 'Sur commande'}</span>

        <button
          type="button"
          onClick={() => {
            if (!whatsappBase) {
              alert('Ajoutez d’abord votre numéro WhatsApp dans le code (whatsappBase).');
              return;
            }

            const text = `Bonjour, je veux commander : ${product.name}. Merci.`;
            const url = `${whatsappBase}${encodeURIComponent(text)}`;
            window.open(url, '_blank');
          }}
          className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Commander
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default function NKShop() {
  const categories = Array.from(new Set(products.map((p) => p.category)));

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-green-50">
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Hero */}
        <section className="rounded-3xl bg-gradient-to-br from-green-600 to-emerald-500 p-8 text-white shadow">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">NK Agricole Shop</h1>
              <p className="mt-3 text-lg text-white/90">
                Produits du quotidien (gaz, bébé, hygiène, parfums). Site en construction mais
                on met tout en place pour vous servir.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="#produits"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-green-700 shadow"
                >
                  Voir les produits
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 px-4 py-2 text-sm font-semibold text-white"
                >
                  Contact
                  <PhoneCall className="h-4 w-4" />
                </a>
              </div>

              <p className="mt-4 text-sm text-white/80">
                Pour info : on ajoute les prix/stock au fur et à mesure. Vous pouvez commander via WhatsApp.
              </p>
            </div>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                <p className="text-sm text-white/90">
                  Si vous me donnez votre numéro WhatsApp, je le branche et on pourra passer commande directement
                  depuis le site.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-semibold">Gaz</div>
                  <div className="mt-1 text-sm text-white/80">Livraison & accessoires</div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-semibold">Bébé</div>
                  <div className="mt-1 text-sm text-white/80">Couches, lingettes, soins</div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-semibold">Hygiène</div>
                  <div className="mt-1 text-sm text-white/80">Savons, gels, déodorants</div>
                </div>

                <div className="rounded-2xl bg-white/10 p-5 backdrop-blur">
                  <div className="text-sm font-semibold">Parfums</div>
                  <div className="mt-1 text-sm text-white/80">Import selon arrivage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="mt-8">
          <div className="grid gap-4 md:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-green-50 text-green-700">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="mt-3 text-base font-semibold text-gray-900">{f.title}</h2>
                  <p className="mt-2 text-sm text-gray-600">{f.text}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Products */}
        <section id="produits" className="mt-10">
          {categories.map((category) => {
            const Icon = categoryIcons[category];
            return (
              <div key={category} className="mt-8 first:mt-0">
                <div className="flex items-center gap-2">
                  <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-green-100 text-green-700">
                    <Icon className="h-4 w-4" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">{category}</h2>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {products.filter((p) => p.category === category).map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Contact */}
        <section id="contact" className="mt-12 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-gray-900">Contact & commandes</h2>
          <p className="mt-3 text-sm text-gray-600">
            Par défaut, le bouton &laquo;&nbsp;Commander&nbsp;&raquo; ouvre WhatsApp. Ajoutez juste votre numéro
            dans <span className="font-mono">whatsappBase</span> et je m’occupe du reste.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#produits"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-green-700"
            >
              Voir les produits
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-800"
            >
              WhatsApp (placeholder)
              <PhoneCall className="h-4 w-4" />
            </a>
          </div>
        </section>

        <footer className="mt-10 pb-10 text-xs text-gray-500">
          <p>
            NK Agricole Shop &mdash; Site en construction. On ajoute les images, pages produits et paiement quand
            vous êtes prêt.
          </p>
        </footer>
      </div>
    </main>
  );
}
