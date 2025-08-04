// // src/app/layout.jsx
// import './globals.css';

// export const metadata = {
//   title: 'مد روز',
//   description: 'فروشگاه مد و استایل',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa">
//       <body>{children}</body>
//     </html>
//   );
// }








// // src/app/layout.jsx
// // import '../styles/globals.css'; // مسیر به درستی تنظیم شود
// import '@/app/globals.css'; // ✅ درست با alias


// export const metadata = {
//   title: 'مد روز',
//   description: 'فروشگاه مد و استایل',
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="fa">
//       <head />
//       <body>{children}</body>
//     </html>
//   );
// }









// src/app/layout.jsx
// import { UserProvider } from "@/context/UserContext";
import "@/app/globals.css";
import UserProviderWrapper from "@/components/UserProviderWrapper";

export const metadata = {
  title: "مد روز",
  description: "فروشگاه مد و استایل",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <head />
      <body>
        {/* Wrap children inside a client-only provider component */}
        <UserProviderWrapper>{children}</UserProviderWrapper>
      </body>
    </html>
  );
}
