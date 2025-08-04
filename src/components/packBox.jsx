// import React from "react";
// import styles from "@/styles/pack.module.css";
// import { FaStar } from "react-icons/fa";

// // Map Persian color names to hex
// const colorMap = {
//   سفید: "#ffffff",
//   مشکی: "#000000",
//   آبی: "#3b82f6",
//   "سرمه‌ای": "#1e3a8a",
//   قرمز: "#ef4444",
//   زرد: "#facc15",
//   "آبی روشن": "#60a5fa"
// };

// function mapColorToHex(name) {
//   return colorMap[name] || "#d1d5db";
// }

// export default function PackBox({
//   image,
//   name,
//   priceToman,
//   sizes,
//   colors,
//   rating,
//   itemsIncluded
// }) {
//   return (
//     <div className={styles.packBox}>
//       <img src={image} alt={name} className={styles.image} />

//       <div className={styles.content}>
//         <h2 className={styles.name}>{name}</h2>

//         <div className={styles.stars}>
//           {Array.from({ length: 5 }).map((_, i) => (
//             <FaStar
//               key={i}
//               className={i < rating ? styles.starFilled : styles.starEmpty}
//             />
//           ))}
//         </div>

//         <ul className={styles.list}>
//           {itemsIncluded.map((item, idx) => (
//             <li key={idx}>{item}</li>
//           ))}
//         </ul>

//         <p className={styles.price}>
//           <strong>قیمت:</strong> {priceToman.toLocaleString()} تومان
//         </p>

//         <p>
//           <strong>سایزها:</strong> {sizes.join(" / ")}
//         </p>

//         <div className={styles.colors}>
//           {colors.map((color, i) => (
//             <span
//               key={i}
//               title={color}
//               className={styles.colorBox}
//               style={{ backgroundColor: mapColorToHex(color) }}
//             ></span>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }














"use client";

import { ShoppingCart } from "lucide-react";
import styles from "@/styles/pack.module.css";
import { FaStar } from "react-icons/fa";
import useCartStore from "@/store/useCartStore";

const colorMap = {
  سفید: "#ffffff",
  مشکی: "#000000",
  آبی: "#3b82f6",
  "سرمه‌ای": "#1e3a8a",
  قرمز: "#ef4444",
  زرد: "#facc15",
  "آبی روشن": "#60a5fa",
};

export default function PackBox({
  id,
  image,
  name,
  priceToman,
  sizes,
  colors,
  rating = 4,
  itemsIncluded = [],
}) {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({ id, name, priceToman });
  };

  return (
    <div className={styles.packBox}>
      <img src={image} alt={name} className={styles.image} />

      <div className={styles.content}>
        <h2 className={styles.name}>{name}</h2>

        <div className={styles.stars}>
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={i < rating ? styles.starFilled : styles.starEmpty}
            />
          ))}
        </div>

        <ul className={styles.list}>
          {itemsIncluded.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        <p className={styles.price}>
          <strong>قیمت:</strong> {priceToman.toLocaleString()} تومان
        </p>

        {/* <p>
          <strong>سایزها:</strong> {sizes.join(" / ")}
        </p> */}

        {/* <div className={styles.colors}>
          {colors.map((color, i) => (
            <span
              key={i}
              title={color}
              className={styles.colorBox}
              style={{ backgroundColor: colorMap[color] || "#d1d5db" }}
            ></span>
          ))}
        </div> */}

        <button
          onClick={handleAddToCart}
          style={{
            marginTop: "0.5rem",
            padding: "0.3rem 0.5rem",
            background: "#10b981",
            color: "white",
            border: "none",
            borderRadius: "0.25rem",
            cursor: "pointer",
          }}
        >
          <ShoppingCart size={16} /> افزودن به سبد خرید
        </button>
      </div>
    </div>
  );
}









