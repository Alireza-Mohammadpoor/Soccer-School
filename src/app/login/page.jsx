// "use client";
// import { useRouter } from "next/navigation";
// import { useUser } from "@/context/UserContext";
// import { useState } from "react";

// export default function LoginPage() {
//   const { setUser } = useUser();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const router = useRouter();

//   const handleLogin = () => {
//     if (name.trim() === "12345") {
//       // Secret admin login
//       router.push("/admin/orders");
//       return;
//     }

//     // Normal user login
//     setUser({ name, email });
//     router.push("/");
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>ورود</h1>
//       <input
//         placeholder="نام"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         style={{ margin: "0.5rem", padding: "0.5rem" }}
//       />
//       <input
//         placeholder="ایمیل"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         style={{ margin: "0.5rem", padding: "0.5rem" }}
//       />
//       <button onClick={handleLogin}>ورود</button>
//     </div>
//   );
// }









// "use client";
// import { useRouter } from "next/navigation";
// import { useUser } from "@/context/UserContext";
// import { useState } from "react";

// export default function LoginPage() {
//   const { setUser } = useUser();
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [errors, setErrors] = useState({});
//   const router = useRouter();

//   const handleLogin = () => {
//     let newErrors = {};

//     if (name.trim() === "") {
//       newErrors.name = "نام را وارد کنید";
//     }
//     if (name.trim() !== "12345" && email.trim() === "") {
//       // For normal users, email is required
//       newErrors.email = "ایمیل را وارد کنید";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return; // stop login
//     }

//     if (name.trim() === "12345") {
//       // Secret admin login
//       router.push("/admin/orders");
//       return;
//     }

//     // Normal user login
//     setUser({ name, email });
//     router.push("/");
//   };

//   return (
//     <div style={{ padding: "2rem" }}>
//       <h1>ورود</h1>
//       <input
//         placeholder="نام"
//         value={name}
//         onChange={(e) => {
//           setName(e.target.value);
//           setErrors((prev) => ({ ...prev, name: undefined }));
//         }}
//         style={{ margin: "0.5rem", padding: "0.5rem", borderColor: errors.name ? "red" : undefined }}
//       />
//       {errors.name && (
//         <div style={{ color: "red", marginBottom: "0.5rem" }}>{errors.name}</div>
//       )}
//       <input
//         placeholder="ایمیل"
//         value={email}
//         onChange={(e) => {
//           setEmail(e.target.value);
//           setErrors((prev) => ({ ...prev, email: undefined }));
//         }}
//         style={{ margin: "0.5rem", padding: "0.5rem", borderColor: errors.email ? "red" : undefined }}
//       />
//       {errors.email && (
//         <div style={{ color: "red", marginBottom: "0.5rem" }}>{errors.email}</div>
//       )}
//       <button onClick={handleLogin}>ورود</button>
//     </div>
//   );
// }







"use client";
import { useRouter } from "next/navigation";
import { useUser } from "@/context/UserContext";
import { useState } from "react";

export default function LoginPage() {
  const { setUser } = useUser();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const router = useRouter();

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^\d+$/.test(phone); // only digits allowed
  };

  const handleLogin = () => {
    let newErrors = {};

    if (name.trim() === "") {
      newErrors.name = "نام را وارد کنید";
    }

    if (name.trim() !== "12345") {
      if (email.trim() === "") {
        newErrors.email = "ایمیل را وارد کنید";
      } else if (!validateEmail(email.trim())) {
        newErrors.email = "ایمیل معتبر نیست";
      }

      if (phone.trim() === "") {
        newErrors.phone = "شماره تلفن را وارد کنید";
      } else if (!validatePhone(phone.trim())) {
        newErrors.phone = "شماره تلفن باید فقط شامل اعداد باشد";
      }
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (name.trim() === "12345") {
      router.push("/admin/orders");
      return;
    }

    setUser({ name, email, phone });
    router.push("/");
  };

  return (
    <div
      style={{
        fontFamily: "'Vazirmatn', sans-serif",
        direction: "rtl",
        maxWidth: "400px",
        margin: "4rem auto",
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#222",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "1.5rem", textAlign: "center", fontWeight: "700" }}>
        ورود به حساب کاربری
      </h1>

      <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "600" }}>
        نام
      </label>
      <input
        placeholder="نام"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setErrors((prev) => ({ ...prev, name: undefined }));
        }}
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: errors.name ? "2px solid #ff5252" : "2px solid #444",
          backgroundColor: "#333",
          color: "white",
          outline: "none",
          marginBottom: errors.name ? "0.5rem" : "1.5rem",
          transition: "border-color 0.3s",
          fontSize: "1rem",
        }}
        autoComplete="off"
      />
      {errors.name && (
        <div style={{ color: "#ff5252", marginBottom: "1rem", fontWeight: "600" }}>
          {errors.name}
        </div>
      )}

      <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "600" }}>
        ایمیل
      </label>
      <input
        placeholder="ایمیل"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setErrors((prev) => ({ ...prev, email: undefined }));
        }}
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: errors.email ? "2px solid #ff5252" : "2px solid #444",
          backgroundColor: "#333",
          color: "white",
          outline: "none",
          marginBottom: errors.email ? "0.5rem" : "1.5rem",
          transition: "border-color 0.3s",
          fontSize: "1rem",
        }}
        autoComplete="off"
      />
      {errors.email && (
        <div style={{ color: "#ff5252", marginBottom: "1rem", fontWeight: "600" }}>
          {errors.email}
        </div>
      )}

      <label style={{ display: "block", marginBottom: "0.3rem", fontWeight: "600" }}>
        شماره تلفن
      </label>
      <input
        placeholder="شماره تلفن"
        value={phone}
        onChange={(e) => {
          setPhone(e.target.value);
          setErrors((prev) => ({ ...prev, phone: undefined }));
        }}
        style={{
          width: "100%",
          padding: "0.7rem",
          borderRadius: "6px",
          border: errors.phone ? "2px solid #ff5252" : "2px solid #444",
          backgroundColor: "#333",
          color: "white",
          outline: "none",
          marginBottom: errors.phone ? "0.5rem" : "2rem",
          transition: "border-color 0.3s",
          fontSize: "1rem",
        }}
        autoComplete="off"
      />
      {errors.phone && (
        <div style={{ color: "#ff5252", marginBottom: "1rem", fontWeight: "600" }}>
          {errors.phone}
        </div>
      )}

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          backgroundColor: "#10b981",
          color: "white",
          border: "none",
          padding: "0.75rem",
          borderRadius: "8px",
          fontWeight: "700",
          fontSize: "1.1rem",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
          userSelect: "none",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#059669")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#10b981")}
      >
        ورود
      </button>
    </div>
  );
}
