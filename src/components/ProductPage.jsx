// "use client";
// import React from "react";
// import ProductBox from "./product";
// import soccerSchoolSales from "@/data/soccerProducts";
// import styles from "@/styles/pp.module.css";

// export default function ProductsPage() {
//   const products = soccerSchoolSales.categories.find(
//     (cat) => cat.name === "لباس"
//   )?.items;

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>محصولات پوشاک</h1>

//       <div className={styles.grid}>
//         {products?.map((item) => (
//           <ProductBox
//             key={item.id}
//             image={item.image}
//             name={item.name}
//             priceToman={item.priceToman}
//             sizes={item.sizes}
//             colors={item.colors}
//             rating={item.rating}
//           />
//         ))}
//       </div>
//     </main>
//   );
// }








// "use client";
// import React, { useState } from "react";
// // import ProductBox from "./ProductBox";
// // import PackBox from "./PackBox";
// // import soccerSchoolSales from "@/data/soccerSchoolSales";
// import styles from "@/styles/pp.module.css";
// import PackBox from "./packBox";
// import ProductBox from "./product";
// import soccerSchoolSales from "@/data/soccerProducts";

// export default function ProductsPage() {
//   const [selectedCategory, setSelectedCategory] = useState("لباس");

//   const categoryData = soccerSchoolSales.categories.find(
//     (cat) => cat.name === selectedCategory
//   );

//   const handleCategoryChange = (category) => {
//     setSelectedCategory(category);
//   };

//   return (
//     <main className={styles.main}>
//       <h1 className={styles.title}>فروشگاه مدرسه فوتبال</h1>

//       <div className={styles.filterButtons}>
//         <button
//           className={`${styles.filterButton} ${
//             selectedCategory === "لباس" ? styles.active : ""
//           }`}
//           onClick={() => handleCategoryChange("لباس")}
//         >
//           لباس
//         </button>
//         <button
//           className={`${styles.filterButton} ${
//             selectedCategory === "پک‌ها" ? styles.active : ""
//           }`}
//           onClick={() => handleCategoryChange("پک‌ها")}
//         >
//           پک‌ها
//         </button>
//       </div>

//       <div className={styles.grid}>
//         {categoryData?.items.map((item) =>
//           selectedCategory === "لباس" ? (
//             <ProductBox
//               key={item.id}
//               image={item.image}
//               name={item.name}
//               priceToman={item.priceToman}
//               sizes={item.sizes}
//               colors={item.colors}
//               rating={item.rating}
//             />
//           ) : (
//             <PackBox
//               key={item.id}
//               image={item.image}
//               name={item.name}
//               priceToman={item.priceToman}
//               sizes={item.sizes}
//               colors={item.colors}
//               rating={item.rating}
//               itemsIncluded={item.itemsIncluded}
//             />
//           )
//         )}
//       </div>
//     </main>
//   );
// }






"use client";

import React, { useState } from "react";
import styles from "@/styles/pp.module.css";
import PackBox from "./packBox";
import ProductBox from "./product";
import soccerSchoolSales from "@/data/soccerProducts";

export default function ProductPage() {
  const [selectedCategory, setSelectedCategory] = useState("لباس");

  const categoryData = soccerSchoolSales.categories.find(
    (cat) => cat.name === selectedCategory
  );

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>فروشگاه مدرسه فوتبال</h1>

      <div className={styles.filterButtons}>
        <button
          className={`${styles.filterButton} ${
            selectedCategory === "لباس" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("لباس")}
        >
          لباس
        </button>
        <button
          className={`${styles.filterButton} ${
            selectedCategory === "پک‌ها" ? styles.active : ""
          }`}
          onClick={() => handleCategoryChange("پک‌ها")}
        >
          پک‌ها
        </button>
      </div>

      <div className={styles.grid}>
        {categoryData?.items.map((item) =>
          selectedCategory === "لباس" ? (
            <ProductBox
              key={item.id}
              id={item.id} // ✅ Pass ID
              image={item.image}
              name={item.name}
              priceToman={item.priceToman}
              sizes={item.sizes}
              colors={item.colors}
              rating={item.rating}
            />
          ) : (
            <PackBox
              key={item.id}
              id={item.id} // ✅ Pass ID
              image={item.image}
              name={item.name}
              priceToman={item.priceToman}
            //   sizes={item.sizes}
            //   colors={item.colors}
              rating={item.rating}
              itemsIncluded={item.itemsIncluded}
            />
          )
        )}
      </div>
    </main>
  );
}
