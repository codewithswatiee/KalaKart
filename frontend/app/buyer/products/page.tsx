'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Heart, ShoppingCart, X, Minus, Plus } from 'lucide-react';

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};

const products: Product[] = [
  { id: 1, name: 'Handwoven Scarf', price: 1200, image: '/handwovenShawl.jpg', description: 'A beautiful handwoven scarf made from the finest silk, perfect for any occasion.' },
  { id: 2, name: 'Ceramic Vase', price: 1500, image: '/ceramicVase.jpg', description: 'Elegant ceramic vase handcrafted by local artisans, ideal for displaying your favorite flowers.' },
  { id: 3, name: 'Wooden Sculpture', price: 3000, image: '/woodenScu.jpg', description: 'Intricate wooden sculpture carved by skilled craftsmen, a unique piece of art for your home.' },
  { id: 4, name: 'Embroidered Cushion', price: 800, image: '/embCushon.jpg', description: 'Soft cushion with beautiful hand-embroidered designs, adds a touch of elegance to any room.' },
  { id: 5, name: 'Handmade Pottery', price: 2000, image: '/HandmadePottery.jpg', description: 'Exquisite handmade pottery, perfect for adding a rustic touch to your kitchen.' },
  { id: 6, name: 'Jewellery Set', price: 2500, image: '/jewellery1.jpg', description: 'A stunning jewellery set with intricate detailing, perfect for special occasions.' },
  { id: 7, name: 'Wooden Artifact', price: 3500, image: '/wood1.jpg', description: 'A unique wooden artifact, crafted by skilled artisans for a refined décor.' },
  { id: 8, name: 'Woven Basket', price: 1000, image: '/woven1.jpg', description: 'Beautifully woven basket, ideal for storage or as a decorative item in your home.' },
  { id: 9, name: 'Artisan Pottery', price: 1800, image: '/pottery.jpg', description: 'Handcrafted pottery made by artisans, a blend of tradition and modern design.' }
];

type CartItem = Product & { quantity: number; customization?: string };

export default function ProductList() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCustomizeOpen, setIsCustomizeOpen] = useState(false);
  const [customizationText, setCustomizationText] = useState('');

  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const addToCart = (product: Product, customization?: string) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1, customization: customization || item.customization } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1, customization }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeFromCart(productId);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalSum = () => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const placeOrder = () => {
    alert("Order Confirmed! You will receive order and payment details on your email.");
    setCartItems([]);
    setIsCartOpen(false);
  };

  useEffect(() => {
    document.body.classList.toggle('modal-open', !!selectedProduct || isCartOpen || isCustomizeOpen);
  }, [selectedProduct, isCartOpen, isCustomizeOpen]);

  return (
    <div className="min-h-screen bg-[#FFF0D1]">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 text-center text-[#3B3030]">Discover Unique Handcrafted Products</h1>

        <div className="mb-6 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Input 
            type="search" 
            placeholder="Search products..." 
            className="max-w-md w-full bg-white border-[#795757] focus:ring-[#664343] text-[#3B3030]"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            onClick={() => setIsCartOpen(true)}
            className="w-full sm:w-auto bg-[#795757] hover:bg-[#664343] text-white"
          >
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart ({cartItems.length})
          </Button>
        </div>

        {filteredProducts.length === 0 ? (
          <p className="text-center text-lg text-[#795757]">No products found matching your search.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={() => setSelectedProduct(product)} 
                addToCart={() => addToCart(product)}
              />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl my-8">
            <div className="relative">
              <Button 
                size="icon" 
                variant="ghost" 
                aria-label="Close details modal"
                className="absolute top-2 right-2 text-[#3B3030] z-10"
                onClick={() => setSelectedProduct(null)}
              >
                <X className="h-6 w-6" />
              </Button>
              <div className="w-full h-64 relative">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2 text-[#3B3030]">{selectedProduct.name}</h2>
              <p className="text-xl text-[#664343] mb-4">₹{selectedProduct.price}</p>
              <p className="text-[#3B3030] mb-6">{selectedProduct.description}</p>
              <div className="flex flex-col space-y-4">
                <Button 
                  className="w-full bg-[#795757] hover:bg-[#664343] text-white"
                  onClick={() => {
                    addToCart(selectedProduct);
                    setSelectedProduct(null);
                  }}
                >
                  Add to Cart
                </Button>
                <Button 
                  className="w-full bg-[#664343] hover:bg-[#795757] text-white"
                  onClick={() => {
                    setIsCustomizeOpen(true);
                  }}
                >
                  Customize
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCustomizeOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl my-8">
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-4 text-[#3B3030]">Customize Your Product</h2>
              <Textarea
                placeholder="Describe how you'd like to customize this product..."
                className="w-full h-32 mb-4"
                value={customizationText}
                onChange={(e) => setCustomizationText(e.target.value)}
              />
              <div className="flex flex-col sm:flex-row justify-end space-y-2 sm:space-y-0 sm:space-x-4">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto"
                  onClick={() => {
                    setIsCustomizeOpen(false);
                    setCustomizationText('');
                  }}
                >
                  Cancel
                </Button>
                <Button
                  className="w-full sm:w-auto bg-[#795757] hover:bg-[#664343] text-white"
                  onClick={() => {
                    if (selectedProduct) {
                      addToCart(selectedProduct, customizationText);
                      setIsCustomizeOpen(false);
                      setSelectedProduct(null);
                      setCustomizationText('');
                    }
                  }}
                >
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-2xl w-full overflow-hidden shadow-xl my-8">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-[#3B3030]">Your Cart</h2>
                <Button 
                  size="icon" 
                  variant="ghost" 
                  aria-label="Close cart"
                  onClick={() => setIsCartOpen(false)}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              {cartItems.length === 0 ? (
                <p className="text-center text-lg text-[#795757]">Your cart is empty.</p>
              ) : (
                <>
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 pb-4 border-b">
                      <div className="flex items-center mb-2 sm:mb-0">
                        <div className="w-16 h-16 relative mr-4">
                          <Image
                            src={item.image}
                            alt={item.name}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-md"
                          />
                        </div>
                        <div>
                          <h3 className="font-semibold text-[#3B3030]">{item.name}</h3>
                          <p className="text-[#664343]">₹{item.price} x {item.quantity}</p>
                          {item.customization && (
                            <p className="text-sm text-[#795757]">Customization: {item.customization}</p>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center mt-2 sm:mt-0">
                        <Button 
                          size="icon" 
                          variant="outline" 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="mx-2">{item.quantity}</span>
                        <Button 
                          size="icon" 
                          variant="outline" 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="ml-2" 
                          onClick={() => removeFromCart(item.id)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                  <div className="mt-6 border-t pt-4">
                    <p className="text-xl font-bold text-[#3B3030]">Total: ₹{getTotalSum()}</p>
                  </div>
                  <Button 
                    className="w-full mt-4 bg-[#795757] hover:bg-[#664343] text-white"
                    onClick={placeOrder}
                  >
                    Place Order
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type ProductCardProps = {
  product: Product;
  onClick: () => void;
  addToCart: () => void;
};

const ProductCard = ({ product, onClick, addToCart }: ProductCardProps) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg relative">
    <div className="absolute top-2 right-2 flex space-x-2 z-10">
      <Button 
        size="icon" 
        variant="outline" 
        aria-label="Add to cart" 
        className="bg-white hover:bg-[#FFF0D1]"
        onClick={(e) => {
          e.stopPropagation();
          addToCart();
        }}
      >
        <ShoppingCart className="h-4 w-4 text-[#795757]" />
      </Button>
    </div>
    <div className="w-full h-64 relative">
      <Image
        src={product.image}
        alt={product.name}
        layout="fill"
        objectFit="cover"
        className="w-full h-full object-cover"
        priority
      />
    </div>
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-2 text-[#3B3030]">{product.name}</h2>
      <p className="text-[#664343] mb-4">₹{product.price}</p>
      <Button 
        className="w-full bg-[#795757] hover:bg-[#664343] text-white"
        onClick={onClick}
      >
        View Details
      </Button>
    </div>
  </div>
);