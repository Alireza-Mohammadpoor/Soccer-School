"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCartStore from "@/store/useCartStore";

export default function CheckoutForm() {
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    phone: "",
    address: "",
  });

  const { cart, clearCart } = useCartStore();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newOrder = {
      id: Date.now(),
      userDetails,
      cart,
      createdAt: new Date().toISOString(),
    };

    const existingOrders = JSON.parse(localStorage.getItem("orders")) || [];
    existingOrders.push(newOrder);
    localStorage.setItem("orders", JSON.stringify(existingOrders));

    clearCart();
    router.push("/thank-you"); // redirect after order success
 // optional, you can create this page
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 500, margin: "2rem auto" }}>
      <h2>📝 اطلاعات سفارش</h2>

      <label>نام و نام خانوادگی:</label>
      <input
        type="text"
        name="fullName"
        required
        value={userDetails.fullName}
        onChange={handleChange}
        style={inputStyle}
      />

      <label>شماره تماس:</label>
      <input
        type="text"
        name="phone"
        required
        value={userDetails.phone}
        onChange={handleChange}
        style={inputStyle}
      />

      <label>آدرس:</label>
      <textarea
        name="address"
        required
        value={userDetails.address}
        onChange={handleChange}
        style={{ ...inputStyle, height: "80px" }}
      />

      <button type="submit" style={submitStyle}>
        ثبت سفارش
      </button>
    </form>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  padding: "0.5rem",
  marginBottom: "1rem",
  border: "1px solid #ccc",
  borderRadius: "0.5rem",
};

const submitStyle = {
  backgroundColor: "#10b981",
  color: "white",
  padding: "0.75rem 1.5rem",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer",
};
