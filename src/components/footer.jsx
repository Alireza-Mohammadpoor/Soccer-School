// components/Footer.js

import { FaInstagram, FaWhatsapp, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const styles = {
    footer: {
      width: "100%",
      backgroundColor: "#1F2937", // Tailwind's gray-800
      color: "#ffffff",
      padding: "2.5rem 1rem",
      marginTop: "3rem",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-between",
      gap: "1.5rem",
    },
    column: {
      flex: "1 1 220px",
      minWidth: "220px",
      fontSize: "0.875rem",
    },
    title: {
      fontSize: "1.125rem",
      fontWeight: "bold",
      marginBottom: "1rem",
    },
    list: {
      listStyle: "none",
      padding: 0,
      margin: 0,
		
    },
    listItem: {
      marginBottom: "0.5rem",
    },
    iconRow: {
      display: "flex",
      gap: "1rem",
      fontSize: "1.25rem",
      marginTop: "0.5rem",
    },
    smallText: {
      fontSize: "0.75rem",
      color: "#9CA3AF", // Tailwind's gray-400
      marginTop: "1rem",
    },
    link: {
      color: "#ffffff",
      textDecoration: "none",
      transition: "color 0.3s",
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* About */}
        <div style={styles.column}>
          <h4 style={styles.title}>درباره ما</h4>
          <p>
            فروشگاه تخصصی پوشاک و لوازم مورد نیاز برای مربیان و هنرجویان مدارس فوتبال. ارائه بهترین کیفیت، مناسب‌ترین قیمت و ارسال سریع به سراسر کشور.
          </p>
        </div>

        {/* Quick Links */}
        <div style={styles.column}>
          <h4 style={styles.title}>لینک‌های سریع</h4>
          <ul style={styles.list}>
            <li style={styles.listItem}>
              <a href="#" style={styles.link}>خانه</a>
            </li>
            <li style={styles.listItem}>
              <a href="#" style={styles.link}>محصولات</a>
            </li>
            <li style={styles.listItem}>
              <a href="#" style={styles.link}>پک‌ها</a>
            </li>
            <li style={styles.listItem}>
              <a href="#" style={styles.link}>تماس با ما</a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div style={styles.column}>
          <h4 style={styles.title}>ارتباط با ما</h4>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
				<li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
					<FaPhoneAlt />
					۰۹۱۲۳۴۵۶۷۸۹
				</li>
				<li style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
					<FaEnvelope />
					info@soccerschool.ir
				</li>
				<li style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
					<FaWhatsapp />
					پشتیبانی واتساپ
				</li>
				</ul>

        </div>

        {/* Social Media */}
        <div style={styles.column}>
          <h4 style={styles.title}>ما را دنبال کنید</h4>
          <div style={styles.iconRow}>
            <a href="#" style={styles.link}><FaInstagram /></a>
            <a href="#" style={styles.link}><FaWhatsapp /></a>
          </div>
          <p style={styles.smallText}>
            © {new Date().getFullYear()} Soccer School Wear
          </p>
        </div>
      </div>
    </footer>
  );
}
