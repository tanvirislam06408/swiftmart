"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Plus, 
  Search, 
  MapPin, 
  Clock, 
  Star, 
  Calendar,
  Eye, 
  Edit3, 
  Trash2, 
  ArrowLeft,
  X,
  SlidersHorizontal,
  Check,
  RotateCcw
} from "lucide-react";

interface Product {
  _id: string;
  title: string;
  shortDescription: string;
  description: string;
  price: number;
  rating: number;
  location: string;
  duration: string;
  category: string;
  availableDate: string;
  featured: boolean;
  image: string;
}

const INITIAL_PRODUCTS: Product[] = [
  {
    _id: "6a53598435a5be129bc14f2e",
    title: "Parisian Haute Couture Walk",
    shortDescription: "Step into the world of high fashion.",
    description: "Explore the legendary fashion houses of Paris, featuring exclusive access to private showrooms and couture archives. Walk the historic streets of the Rue du Faubourg Saint-Honoré, meet professional styling experts, and learn about the intricate craftsmanship behind world-renowned clothing lines.",
    price: 899,
    rating: 4.7,
    location: "Paris, France",
    duration: "2 Days",
    category: "Women",
    availableDate: "2026-09-01",
    featured: true,
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80"
  },
  {
    _id: "6a53598435a5be129bc14f2f",
    title: "Milan Fashion Week Backstage VIP",
    shortDescription: "Go behind the scenes of Milan's iconic runways.",
    description: "Get exclusive VIP backstage access to Milan Fashion Week. Meet renowned directors and designers, watch styling sessions live before the models walk, and secure front-row seats for three headline shows.",
    price: 1250,
    rating: 4.9,
    location: "Milan, Italy",
    duration: "3 Days",
    category: "Women",
    availableDate: "2026-09-15",
    featured: true,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80"
  },
  {
    _id: "6a53598435a5be129bc14f30",
    title: "Tokyo Streetwear Discovery",
    shortDescription: "Immerse in Harajuku and Shibuya street style culture.",
    description: "Guided tour through Tokyo's trendiest districts. Discover hidden indie designers, custom tailoring hubs, and iconic streetwear boutiques. Learn about Harajuku history and style subcultures directly from local designers.",
    price: 450,
    rating: 4.6,
    location: "Tokyo, Japan",
    duration: "1 Day",
    category: "Men",
    availableDate: "2026-10-05",
    featured: false,
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80"
  },
  {
    _id: "6a53598435a5be129bc14f31",
    title: "London Savile Row Tailoring",
    shortDescription: "Learn bespoke tailoring from Savile Row masters.",
    description: "An intensive hands-on masterclass on Savile Row, learning classic fabric selection, pattern design, measurement theory, and final assembly secrets from tailors who have dressed royalty.",
    price: 750,
    rating: 4.8,
    location: "London, UK",
    duration: "2 Days",
    category: "Men",
    availableDate: "2026-10-12",
    featured: true,
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&q=80"
  }
];

export default function MyProductsPage() {
  const [products, setProducts] = useState<Product[]>(INITIAL_PRODUCTS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  
  // Toast Notification state
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [deletedProduct, setDeletedProduct] = useState<Product | null>(null);

  // Edit Modal State
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const categories = ["All", "Women", "Men", "Accessories"];

  // Handle Search & Filtering
  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          product.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleDelete = (id: string) => {
    const itemToDelete = products.find(p => p._id === id);
    if (itemToDelete) {
      setDeletedProduct(itemToDelete);
      setProducts(prev => prev.filter(p => p._id !== id));
      showToast(`"${itemToDelete.title}" deleted.`);
    }
  };

  const handleUndoDelete = () => {
    if (deletedProduct) {
      setProducts(prev => [...prev, deletedProduct].sort((a, b) => a._id.localeCompare(b._id)));
      setDeletedProduct(null);
      showToast("Deletion undone.");
    }
  };

  const handleEditClick = (product: Product) => {
    setEditingProduct(product);
  };

  const handleEditSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProduct) return;
    
    setProducts(prev => prev.map(p => p._id === editingProduct._id ? editingProduct : p));
    showToast(`"${editingProduct.title}" updated.`);
    setEditingProduct(null);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-6 md:py-10 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-300">
      
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#0E1F2B] text-white px-5 py-3.5 rounded-2xl shadow-xl border border-teal-500/20 text-sm animate-in slide-in-from-bottom-5 duration-300">
          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#14B8A6] text-white">
            <Check size={12} strokeWidth={3} />
          </div>
          <span>{toastMessage}</span>
          {deletedProduct && toastMessage.includes("deleted") && (
            <button 
              onClick={handleUndoDelete}
              className="ml-2 px-2.5 py-1 rounded-md bg-white/10 hover:bg-white/20 text-xs font-bold text-teal-300 transition flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw size={12} /> Undo
            </button>
          )}
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-5">
        <div className="space-y-1">
          <Link 
            href="/dashboard/user" 
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#14B8A6] hover:text-[#0f9488] transition-colors mb-2"
          >
            <ArrowLeft size={14} /> Back to Dashboard
          </Link>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">My Listed Products</h1>
          <p className="text-gray-500 text-sm">Review, filter, edit, or remove your tour and experience listings.</p>
        </div>
        <Link 
          href="/dashboard/user/add-product"
          className="btn-primary self-start md:self-auto flex items-center gap-2 cursor-pointer shadow-md hover:shadow-lg"
        >
          <Plus size={16} /> Add Product
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between card-base p-4">
        {/* Search */}
        <div className="relative w-full sm:max-w-md">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by title or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full rounded-full border border-gray-200 pl-11 pr-4 py-2.5 text-sm outline-none transition focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
          />
        </div>

        {/* Category Pill Filters */}
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-none">
          <SlidersHorizontal size={14} className="text-gray-400 shrink-0 hidden md:block mr-1" />
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition whitespace-nowrap cursor-pointer ${
                selectedCategory === cat 
                  ? "bg-[#14B8A6] text-white shadow-sm" 
                  : "bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-100"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Product List/Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((prod) => (
            <div 
              key={prod._id} 
              className="card-base card-hover flex flex-col justify-between overflow-hidden border border-gray-100 hover:border-teal-500/20"
            >
              <div>
                {/* Image container */}
                <div className="relative aspect-video w-full bg-gray-50 overflow-hidden">
                  {prod.featured && (
                    <span className="absolute top-3 left-3 z-10 text-[9px] font-extrabold text-teal-900 uppercase tracking-widest bg-teal-300 px-2 py-0.5 rounded-full shadow-sm">
                      Featured
                    </span>
                  )}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={prod.image} 
                    alt={prod.title}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&q=80";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Details Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-400 font-medium">
                    <span className="bg-gray-50 border border-gray-100 px-2.5 py-0.5 rounded-md text-gray-600 font-bold uppercase tracking-wider text-[10px]">
                      {prod.category}
                    </span>
                    <span className="flex items-center gap-0.5 text-amber-500 font-bold">
                      <Star size={12} fill="currentColor" /> {prod.rating}
                    </span>
                  </div>

                  <h3 className="font-bold text-gray-900 text-base leading-snug line-clamp-1 group-hover:text-[#14B8A6]">
                    {prod.title}
                  </h3>
                  
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {prod.shortDescription}
                  </p>

                  <div className="flex flex-wrap gap-y-1 gap-x-3 text-xs text-gray-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} className="text-gray-400" /> {prod.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} className="text-gray-400" /> {prod.duration}
                    </span>
                  </div>
                </div>
              </div>

              {/* Footer pricing and actions */}
              <div className="px-5 pb-5 pt-3 border-t border-gray-50 flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider">Price</span>
                  <span className="text-lg font-black text-gray-900">${prod.price}</span>
                </div>

                <div className="flex items-center gap-1">
                  <button 
                    onClick={() => setSelectedProduct(prod)}
                    title="View Details"
                    className="p-2 text-gray-400 hover:text-[#14B8A6] hover:bg-teal-50 rounded-xl transition cursor-pointer"
                  >
                    <Eye size={16} />
                  </button>
                  <button 
                    onClick={() => handleEditClick(prod)}
                    title="Edit Item"
                    className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl transition cursor-pointer"
                  >
                    <Edit3 size={16} />
                  </button>
                  <button 
                    onClick={() => handleDelete(prod._id)}
                    title="Delete Item"
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition cursor-pointer"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="card-base p-12 text-center max-w-md mx-auto space-y-4">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gray-50 border border-gray-100 text-gray-400">
            <Search size={20} />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-gray-800">No products found</h3>
            <p className="text-xs text-gray-500">We couldn't find any products matching your filters.</p>
          </div>
          <button 
            onClick={() => { setSearchTerm(""); setSelectedCategory("All"); }}
            className="btn-outline px-4 py-2 text-xs"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* VIEW DETAILS MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200">
            {/* Close button */}
            <button 
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition cursor-pointer"
            >
              <X size={16} />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-video w-full bg-gray-100">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={selectedProduct.image} 
                alt={selectedProduct.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="bg-teal-500 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                  {selectedProduct.category}
                </span>
                <h2 className="text-xl md:text-2xl font-black mt-2 leading-snug">{selectedProduct.title}</h2>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 md:p-8 space-y-6">
              {/* Badges / Quick stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center">
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Rating</span>
                  <span className="text-sm font-extrabold text-amber-500 flex items-center gap-0.5 justify-center">
                    <Star size={14} fill="currentColor" /> {selectedProduct.rating}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Price</span>
                  <span className="text-sm font-extrabold text-gray-900">${selectedProduct.price}</span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Location</span>
                  <span className="text-sm font-extrabold text-gray-800 flex items-center gap-0.5 justify-center truncate">
                    <MapPin size={14} className="text-teal-500 shrink-0" /> {selectedProduct.location.split(",")[0]}
                  </span>
                </div>
                <div>
                  <span className="text-[10px] text-gray-400 font-bold block uppercase tracking-wider mb-0.5">Duration</span>
                  <span className="text-sm font-extrabold text-gray-800 flex items-center gap-0.5 justify-center">
                    <Clock size={14} className="text-teal-500" /> {selectedProduct.duration}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest">About the Experience</h4>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">{selectedProduct.description}</p>
              </div>

              {/* Date */}
              <div className="flex items-center gap-2 text-sm text-gray-500 bg-teal-50/50 border border-teal-500/10 p-3.5 rounded-xl">
                <Calendar size={16} className="text-[#14B8A6]" />
                <span className="font-semibold text-gray-700">Next Available Slot:</span>
                <span className="font-medium text-[#14B8A6]">
                  {new Date(selectedProduct.availableDate).toLocaleDateString("en-US", {
                    year: "numeric", month: "long", day: "numeric"
                  })}
                </span>
              </div>

              {/* Footer buttons */}
              <div className="pt-4 border-t border-gray-50 flex justify-end gap-3">
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="btn-outline px-5 py-2 text-xs"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* EDIT MODAL */}
      {editingProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <form 
            onSubmit={handleEditSave}
            className="relative w-full max-w-lg bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100 max-h-[90vh] overflow-y-auto animate-in zoom-in-95 duration-200"
          >
            {/* Close button */}
            <button 
              type="button"
              onClick={() => setEditingProduct(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 transition cursor-pointer"
            >
              <X size={16} />
            </button>

            <div className="p-6 md:p-8 space-y-6">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-50 pb-3">Edit Product</h2>

              <div className="space-y-4">
                {/* Title */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase">Title</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.title}
                    onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, title: e.target.value }) : null)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                  />
                </div>

                {/* Short Description */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-500 uppercase">Short Description</label>
                  <input
                    type="text"
                    required
                    value={editingProduct.shortDescription}
                    onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, shortDescription: e.target.value }) : null)}
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Price */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Price ($)</label>
                    <input
                      type="number"
                      required
                      value={editingProduct.price}
                      onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, price: Number(e.target.value) }) : null)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Location</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.location}
                      onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, location: e.target.value }) : null)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Duration */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Duration</label>
                    <input
                      type="text"
                      required
                      value={editingProduct.duration}
                      onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, duration: e.target.value }) : null)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                    />
                  </div>

                  {/* Available Date */}
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-gray-500 uppercase">Available Date</label>
                    <input
                      type="date"
                      required
                      value={editingProduct.availableDate}
                      onChange={(e) => setEditingProduct(prev => prev ? ({ ...prev, availableDate: e.target.value }) : null)}
                      className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-[#14B8A6] focus:ring-2 focus:ring-[#14B8A6]/10"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-50 flex justify-end gap-3">
                <button 
                  type="button"
                  onClick={() => setEditingProduct(null)}
                  className="btn-outline px-4 py-2 text-xs cursor-pointer"
                >
                  Cancel
                </button>
                <button 
                  type="submit"
                  className="btn-primary px-5 py-2 text-xs cursor-pointer"
                >
                  Save Changes
                </button>
              </div>
            </div>
          </form>
        </div>
      )}

    </div>
  );
}
