import React, { useState, useEffect } from 'react'
import { 
  Search, 
  ShoppingBag, 
  User, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  FlaskConical, 
  Brain, 
  Sprout, 
  Star, 
  X, 
  ArrowUpRight, 
  Sparkles, 
  Zap, 
  ShieldCheck, 
  Microscope, 
  Plus,
  Minus,
  Dna,
  HeartPulse,
  Leaf,
  ChevronRight,
  Menu,
  Truck,
  RotateCcw,
  Share2,
  ChevronLeft
} from 'lucide-react'

// Custom Toast Component
const Toast = ({ message, onClose }) => (
  <div className="fixed bottom-6 right-4 left-4 md:left-auto md:right-8 z-[200] bg-primary text-on-primary px-8 py-4 rounded-2xl shadow-2xl animate-fade-in-up flex items-center justify-between gap-2 md:gap-4 backdrop-blur-xl border border-white/20">
    <div className="flex items-center gap-3">
      <Sparkles className="w-5 h-5 shrink-0" />
      <span className="font-bold text-xs md:text-base leading-tight uppercase">{message}</span>
    </div>
    <button onClick={onClose} className="opacity-50 hover:opacity-100 transition-opacity"><X size={16} /></button>
  </div>
);

const Navbar = ({ onAction, cartCount, openCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-surface-bright/80 backdrop-blur-xl border-b border-surface-container py-1 transition-all duration-300">
      <div className="flex justify-between items-center px-4 md:px-8 py-3.5 max-w-7xl mx-auto relative text-left">
        <div className="flex items-center gap-4 md:gap-6">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden text-primary transition-all active:scale-95">
            <Menu className="w-6 h-6" />
          </button>
          <a className="text-xl md:text-2xl font-bold text-[#b70049] hover:scale-105 transition-transform" href="/" onClick={(e) => { e.preventDefault(); onAction('Home'); }}>
            R.N. Foods
          </a>
          <div className="hidden lg:flex items-center space-x-8">
            {['Shop All', 'Best Sellers', 'The Lab', 'Sustainability'].map(item => (
              <a key={item} className="text-[#4a2134] hover:text-[#b70049] transition-all font-bold text-[10px] uppercase relative group" href="#" onClick={(e) => { e.preventDefault(); onAction(item); }}>
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-2 md:space-x-4">
          <div className="relative hidden sm:block">
             <div className="bg-surface-container-highest rounded-full px-5 py-2 flex items-center gap-2 group focus-within:ring-2 ring-primary/20 transition-all border border-transparent">
                <Search className="text-secondary w-4 h-4" />
                <input className="bg-transparent border-none text-xs w-28 md:w-36 font-bold placeholder:text-on-surface-variant outline-none uppercase" placeholder="Search data..." type="text" />
             </div>
          </div>
          <button onClick={() => onAction('Account')} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-all text-[#4a2134]">
            <User className="w-5 h-5" />
          </button>
          <button onClick={openCart} className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-surface-container-low transition-all text-[#4a2134] relative">
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-0 -right-0 bg-primary text-on-primary text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-bold animate-bounce shadow-lg ring-2 ring-white">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className={`lg:hidden bg-surface-bright/95 backdrop-blur-xl transition-all duration-500 overflow-hidden border-b border-surface-container ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-5 py-6 md:py-12 flex flex-col gap-3 md:gap-6 font-bold text-xl text-left uppercase">
          {['Shop All', 'Best Sellers', 'The Lab', 'Sustainability'].map(item => (
            <a key={item} href="#" onClick={(e) => { e.preventDefault(); onAction(item); setIsMenuOpen(false); }} className="text-[#4a2134] hover:text-[#b70049] transition-colors">{item}</a>
          ))}
        </div>
      </div>
    </nav>
  )
}

const QuickViewModal = ({ product, isOpen, onClose, addToCart, setIsCartOpen, showToast }) => {
  if (!product) return null;

  return (
    <>
      <div className={`fixed inset-0 bg-black/70 backdrop-blur-md z-[150] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed top-0 md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[95%] max-w-5xl h-full md:h-auto md:max-h-[90vh] bg-surface-bright md:rounded-[2.5rem] z-[160] shadow-4xl overflow-hidden transition-all duration-500 transform ${isOpen ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-full md:translate-y-[-45%] scale-100 md:scale-95 opacity-0 pointer-events-none'} flex flex-col shadow-2xl`}>
        
        {/* Mobile Header (Meesho Style) */}
        <div className="md:hidden flex items-center justify-between p-3 md:p-4 bg-white border-b border-black/5 sticky top-0 z-50 h-14">
           <button onClick={onClose} className="p-3 hover:bg-black/5 rounded-full transition-colors active:scale-90 text-on-surface flex items-center justify-center"><ChevronLeft size={28} /></button>
           <h3 className="text-[10px] font-bold uppercase truncate px-4 flex-grow text-center">{product.name}</h3>
           <div className="flex gap-2 md:gap-4">
              <button onClick={() => showToast('Link Copied!')} className="p-2 hover:bg-black/5 rounded-full"><Share2 size={20} className="text-on-surface-variant" /></button>
              <button onClick={() => { onClose(); setIsCartOpen(true); }} className="p-2 hover:bg-black/5 rounded-full"><ShoppingBag size={20} className="text-on-surface-variant" /></button>
           </div>
        </div>

        <div className="flex-grow overflow-y-auto flex flex-col md:flex-row pb-20 md:pb-12 scrollbar-hide bg-[#f0f1f4] md:bg-white">
          {/* Scientific Imagery */}
          <div className="w-full md:w-1/2 h-[450px] md:h-auto relative bg-white flex-none">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
            <div className="absolute top-4 left-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full flex items-center gap-2 border border-white/40 shadow-sm">
                <FlaskConical size={12} className="text-primary" />
                <span className="text-[9px] font-bold uppercase">Lab-Verified Batch</span>
            </div>
            <button onClick={onClose} className="hidden md:flex absolute top-6 right-6 w-11 h-11 bg-white hover:bg-primary hover:text-white rounded-full items-center justify-center transition-all shadow-xl group"><X size={24} className="group-hover:rotate-90 transition-transform"/></button>
          </div>

          {/* Clinical Specification (Meesho Density) */}
          <div className="w-full md:w-1/2 flex flex-col pt-3 md:p-6 space-y-2 md:space-y-3">
             
             {/* Main Info Card */}
             <div className="bg-white p-5 md:p-0 md:bg-transparent shadow-sm md:shadow-none text-left">
                <div className="flex justify-between items-start mb-2 md:mb-4">
                   <div className="space-y-1">
                      <p className="text-[10px] font-bold text-secondary uppercase border-l-2 border-primary pl-3">Protocol Alpha-1</p>
                      <h2 className="text-2xl md:text-4xl font-bold text-on-surface uppercase leading-none">{product.name}</h2>
                   </div>
                   <button onClick={() => showToast('Link Copied!')} className="hidden md:block p-3 hover:bg-black/5 rounded-full transition-all"><Share2 size={20}/></button>
                </div>
                
                <div className="flex items-center gap-2 md:gap-4 mb-4 md:mb-6">
                   <div className="flex flex-col">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl md:text-5xl font-bold text-primary">${product.price}</span>
                        {product.oldPrice && (
                          <div className="flex items-center gap-2">
                             <span className="text-sm md:text-lg text-on-surface-variant line-through opacity-30">${product.oldPrice}</span>
                             <span className="bg-[#25a541]/10 text-[#25a541] px-2 py-0.5 rounded font-bold text-[10px] md:text-xs">
                               {Math.round((1 - product.price/product.oldPrice) * 100)}% RELIEF
                             </span>
                          </div>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 mt-2 bg-tertiary-container/30 w-fit px-3 py-1 rounded-full border border-tertiary-fixed/10">
                         <Star size={14} className="fill-tertiary-fixed text-tertiary-fixed" />
                         <span className="text-[11px] font-bold text-on-surface">{product.rating} <span className="opacity-40 ml-1 text-[10px] uppercase font-bold">{product.reviews} Lab Logs</span></span>
                      </div>
                   </div>
                </div>

                <div className="flex items-center gap-2 bg-[#eaf7ed] px-3 py-2 rounded-xl w-fit border border-[#25a541]/10 shadow-sm">
                   <Truck size={16} className="text-[#25a541]" />
                   <span className="text-[10px] font-bold uppercase text-[#25a541]">Sterile Priority Shipping: FREE</span>
                </div>
             </div>

             {/* Bio-Sync Selection */}
             <div className="bg-white p-5 md:p-6 shadow-sm md:shadow-none text-left">
                <h4 className="text-[10px] font-bold text-on-surface-variant uppercase mb-2 md:mb-4">Clinical Formulation (Qty)</h4>
                <div className="flex flex-wrap gap-3">
                   {['Concentrate-X', 'Standard-B', 'Micro-Dose'].map(v => (
                     <button key={v} className={`flex-1 min-w-[120px] py-4 rounded-xl font-bold text-[10px] uppercase border transition-all ${v === 'Standard-B' ? 'border-primary bg-primary/5 text-primary shadow-lg ring-2 ring-primary/5' : 'border-black/5 text-on-surface/40 hover:border-black/20'}`}>
                       {v}
                     </button>
                   ))}
                </div>
             </div>

             {/* Molecular Specs (Meesho List Style) */}
             <div className="bg-white p-5 md:p-6 shadow-sm md:shadow-none text-left flex-grow">
                <div className="flex items-center justify-between mb-4 md:mb-6 group cursor-pointer border-b border-black/5 pb-4">
                   <h4 className="text-xs font-bold uppercase text-primary">Molecular Specs</h4>
                   <ChevronRight size={20} className="text-on-surface-variant group-hover:translate-x-1 transition-transform" />
                </div>
                <div className="grid grid-cols-1 gap-3 md:gap-5">
                   {[
                     { l:"Extraction", v:"Cold-Press Molecular", i: <Zap size={14} className="text-primary"/> },
                     { l:"Bio-Sync", v:"Validated Active Sync", i: <Dna size={14} className="text-secondary"/> },
                     { l:"Integrity", v:"100% Raw Bio-Structure", i: <ShieldCheck size={14} className="text-tertiary-fixed"/> },
                     { l:"Shelf Stability", v:"Therapeutic Peak 18mo", i: <FlaskConical size={14} className="text-primary"/> }
                   ].map(d => (
                     <div key={d.l} className="flex items-center gap-2 md:gap-4 text-[11px] font-bold border-b border-black/10 pb-3">
                        <div className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 shadow-inner">{d.i}</div>
                        <div className="flex flex-col">
                           <span className="text-[9px] text-on-surface-variant uppercase opacity-40 mb-0.5">{d.l}</span>
                           <span className="text-on-surface uppercase">{d.v}</span>
                        </div>
                     </div>
                   ))}
                </div>
             </div>

             {/* Clinical Trust Markers */}
             <div className="bg-white p-5 md:p-6 shadow-sm md:shadow-none grid grid-cols-2 gap-2 md:gap-4">
                <div className="flex items-center gap-3 p-3 md:p-4 bg-primary/5 rounded-2xl border border-primary/10">
                   <RotateCcw size={20} className="text-primary" />
                   <div className="text-left">
                      <div className="text-[10px] font-bold uppercase leading-none mb-1">7 Days</div>
                      <div className="text-[9px] font-bold text-on-surface-variant opacity-60 leading-none">Returns Policy</div>
                   </div>
                </div>
                <div className="flex items-center gap-3 p-3 md:p-4 bg-secondary/5 rounded-2xl border border-secondary/10">
                   <ShieldCheck size={20} className="text-secondary" />
                   <div className="text-left">
                      <div className="text-[10px] font-bold uppercase leading-none mb-1">Verified</div>
                      <div className="text-[9px] font-bold text-on-surface-variant opacity-60 leading-none">Batch Purity</div>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Sticky Action Footer */}
        <div className="absolute bottom-0 left-0 w-full p-4 md:p-6 bg-white/95 backdrop-blur-xl border-t border-black/5 flex gap-2 md:gap-4 z-40 shadow-2xl-up">
           <button 
             onClick={() => addToCart(product)}
             className="flex-1 py-4 md:py-12 border-2 border-primary text-primary font-bold rounded-2xl uppercase text-[10px] md:text-sm flex items-center justify-center gap-3 hover:bg-primary/5 active:scale-95 transition-all shadow-lg"
           >
              Add to Capsule <ShoppingBag className="w-5 h-5 md:w-6 md:h-6" />
           </button>
           <button 
             onClick={() => { addToCart(product); alert('Initiating Secure Checkout...'); }}
             className="flex-[1.2] py-4 md:py-12 bg-primary text-on-primary font-bold rounded-2xl uppercase text-[10px] md:text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(183,0,73,0.4)] hover:brightness-110 active:scale-95 transition-all"
           >
              Secure Buy Now <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
           </button>
        </div>
      </div>
    </>
  );
};

const CartDrawer = ({ isOpen, onClose, cart, updateQuantity, removeFromCart }) => {
  const total = cart.reduce((sum, item) => sum + parseFloat(item.price) * item.quantity, 0).toFixed(2);

  return (
    <div className={`fixed inset-0 z-[210] transition-all duration-500 ${isOpen ? 'visible' : 'invisible'}`}>
      <div className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={onClose} />
      <div className={`absolute right-0 top-0 h-full w-full sm:w-[450px] bg-white text-on-surface shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-6 md:p-6 flex justify-between items-center border-b border-surface-container shadow-sm">
          <div className="flex items-center gap-3">
            <ShoppingBag className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold uppercase">The Capsule</h2>
            <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-bold animate-pulse">
              {cart.reduce((sum, item) => sum + item.quantity, 0)} ITEMS
            </span>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-surface-container rounded-full transition-colors active:scale-90"><X size={24} /></button>
        </div>

        <div className="flex-grow overflow-y-auto p-6 md:p-6 scrollbar-hide space-y-3 md:space-y-6">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-2 md:space-y-6 opacity-30">
              <Sprout size={80} strokeWidth={1} className="animate-bounce" />
              <p className="font-bold text-xl uppercase leading-none">Your Capsule is Empty</p>
              <button onClick={onClose} className="text-primary font-bold uppercase text-sm border-b-2 border-primary pb-1">Begin Scientific Intake</button>
            </div>
          ) : (
            cart.map((item, idx) => (
              <div key={idx} className="flex gap-3 md:gap-6 group animate-fade-in-up border-b border-black/5 pb-8 last:border-0">
                <div className="w-24 h-24 md:w-28 md:h-28 bg-surface-container rounded-2xl overflow-hidden shrink-0 shadow-lg border border-primary/5">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={item.image} alt={item.name} />
                </div>
                <div className="flex-grow text-left flex flex-col justify-between py-1">
                  <div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-bold text-sm md:text-base leading-tight uppercase">{item.name}</h4>
                      <button onClick={() => removeFromCart(item.name)} className="text-on-surface-variant hover:text-red-500 p-1 transition-all active:scale-90"><X size={16} /></button>
                    </div>
                    <p className="text-secondary font-bold text-xs md:text-sm uppercase opacity-60">${item.price}</p>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center bg-surface-container-highest rounded-full p-1 border border-primary/5 ring-1 ring-black/5">
                      <button onClick={() => updateQuantity(item.name, -1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-all active:scale-90"><Minus size={14} /></button>
                      <span className="w-8 text-center font-bold text-xs">{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.name, 1)} className="w-8 h-8 flex items-center justify-center hover:bg-white rounded-full transition-all active:scale-90"><Plus size={14} /></button>
                    </div>
                    <p className="font-bold text-sm md:text-base text-on-surface">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="p-6 md:p-6 bg-surface-container-low border-t border-surface-container shadow-2xl-up">
            <div className="flex justify-between items-center mb-4 md:mb-6">
              <span className="font-bold text-xs md:text-sm uppercase opacity-40">Clinical Subtotal</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">${total}</span>
            </div>
            <button 
              onClick={() => alert('Proceeding to Multi-Secure Checkout...')}
              className="w-full bg-primary text-on-primary py-5 rounded-2xl font-bold text-sm md:text-base uppercase shadow-[0_20px_40px_-5px_rgba(183,0,73,0.4)] hover:brightness-110 transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              Finalize Intake <ArrowRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [toasts, setToasts] = useState([]);

  useEffect(() => {
    if (isCartOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, selectedProduct]);

  const showToast = (message) => {
    const id = Date.now();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 4000);
  };

  const handleAction = (action) => {
    showToast(`${action} logic soon`);
  };

  const addToCart = (product) => {
    setCart(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => 
          item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added to scientific intake`);
  };

  const updateQuantity = (name, delta) => {
    setCart(prev => prev.map(item => {
      if (item.name === name) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeFromCart = (name) => {
    setCart(prev => prev.filter(item => item.name !== name));
    showToast(`Removed from capsule`);
  };

  const trendingProducts = [
    { name:"Bio-Active Quinoa", price:"28.00", oldPrice:"36.00", rating:"4.9", reviews:"1.2k", image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDtU3-_rhsTCksNFF99TWdHh_BhsfcVQleNqXQMrWA3u1iDyPN4XUwMLUBwBPS5E6sV6ID0dssNw448enMUP9rMV5uR_FAl3fvCKDwItR6EKDm1zZ-YrZmQc21OOXOz0dShsXAy7xJYCRr48c1QnnEH8qmaSQTXzkzq97IWP3cWY8YVVpPsEpS1BFA4F0St-vNcS2kvAinzRSgZ0B1EJB6QSXqLgqGO7K-SF-ty8Zu_RqY9jiSdwZ2k12tDZMw_rM3dHmV5b9hXFA9x" },
    { name:"Ancient Black Rice", price:"24.50", rating:"5.0", reviews:"840", image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk" },
    { name:"Vibrant Amaranth", price:"19.00", oldPrice:"24.00", rating:"4.8", reviews:"420", image:"https://lh3.googleusercontent.com/aida-public/AB6AXuA2SEphSl0RAY0gzgJ9vMpP6h56PTgWCJI3IECvAFlL3l5L-AVGB1mZR5hz8qBHI06cb4DqkafD_dzpzvh7CVrQdizB7NA4nSP494eU_uhCH5O_GrRvQMe0gIQPxCssGXrTWEmZyIVoyfi69jiKVmdWqKNricmQUyAfQB7hpLqlkWPHRqZaETbrV1O3Gcn92vMFVINKMR_X1qoHLFB1KSMndFREWY2bExwiLXUwOqwUwaF7RifaAAE4pSorBLC9pZMTzUSzx1-Hd_yu" },
    { name:"Botanist Spelt", price:"22.50", rating:"4.7", reviews:"310", image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDfozOejP8HE02IBTGhDbgy83AnAIDQwfRQvXJuXXKOG7Trs0Puo5yhj5sQEZD6W8YrTkQdQn2OvZSVn2YupuSiqpZMXn65WqdIFOikZwq_qaLuZ2G4QIgeH8ix-KURp4c3PY3YiwcKKDWcYOnorsy98C52NCrnoyTrQKAHuOEhtxFKbj-Y96FgufishFFDU-2g8ccUeVjSB_IJ4MQLpvJd6beP6phrRYec9Uurw4L4m5AS-v0EYpOFP7lzk7BlgtIEytA4RV4n0seM" }
  ];

  return (
    <div className="bg-surface-bright font-body text-on-surface antialiased min-h-screen selection:bg-primary selection:text-on-primary text-left">
      <Navbar onAction={handleAction} cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} openCart={() => setIsCartOpen(true)} />

      <QuickViewModal 
        product={selectedProduct}
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        addToCart={addToCart}
        setIsCartOpen={setIsCartOpen}
        showToast={showToast}
      />

      <CartDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateQuantity={updateQuantity}
        removeFromCart={removeFromCart}
      />

      <main className="pt-16 md:pt-20">
        {/* Scientific Hero */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-12">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 items-center">
              <div className="space-y-4 md:space-y-6 animate-fade-in-up">
                 <div className="inline-flex items-center gap-3 bg-secondary-container/50 px-5 py-2 rounded-full border border-secondary/10 shadow-lg backdrop-blur-sm">
                    <FlaskConical size={16} className="text-secondary" />
                    <span className="text-[10px] md:text-xs font-bold uppercase text-on-secondary-fixed">Lab Batch #084-Z</span>
                 </div>
                 <h1 className="text-5xl md:text-8xl font-bold leading-[0.85] text-on-surface uppercase">
                    The Future <br />Of <span className="text-primary translate-x-2 inline-block">Grains.</span>
                 </h1>
                 <p className="text-sm md:text-xl text-on-surface-variant max-w-lg font-bold leading-relaxed opacity-70 uppercase">
                    Molecularly optimized for human peak performance. Scientific precision meets ancient Earth energy.
                 </p>
                 <div className="flex flex-col sm:flex-row gap-3 md:gap-5">
                    <button className="bg-primary text-on-primary px-12 py-5 rounded-2xl font-bold text-sm uppercase shadow-[0_20px_40px_-10px_rgba(183,0,73,0.5)] hover:scale-105 active:scale-95 transition-all">
                       Explore The Lab
                    </button>
                    <button className="border-2 border-surface-container-highest px-12 py-5 rounded-2xl font-bold text-sm uppercase hover:bg-surface-container-low active:scale-95 transition-all text-on-surface appearance-none">
                       View Archives
                    </button>
                 </div>
              </div>
              <div className="relative group perspective-1000">
                 <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-4xl transform group-hover:rotate-1 transition-all duration-1000">
                    <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7Mv3yJLtX164iEnz2-zH7f927J3_WEn-Q6hI-Z-_4yW0N40yWf0G_PzY-w_5O_-0oV3g768n28-v-R56t8_g60-u2_7y-3v6z-4t_p-x5z-4t_p-x5z-4t_p-x5z-4t_p-x5z-4t_p-x" alt="Scientific Grains" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#b70049]/40 via-transparent to-transparent"></div>
                 </div>
                 <div className="absolute -bottom-8 -right-8 w-40 h-40 md:w-56 md:h-56 bg-surface-bright rounded-3xl shadow-3xl p-4 md:p-6 border border-surface-container md:flex flex-col justify-between hidden animate-bounce-subtle">
                    <div className="flex items-center gap-3">
                       <Dna className="text-secondary w-8 h-8" />
                       <div className="h-px bg-surface-container flex-grow"></div>
                    </div>
                    <div>
                       <div className="text-[10px] font-bold uppercase text-on-surface-variant mb-1">Bio-Availability</div>
                       <div className="text-2xl md:text-3xl font-bold text-on-surface uppercase">99.8%</div>
                    </div>
                 </div>
              </div>
           </div>
        </section>

        {/* Trending Archives */}
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
           <div className="flex justify-between items-end mb-6 md:mb-10 md:mb-4 md:mb-8 px-2">
              <div className="text-left">
                 <h2 className="text-3xl md:text-6xl font-bold text-on-surface leading-none uppercase mb-2 md:mb-4">Trending Archives</h2>
                 <p className="text-[10px] md:text-xs font-bold uppercase text-primary">Scientifically Verified Selections</p>
              </div>
              <button className="hidden md:flex items-center gap-3 text-sm font-bold uppercase text-[#b70049] hover:translate-x-2 transition-transform border-b-2 border-primary/10 pb-2">View Data <ArrowRight /></button>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {trendingProducts.map((p, idx) => (
                <div key={idx} onClick={() => setSelectedProduct(p)} className="flex flex-col group cursor-pointer">
                   <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-4 md:mb-6 bg-surface-container-highest shadow-2xl transition-all duration-700 md:group-hover:-translate-y-4">
                      <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src={p.image} alt={p.name} />
                      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] font-bold uppercase shadow-lg">Validated Batch</div>
                      <button 
                        onClick={(e) => { e.stopPropagation(); addToCart(p); }}
                        className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl flex items-center justify-center shadow-2xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all hover:bg-black"
                      >
                         <Plus size={28} />
                      </button>
                   </div>
                   <div className="space-y-2 px-2 text-left">
                      <div className="flex items-center gap-2">
                         <div className="flex items-center gap-1 bg-tertiary-container/30 px-2 py-0.5 rounded text-[9px] font-bold text-on-tertiary-fixed">
                            <Star size={10} className="fill-current" /> {p.rating}
                         </div>
                         <span className="text-[9px] font-bold text-on-surface-variant opacity-40 uppercase">{p.reviews} Logs</span>
                      </div>
                      <h4 className="text-xl md:text-2xl font-bold text-on-surface leading-none uppercase">{p.name}</h4>
                      <div className="flex items-baseline gap-3">
                         <span className="text-xl md:text-2xl font-bold text-primary">${p.price}</span>
                         {p.oldPrice && <span className="text-sm text-on-surface-variant line-through opacity-30">${p.oldPrice}</span>}
                      </div>
                   </div>
                </div>
              ))}
           </div>
        </section>

        {/* Molecular Process */}
        <section className="bg-surface-container-low py-10 md:py-12 rounded-[4rem] md:rounded-[8rem] mx-4 md:mx-8 mb-10 md:mb-4 md:mb-8 relative overflow-hidden text-left">
           <div className="absolute top-0 right-0 w-full h-full opacity-[0.03] pointer-events-none">
              <Microscope className="w-full h-full transform translate-x-1/2 -translate-y-1/2" strokeWidth={0.2} />
           </div>
           <div className="max-w-4xl mx-auto px-4 md:px-8 relative z-10 text-center">
              <span className="text-[10px] md:text-xs font-bold uppercase text-secondary mb-4 md:mb-4 md:mb-8 block animate-pulse">Intra-Cellular Integrity</span>
              <h2 className="text-4xl md:text-8xl font-bold leading-none mb-6 md:mb-4 md:mb-8 text-on-surface uppercase">
                 Beyond <br /><span className="text-primary">Organic.</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 text-left mt-24">
                 {[
                   { i: <Zap className="text-primary" />, t:"Cold-Press", d:"Retaining 99.9% of cellular structural data." },
                   { i: <ShieldCheck className="text-secondary" />, t:"Double Verified", d:"Each batch undergoes rigorous molecular sync." },
                   { i: <FlaskConical className="text-[#ffb400]" />, t:"High Density", d:"Optimized for maximum energy bio-intake." }
                 ].map((s, idx) => (
                   <div key={idx} className="space-y-2 md:space-y-6 group">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-xl border border-surface-container transform group-hover:-rotate-6 transition-all">{s.i}</div>
                      <h4 className="text-xl font-bold uppercase">{s.t}</h4>
                      <p className="text-sm font-bold opacity-60 leading-relaxed uppercase">{s.d}</p>
                   </div>
                 ))}
              </div>
           </div>
        </section>
      </main>

      {/* Lab Footer */}
      <footer className="bg-white pt-16 md:pt-12 pb-12 md:pb-12 px-6 md:px-12 border-t border-surface-container">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-6 mb-10 md:mb-4 md:mb-8 text-left">
            <div className="md:col-span-1 space-y-4 md:space-y-6">
               <div className="text-3xl font-bold uppercase text-primary">R.N. Foods</div>
               <p className="text-on-surface-variant font-bold text-sm md:text-base leading-relaxed uppercase opacity-60 lg:max-w-xs">Laboratory grade botanical energy. Engineered for the modern human experience.</p>
               <div className="flex gap-2 md:gap-4">
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary-fixed hover:bg-primary hover:text-on-primary transition-all cursor-pointer"><Share2 size={24}/></div>
                  <div className="w-12 h-12 bg-surface-container-low rounded-xl flex items-center justify-center text-primary-fixed hover:bg-primary hover:text-on-primary transition-all cursor-pointer"><Send size={24}/></div>
               </div>
            </div>
            <div>
               <h4 className="text-[10px] font-bold uppercase text-primary mb-4 md:mb-4 md:mb-8">Lab Protocols</h4>
               <ul className="space-y-2 md:space-y-6">
                  {['Origins', 'Extraction', 'Scientific Logs', 'Batch Testing'].map(l => (
                    <li key={l}><a href="#" className="font-bold text-sm uppercase hover:text-primary transition-colors">{l}</a></li>
                  ))}
               </ul>
            </div>
            <div>
               <h4 className="text-[10px] font-bold uppercase text-primary mb-4 md:mb-4 md:mb-8">Archive Data</h4>
               <ul className="space-y-2 md:space-y-6">
                  {['Intake Guides', 'Stability Charts', 'Molecular Registry', 'Terms'].map(l => (
                    <li key={l}><a href="#" className="font-bold text-sm uppercase hover:text-primary transition-colors">{l}</a></li>
                  ))}
               </ul>
            </div>
            <div className="space-y-4 md:space-y-6">
               <h4 className="text-[10px] font-bold uppercase text-primary mb-4 md:mb-4 md:mb-8">Sync Newsletter</h4>
               <p className="text-xs font-bold text-on-surface-variant opacity-40 uppercase leading-relaxed">Receive weekly scientific logs and early access to validated batch releases.</p>
               <div className="flex bg-surface-container-low rounded-2xl overflow-hidden border border-surface-container focus-within:ring-2 focus-within:ring-primary/20 transition-all shadow-xl p-1">
                  <input className="bg-transparent border-none focus:ring-0 text-xs px-6 py-4 w-full font-bold uppercase" placeholder="Sync Email..." type="email" />
                  <button className="bg-primary text-on-primary px-8 rounded-xl font-bold hover:brightness-110 active:scale-95 transition-all outline-none">
                     <ArrowRight />
                  </button>
               </div>
            </div>
         </div>
         <div className="max-w-7xl mx-auto flex flex-col md:row justify-between items-center gap-4 md:gap-6 opacity-30 border-t border-surface-container pt-12">
            <p className="text-[10px] font-bold uppercase">© 2024 R.N. Foods Scientific Division. All Protocols Verified.</p>
            <div className="flex gap-6 md:gap-6">
               <span className="text-[10px] font-bold uppercase">ISO-9001 Certified</span>
               <span className="text-[10px] font-bold uppercase">Bio-Structure Grade A</span>
            </div>
         </div>
      </footer>

      {/* Floating Action Badge */}
      <div className="fixed bottom-10 right-10 z-40 md:flex flex-col items-end gap-3 md:gap-5 hidden pointer-events-none group">
         <div className="bg-white px-6 py-3 rounded-2xl shadow-3xl border border-surface-container opacity-0 scale-90 translate-y-4 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 transition-all duration-500 mb-2">
            <span className="text-[10px] font-bold uppercase text-primary">Live Lab Support</span>
         </div>
         <button className="w-20 h-20 rounded-3xl bg-primary text-on-primary shadow-4xl flex items-center justify-center transform hover:rotate-12 active:scale-90 transition-all pointer-events-auto shadow-primary/40">
            <FlaskConical size={36} className="animate-pulse" />
         </button>
      </div>

      {/* Toasts */}
      <div className="fixed bottom-0 right-0 left-0 md:left-auto p-4 md:p-6 flex flex-col gap-2 md:gap-4 pointer-events-none z-[300]">
        {toasts.map(t => (
          <Toast key={t.id} message={t.msg} onClose={() => setToasts(prev => prev.filter(x => x.id !== t.id))} />
        ))}
      </div>
    </div>
  )
}

export default App
