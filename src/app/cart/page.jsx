// "use client";
// import useCartStore from "@/store/useCartStore";
// import { useRouter } from "next/navigation";

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity } = useCartStore();
//   const router = useRouter();

//   const total = cart.reduce(
//     (sum, item) => sum + item.priceToman * item.quantity,
//     0
//   );

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>🛒 سبد خرید شما</h1>
//       {cart.length === 0 ? (
//         <p>سبد خرید شما خالی است.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "1rem",
//                 border: "1px solid #ccc",
//                 padding: "1rem",
//                 borderRadius: "0.5rem",
//               }}
//             >
//               <div>
//                 <strong>{item.name}</strong>
//                 <p>{item.priceToman.toLocaleString()} تومان</p>
//               </div>
//               <div>
//                 <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                 <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//               </div>
//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 style={{
//                   background: "#ef4444",
//                   color: "white",
//                   padding: "0.3rem 0.5rem",
//                   border: "none",
//                   borderRadius: "0.25rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 حذف
//               </button>
//             </div>
//           ))}

//           <h3>مبلغ نهایی: {total.toLocaleString()} تومان</h3>

//           <button
//             onClick={() => router.push("/checkout")}
//             style={{
//               marginTop: "2rem",
//               background: "#10b981",
//               color: "white",
//               padding: "0.8rem 1.5rem",
//               border: "none",
//               borderRadius: "0.5rem",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             ثبت سفارش
//           </button>
//         </>
//       )}
//     </div>
//   );
// }










// "use client";
// import useCartStore from "@/store/useCartStore";
// import { useRouter } from "next/navigation";

// export default function CartPage() {
//   const { cart, removeFromCart, updateQuantity } = useCartStore();
//   const router = useRouter();

//   const total = cart.reduce(
//     (sum, item) => sum + item.priceToman * item.quantity,
//     0
//   );

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>🛒 سبد خرید شما</h1>
//       {cart.length === 0 ? (
//         <p>سبد خرید شما خالی است.</p>
//       ) : (
//         <>
//           {cart.map((item) => (
//             <div
//               key={`${item.id}-${item.size}-${item.color}`} // Unique by size/color
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "1rem",
//                 border: "1px solid #ccc",
//                 padding: "1rem",
//                 borderRadius: "0.5rem",
//               }}
//             >
//               <div>
//                 <strong>{item.name}</strong>
//                 {item.size && <p>سایز: {item.size}</p>}
//                 {item.color && <p>رنگ: {item.color}</p>}
//                 <p>{item.priceToman.toLocaleString()} تومان</p>
//               </div>

//               <div>
//                 <button onClick={() => updateQuantity(item.id, -1)}>-</button>
//                 <span style={{ margin: "0 0.5rem" }}>{item.quantity}</span>
//                 <button onClick={() => updateQuantity(item.id, 1)}>+</button>
//               </div>

//               <button
//                 onClick={() => removeFromCart(item.id)}
//                 style={{
//                   background: "#ef4444",
//                   color: "white",
//                   padding: "0.3rem 0.5rem",
//                   border: "none",
//                   borderRadius: "0.25rem",
//                   cursor: "pointer",
//                 }}
//               >
//                 حذف
//               </button>
//             </div>
//           ))}

//           <h3>مبلغ نهایی: {total.toLocaleString()} تومان</h3>

//           <button
//             onClick={() => router.push("/checkout")}
//             style={{
//               marginTop: "2rem",
//               background: "#10b981",
//               color: "white",
//               padding: "0.8rem 1.5rem",
//               border: "none",
//               borderRadius: "0.5rem",
//               cursor: "pointer",
//               fontSize: "1rem",
//             }}
//           >
//             ثبت سفارش
//           </button>
//         </>
//       )}
//     </div>
//   );
// }









"use client";
import useCartStore from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCartStore();
  const router = useRouter();

  const total = cart.reduce(
    (sum, item) => sum + item.priceToman * item.quantity,
    0
  );

  return (
    <div style={{ padding: "2rem", position: "relative" }}>
      {/* Home icon top-left */}
      <img
        src="/home-page.png" // Make sure this image exists in your public folder
        alt="خانه"
        onClick={() => router.push("/")}
        style={{
          position: "absolute",
          top: "0.8rem",
          left: "1.2rem",
          marginBottom : "2.2rem",
          width: "25px",
          height: "25px",
          cursor: "pointer",
          zIndex: 1000,
        }}
        title="بازگشت به صفحه اصلی"
      />

      <h1>🛒 سبد خرید شما</h1>
      {cart.length === 0 ? (
        <p>سبد خرید شما خالی است.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.size}-${item.color}`} // Unique by size/color
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "1rem",
                border: "1px solid #ccc",
                padding: "1rem",
                borderRadius: "0.5rem",
              }}
            >
              <div>
                <strong>{item.name}</strong>
                {item.size && <p>سایز: {item.size}</p>}
                {item.color && <p>رنگ: {item.color}</p>}
                <p>{item.priceToman.toLocaleString()} تومان</p>
              </div>

              <div>
                <button onClick={() => updateQuantity(item.id, -1)} style={{fontSize : "1.4rem"}}>-</button>
                <span style={{ margin: "0 0.5rem",fontWeight : "600"  }}>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, 1)} style={{fontSize : "1.4rem"}}>+</button>
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  // background: "#ef4444",
                  // color: "white",
                  padding: "0.3rem 0.8rem",
                  border: "none",
                  borderRadius: "1.25rem",
                  cursor: "pointer",
                }}
              >
                <img src="/bin.png" alt="bin" style={{width : "25px", height : "25px"}} />
              </button>
            </div>
          ))}

          <h3>مبلغ نهایی: {total.toLocaleString()} تومان</h3>

          <button
            onClick={() => router.push("/checkout")}
            style={{
              marginTop: "2rem",
              background: "#10b981",
              color: "white",
              padding: "0.8rem 1.5rem",
              border: "none",
              borderRadius: "0.5rem",
              cursor: "pointer",
              fontSize: "1rem",
            }}
          >
            ثبت سفارش
          </button>
        </>
      )}
    </div>
  );
}
