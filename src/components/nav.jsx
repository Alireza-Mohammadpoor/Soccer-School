// // src/components/nav.jsx
// import Link from 'next/link';
// import styles from '@/styles/nav.module.css';

// export default function Navbar() {
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/">مد روز</Link>
//       </div>
//       <ul className={styles.navLinks}>
//         <li><Link href="/">خانه</Link></li>
//         <li><Link href="/about">درباره ما</Link></li>
//         <li><Link href="/contact">تماس با ما</Link></li>
//         <li><Link href="/login">LOGIN</Link></li>
//       </ul>
//     </nav>
//   );
// }








// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";

// export default function Navbar() {
//   const { user } = useUser();

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/">مد روز</Link>
//       </div>

//       <div style={{ marginLeft: "auto", color: "#fff", fontWeight: "bold" }}>
//         {user ? `سلام ${user.name}` : "خوش آمدید"}
//       </div>

//       <ul className={styles.navLinks}>
//         <li><Link href="/">خانه</Link></li>
//         <li><Link href="/about">درباره ما</Link></li>
//         <li><Link href="/contact">تماس با ما</Link></li>
//         <li><Link href="/login">LOGIN</Link></li>
// 		  <li><Link href="/cart">🛒 سبد خرید</Link></li>
//       </ul>
//     </nav>
//   );
// }









// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";

// export default function Navbar() {
//   const { user } = useUser();

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         <Link href="/">
//           <img 
//             src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//             alt="لوگوی مدرسه فوتبال"
//             className={styles.logoImage}
//           />
//         </Link>
//       </div>

//       {/* Navigation Links */}
//       <ul className={styles.navLinks}>
//         <li><Link href="/">خانه</Link></li>
//         <li><Link href="/about">درباره ما</Link></li>
//         <li><Link href="/contact">تماس با ما</Link></li>
//         {!user && <li><Link href="/login">ورود</Link></li>}
//         {user && (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li><Link href="/cart">🛒 سبد خرید</Link></li>
//           </>
//         )}
//         {!user && <li><Link href="/cart">🛒 سبد خرید</Link></li>}
//       </ul>

//       {/* Center Tagline */}
//       <div className={styles.centerText}>
//         با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
//       </div>
//     </nav>
//   );
// }











// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo */}
//       <div className={styles.logo}>
//         <Link href="/">
//           <img
//             src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//             alt="لوگوی مدرسه فوتبال"
//             className={styles.logoImage}
//           />
//         </Link>
//       </div>

//       {/* Hamburger Icon */}
//       <div className={styles.menuIcon} onClick={toggleDrawer}>
//         {drawerOpen ? <FiX size={28} style={{color : "black", position : "fixed", marginRight : "10px"}}/> : <FiMenu size={28} />}
//       </div>

//       {/* Desktop Nav Links */}
//       <ul className={styles.navLinks}>
//         <li><Link href="/">خانه</Link></li>
//         <li><Link href="/about">درباره ما</Link></li>
//         <li><Link href="/contact">تماس با ما</Link></li>
//         {!user && <li><Link href="/login">ورود</Link></li>}
//         {user && (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li><Link href="/cart"> سبد خرید</Link></li>
//           </>
//         )}
//         {!user && <li><Link href="/cart"> سبد خرید</Link></li>}
//       </ul>

//       {/* Mobile Drawer */}
// 		{drawerOpen && (
// 			<>
// 				<div className={styles.overlay} onClick={closeDrawer}></div>
// 				<div className={styles.mobileDrawer}>
// 					<div className={styles.drawerLogo}>
// 					<img
// 						src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
// 						alt="لوگوی مدرسه فوتبال"
// 						className={styles.logoImage}
// 					/>
// 					</div>
// 					<ul className={styles.drawerLinks} onClick={closeDrawer}>
// 					<li><Link href="/">خانه</Link></li>
// 					<li><Link href="/about">درباره ما</Link></li>
// 					<li><Link href="/contact">تماس با ما</Link></li>
// 					{!user && <li><Link href="/login">ورود</Link></li>}
// 					{user && (
// 						<>
// 							<li className={styles.greeting}>سلام {user.name}</li>
// 							<li><Link href="/cart"> سبد خرید</Link></li>
// 						</>
// 					)}
// 					{!user && <li><Link href="/cart"> سبد خرید</Link></li>}
// 					</ul>
// 				</div>
// 			</>
// 			)}



//       {/* Center Tagline */}
//       <div className={styles.centerText}>
//         با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
//       </div>
//     </nav>
//   );
// }














// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   return (
//     <nav className={styles.navbar}>
//       {/* Logo */}
// 			<div className={`${styles.logo} ${!drawerOpen ? styles.mobileFixedTop + ' ' + styles.mobileLogo : ''}`}>
// 			<Link href="/">
// 				<img
// 					src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
// 					alt="لوگوی مدرسه فوتبال"
// 					className={styles.logoImage}
// 				/>
// 			</Link>
// 			</div>


//       {/* Hamburger Icon */}
// 			<div
// 			className={`${styles.menuIcon} ${!drawerOpen ? styles.mobileFixedTop : ''}`}
// 			onClick={toggleDrawer}
// 			>
// 			{drawerOpen ? (
// 				<FiX size={28} style={{ color: "black" }} />
// 			) : (
// 				<FiMenu size={28} />
// 			)}
// 			</div>


//       {/* Desktop Nav Links */}
//       <ul className={styles.navLinks}>
//         <li><Link href="/">خانه</Link></li>
//         <li><Link href="/about">درباره ما</Link></li>
//         <li><Link href="/contact">تماس با ما</Link></li>
//         {!user && <li><Link href="/login">ورود</Link></li>}
//         {user && (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li><Link href="/cart"> سبد خرید</Link></li>
//           </>
//         )}
//         {!user && <li><Link href="/cart"> سبد خرید</Link></li>}
//       </ul>

//       {/* Mobile Drawer */}
// 		{drawerOpen && (
// 			<>
// 				<div className={styles.overlay} onClick={closeDrawer}></div>
// 				<div className={styles.mobileDrawer}>
// 					<div className={styles.drawerLogo}>
// 					<img
// 						src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
// 						alt="لوگوی مدرسه فوتبال"
// 						className={styles.logoImage}
// 					/>
// 					</div>
// 					<ul className={styles.drawerLinks} onClick={closeDrawer}>
// 					<li><Link href="/">خانه</Link></li>
// 					<li><Link href="/about">درباره ما</Link></li>
// 					<li><Link href="/contact">تماس با ما</Link></li>
// 					{!user && <li><Link href="/login">ورود</Link></li>}
// 					{user && (
// 						<>
// 							<li className={styles.greeting}>سلام {user.name}</li>
// 							<li><Link href="/cart"> سبد خرید</Link></li>
// 						</>
// 					)}
// 					{!user && <li><Link href="/cart"> سبد خرید</Link></li>}
// 					</ul>
// 				</div>
// 			</>
// 			)}



//       {/* Center Tagline */}
//       <div className={styles.centerText}>
//         با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
//       </div>
//     </nav>
//   );
// }






// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       {!drawerOpen && scrolled ? (
//         <div className={styles.mobileHeaderBar}>
//           <div className={`${styles.logo} ${styles.mobileLogo}`}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           <div
//             className={`${styles.menuIcon} fixedBar`}
//             onClick={toggleDrawer}
//           >
//             <FiMenu size={28} color="black" />
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className={styles.logo}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           <div className={styles.menuIcon} onClick={toggleDrawer}>
//             {drawerOpen ? (
//               <FiX size={28} color="black" />
//             ) : (
//               <FiMenu size={28} color="white" />
//             )}
//           </div>
//         </>
//       )}

//       <ul className={styles.navLinks}>
//         {/* <li><Link href="/">خانه</Link></li> */}
//         {/* <li><Link href="/about">درباره ما</Link></li> */}
//         {/* <li><Link href="/contact">تماس با ما</Link></li> */}
//         {!user && <li><Link href="/login" style={{display : "flex"}}>ورود <FontAwesomeIcon icon={byPrefixAndName.fas['arrow-right-to-bracket']} /></Link></li>}
//         {user && (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li><Link href="/cart">سبد خرید</Link></li>
//           </>
//         )}
//         {!user && <li><Link href="/cart">سبد خرید</Link></li>}
//       </ul>

//       {drawerOpen && (
//         <>
//           <div className={styles.overlay} onClick={closeDrawer}></div>
//           <div className={styles.mobileDrawer}>
//             <div className={styles.drawerCloseIcon} onClick={closeDrawer}>
//               <FiX size={28} color="black" />
//             </div>
//             <div className={styles.drawerLogo}>
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </div>
//             <ul className={styles.drawerLinks} onClick={closeDrawer}>
//               {/* <li><Link href="/">خانه</Link></li> */}
//               {/* <li><Link href="/about">درباره ما</Link></li> */}
//               {/* <li><Link href="/contact">تماس با ما</Link></li> */}
//               {!user && <li><Link href="/login">ورود</Link></li>}
//               {user && (
//                 <>
//                   <li className={styles.greeting}>سلام {user.name}</li>
//                   <li><Link href="/cart">سبد خرید</Link></li>
//                 </>
//               )}
//               {!user && <li><Link href="/cart">سبد خرید</Link></li>}
//             </ul>
//           </div>
//         </>
//       )}

      // <div className={styles.centerText}>
      //   با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
      // </div>
//     </nav>
//   );
// }











// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       {!drawerOpen && scrolled ? (
//         <div className={styles.mobileHeaderBar}>
//           <div className={`${styles.logo} ${styles.mobileLogo}`}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           <div className={`${styles.menuIcon} fixedBar`} onClick={toggleDrawer}>
//             <FiMenu size={28} color="black" />
//           </div>
//         </div>
//       ) : (
//         <>
//           <div className={styles.logo}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           <div className={styles.menuIcon} onClick={toggleDrawer}>
//             {drawerOpen ? (
//               <FiX size={28} color="black" />
//             ) : (
//               <FiMenu size={28} color="white" />
//             )}
//           </div>
//         </>
//       )}

// 			<ul className={styles.navLinks}>
// 			{!user && (
// 				<>
// 					<li>
// 					<Link href="/login" className={styles.loginLink}>
// 						ورود <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "white" }} />
// 					</Link>
// 					</li>
// 					<li>
// 					<Link href="/cart" className={styles.loginLink}>
// 						سبد خرید
// 					</Link>
// 					</li>
// 				</>
// 			)}

// 			{user && (
// 				<>
// 					<li className={styles.greeting}>سلام {user.name}</li>
// 					<li>
// 					<Link href="/cart" className={styles.loginLink}>
// 						سبد خرید
// 					</Link>
// 					</li>
// 				</>
// 			)}
// 			</ul>


//       {drawerOpen && (
// 			<>
// 				<div className={styles.overlay} onClick={closeDrawer}></div>
// 				<div className={styles.mobileDrawer}>
// 					<div className={styles.drawerHeader}>
// 					<div className={styles.drawerLogo}>
// 						<img
// 							src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
// 							alt="لوگو"
// 							className={styles.logoImage}
// 						/>
// 					</div>
// 					<div className={styles.drawerCloseIcon} onClick={closeDrawer}>
// 						<FiX size={28} color="black" />
// 					</div>
// 					</div>

// 					<ul className={styles.drawerLinks} onClick={closeDrawer}>
// 					{!user && (
// 						<li>
// 							<Link href="/login" className={styles.loginLink} style={{ color: "black" }}>
// 							ورود <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "black" }} />
// 							</Link>
// 						</li>
// 					)}
// 					{user && (
// 						<>
// 							<li className={styles.greeting}>سلام {user.name}</li>
// 							<li><Link href="/cart">سبد خرید</Link></li>
// 						</>
// 					)}
// 					{!user && <li><Link href="/cart">سبد خرید</Link></li>}
// 					</ul>
// 				</div>
// 			</>
// 			)}


//       <div className={styles.centerText}>
//         با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
//       </div>
//     </nav>
//   );
// }












// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX, FiUser } from "react-icons/fi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     const onResize = () => setIsMobile(window.innerWidth <= 768);

//     onResize(); // Initial check
//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       {/* Mobile Top Bar when scrolling */}
//       {!drawerOpen && scrolled && isMobile ? (
//         <div className={styles.mobileHeaderBar}>
//           <div className={`${styles.logo} ${styles.mobileLogo}`}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>
//           <div className={styles.menuIcon}>
//             {user ? (
//               <FiMenu size={28} color="black" onClick={toggleDrawer} />
//             ) : (
//               <Link href="/login">
//                 <FiUser size={28} color="black" />
//               </Link>
//             )}
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Logo */}
//           <div className={styles.logo}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Icon (Hamburger or User) */}
//           {isMobile && (
//             <div className={styles.menuIcon}>
//               {drawerOpen ? (
//                 <FiX size={28} color="black" onClick={toggleDrawer} />
//               ) : user ? (
//                 <FiMenu size={28} color="white" onClick={toggleDrawer} />
//               ) : (
//                 <Link href="/login">
//                   <FiUser size={28} color="white" />
//                 </Link>
//               )}
//             </div>
//           )}
//         </>
//       )}

//       {/* Desktop Nav Links */}
//       <ul className={styles.navLinks}>
//         {!user ? (
//           <>
//             <li>
//               <Link href="/login" className={styles.loginLink}>
//                 ورود{" "}
//                 <FontAwesomeIcon
//                   icon={faArrowRightToBracket}
//                   style={{ color: "white" }}
//                 />
//               </Link>
//             </li>
//             <li>
//               <Link href="/cart" className={styles.loginLink}>
//                 سبد خرید
//               </Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li>
//               <Link href="/cart" className={styles.loginLink}>
//                 سبد خرید
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>

//       {/* Mobile Drawer */}
//       {drawerOpen && user && (
//         <>
//           <div className={styles.overlay} onClick={closeDrawer}></div>
//           <div className={styles.mobileDrawer}>
//             <div className={styles.drawerHeader}>
//               <div className={styles.drawerLogo}>
//                 <img
//                   src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                   alt="لوگو"
//                   className={styles.logoImage}
//                 />
//               </div>
//               <div className={styles.drawerCloseIcon} onClick={closeDrawer}>
//                 <FiX size={28} color="black" />
//               </div>
//             </div>

//             <ul className={styles.drawerLinks} onClick={closeDrawer}>
//               <li className={styles.greeting}>سلام {user.name}</li>
//               <li>
//                 <Link href="/cart">سبد خرید</Link>
//               </li>
//             </ul>
//           </div>
//         </>
//       )}

//       {/* Center Banner Text */}
//       <div className={styles.centerText}>
//         با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
//       </div>
//     </nav>
//   );
// }




















// "use client";
// import Link from "next/link";
// import styles from "@/styles/nav.module.css";
// import { useUser } from "@/context/UserContext";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX, FiUser } from "react-icons/fi";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   const { user } = useUser();
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [isMobile, setIsMobile] = useState(false);

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);
//   const closeDrawer = () => setDrawerOpen(false);

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 20);
//     const onResize = () => setIsMobile(window.innerWidth <= 768);

//     onResize(); // Initial check
//     window.addEventListener("scroll", onScroll);
//     window.addEventListener("resize", onResize);

//     return () => {
//       window.removeEventListener("scroll", onScroll);
//       window.removeEventListener("resize", onResize);
//     };
//   }, []);

//   return (
//     <nav className={styles.navbar}>
//       {/* Mobile Top Bar when scrolling */}
//       {!drawerOpen && scrolled && isMobile ? (
//         <div className={styles.mobileHeaderBar}>
//           <div className={`${styles.logo} ${styles.mobileLogo}`}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>
//           <div className={styles.menuIcon}>
//             {user ? (
//               <FiMenu size={28} color="black" onClick={toggleDrawer} />
//             ) : (
//               <Link href="/login">
//                 <FiUser size={28} color="black" />
//               </Link>
//             )}
//           </div>
//         </div>
//       ) : (
//         <>
//           {/* Logo */}
//           <div className={styles.logo}>
//             <Link href="/">
//               <img
//                 src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
//                 alt="لوگو"
//                 className={styles.logoImage}
//               />
//             </Link>
//           </div>

//           {/* Mobile Menu Icon (Hamburger or User) */}
//           {isMobile && (
//             <div className={styles.menuIcon}>
//               {drawerOpen ? (
//                 <FiX size={28} color="black" onClick={toggleDrawer} />
//               ) : user ? (
//                 <FiMenu size={28} color="white" onClick={toggleDrawer} />
//               ) : (
//                 <Link href="/login">
//                   <FiUser size={28} color="white" />
//                 </Link>
//               )}
//             </div>
//           )}
//         </>
//       )}

//       {/* Desktop Nav Links */}
//       <ul className={styles.navLinks}>
//         {!user ? (
//           <>
//             <li>
//               <Link href="/login" className={styles.loginLink}>
//                 ورود{" "}
//                 <FontAwesomeIcon
//                   icon={faArrowRightToBracket}
//                   style={{ color: "white" }}
//                 />
//               </Link>
//             </li>
//             <li>
//               <Link href="/cart" className={styles.loginLink}>
//                 سبد خرید
//               </Link>
//             </li>
//           </>
//         ) : (
//           <>
//             <li className={styles.greeting}>سلام {user.name}</li>
//             <li>
//               <Link href="/cart" className={styles.loginLink}>
//                 سبد خرید
//               </Link>
//             </li>
//           </>
//         )}
//       </ul>

//       {/* Mobile Drawer */}
//       {drawerOpen && user && (
// 			<>
// 				<div className={styles.overlay} onClick={closeDrawer}></div>
// 				<div className={styles.mobileDrawer}>
// 					{/* Drawer Header: Profile Info + Close Icon */}
// 					<div className={styles.drawerHeader}>
// 					<div className={styles.drawerProfileInfo}>
// 						<img
// 							src="/user.jpg"
// 							alt="User Profile"
// 							className={styles.profileAvatar}
// 						/>
// 						<div className={styles.profileText}>
// 							<span className="name">سلام {user.name}</span>
// 							<span className="subtitle">همراه شما در مسیر حرفه‌ای شدن</span>
// 						</div>
// 					</div>
// 					<div className={styles.drawerCloseIcon} onClick={closeDrawer}>
// 						<FiX size={28} color="black" />
// 					</div>
// 					</div>

// 					<ul className={styles.drawerLinks} onClick={closeDrawer}>
// 					<li>
// 						<Link href="/cart">سبد خرید</Link>
// 					</li>
// 					</ul>
// 				</div>
// 			</>
// 			)}


// 			<div className={styles.centerText}>
// 			با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
// 			</div>


//     </nav>
//   );
// }


















"use client";
import Link from "next/link";
import styles from "@/styles/nav.module.css";
import { useUser } from "@/context/UserContext";
import { useState, useEffect } from "react";
import { FiMenu, FiX, FiUser } from "react-icons/fi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import MobileDrawer from "@/components/MobileDrawer";

export default function Navbar() {
  const { user } = useUser();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);
  const closeDrawer = () => setDrawerOpen(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onResize = () => setIsMobile(window.innerWidth <= 768);

    onResize();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Mobile top bar */}
      {!drawerOpen && scrolled && isMobile ? (
        <div className={styles.mobileHeaderBar}>
          <div className={`${styles.logo} ${styles.mobileLogo}`}>
            <Link href="/">
              <img
                src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
                alt="لوگو"
                className={styles.logoImage}
              />
            </Link>
          </div>
          <div className={styles.menuIcon}>
            {user ? (
              <FiMenu size={28} color="black" onClick={toggleDrawer} />
            ) : (
              <Link href="/login">
                <FiUser size={28} color="black" />
              </Link>
            )}
          </div>
        </div>
      ) : (
        <>
          {/* Desktop logo */}
          <div className={styles.logo}>
            <Link href="/">
              <img
                src="/Beige_and_Green_Vintage_Retro_Football_Club_Academy_Badge_Logo-removebg-preview.png"
                alt="لوگو"
                className={styles.logoImage}
              />
            </Link>
          </div>

          {/* Mobile hamburger / login icon */}
          {isMobile && (
            <div className={styles.menuIcon}>
              {drawerOpen ? (
                <FiX size={28} color="black" onClick={toggleDrawer} />
              ) : user ? (
                <FiMenu size={28} color="white" onClick={toggleDrawer} />
              ) : (
                <Link href="/login">
                  <FiUser size={28} color="white" />
                </Link>
              )}
            </div>
          )}
        </>
      )}

      {/* Desktop nav */}
      <ul className={styles.navLinks}>
        {!user ? (
          <>
            <li>
              <Link href="/login" className={styles.loginLink}>
                ورود{" "}
                <FontAwesomeIcon icon={faArrowRightToBracket} style={{ color: "white" }} />
              </Link>
            </li>
            <li>
              <Link href="/cart" className={styles.loginLink}>
                سبد خرید
              </Link>
            </li>
          </>
        ) : (
          <>
            <li className={styles.greeting}>سلام {user.name}</li>
            <li>
              <Link href="/cart" className={styles.loginLink}>
                سبد خرید
              </Link>
            </li>
          </>
        )}
      </ul>

      {/* Mobile Drawer */}
      {drawerOpen && user && <MobileDrawer user={user} closeDrawer={closeDrawer} />}

      {/* Center text over background image */}
      <div className={styles.centerText}>
        با بهترین تجهیزات فوتبال، حرفه‌ای تمرین کن! خرید آنلاین آسان
      </div>
    </nav>
  );
}
