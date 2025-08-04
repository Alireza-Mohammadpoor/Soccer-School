"use client";

import CheckoutForm from "@/components/checkOutForm";
import useCartStore from "@/store/useCartStore";

// import CheckoutForm from "@/components/CheckoutForm";
// import useCartStore from "@/store/useCartStore";

export default function CheckoutPage() {
  const { cart } = useCartStore();

  const total = cart.reduce(
    (sum, item) => sum + item.priceToman * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>🛒 تسویه حساب</h1>

      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          <ul style={{ marginBottom: "2rem" }}>
            {cart.map((item, idx) => (
              <li key={idx}>
                {item.name} × {item.quantity} ={" "}
                {(item.priceToman * item.quantity).toLocaleString()} تومان
              </li>
            ))}
          </ul>

          <p>
            <strong>مبلغ نهایی:</strong> {total.toLocaleString()} تومان
          </p>

          <CheckoutForm />
        </>
      )}
    </div>
  );
}


