import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HeartIcon, ShoppingBagIcon, StarIcon, TruckIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = products.find(p => p.id === parseInt(id));
  const relatedProducts = products
    .filter(p => p.id !== parseInt(id) && p.category === product?.category)
    .slice(0, 3);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Product not found
          </h1>
          <p className="text-gray-600 mb-8">
            The product you're looking for doesn't exist.
          </p>
          <Link to="/shop" className="btn-primary">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    addToCart(product, quantity);
    setTimeout(() => setIsAddingToCart(false), 1000);
  };

  const handleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-floral-600">
                  Home
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li>
                <Link to="/shop" className="text-gray-500 hover:text-floral-600">
                  Shop
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
              </li>
              <li className="text-gray-900 font-medium">{product.name}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-xl shadow-lg"
                />
                <button
                  onClick={handleWishlist}
                  className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200"
                >
                  {isWishlisted ? (
                    <HeartSolidIcon className="h-6 w-6 text-floral-500" />
                  ) : (
                    <HeartIcon className="h-6 w-6 text-gray-600 hover:text-floral-500" />
                  )}
                </button>
                {product.originalPrice && product.originalPrice > product.price && (
                  <div className="absolute top-4 left-4 bg-floral-500 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Sale
                  </div>
                )}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
                  {product.name}
                </h1>
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600">(24 reviews)</span>
                  </div>
                </div>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
                {product.originalPrice && product.originalPrice > product.price && (
                  <span className="text-xl text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Care Instructions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Care Instructions</h3>
                <p className="text-gray-600">
                  {product.careInstructions}
                </p>
              </div>

              {/* Occasions */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Perfect For</h3>
                <div className="flex flex-wrap gap-2">
                  {product.occasion.map((occasion) => (
                    <span
                      key={occasion}
                      className="px-3 py-1 bg-sage-100 text-sage-700 rounded-full text-sm"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <label className="text-lg font-semibold text-gray-900">Quantity:</label>
                  <div className="flex items-center border border-gray-300 rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      -
                    </button>
                    <span className="px-4 py-2 text-gray-900 font-medium">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-2 text-gray-600 hover:text-gray-900"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={isAddingToCart || !product.inStock}
                  className={`w-full py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isAddingToCart || !product.inStock
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-floral-500 hover:bg-floral-600 text-white transform hover:scale-105'
                  }`}
                >
                  <ShoppingBagIcon className="h-6 w-6" />
                  <span>
                    {isAddingToCart ? 'Added to Cart!' : product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </span>
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <TruckIcon className="h-5 w-5 text-floral-500" />
                  <span className="text-sm text-gray-600">Same Day Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <ShieldCheckIcon className="h-5 w-5 text-floral-500" />
                  <span className="text-sm text-gray-600">Fresh Guarantee</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeartIcon className="h-5 w-5 text-floral-500" />
                  <span className="text-sm text-gray-600">Handcrafted</span>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-serif font-bold text-gray-900 mb-8">
                You Might Also Like
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetail; 