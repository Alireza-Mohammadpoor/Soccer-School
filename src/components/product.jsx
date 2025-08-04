// import React from "react";
// import { ShoppingCart } from "lucide-react";
// import styles from "@/styles/product.module.css";
// import { FaStar } from "react-icons/fa";

// const colorMap = {
//   "سفید": "#ffffff",
//   "مشکی": "#000000",
//   "آبی": "#3b82f6",
//   "سرمه‌ای": "#1e3a8a",
//   "قرمز": "#ef4444",
//   "زرد": "#facc15",
// };

// function mapColorToHex(name) {
//   return colorMap[name] || "#d1d5db";
// }

// export default function ProductBox({
//   image,
//   name,
//   priceToman,
//   sizes,
//   colors,
//   rating = 4,
// }) {
//   return (
//     <div className={styles.productBox}>
//       <div className={styles.imageContainer}>
//         <img
//           src={image}
//           alt={name}
//           loading="lazy"
//           className={styles.productImage}
//         />
//       </div>

//       <div className={styles.info}>
//         <h2 className={styles.title}>{name}</h2>

//         <div className={styles.stars}>
//           {Array.from({ length: 5 }, (_, i) => (
//             <FaStar
//               key={i}
//               className={i < rating ? styles.starFilled : styles.starEmpty}
//             />
//           ))}
//         </div>

//         <p className={styles.detailsSub}>
//           <strong>سایزها:</strong> {sizes.join(" / ")}
//         </p>

//         <div className={styles.priceColors}>
//           <p className={styles.price}>
//             <strong>قیمت:</strong> {priceToman.toLocaleString()} تومان
//           </p>

//           <div className={styles.colors}>
//             {colors.map((color, index) => (
//               <span
//                 key={index}
//                 className={styles.colorBox}
//                 title={color}
//                 style={{ backgroundColor: mapColorToHex(color) }}
//               ></span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }









// "use client";

// import { ShoppingCart } from "lucide-react";
// import styles from "@/styles/product.module.css";
// import { FaStar } from "react-icons/fa";
// import useCartStore from "@/store/useCartStore";

// export default function ProductBox({
//   id,
//   image,
//   name,
//   priceToman,
//   sizes,
//   colors,
//   rating = 4,
// }) {
//   const addToCart = useCartStore((state) => state.addToCart);

//   const colorMap = {
//     سفید: "#ffffff",
//     مشکی: "#000000",
//     آبی: "#3b82f6",
//     "سرمه‌ای": "#1e3a8a",
//     قرمز: "#ef4444",
//     زرد: "#facc15",
//   };

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();
//     addToCart({ id, name, priceToman });
//   };

//   return (
//     <div className={styles.productBox}>
//       <div className={styles.imageContainer}>
//         <img src={image} alt={name} loading="lazy" className={styles.productImage} />
//       </div>

//       <div className={styles.info}>
//         <h2 className={styles.title}>{name}</h2>
//         <div className={styles.stars}>
//           {Array.from({ length: 5 }, (_, i) => (
//             <FaStar
//               key={i}
//               className={i < rating ? styles.starFilled : styles.starEmpty}
//             />
//           ))}
//         </div>
//         <p className={styles.detailsSub}>
//           <strong>سایزها:</strong> {sizes.join(" / ")}
//         </p>
//         <div className={styles.priceColors}>
//           <p className={styles.price}>
//             <strong>قیمت:</strong> {priceToman.toLocaleString()} تومان
//           </p>
//           <div className={styles.colors}>
//             {colors.map((color, index) => (
//               <span
//                 key={index}
//                 className={styles.colorBox}
//                 title={color}
//                 style={{ backgroundColor: colorMap[color] || "#d1d5db" }}
//               ></span>
//             ))}
//           </div>
//         </div>
//         <button
//           style={{
//             marginTop: "0.5rem",
//             padding: "0.3rem 0.5rem",
//             background: "#10b981",
//             color: "white",
//             border: "none",
//             borderRadius: "0.25rem",
//             cursor: "pointer",
//           }}
//           onClick={handleAddToCart}
//         >
//           <ShoppingCart size={16} /> افزودن به سبد خرید
//         </button>
//       </div>
//     </div>
//   );
// }










// "use client";

// import { useState } from "react";
// import { ShoppingCart } from "lucide-react";
// import styles from "@/styles/product.module.css";
// import { FaStar } from "react-icons/fa";
// import useCartStore from "@/store/useCartStore";

// export default function ProductBox({
//   id,
//   image,
//   name,
//   priceToman,
//   sizes,
//   colors,
//   rating = 4,
// }) {
//   const addToCart = useCartStore((state) => state.addToCart);
//   const [selectedSize, setSelectedSize] = useState("");
//   const [selectedColor, setSelectedColor] = useState("");
//   const [error, setError] = useState("");

//   const colorMap = {
//     سفید: "#ffffff",
//     مشکی: "#000000",
//     آبی: "#3b82f6",
//     "سرمه‌ای": "#1e3a8a",
//     قرمز: "#ef4444",
//     زرد: "#facc15",
//   };

//   const handleAddToCart = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     if (!selectedSize || !selectedColor) {
//       setError("لطفاً سایز و رنگ محصول را انتخاب کنید.");
//       return;
//     }

//     setError("");
//     addToCart({ id, name, priceToman, size: selectedSize, color: selectedColor });
//   };

//   return (
//     <div className={styles.productBox}>
//       <div className={styles.imageContainer}>
//         <img src={image} alt={name} loading="lazy" className={styles.productImage} />
//       </div>

//       <div className={styles.info}>
//         <h2 className={styles.title}>{name}</h2>
// 			{/* Image Button for Add to Cart */}
// 			<img
// 			src="shopping-cart.png"
// 			alt="Add to Cart"
// 			className={styles.addImageButton}
// 			onClick={handleAddToCart}
// 			/>

//         {/* Rating */}
//         <div className={styles.stars}>
//           {Array.from({ length: 5 }, (_, i) => (
//             <FaStar
//               key={i}
//               className={i < rating ? styles.starFilled : styles.starEmpty}
//             />
//           ))}
//         </div>

//         {/* Sizes */}
//         <div style={{ margin: "1rem 0" }}>
//           <strong>سایز:</strong>
//           <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
//             {sizes.map((size) => (
//               <button
//                 key={size}
//                 onClick={() => setSelectedSize(size)}
//                 style={{
//                   padding: "0.4rem 0.6rem",
//                   border: selectedSize === size ? "2px solid black" : "1px solid #ccc",
//                   borderRadius: "46px",
//                   background: selectedSize === size ? "#f0f0f0" : "#fff",
//                   cursor: "pointer",
// 						fontSize : "0.8rem",
// 						fontWeight : "600"
//                 }}
//               >
//                 {size}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Colors */}
//         <div style={{ margin: "1rem 0" }}>
//           <strong>رنگ:</strong>
//           <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
//             {colors.map((color) => (
//               <span
//                 key={color}
//                 onClick={() => setSelectedColor(color)}
//                 title={color}
//                 style={{
//                   width: "30px",
//                   height: "30px",
//                   borderRadius: "50%",
//                   backgroundColor: colorMap[color] || "#ccc",
//                   border: selectedColor === color ? "2px solid black" : "1px solid #999",
//                   cursor: "pointer",
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Error */}
//         {error && (
//           <p style={{ color: "#ef4444", fontWeight: "600", marginBottom: "0.5rem" }}>
//             {error}
//           </p>
//         )}

//         {/* Price */}
//         <p className={styles.price}>
//           <strong>قیمت:</strong> {priceToman.toLocaleString()} تومان
//         </p>

//         {/* Add to Cart */}
//         {/* <button
//           onClick={handleAddToCart}
//           style={{
//             marginTop: "0.5rem",
//             padding: "0.5rem 1rem",
//             background: "#10b981",
//             color: "white",
//             border: "none",
//             borderRadius: "6px",
//             cursor: "pointer",
//             fontSize: "1rem",
//             display: "flex",
//             alignItems: "center",
//             gap: "0.5rem",
//           }}
//         >
//           <ShoppingCart size={18} />
//           افزودن به سبد خرید
//         </button> */}
//       </div>
//     </div>
//   );
// }








"use client";

import { useState } from "react";
import styles from "@/styles/product.module.css";
import { FaStar } from "react-icons/fa";
import useCartStore from "@/store/useCartStore";
import { ShoppingCart } from 'lucide-react';


export default function ProductBox({
  id,
  image,
  name,
  priceToman,
  sizes,
  colors,
  rating = 4,
}) {
  const addToCart = useCartStore((state) => state.addToCart);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState(false);

  const colorMap = {
    سفید: "#ffffff",
    مشکی: "#000000",
    قرمز: "red",
    "سرمه‌ای": "#1e3a8a",
    قرمز: "#ef4444",
    زرد: "#facc15",
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();

    if (!selectedSize || !selectedColor) {
      setError("لطفاً سایز و رنگ محصول را انتخاب کنید.");
      return;
    }

    setError("");
    addToCart({ id, name, priceToman, size: selectedSize, color: selectedColor });

    setSuccessMessage(true);
    setTimeout(() => setSuccessMessage(false), 3000);
  };

  return (
    <div className={styles.productBox} style={{ position: "relative" }}>
      <div className={styles.imageContainer}>
        <img src={image} alt={name} loading="lazy" className={styles.productImage} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{name}</h2>

        <div className={styles.stars}>
          {Array.from({ length: 5 }, (_, i) => (
            <FaStar
              key={i}
              className={i < rating ? styles.starFilled : styles.starEmpty}
            />
          ))}
        </div>

        <div style={{ margin: "1rem 0", display : "flex", textAlign : "center", alignItems : "center", gap : "5px" }}>
          <strong>سایز:</strong>
          <div style={{ display: "flex", gap: "0.2rem", marginTop: "0.5rem", flexWrap: "wrap", background : "inherit" }}>
            {sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                style={{
                  padding: "0.3rem 0.5rem",
                  border: selectedSize === size ? "2px solid black" : "1px solid #ccc",
                  borderRadius: "46px",
                  background: selectedSize === size ? "#f0f0f0" : "#fff",
                  cursor: "pointer",
                  fontSize: "0.7rem",
                  fontWeight: "700",
                }}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div style={{ margin: "1rem 0", display : "flex", textAlign : "center", alignItems : "center", gap : "5px" }}>
          <strong>رنگ:</strong>
          <div style={{ display: "flex", gap: "0.3rem", marginTop: "0.5rem", flexWrap: "wrap" }}>
            {colors.map((color) => (
              <span
                key={color}
                onClick={() => setSelectedColor(color)}
                title={color}
                style={{
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  backgroundColor: colorMap[color] || "#ccc",
                  border: selectedColor === color ? "2px solid black" : "1px solid #999",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>
        </div>

        {error && (
          <p style={{ color: "#ef4444", fontWeight: "600", marginBottom: "0.5rem" }}>
            {error}
          </p>
        )}

        {successMessage && (
          <div style={{
            backgroundColor: "#d1fae5",
            color: "#065f46",
            padding: "0.5rem 1rem",
            marginTop: "0.5rem",
				marginBottom : "0.8rem",
            borderRadius: "0.5rem",
            fontSize: "0.9rem",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "0.5rem"
          }}>
            ✅ به سبد خرید اضافه شد!
          </div>
        )}

        <p className={styles.price}>
          {priceToman.toLocaleString()} تومان
        </p>
      </div>

      {/* ✅ Add to cart image button (bottom-left) */}
      <img
        src="/add-to-cart.png"
        alt="افزودن به سبد خرید"
        onClick={handleAddToCart}
        style={{
          position: "absolute",
          bottom: "1rem",
          left: "1rem",
          width: "30px",
          height: "30px",
          cursor: "pointer",
          transition: "transform 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />
		
    </div>
  );
}
