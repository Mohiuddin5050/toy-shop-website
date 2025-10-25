import React, { useContext, useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const MyOrders = () => {
    useTitle('My Order');

    const{user}=useContext(AuthContext);
    const [orders, setOrders] = useState([]);

    useEffect(()=>{
        const fakeOrders = [
      {
        id: 1,
        toyName: "Lego City Car",
        price: "$29",
        date: "2025-10-20",
        status: "Delivered",
      },
      {
        id: 2,
        toyName: "Dinosaur Plush",
        price: "$18",
        date: "2025-10-18",
        status: "Pending",
      },
      {
        id: 3,
        toyName: "Barbie Doll",
        price: "$25",
        date: "2025-10-15",
        status: "Shipped",
      },
    ];
    setOrders(fakeOrders);
    },[])

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white py-10 px-4 flex flex-col items-center">
            <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-8">
               
                <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 mb-6">
                    <div className="flex items-center gap-4">
                        <img
                            src={
                                user?.photoURL ||
                                "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"
                            }
                            alt="User"
                            className="w-20 h-20 rounded-full border-4 border-purple-300"
                        />
                        <div>
                            <h2 className="text-2xl font-bold text-purple-700">
                                {user?.displayName || "User Name"}
                            </h2>
                            <p className="text-gray-600">{user?.email}</p>
                        </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                        <button
                            onClick={() => toast.success("Coming soon!")}
                            className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white"
                        >
                            Add New Order
                        </button>
                    </div>
                </div>

                
                <h3 className="text-xl font-semibold text-purple-600 mb-4">
                    Your Recent Orders
                </h3>

                {orders.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table w-full border">
                            <thead className="bg-purple-100">
                                <tr>
                                    <th>#</th>
                                    <th>Toy Name</th>
                                    <th>Price</th>
                                    <th>Date</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {orders.map((order, index) => (
                                    <tr key={order.id} className="hover:bg-purple-50">
                                        <td>{index + 1}</td>
                                        <td className="font-medium text-gray-700">
                                            {order.toyName}
                                        </td>
                                        <td>{order.price}</td>
                                        <td>{order.date}</td>
                                        <td>
                                            <span
                                                className={`px-3 py-1 rounded-full text-sm ${order.status === "Delivered"
                                                        ? "bg-green-100 text-green-700"
                                                        : order.status === "Pending"
                                                            ? "bg-yellow-100 text-yellow-700"
                                                            : "bg-blue-100 text-blue-700"
                                                    }`}> {order.status}
                                            </span>
                                        </td>
                                        <td>
                                            <button className="btn btn-xs bg-red-500 hover:bg-red-600 text-white"
                                            > Cancel
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-gray-500 text-center mt-10">
                        You have no orders yet 😢
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyOrders;