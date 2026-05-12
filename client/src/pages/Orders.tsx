import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import { config } from "../../config";
import Container from "../components/Container";
import FormattedPrice from "../components/FormattedPrice";

interface OrderRow {
  id: number;
  total_amount: number;
  payment_status: string;
  order_status: string;
  payment_method: string;
  created_at: string;
}

const Order = () => {
  const { currentUser, token } = useContext(UserContext);
  const [orders, setOrders] = useState<OrderRow[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!currentUser || !token) {
      return;
    }

    const fetchOrders = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${config?.baseUrl}/orders/user/${currentUser.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setOrders(response.data || []);
      } catch (error) {
        console.error("Failed to fetch orders", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, [currentUser, token]);

  if (!currentUser) {
    return (
      <Container>
        <div className="py-10 text-center">
          <p className="text-lg">Please login to view your orders.</p>
          <Link to="/auth" className="text-blue-600 font-semibold">
            Go to login
          </Link>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <div className="py-8">
        <h1 className="text-3xl font-bold mb-6">My Orders</h1>

        {loading ? (
          <p>Loading orders...</p>
        ) : orders.length ? (
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border rounded-lg p-4 bg-white shadow-sm">
                <div className="flex flex-wrap justify-between gap-4">
                  <p className="font-semibold">Order #{order.id}</p>
                  <p>
                    Total: <FormattedPrice amount={order.total_amount} />
                  </p>
                </div>
                <div className="mt-2 text-sm text-gray-700 flex flex-wrap gap-4">
                  <span>Order Status: {order.order_status}</span>
                  <span>Payment: {order.payment_status}</span>
                  <span>Method: {order.payment_method}</span>
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Placed: {new Date(order.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No orders found yet.</p>
        )}
      </div>
    </Container>
  );
};

export default Order;
