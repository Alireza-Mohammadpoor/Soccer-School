




// "use client";

// import React, { useEffect, useState } from "react";

// const ADMIN_PASSWORD = "12345";

// export default function AdminOrdersPage() {
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [orders, setOrders] = useState([]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//       const stored = localStorage.getItem("orders");
//       if (stored) {
//         setOrders(JSON.parse(stored));
//       }
//     } else {
//       alert("رمز عبور اشتباه است");
//     }
//   };

//   // 🧹 Remove order from state and localStorage
//   const handleDeleteOrder = (id) => {
//     const updatedOrders = orders.filter((order) => order.id !== id);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   if (!isAuthenticated) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h1>صفحه ورود مدیریت</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="password"
//             placeholder="رمز عبور"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: "0.5rem", fontSize: "1rem" }}
//           />
//           <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
//             ورود
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>پنل مدیریت سفارشات</h1>
//       {orders.length === 0 ? (
//         <p>سفارشی ثبت نشده است.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "1rem",
//               marginBottom: "1rem",
//               position: "relative",
//             }}
//           >
//             {/* 🗑️ Delete icon */}
//             <button
//               onClick={() => handleDeleteOrder(order.id)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 color: "#ef4444",
//               }}
//               title="حذف سفارش"
//             >
//               🗑️
//             </button>

//             <h3>سفارش: {order.id}</h3>
//             <p>
//               نام: {order.userDetails.fullName} <br />
//               تلفن: {order.userDetails.phone} <br />
//               آدرس: {order.userDetails.address}
//             </p>
//             <p>تاریخ: {new Date(order.createdAt).toLocaleString()}</p>
//             <h4>محصولات:</h4>
//             <ul>
//               {order.cart.map((item, idx) => (
//                 <li key={idx}>
//                   {item.name} - تعداد: {item.quantity} - قیمت:{" "}
//                   {(item.priceToman).toLocaleString()} تومان
//                 </li>
//               ))}
//             </ul>
//             <h4>
//               جمع کل:{" "}
//               {order.cart
//                 .reduce((sum, i) => sum + i.priceToman * i.quantity, 0)
//                 .toLocaleString()}{" "}
//               تومان
//             </h4>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }










// "use client";

// import React, { useEffect, useState } from "react";

// const ADMIN_PASSWORD = "12345";

// export default function AdminOrdersPage() {
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [orders, setOrders] = useState([]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//       const stored = localStorage.getItem("orders");
//       if (stored) {
//         setOrders(JSON.parse(stored));
//       }
//     } else {
//       alert("رمز عبور اشتباه است");
//     }
//   };

//   const handleDeleteOrder = (id) => {
//     const updatedOrders = orders.filter((order) => order.id !== id);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   if (!isAuthenticated) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h1>صفحه ورود مدیریت</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="password"
//             placeholder="رمز عبور"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: "0.5rem", fontSize: "1rem" , color : "white"}}
//           />
//           <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
//             ورود
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>پنل مدیریت سفارشات</h1>
//       {orders.length === 0 ? (
//         <p>سفارشی ثبت نشده است.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "1rem",
//               marginBottom: "1rem",
//               position: "relative",
//             }}
//           >
//             <button
//               onClick={() => handleDeleteOrder(order.id)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 color: "#ef4444",
//               }}
//               title="حذف سفارش"
//             >
//               🗑️
//             </button>

//             <h3>سفارش: {order.id}</h3>
//             <p>
//               نام: {order.userDetails.fullName} <br />
//               تلفن: {order.userDetails.phone} <br />
//               آدرس: {order.userDetails.address}
//             </p>
//             <p>تاریخ: {new Date(order.createdAt).toLocaleString()}</p>
//             <h4>محصولات:</h4>
//             <ul>
//               {order.cart.map((item, idx) => (
//                 <li key={idx} style={{ marginBottom: "0.5rem" }}>
//                   <div>
//                     <strong>{item.name}</strong> - تعداد: {item.quantity} - قیمت: {item.priceToman.toLocaleString()} تومان
//                   </div>
//                   {item.size && (
//                     <div>سایز انتخابی: <strong>{item.size}</strong></div>
//                   )}
//                  {item.color && (
// 							<>
// 								<div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
// 									رنگ انتخابی: <span>{item.color}</span>
// 									<span
// 									style={{
// 										width: "16px",
// 										height: "16px",
// 										borderRadius: "50%",
// 										backgroundColor: item.colorCode || "#ccc",
// 										border: "1px solid #999",
// 									}}
// 									/>
// 								</div>
// 								<hr style={{ margin: "0.5rem 0", borderColor: "black", width : "auto" }} />
// 							</>
// 							)}

// 												</li>
// 											))}
// 											</ul>
//             <h4>
//               جمع کل: {order.cart.reduce((sum, i) => sum + i.priceToman * i.quantity, 0).toLocaleString()} تومان
//             </h4>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }












// "use client";

// import React, { useState } from "react";

// const ADMIN_PASSWORD = "12345";

// export default function AdminOrdersPage() {
//   const [password, setPassword] = useState("");
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const [orders, setOrders] = useState([]);

//   const handleLogin = (e) => {
//     e.preventDefault();
//     if (password === ADMIN_PASSWORD) {
//       setIsAuthenticated(true);
//       const stored = localStorage.getItem("orders");
//       if (stored) {
//         setOrders(JSON.parse(stored));
//       }
//     } else {
//       alert("رمز عبور اشتباه است");
//     }
//   };

//   const handleDeleteOrder = (id) => {
//     const updatedOrders = orders.filter((order) => order.id !== id);
//     setOrders(updatedOrders);
//     localStorage.setItem("orders", JSON.stringify(updatedOrders));
//   };

//   if (!isAuthenticated) {
//     return (
//       <div style={{ padding: "2rem" }}>
//         <h1>صفحه ورود مدیریت</h1>
//         <form onSubmit={handleLogin}>
//           <input
//             type="password"
//             placeholder="رمز عبور"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             style={{ padding: "0.5rem", fontSize: "1rem", color: "white" }}
//           />
//           <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
//             ورود
//           </button>
//         </form>
//       </div>
//     );
//   }

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>پنل مدیریت سفارشات</h1>
//       {orders.length === 0 ? (
//         <p>سفارشی ثبت نشده است.</p>
//       ) : (
//         orders.map((order) => (
//           <div
//             key={order.id}
//             style={{
//               border: "1px solid #ccc",
//               borderRadius: "8px",
//               padding: "1rem",
//               marginBottom: "1rem",
//               position: "relative",
//             }}
//           >
//             {/* Top-right delete button */}
//             {/* <button
//               onClick={() => handleDeleteOrder(order.id)}
//               style={{
//                 position: "absolute",
//                 top: "10px",
//                 right: "10px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 color: "#ef4444",
//               }}
//               title="حذف سفارش"
//             >
//               🗑️
//             </button> */}

//             {/* Bottom-left delete button */}
//             <button
//               onClick={() => handleDeleteOrder(order.id)}
//               style={{
//                 position: "absolute",
//                 bottom: "10px",
//                 left: "10px",
//                 background: "none",
//                 border: "none",
//                 fontSize: "1.2rem",
//                 cursor: "pointer",
//                 color: "#ef4444",
//               }}
//               title="حذف سفارش"
//             >
//               🗑️
//             </button>

//             <h3>سفارش: {order.id}</h3>
//             <p>
//               نام: {order.userDetails.fullName} <br />
//               تلفن: {order.userDetails.phone} <br />
//               آدرس: {order.userDetails.address}
//             </p>
//             <p>تاریخ: {new Date(order.createdAt).toLocaleString()}</p>
//             <h4>محصولات:</h4>
//             <ul>
//               {order.cart.map((item, idx) => (
//                 <li key={idx} style={{ marginBottom: "0.5rem" }}>
//                   <div>
//                     <strong>{item.name}</strong> - تعداد: {item.quantity} - قیمت:{" "}
//                     {item.priceToman.toLocaleString()} تومان
//                   </div>
//                   {item.size && (
//                     <div>
//                       سایز انتخابی: <strong>{item.size}</strong>
//                     </div>
//                   )}
//                   {item.color && (
//                     <>
//                       <div
//                         style={{
//                           display: "flex",
//                           alignItems: "center",
//                           gap: "0.5rem",
//                         }}
//                       >
//                         رنگ انتخابی: <span>{item.color}</span>
//                         <span
//                           style={{
//                             width: "16px",
//                             height: "16px",
//                             borderRadius: "50%",
//                             backgroundColor: item.colorCode || "#ccc",
//                             border: "1px solid #999",
//                           }}
//                         />
//                       </div>
//                       <hr
//                         style={{
//                           margin: "0.5rem 0",
//                           borderColor: "#ccc",
//                           borderWidth: "1px",
//                         }}
//                       />
//                     </>
//                   )}
//                 </li>
//               ))}
//             </ul>
//             <h4>
//               جمع کل:{" "}
//               {order.cart
//                 .reduce((sum, i) => sum + i.priceToman * i.quantity, 0)
//                 .toLocaleString()}{" "}
//               تومان
//             </h4>
//           </div>
//         ))
//       )}
//     </div>
//   );
// }














"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ADMIN_PASSWORD = "12345";

export default function AdminOrdersPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState([]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      const stored = localStorage.getItem("orders");
      if (stored) {
        setOrders(JSON.parse(stored));
      }
    } else {
      alert("رمز عبور اشتباه است");
    }
  };

  const handleDeleteOrder = (id) => {
    const updatedOrders = orders.filter((order) => order.id !== id);
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  if (!isAuthenticated) {
    return (
      <div style={{ padding: "2rem", position: "relative" }}>
        {/* Home link at top-left */}
        <Link href="/" style={{ position: "absolute", top: "1rem", left: "1rem" }}>
          <Image src="/home.png" alt="Home" width={32} height={32} />
        </Link>

        <h1>صفحه ورود مدیریت</h1>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="رمز عبور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ padding: "0.5rem", fontSize: "1rem", color: "white" }}
          />
          <button type="submit" style={{ marginLeft: "1rem", padding: "0.5rem" }}>
            ورود
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ padding: "2rem", position: "relative" }}>
      {/* Home link at top-left */}
      <Link href="/" style={{ position: "absolute", top: "1rem", left: "1rem" }}>
        <Image src="/home-page.png" alt="Home" width={25} height={25} />
      </Link>

      <h1>پنل مدیریت سفارشات</h1>
      {orders.length === 0 ? (
        <p>سفارشی ثبت نشده است.</p>
      ) : (
        orders.map((order) => (
          <div
            key={order.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              marginBottom: "1rem",
              position: "relative",
            }}
          >
            {/* Delete button - bottom left */}
            <button
              onClick={() => handleDeleteOrder(order.id)}
              style={{
                position: "absolute",
                bottom: "10px",
                left: "10px",
                background: "none",
                border: "none",
                fontSize: "1.2rem",
                cursor: "pointer",
                color: "#ef4444",
              }}
            //   title="حذف سفارش"
            >
              <img src="/bin.png" alt="bin" style={{width : "25px", height : "25px"}} />
            </button>

            <h3>سفارش: {order.id}</h3>
            <p>
              نام: {order.userDetails.fullName} <br />
              تلفن: {order.userDetails.phone} <br />
              آدرس: {order.userDetails.address}
            </p>
            <p>تاریخ: {new Date(order.createdAt).toLocaleString()}</p>
            <h4>محصولات:</h4>
            <ul>
              {order.cart.map((item, idx) => (
                <li key={idx} style={{ marginBottom: "0.5rem" }}>
                  <div>
                    <strong>{item.name}</strong> - تعداد: {item.quantity} - قیمت:{" "}
                    {item.priceToman.toLocaleString()} تومان
                  </div>
                  {item.size && (
                    <div>
                      سایز انتخابی: <strong>{item.size}</strong>
                    </div>
                  )}
                  {item.color && (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.5rem",
                        }}
                      >
                        رنگ انتخابی: <span>{item.color}</span>
                        <span
                          style={{
                            width: "16px",
                            height: "16px",
                            borderRadius: "50%",
                            backgroundColor: item.colorCode || "#ccc",
                            border: "1px solid #999",
                          }}
                        />
                      </div>
                      <hr
                        style={{
                          margin: "0.5rem 0",
                          borderColor: "#ccc",
                          borderWidth: "1px",
                        }}
                      />
                    </>
                  )}
                </li>
              ))}
            </ul>
            <h4>
              جمع کل:{" "}
              {order.cart
                .reduce((sum, i) => sum + i.priceToman * i.quantity, 0)
                .toLocaleString()}{" "}
              تومان
            </h4>
          </div>
        ))
      )}
    </div>
  );
}
