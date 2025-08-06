import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CreditCardIcon, TruckIcon, QrCodeIcon } from '@heroicons/react/24/outline';
import { useCart } from '../context/CartContext';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, getCartTotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    deliveryDate: '',
    deliveryTime: 'anytime',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    upiId: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);
      clearCart();
      
      // Redirect to confirmation after 3 seconds
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }, 2000);
  };

  const subtotal = getCartTotal();
  const shipping = 12.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌸</div>
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Add some beautiful flowers to your cart before checkout.
          </p>
          <button
            onClick={() => navigate('/shop')}
            className="btn-primary"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  if (orderComplete) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center bg-white p-8 rounded-xl shadow-lg max-w-md"
        >
          <div className="text-6xl mb-4">🎉</div>
          <h1 className="text-2xl font-serif font-bold text-gray-900 mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 mb-6">
            Thank you for your order. We'll deliver your beautiful flowers soon!
          </p>
          <div className="text-sm text-gray-500">
            Redirecting to homepage...
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-serif font-bold text-gray-900 mb-8">Checkout</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Checkout Form */}
            <div className="space-y-8">
              {/* Billing Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing Information</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Address *
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State *
                      </label>
                      <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        ZIP Code *
                      </label>
                      <input
                        type="text"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        required
                        className="input-field"
                      />
                    </div>
                  </div>
                </form>
              </div>

              {/* Delivery Options */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <TruckIcon className="h-6 w-6 mr-2 text-floral-500" />
                  Delivery Options
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Date *
                    </label>
                    <input
                      type="date"
                      name="deliveryDate"
                      value={formData.deliveryDate}
                      onChange={handleInputChange}
                      required
                      className="input-field"
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Delivery Time
                    </label>
                    <select
                      name="deliveryTime"
                      value={formData.deliveryTime}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="anytime">Anytime (9 AM - 8 PM)</option>
                      <option value="morning">Morning (9 AM - 12 PM)</option>
                      <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                      <option value="evening">Evening (5 PM - 8 PM)</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <CreditCardIcon className="h-6 w-6 mr-2 text-floral-500" />
                  Payment Information
                </h2>
                
                {/* Payment Method Selection */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Payment Method *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-floral-300 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleInputChange}
                        className="mr-3 text-floral-500 focus:ring-floral-500"
                      />
                      <CreditCardIcon className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="font-medium">Credit/Debit Card</span>
                    </label>
                    <label className="flex items-center p-4 border-2 border-gray-200 rounded-lg cursor-pointer hover:border-floral-300 transition-colors">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="upi"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleInputChange}
                        className="mr-3 text-floral-500 focus:ring-floral-500"
                      />
                      <QrCodeIcon className="h-5 w-5 mr-2 text-gray-600" />
                      <span className="font-medium">UPI Payment</span>
                    </label>
                  </div>
                </div>

                {/* Credit Card Form */}
                {formData.paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Card Number *
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required={formData.paymentMethod === 'card'}
                        placeholder="1234 5678 9012 3456"
                        className="input-field"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Expiry Date *
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'card'}
                          placeholder="MM/YY"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          CVV *
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'card'}
                          placeholder="123"
                          className="input-field"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Cardholder Name *
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          required={formData.paymentMethod === 'card'}
                          className="input-field"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* UPI Payment Form */}
                {formData.paymentMethod === 'upi' && (
                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        UPI ID *
                      </label>
                      <input
                        type="text"
                        name="upiId"
                        value={formData.upiId}
                        onChange={handleInputChange}
                        required={formData.paymentMethod === 'upi'}
                        placeholder="yourname@upi"
                        className="input-field"
                      />
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your UPI ID (e.g., john@okicici, sarah@paytm)
                      </p>
                    </div>
                    
                    {/* UPI QR Code Section */}
                    <div className="bg-gray-50 rounded-lg p-6 text-center">
                      <div className="mb-4">
                        <QrCodeIcon className="h-12 w-12 text-floral-500 mx-auto mb-2" />
                        <h3 className="font-semibold text-gray-900">Scan QR Code</h3>
                        <p className="text-sm text-gray-600">Use any UPI app to scan</p>
                      </div>
                      
                      {/* QR Code Placeholder */}
                      <div className="bg-white p-4 rounded-lg inline-block mb-4">
                        <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📱</div>
                            <p className="text-xs text-gray-500">QR Code</p>
                            <p className="text-xs text-gray-400">bloom@blossom</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <p className="text-gray-600">
                          <span className="font-medium">UPI ID:</span> bloom@blossom
                        </p>
                                                 <p className="text-gray-600">
                           <span className="font-medium">Amount:</span> ₹{(total * 83).toFixed(2)}
                         </p>
                        <p className="text-gray-600">
                          <span className="font-medium">Merchant:</span> Bloom & Blossom
                        </p>
                      </div>
                    </div>
                    
                    {/* UPI Instructions */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h4 className="font-medium text-blue-900 mb-2">How to pay with UPI:</h4>
                      <ol className="text-sm text-blue-800 space-y-1">
                        <li>1. Open your UPI app (Google Pay, PhonePe, Paytm, etc.)</li>
                        <li>2. Scan the QR code or enter UPI ID: bloom@blossom</li>
                                                 <li>3. Enter amount: ₹{(total * 83).toFixed(2)}</li>
                        <li>4. Add a note: "Flower Order"</li>
                        <li>5. Complete the payment</li>
                      </ol>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
                
                {/* Order Items */}
                <div className="space-y-4 mb-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900">{item.name}</h3>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                                             <div className="text-right">
                         <p className="font-medium text-gray-900">
                           {formData.paymentMethod === 'upi' 
                             ? `₹${(item.price * item.quantity * 83).toFixed(2)}` 
                             : `$${(item.price * item.quantity).toFixed(2)}`
                           }
                         </p>
                       </div>
                    </div>
                  ))}
                </div>

                                 {/* Order Totals */}
                 <div className="border-t border-gray-200 pt-4 space-y-2">
                   <div className="flex justify-between text-gray-600">
                     <span>Subtotal</span>
                     <span>{formData.paymentMethod === 'upi' ? `₹${(subtotal * 83).toFixed(2)}` : `$${subtotal.toFixed(2)}`}</span>
                   </div>
                   <div className="flex justify-between text-gray-600">
                     <span>Shipping</span>
                     <span>{formData.paymentMethod === 'upi' ? `₹${(shipping * 83).toFixed(2)}` : `$${shipping.toFixed(2)}`}</span>
                   </div>
                   <div className="flex justify-between text-gray-600">
                     <span>Tax</span>
                     <span>{formData.paymentMethod === 'upi' ? `₹${(tax * 83).toFixed(2)}` : `$${tax.toFixed(2)}`}</span>
                   </div>
                   <div className="border-t border-gray-200 pt-2">
                     <div className="flex justify-between text-lg font-semibold text-gray-900">
                       <span>Total</span>
                       <span>{formData.paymentMethod === 'upi' ? `₹${(total * 83).toFixed(2)}` : `$${total.toFixed(2)}`}</span>
                     </div>
                   </div>
                 </div>

                {/* Place Order Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isProcessing}
                  className={`w-full mt-6 py-4 px-6 rounded-lg font-medium text-lg transition-all duration-200 ${
                    isProcessing
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-floral-500 hover:bg-floral-600 text-white transform hover:scale-105'
                  }`}
                >
                  {isProcessing ? 'Processing...' : 'Place Order'}
                </button>

                {/* Security Notice */}
                <div className="mt-4 text-center">
                  <p className="text-xs text-gray-500">
                    🔒 Your payment information is secure and encrypted
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Checkout; 