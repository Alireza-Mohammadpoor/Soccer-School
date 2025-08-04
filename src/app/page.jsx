// import Image from "next/image";
// import styles from "./page.module.css";
// import Navbar from "@/components/nav";

// export default function Home() {
//   return (
//     <div className={styles.page}>
//       <Navbar />
//     </div>
//   );
// }

// import Navbar from '@/components/nav';
// import styles from '@/styles/background.module.css';

// export default function HomePage() {
//   return (
//     <div className={styles.fullPage}>
//       <Navbar />
//       <div className={styles.content}>
//         <h1>به دنیای مد خوش آمدید</h1>
//         <p>جذاب‌ترین استایل‌ها را اینجا کشف کنید</p>
//       </div>
		
//     </div>
//   );
// }









// // src/app/page.jsx

// export default function HomePage() {
//   return (
//     <div>
// 			<h1>hello</h1>
//     </div>
//   );
// }





// // src/app/page.jsx
// import Navbar from '@/components/nav';
// import Images from '@/components/images';
// import ProductsPage from '@/components/ProductPage';
// import Footer from '@/components/footer';

// export default function HomePage() {
//   return (
//     <>
//       <Navbar />
//       <Images />
// 		<ProductsPage />
// 		<Footer />
//     </>
//   );
// }










import Navbar from "@/components/nav";
import Images from "@/components/images";
// import ProductsPage from "@/components/ProductPage";
import Footer from "@/components/footer";
import ProductsPage from "@/components/ProductPage";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Images />
      <ProductsPage />
      <Footer />
    </>
  );
}






