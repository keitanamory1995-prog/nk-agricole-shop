'use client';

import React, { useMemo, useState } from 'react';

type Product = {
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  unit: string;
};

const PRODUCTS: Product[] = [
  { id: 'gaz6kg',   name: 'Bouteille de gaz 6 kg',  price: 7000,  category: 'Gaz',      image: '', unit: 'pièce' },
  { id: 'gaz12kg',  name: 'Bouteille de gaz 12 kg', price: 14000, category: 'Gaz',      image: '', unit: 'pièce' },
  { id: 'couches',  name: 'Couches bébé (carton)',  price: 18000, category: 'Hygiène',  image: '', unit: 'carton' },
  { id: 'savon',    name: 'Savon (lot de 6)',       price: 3500,  category: 'Hygiène',  image: '', unit: 'lot' },
  { id: 'parfum50', name: 'Parfum 50ml',            price: 9000,  category: 'Parfumerie', image: '', unit: 'pièce' },
];

const CURRENCY = 'CFA'; // ou 'XOF'

function formatMoney(n: number) {
  return new Intl.NumberFormat('fr-FR', {
    style: 'currency',
    currency: 'XOF',
    currencyDisplay: 'code',
  }).format(n);
}

export default function NKShop() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return PRODUCTS;
    return PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  const add = (id: string) =>
    setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));

  const minus = (id: string) =>
    setCart((c) => {
      const qty = (c[id] ?? 0) - 1;
      const next = { ...c };
      if (qty <= 0) delete next[id];
      else next[id] = qty;
      return next;
    });

  const total = useMemo(
    () =>
      Object.entries(cart).reduce((sum, [id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return sum + (p ? p.price * qty : 0);
      }, 0),
    [cart]
  );

  const whatsappNumber = '33641834248'; // mets ton numéro sans + ni espaces
  const waText = useMemo(() => {
    const lines = Object.entries(cart)
      .map(([id, qty]) => {
        const p = PRODUCTS.find((x) => x.id === id);
        return p ? `${p.name} x${qty}` : '';
      })
      .filter(Boolean)
      .join('\n');
    const body =
      `Commande NK Agricole:\n` +
      (lines ? `${lines}\n` : '') +
      `Total: ${formatMoney(total)}`;
    return encodeURIComponent(body);
  }, [cart, total]);

  return (
    <main className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-bold mb-4">NK Agricole — Boutique</h1>

      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Rechercher un produit…"
        className="w-full border rounded px-3 py-2 mb-4"
      />

      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map((p) => {
          const qty = cart[p.id] ?? 0;
          return (
            <div key={p.id} className="border rounded p-3">
              <div className="font-semibold">{p.name}</div>
              <div className="text-sm text-gray-600">
                {p.category} • {p.unit}
              </div>
              <div className="mt-2">{formatMoney(p.price)}</div>

              <div className="mt-3 flex items-center gap-2">
                <button
                  onClick={() => minus(p.id)}
                  className="px-3 py-1 rounded border"
                >
                  –
                </button>
                <span className="min-w-[2rem] text-center">{qty}</span>
                <button
                  onClick={() => add(p.id)}
                  className="px-3 py-1 rounded border bg-black text-white"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-between">
        <div className="text-lg font-semibold">
          Total : {formatMoney(total)}
        </div>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${waText}`}
          target="_blank"
          rel="noreferrer"
          className="px-4 py-2 rounded bg-green-600 text-white"
        >
          Commander sur WhatsApp
        </a>
      </div>

      <footer className="mt-10 text-center text-xs text-gray-500">
        © NK Agricole — Livraison Abidjan (exemple). Modifie cette ligne dans
        <code className="mx-1">components/NKShop.tsx</code>.
      </footer>
    </main>
  );
}
npm i framer-motion@latest \
&& git add package.json ...
&& git commit -m ...
&& git push -u origin main
'use client'
import React, { useMemo, useState } from 'react'
// supprime aussi import { motion } from "framer-motion" si tu n’utilises plus motion
npm i framer-motion@latest \
&& git add package.json ...
&& git commit -m ...
&& git push -u origin main
import React, { useMemo, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";  ← tu peux la supprimer si tu n’utilises plus motion
import { ShoppingCart, X, Plus, Minus, Filter, Truck, MapPin, Phone, Mail, Package, Trash2 } from "lucide-react";
npm i framer-motion@latest \
&& git add package.json package-lock.json components/NKShop.tsx \
&& git commit -m "fix: add framer-motion for Vercel build" \
&& git push -u origin main
npm i framer-motion@latest \
&& git add package.json package-lock.json components/NKShop.tsx \
&& git commit -m "fix: add framer-motion for Vercel build" \
&& git push -u origin main

npm i framer-motion@latest
&& git add ...
&& git commit ...
&& git push ...

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, X, Plus, Minus, Filter, Truck, MapPin, Phone, Mail, Package, Trash2 } from "lucide-react";

type Product = { id: string; name: string; price: number; category: string; image: string; unit: string }

const PRODUCTS: Product[] = [
  { id: "gaz6kg", name: "Bouteille de gaz 6 kg", price: 7000, category: "Gaz", image: "https://images.unsplash.com/photo-1610259468518-8a0e44e945a2?w=1200&auto=format&fit=crop&q=60", unit: "pièce" },
  { id: "gaz12kg", name: "Bouteille de gaz 12 kg", price: 14000, category: "Gaz", image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=1200&auto=format&fit=crop&q=60", unit: "pièce" },
  { id: "couches", name: "Couches bébé (carton)", price: 18000, category: "Hygiène", image: "https://images.unsplash.com/photo-1624896941491-8e7e8d2bed4a?w=1200&auto=format&fit=crop&q=60", unit: "carton" },
  { id: "savon", name: "Savon (lot de 6)", price: 3500, category: "Hygiène", image: "https://images.unsplash.com/photo-1605978253959-05c0f3c360eb?w=1200&auto=format&fit=crop&q=60", unit: "lot" },
  { id: "parfum50", name: "Parfum 50ml", price: 9000, category: "Parfumerie", image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=1200&auto=format&fit=crop&q=60", unit: "flacon" },
];

const CURRENCY = "CFA"; // XOF

function formatMoney(n: number) {
  return new Intl.NumberFormat("fr-FR", { style: "currency", currency: "XOF", currencyDisplay: "code", maximumFractionDigits: 0 }).format(n).replace("XOF", "CFA");
}

function useCart() {
  const [items, setItems] = useState<Record<string, number>>({}); // {productId: qty}

  const count = useMemo(() => Object.values(items).reduce((a, b) => a + b, 0), [items]);
  const lines = useMemo(() => Object.entries(items).map(([id, qty]) => ({ product: PRODUCTS.find(p => p.id === id)!, qty })), [items]);
  const subtotal = useMemo(() => lines.reduce((sum, l) => sum + l.product.price * l.qty, 0), [lines]);

  const add = (id: string, delta = 1) => setItems(prev => ({ ...prev, [id]: Math.max(1, (prev[id] || 0) + delta) }));
  const setQty = (id: string, qty: number) => setItems(prev => ({ ...prev, [id]: Math.max(0, qty) }));
  const remove = (id: string) => setItems(prev => { const c = { ...prev }; delete c[id]; return c; });
  const clear = () => setItems({});

  return { items, lines, count, subtotal, add, setQty, remove, clear };
}

export default function NKShop() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");
  const [cartOpen, setCartOpen] = useState(false);
  const [deliveryMode, setDeliveryMode] = useState<"livraison" | "retrait">("livraison");
  const [customer, setCustomer] = useState({ name: "", phone: "", email: "", address: "", note: "" });
  const [sending, setSending] = useState(false);

  const categories = ["Tous", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  const { lines, count, subtotal, add, setQty, remove, clear } = useCart();

  const filtered = useMemo(() => PRODUCTS.filter(p => {
    const okCat = category === "Tous" || p.category === category;
    const okSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return okCat && okSearch;
  }), [search, category]);

  const deliveryFee = deliveryMode === "livraison" ? (subtotal > 40000 ? 0 : 1500) : 0; // exemple
  const total = subtotal + deliveryFee;

  const valid = customer.name && customer.phone && (deliveryMode === "retrait" || customer.address) && lines.length > 0;

  const whatsappNumber = "+33641384248"; // Numéro de l'entreprise (WhatsApp)

  function buildWhatsAppMessage() {
    const header = `Commande — NK Agricole`;
    const itemsTxt = lines.map(l => `• ${l.product.name} x${l.qty} = ${formatMoney(l.product.price * l.qty)} (${l.product.unit})`).join("%0A");
    const info = `Client: ${customer.name}%0ATel: ${customer.phone}%0AEmail: ${customer.email || "-"}%0AMode: ${deliveryMode}%0AAdresse: ${deliveryMode === "livraison" ? (customer.address || "-") : "Retrait au dépôt"}%0ANote: ${customer.note || "-"}`;
    const totals = `Sous-total: ${formatMoney(subtotal)}%0ALivraison: ${formatMoney(deliveryFee)}%0ATotal: ${formatMoney(total)}`;
    const text = `${encodeURIComponent(header)}%0A%0A${encodeURIComponent(itemsTxt)}%0A%0A${encodeURIComponent(info)}%0A%0A${encodeURIComponent(totals)}`;
    return `https://wa.me/${whatsappNumber.replace(/\\D/g, "")}\\n?text=${text}`;
  }

  async function submitOrder() {
    if (!valid) return;
    setSending(true);
    try {
      await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          customer: { ...customer, deliveryMode },
          items: lines.map(l => ({ id: l.product.id, name: l.product.name, price: l.product.price, qty: l.qty })),
          subtotal, deliveryFee, total, currency: CURRENCY,
          source: "web-mvp",
        }),
      }).catch(() => {});

      const url = buildWhatsAppMessage();
      window.open(url, "_blank");
      clear();
      setCartOpen(false);
      alert("Commande envoyée ! Un récapitulatif s'ouvre dans WhatsApp.");
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Package className="w-7 h-7" />
            <div>
              <h1 className="text-xl font-bold">NK Agricole — Boutique</h1>
              <p className="text-xs text-gray-500">Commande en ligne · Côte d'Ivoire & Europe</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center rounded-full bg-gray-100 px-3 py-2">
              <Filter className="w-4 h-4 mr-2 text-gray-500" />
              <select className="bg-transparent focus:outline-none" value={category} onChange={e => setCategory(e.target.value)}>
                {categories.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
            <input
              placeholder="Rechercher un produit..."
              className="hidden md:block border rounded-full px-4 py-2 focus:outline-none"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <button onClick={() => setCartOpen(true)} className="relative inline-flex items-center gap-2 rounded-full px-4 py-2 bg-black text-white">
              <ShoppingCart className="w-4 h-4" />
              Panier
              {count > 0 && (
                <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full w-6 h-6 grid place-items-center">{count}</span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="md:hidden bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-2 gap-2">
          <select className="border rounded-lg px-3 py-2" value={category} onChange={e => setCategory(e.target.value)}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <input
            placeholder="Rechercher..."
            className="border rounded-lg px-3 py-2"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(p => (
            <motion.div key={p.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl shadow-sm border overflow-hidden">
              <div className="aspect-video bg-gray-100">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 space-y-2">
                <h3 className="font-semibold leading-tight">{p.name}</h3>
                <p className="text-sm text-gray-500">{p.category} · {p.unit}</p>
                <p className="font-bold">{formatMoney(p.price)}</p>
                <div className="flex items-center gap-2 pt-2">
                  <button onClick={() => add(p.id, 1)} className="flex-1 rounded-xl bg-black text-white py-2">Ajouter</button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 py-6 grid md:grid-cols-3 gap-4 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> WhatsApp: +33 6 41 38 42 48</p>
            <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> Email: contact@nka.ci</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Livraison & Retrait</h4>
            <p className="flex items-center gap-2"><Truck className="w-4 h-4" /> Livraison à Abidjan (frais variables)</p>
            <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Retrait au dépôt (Anyama)</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Mentions</h4>
            <p>Prix en {CURRENCY} (XOF). Photos d'illustration.</p>
          </div>
        </div>
      </footer>

      <AnimatePresence>
        {cartOpen && (
          <motion.aside initial={{ x: 400 }} animate={{ x: 0 }} exit={{ x: 400 }} className="fixed top-0 right-0 h-full w-full sm:w-[480px] bg-white shadow-2xl z-50">
            <div className="h-full flex flex-col">
              <div className="px-4 py-3 border-b flex items-center justify-between">
                <h3 className="font-semibold flex items-center gap-2"><ShoppingCart className="w-4 h-4" /> Mon panier</h3>
                <button onClick={() => setCartOpen(false)} className="p-2 rounded-full hover:bg-gray-100"><X className="w-5 h-5" /></button>
              </div>

              <div className="flex-1 overflow-auto px-4 py-4 space-y-4">
                {lines.length === 0 && (
                  <p className="text-sm text-gray-500">Votre panier est vide.</p>
                )}
                {lines.map(({ product, qty }) => (
                  <div key={product.id} className="border rounded-xl p-3 flex gap-3">
                    <img src={product.image} alt={product.name} className="w-16 h-16 rounded-lg object-cover" />
                    <div className="flex-1">
                      <div className="font-medium leading-tight">{product.name}</div>
                      <div className="text-xs text-gray-500">{product.unit} · {product.category}</div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button onClick={() => setQty(product.id, Math.max(1, qty - 1))} className="p-1 rounded-lg border"><Minus className="w-4 h-4" /></button>
                          <span className="w-8 text-center">{qty}</span>
                          <button onClick={() => setQty(product.id, qty + 1)} className="p-1 rounded-lg border"><Plus className="w-4 h-4" /></button>
                        </div>
                        <div className="text-right">
                          <div className="font-semibold">{formatMoney(product.price * qty)}</div>
                          <button onClick={() => remove(product.id)} className="text-xs text-red-600 inline-flex items-center gap-1 mt-1"><Trash2 className="w-3 h-3" /> Retirer</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t p-4 space-y-3">
                <div className="flex items-center justify-between text-sm"><span>Sous-total</span><span className="font-semibold">{formatMoney(subtotal)}</span></div>

                <div className="grid grid-cols-2 gap-2 text-sm">
                  <button onClick={() => setDeliveryMode("livraison")} className={`border rounded-xl px-3 py-2 flex items-center justify-center gap-2 ${deliveryMode === "livraison" ? "bg-black text-white" : "bg-white"}`}>
                    <Truck className="w-4 h-4" /> Livraison
                  </button>
                  <button onClick={() => setDeliveryMode("retrait")} className={`border rounded-xl px-3 py-2 flex items-center justify-center gap-2 ${deliveryMode === "retrait" ? "bg-black text-white" : "bg-white"}`}>
                    <MapPin className="w-4 h-4" /> Retrait
                  </button>
                </div>

                <div className="text-sm flex items-center justify-between">
                  <span>Frais {deliveryMode === "livraison" ? "de livraison" : "de retrait"}</span>
                  <span className="font-semibold">{formatMoney(deliveryFee)}</span>
                </div>

                <div className="flex items-center justify-between text-base">
                  <span className="font-semibold">Total</span>
                  <span className="font-extrabold">{formatMoney(total)}</span>
                </div>

                <div className="grid gap-2">
                  <input className="border rounded-lg px-3 py-2" placeholder="Nom complet" value={customer.name} onChange={e => setCustomer({ ...customer, name: e.target.value })} />
                  <input className="border rounded-lg px-3 py-2" placeholder="Téléphone" value={customer.phone} onChange={e => setCustomer({ ...customer, phone: e.target.value })} />
                  <input className="border rounded-lg px-3 py-2" placeholder="Email (optionnel)" value={customer.email} onChange={e => setCustomer({ ...customer, email: e.target.value })} />
                  {deliveryMode === "livraison" && (
                    <input className="border rounded-lg px-3 py-2" placeholder="Adresse de livraison" value={customer.address} onChange={e => setCustomer({ ...customer, address: e.target.value })} />
                  )}
                  <textarea className="border rounded-lg px-3 py-2" placeholder="Note (ex: accès, étage, créneau)" value={customer.note} onChange={e => setCustomer({ ...customer, note: e.target.value })} />
                </div>

                <button disabled={!valid || sending} onClick={submitOrder} className="w-full rounded-xl bg-black text-white py-3 font-semibold disabled:opacity-50">
                  {sending ? "Envoi..." : `Valider la commande (${count} article${count>1?"s":""})`}
                </button>

                <p className="text-[11px] text-gray-500 text-center">En validant, vous recevrez un récapitulatif par WhatsApp. Paiement: espèces, Mobile Money, ou virement.</p>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </div>
  );
}
