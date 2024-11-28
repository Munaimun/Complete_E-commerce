import { collection, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

import { db } from "../lib/firebase";

const MyAccount = () => {
  const { currentUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (!currentUser) return;

    const fetchOrders = async () => {
      const ordersCollection = collection(db, "orders");
      const ordersSnapshot = await getDocs(ordersCollection);
      const ordersList = ordersSnapshot.docs.map((doc) => doc.data());
      setOrders(ordersList);
    };

    fetchOrders();
  }, [currentUser]);

  // Check if currentUser is available
  if (!currentUser) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>My Account</h2>
      <p>Name: {currentUser.displayName}</p>
      <h3>Order History</h3>
      <ul>
        {orders.length ? (
          orders.map((order, index) => (
            <li key={index}>
              <p>Order ID: {order.orderId}</p>
              {/* Add more details about the order here */}
            </li>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </ul>
    </div>
  );
};

export default MyAccount;
