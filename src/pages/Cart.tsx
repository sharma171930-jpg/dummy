import React from 'react';
import { Link } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { Minus, Plus, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { motion } from 'motion/react';
import { SEO } from '../components/SEO';

const Cart = () => {
  const { cart, products, updateQuantity, removeFromCart, cartTotal } = useShop();

  const shipping = cartTotal > 150 ? 0 : 15;
  const tax = cartTotal * 0.08; // 8% pseudo-tax
  const finalTotal = cartTotal + shipping + tax;

  if (cart.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-white px-4 text-brand-black">
        <SEO title="Shopping Cart | Shadeora Frames" description="Your shopping cart is empty. Browse Shadeora's collection of handcrafted frames to find your perfect fit." />
        <div className="w-32 h-32 bg-brand-gray rounded-full flex items-center justify-center mb-8 shadow-sm">
          <ShoppingBag className="w-12 h-12 text-brand-gold opacity-80" />
        </div>
        <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-brand-black/60 mb-10 text-center max-w-md text-sm">
          Looks like you haven't added any items to your cart yet. Discover our latest collections.
        </p>
        <Link 
          to="/shop" 
          className="px-8 py-4 bg-brand-black text-white text-[10px] uppercase font-bold tracking-widest hover:bg-brand-gold hover:text-brand-black transition-all rounded-full shadow-lg block"
        >
          Explore Shop
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-brand-white min-h-screen py-16 text-brand-black">
      <SEO title="My Shopping Cart | Shadeora Frames" description="Review and checkout items in your Shadeora Frames shopping cart. Custom lenses and premium accessories." />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center tracking-wide">Shopping Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="lg:w-2/3 bg-white p-8 rounded-3xl border border-brand-black/5 shadow-sm">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-brand-black/10 text-[10px] font-bold uppercase tracking-widest text-brand-black/40">
              <div className="col-span-6">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-right">Total</div>
            </div>

            <div className="divide-y divide-brand-black/5">
              {cart.map((item) => {
                const product = products.find(p => p.id === item.productId);
                if (!product) return null;

                return (
                  <motion.div 
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    key={item.id} 
                    className="py-8 flex flex-col md:grid md:grid-cols-12 gap-6 items-center group"
                  >
                    <div className="col-span-6 flex w-full md:w-auto items-center space-x-6">
                      <Link to={`/product/${product.id}`} className="w-24 h-24 bg-brand-gray rounded-xl flex items-center justify-center p-2 flex-shrink-0 group-hover:border-brand-gold/40 border border-transparent transition-all">
                        <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain mix-blend-multiply" />
                      </Link>
                      <div className="flex-grow">
                        <p className="text-[9px] uppercase tracking-widest font-bold text-brand-black/40">{product.category}</p>
                        <Link to={`/product/${product.id}`}>
                          <h3 className="font-serif text-lg font-bold hover:text-brand-gold transition-colors mt-1 mb-2">{product.name}</h3>
                        </Link>
                        <div className="mt-2 flex items-center space-x-4 text-xs font-medium text-brand-black/60">
                          <div className="flex items-center space-x-2">
                            <span>Color:</span>
                            <div className="w-3 h-3 rounded-full border border-brand-black/20" style={{ backgroundColor: item.color }} />
                          </div>
                          <div className="border-l border-brand-black/20 pl-4">
                            <span className="mr-1">Size:</span>
                            <span className="text-brand-black font-bold uppercase">{item.size}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-2 text-center w-full md:w-auto flex justify-between md:block text-sm font-semibold">
                      <span className="md:hidden text-brand-black/40 text-[10px] uppercase tracking-widest">Price:</span>
                      <span>${product.price.toFixed(2)}</span>
                    </div>

                    <div className="col-span-2 flex justify-center w-full md:w-auto">
                      <div className="flex items-center border border-brand-black/10 rounded-full bg-brand-gray/50">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-2 hover:bg-brand-white hover:text-brand-gold rounded-l-full transition-colors"
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="w-8 text-center text-xs font-bold">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-brand-white hover:text-brand-gold rounded-r-full transition-colors"
                        >
                          <Plus className="w-3 h-3 text-brand-black" />
                        </button>
                      </div>
                    </div>

                    <div className="col-span-2 text-right w-full md:w-auto flex justify-between md:justify-end items-center text-sm font-bold text-brand-gold">
                      <span className="md:hidden text-brand-black/40 text-[10px] uppercase tracking-widest text-brand-black">Total:</span>
                      <div className="flex items-center space-x-6">
                        <span>${(product.price * item.quantity).toFixed(2)}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-black/40 hover:text-red-500 transition-colors p-1"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-brand-gray p-8 rounded-3xl sticky top-32 shadow-sm border border-brand-black/5">
              <h2 className="font-serif text-2xl font-bold mb-8">Order Summary</h2>
              
              <div className="space-y-4 mb-6 pb-6 border-b border-brand-black/10">
                <div className="flex justify-between text-xs font-medium text-brand-black/60">
                  <span>Subtotal</span>
                  <span className="text-brand-black">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-brand-black/60">
                  <span>Shipping</span>
                  <span className="text-brand-black">{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between text-xs font-medium text-brand-black/60">
                  <span>Estimated Tax</span>
                  <span className="text-brand-black">${tax.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex justify-between items-end mb-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-brand-black">Total</span>
                <span className="font-serif text-3xl font-bold text-brand-gold">${finalTotal.toFixed(2)}</span>
              </div>

              <button className="w-full bg-brand-black text-white py-4 px-8 text-[10px] font-bold tracking-widest uppercase hover:bg-brand-gold hover:text-brand-black transition-all flex items-center justify-center rounded-full shadow-md">
                Secure Checkout <ArrowRight className="w-4 h-4 ml-2" />
              </button>

              <div className="mt-6 text-[10px] text-center text-brand-black/40 uppercase tracking-wider flex flex-col space-y-2">
                <p>Tax calculated at checkout based on your location.</p>
                {shipping > 0 && (
                  <p>Add ${(150 - cartTotal).toFixed(2)} more for free shipping.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
