// 'use client';

// import Link from "next/link";
// import { FiX } from "react-icons/fi";
// import styles from "@/styles/mobileDrawer.module.css";

// export default function MobileDrawer({ user, closeDrawer }) {
//   return (
//     <>
//       <div className={styles.overlay} onClick={closeDrawer}></div>
//       <div className={styles.mobileDrawer}>
//         <div className={styles.drawerHeader}>
//           <div className={styles.drawerProfileInfo}>
//             <div className={styles.profileText}>
//               <span className={styles.name}>سلام {user.name}</span>
//               <span className={styles.subtitle}>همراه شما در مسیر حرفه‌ای شدن</span>
//             </div>
//             <img
//               src="/user.png"
//               alt="User"
//               className={styles.profileAvatar}
//             />
//           </div>
//           <div className={styles.drawerCloseIcon} onClick={closeDrawer}>
//             <FiX size={28} color="black" />
//           </div>
//         </div>

//         <ul className={styles.drawerLinks} onClick={closeDrawer}>
//           <li>
//             <Link href="/cart">سبد خرید</Link>
//           </li>
//         </ul>
//       </div>
//     </>
//   );
// }










'use client';

import Link from "next/link";
import { FiX } from "react-icons/fi";
import styles from "@/styles/mobileDrawer.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export default function MobileDrawer({ user, closeDrawer }) {
  return (
    <>
      <div className={styles.overlay} onClick={closeDrawer}></div>
      <div className={styles.mobileDrawer}>
        <div className={styles.drawerHeader}>
          <div className={styles.drawerProfileInfo}>
            <div className={styles.profileText}>
              <span className={styles.name}>سلام {user.name}</span>
              <span className={styles.subtitle}>همراه شما در مسیر پیشرفت</span>
            </div>
            <img
              src="/user.png"
              alt="User"
              className={styles.profileAvatar}
            />
          </div>
          <div className={styles.drawerCloseIcon} onClick={closeDrawer}>
            <FiX size={28} color="black" />
          </div>
        </div>

        <ul className={styles.drawerLinks} onClick={closeDrawer}>
          <li style={{boxShadow : "0 1px 2px hsl(0, 0%, 60%)" , background : "hsl(0, 0%, 83%)", padding : "6px", borderRadius : "20px"}}>
            <Link href="/cart">سبد خرید</Link>
          </li>
        </ul>

        <div className={styles.drawerFooter}>
          <p className={styles.footerText}>
            فروشگاه رسمی لباس مدرسه فوتبال — ارائه‌دهنده‌ی انواع لباس‌های ورزشی با کیفیت بالا، طراحی اختصاصی و قیمت مناسب و همراه مطمئن شما برای تهیه لباس تمرین و مسابقه با استاندارد حرفه‌ای.

          </p>
          <div className={styles.socialIcons}>
            <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://t.me/your-username" target="_blank" rel="noopener noreferrer" >
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </div>
        </div>

      </div>
    </>
  );
}
