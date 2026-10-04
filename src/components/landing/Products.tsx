'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  Plus, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  X, 
  Star, 
  Image as ImageIcon,
  CheckCircle2,
  Trash2,
  RotateCcw
} from 'lucide-react';
import { Product, initialProducts } from '@/data/products';

export default function Products() {
  const [products, setProducts] = useState<Product[]>(initialProducts);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  // Form State for Adding New Product
  const [formData, setFormData] = useState({
    name: '',
    category: 'Skincare' as 'Skincare' | 'Room Decor' | 'Bundles',
    price: '',
    originalPrice: '',
    activeIngredient: '',
    badge: '100% CLEAN BIO-ASSAY',
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80',
  });

  // Preset image suggestions for quick selection
  const presetImages = [
    { label: 'Green Glass Bottle', url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Amber Skincare Mist', url: 'https://images.unsplash.com/photo-1608248597359-0524458d34a4?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Ceramic Room Diffuser', url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Organic Cream Jar', url: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Botanical Plant & Clay', url: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=1000&q=80' },
    { label: 'Dorm Sanctuary Decor', url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1000&q=80' },
  ];

  // Load products from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('glow_products_catalog');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          requestAnimationFrame(() => {
            setProducts(parsed);
          });
        }
      }
    } catch {
      // LocalStorage fallback
    }
  }, []);

  const handleAddToCart = (productName: string) => {
    setCartCount((prev) => prev + 1);
    setAddedNotice(`Added "${productName}" to sanctuary bag`);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2800);
  };

  const handleCreateProduct = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.activeIngredient) return;

    const newProduct: Product = {
      id: `prod-${Date.now()}`,
      name: formData.name,
      category: formData.category,
      price: parseFloat(formData.price) || 20,
      originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : undefined,
      activeIngredient: formData.activeIngredient,
      badge: formData.badge || 'CAMPUS ADDITION',
      description: formData.description || 'Certified botanical product formulated for campus living.',
      imageUrl: formData.imageUrl,
      rating: 5.0,
      reviewCount: 1,
      isCampusFavorite: false,
    };

    const updated = [newProduct, ...products];
    setProducts(updated);
    try {
      localStorage.setItem('glow_products_catalog', JSON.stringify(updated));
    } catch {
      // LocalStorage fallback
    }

    // Reset Form & Close Modal
    setFormData({
      name: '',
      category: 'Skincare',
      price: '',
      originalPrice: '',
      activeIngredient: '',
      badge: '100% CLEAN BIO-ASSAY',
      description: '',
      imageUrl: presetImages[0].url,
    });
    setIsModalOpen(false);
    setAddedNotice(`Product "${newProduct.name}" created and published!`);
    setTimeout(() => setAddedNotice(null), 3500);
  };

  const handleResetCatalog = () => {
    if (confirm('Reset catalog to the default 6 curated products?')) {
      setProducts(initialProducts);
      localStorage.removeItem('glow_products_catalog');
    }
  };

  const handleDeleteProduct = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const updated = products.filter((p) => p.id !== id);
    setProducts(updated);
    localStorage.setItem('glow_products_catalog', JSON.stringify(updated));
  };

  const filteredProducts = activeCategory === 'All'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <section id="products" className="w-full py-28 px-6 sm:px-12 md:px-20 bg-[#F4F2EC] relative">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        
        {/* Floating Notification Toast */}
        {addedNotice && (
          <div className="fixed bottom-8 right-6 z-50 bg-[#141A17] text-white px-5 py-3.5 rounded-full shadow-2xl border border-[#D49B4B]/30 flex items-center gap-3 animate-in fade-in slide-in-from-bottom-5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="text-xs sm:text-sm font-medium">{addedNotice}</span>
          </div>
        )}

        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#2E4036]/15 pb-8">
          <div>
            <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#CC5833] tracking-widest font-semibold mb-2">
              <span className="w-2 h-2 rounded-full bg-[#CC5833]" />
              THE BOTANICAL &amp; SANCTUARY COLLECTION
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#141A17] font-heading">
              Curated Campus Apothecary &amp; Decor
            </h2>
          </div>

          {/* Action Group */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Bag Counter */}
            <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white border border-[#2E4036]/15 text-xs font-mono-data text-[#141A17] shadow-sm">
              <ShoppingBag className="w-3.5 h-3.5 text-[#CC5833]" />
              <span>Bag: <strong className="text-[#CC5833]">{cartCount}</strong> items</span>
            </div>

            {/* Reset Catalog Button (if custom products added) */}
            {products.length !== initialProducts.length && (
              <button
                onClick={handleResetCatalog}
                title="Reset to default collection"
                className="p-2.5 rounded-full bg-white border border-[#2E4036]/15 text-[#141A17]/60 hover:text-[#CC5833] hover:border-[#CC5833] transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}

            {/* Add New Product Trigger Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="btn-magnetic px-6 py-3 bg-[#2E4036] text-white text-xs uppercase font-semibold tracking-wider shadow-lg rounded-full group"
            >
              <span className="btn-slide-bg bg-[#CC5833]" />
              <span className="btn-magnetic-content flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Add New Product
              </span>
            </button>
          </div>
        </div>

        {/* Filter Categories Bar */}
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none">
            {['All', 'Skincare', 'Room Decor', 'Bundles'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-medium font-mono-data tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[#141A17] text-white shadow-md scale-105'
                    : 'bg-white/80 hover:bg-white text-[#141A17]/70 border border-[#2E4036]/10'
                }`}
              >
                {cat === 'All' ? 'All Catalog' : cat}
              </button>
            ))}
          </div>

          <div className="text-xs font-mono-data text-[#141A17]/50">
            Showing <strong>{filteredProducts.length}</strong> sanctuary items
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-[#FCFBF9] rounded-[2.5rem] border border-[#2E4036]/15 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col justify-between"
            >
              {/* Product Image & Badges */}
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#EAE8E0]">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay Badge */}
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-[#141A17]/85 backdrop-blur-md text-[10px] font-mono-data font-bold uppercase tracking-wider text-[#D49B4B] border border-white/10">
                    {product.badge}
                  </div>
                )}

                {/* Category Pill & Delete Button */}
                <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
                  <div className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-mono-data font-bold uppercase tracking-wider text-[#2E4036] shadow-sm">
                    {product.category}
                  </div>
                  {/* Delete button for custom additions */}
                  {product.id.startsWith('prod-') && parseInt(product.id.replace('prod-', ''), 10) > 10 && (
                    <button
                      onClick={(e) => handleDeleteProduct(product.id, e)}
                      title="Delete this product"
                      className="p-1.5 rounded-full bg-red-600/90 hover:bg-red-700 text-white shadow-sm transition-colors"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between gap-5">
                <div className="space-y-3">
                  {/* Rating & Review */}
                  <div className="flex items-center gap-2 text-xs font-mono-data text-[#141A17]/60">
                    <div className="flex items-center text-amber-500">
                      <Star className="w-3.5 h-3.5 fill-amber-500" />
                      <span className="font-bold ml-1 text-[#141A17]">{product.rating}</span>
                    </div>
                    <span>&bull;</span>
                    <span>{product.reviewCount} campus reviews</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold tracking-tight text-[#141A17] font-heading group-hover:text-[#CC5833] transition-colors line-clamp-2">
                    {product.name}
                  </h3>

                  {/* Botanical Active Ingredient Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#2E4036]/10 text-[11px] font-mono-data text-[#2E4036] font-semibold">
                    <Sparkles className="w-3 h-3 text-[#CC5833]" />
                    <span>{product.activeIngredient}</span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-[#141A17]/70 leading-relaxed line-clamp-2 font-light">
                    {product.description}
                  </p>
                </div>

                {/* Pricing & Add to Cart Action */}
                <div className="pt-4 border-t border-[#2E4036]/10 flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-black font-heading text-[#141A17]">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs font-mono-data text-[#141A17]/40 line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-[10px] font-mono-data text-emerald-700 uppercase block">
                      In Stock &bull; Quad Drop
                    </span>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product.name)}
                    className="btn-magnetic px-4 sm:px-5 py-2.5 bg-[#CC5833] text-white text-xs uppercase font-semibold tracking-wider rounded-full shadow-md group/btn"
                  >
                    <span className="btn-slide-bg bg-[#2E4036]" />
                    <span className="btn-magnetic-content flex items-center gap-1.5">
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* ========================================================
          ADD NEW PRODUCT MODAL (IN-PAGE PRODUCT STUDIO)
      ======================================================== */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-300">
          <div className="relative w-full max-w-2xl bg-[#FCFBF9] text-[#141A17] rounded-[2.5rem] border border-[#2E4036]/20 shadow-2xl p-6 sm:p-10 max-h-[90vh] overflow-y-auto">
            
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#141A17]/5 hover:bg-[#141A17]/10 text-[#141A17] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 font-mono-data text-xs uppercase text-[#CC5833] tracking-widest font-semibold mb-1">
                <Plus className="w-3.5 h-3.5" />
                PRODUCT CREATOR STUDIO
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-heading">
                Publish a New Sanctuary Product
              </h3>
              <p className="text-xs sm:text-sm text-[#141A17]/70 font-light mt-1">
                Fill in the product details to add it directly to your live website collection.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleCreateProduct} className="space-y-5">
              
              {/* Product Name */}
              <div>
                <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                  Product Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Lavender Botanical Night Elixir"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-sans"
                />
              </div>

              {/* Category & Badge */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                    Category *
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value as Product['category'] })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-mono-data"
                  >
                    <option value="Skincare">Skincare</option>
                    <option value="Room Decor">Room Decor</option>
                    <option value="Bundles">Bundles</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                    Certification / Badge Tag
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 100% ECO-CERTIFIED"
                    value={formData.badge}
                    onChange={(e) => setFormData({ ...formData, badge: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-mono-data"
                  />
                </div>
              </div>

              {/* Price & Original Price */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                    Price ($ USD) *
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    required
                    placeholder="24.00"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-mono-data"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                    Original Price ($ USD) (Optional)
                  </label>
                  <input
                    type="number"
                    step="0.01"
                    placeholder="32.00"
                    value={formData.originalPrice}
                    onChange={(e) => setFormData({ ...formData, originalPrice: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-mono-data"
                  />
                </div>
              </div>

              {/* Active Ingredient / Highlight */}
              <div>
                <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                  Key Active Botanical Ingredient / Feature *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. French Lavender + Squalane Oil"
                  value={formData.activeIngredient}
                  onChange={(e) => setFormData({ ...formData, activeIngredient: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-sans"
                />
              </div>

              {/* Image URL & Quick Presets */}
              <div>
                <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                  Product Image URL
                </label>
                <input
                  type="url"
                  placeholder="https://..."
                  value={formData.imageUrl}
                  onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-xs focus:outline-none focus:border-[#CC5833] shadow-sm font-mono-data mb-2"
                />
                
                {/* Presets selector */}
                <span className="text-[11px] font-mono-data text-[#141A17]/60 block mb-2">
                  Or pick a curated botanical photo preset:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {presetImages.map((preset, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={() => setFormData({ ...formData, imageUrl: preset.url })}
                      className={`text-left p-2 rounded-xl border text-[11px] font-mono-data flex items-center gap-2 transition-all ${
                        formData.imageUrl === preset.url
                          ? 'border-[#CC5833] bg-[#CC5833]/10 text-[#CC5833] font-bold'
                          : 'border-gray-200 bg-white text-[#141A17]/70 hover:border-gray-400'
                      }`}
                    >
                      <ImageIcon className="w-3 h-3 shrink-0" />
                      <span className="truncate">{preset.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono-data uppercase font-bold tracking-wider text-[#2E4036] mb-1.5">
                  Short Description
                </label>
                <textarea
                  rows={2}
                  placeholder="Describe how this product enhances student skin or living space..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-[#2E4036]/20 text-sm focus:outline-none focus:border-[#CC5833] shadow-sm font-sans"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider text-[#141A17]/70 hover:bg-[#141A17]/5 transition-colors font-mono-data"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn-magnetic px-8 py-3.5 bg-[#CC5833] text-white text-xs uppercase font-semibold tracking-wider rounded-full shadow-xl group"
                >
                  <span className="btn-slide-bg bg-[#2E4036]" />
                  <span className="btn-magnetic-content flex items-center gap-2">
                    <Check className="w-4 h-4" />
                    Publish to Website
                  </span>
                </button>
              </div>

            </form>

          </div>
        </div>
      )}

    </section>
  );
}
