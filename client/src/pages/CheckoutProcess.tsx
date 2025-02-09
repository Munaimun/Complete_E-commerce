import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import Container from "../components/Container";
import FormattedPrice from "../components/FormattedPrice";
import axios from "axios";
import toast from "react-hot-toast";

const CheckoutProcess = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useContext(UserContext);
  
  

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (!currentUser) {
      navigate("/auth");
    }
  }, [currentUser, navigate]);

  const products = state?.products || [];
  const totalAmount = products.reduce(
    (sum: { regular: number; discounted: number }, product: any) => {
      sum.regular += product.regularPrice * product.quantity;
      sum.discounted += product.discountedPrice * product.quantity;
      return sum;
    },
    { regular: 0, discounted: 0 }
  );

  const handlePayment = async () => {
    if (!address || !phone) {
      toast.error("Please provide both address and phone number.");
      return;
    }
  
    const orderData = {
    //   user: currentUser?.displayName,
      email: currentUser?.email, // Add user ID if available
      address,
      phone,
      order: {
        products,
        total: totalAmount.discounted + 25 + 15, // Total including shipping and tax
      },
    };
  
    try {
      const response = await axios.post("http://localhost:8000/checkout", orderData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Order Data Sent:", orderData);
      console.log("Server Response:", response.data);
  
      // Show success notification
      toast.success("Order placed successfully!");
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };
  
  return (
    <Container>
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold text-gray-700 mb-6">Checkout</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-600 mb-4">Order Summary</h2>

          {/* User Information */}
          {/* <div className="mb-4">
            <p className="text-gray-700">
              <span className="font-bold">Name:</span> {currentUser?.displayName}
            </p>
          </div> */}

          {/* Address and Phone Input */}
          <div className="flex flex-col gap-4 mb-6">
            <div>
              <label
                htmlFor="address"
                className="block text-sm font-medium text-gray-700"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="mt-1 p-2 border border-gray-300 rounded-lg w-full"
                placeholder="Enter your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          {/* Order Table */}
          <table className="w-full text-left border-collapse border border-gray-300 mb-6">
            <thead>
              <tr className="bg-gray-50">
                <th className="border border-gray-300 px-4 py-2">Product</th>
                <th className="border border-gray-300 px-4 py-2">Quantity</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product: any) => (
                <tr key={product._id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">
                    {product.name}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {product.quantity}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <FormattedPrice amount={product.discountedPrice} />
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    <FormattedPrice
                      amount={product.discountedPrice * product.quantity}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Total Summary */}
          <div className="flex flex-col gap-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal:</span>
              <span className="font-semibold text-gray-800">
                <FormattedPrice amount={totalAmount.discounted} />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Shipping:</span>
              <span className="font-semibold text-gray-800">
                <FormattedPrice amount={25} />
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Tax:</span>
              <span className="font-semibold text-gray-800">
                <FormattedPrice amount={15} />
              </span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-4">
              <span className="text-xl font-bold text-gray-700">Total:</span>
              <span className="text-xl font-bold text-gray-700">
                <FormattedPrice
                  amount={totalAmount.discounted + 25 + 15}
                />
              </span>
            </div>
          </div>

          {/* Proceed to Payment */}
          <button
            className="mt-6 w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>
      </div>
    </Container>
  );
};

export default CheckoutProcess;
