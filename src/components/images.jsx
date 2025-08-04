// import React from "react";
// import styles from "@/styles/images.module.css";

// export default function Images() {
//   return (
//     <div className={styles.gridContainer}>
//       <div className={styles.verticalImage}>
//         <img src="/b3.jpg" alt="3" />
//       </div>
//       <div className={styles.stackImages}>
//         <img src="/b1.jpg" alt="1" />
//         <img src="/b2.jpg" alt="2" />
//       </div>
//     </div>
//   );
// }


import React from "react";
import styles from "@/styles/images.module.css";

export default function Images() {
  return (

	<div className={styles.container}>
		<h1>بهترین تنوع ها با ما</h1>
    <div className={styles.gridContainer}>
      <div className={styles.imageB1}>
        <img src="/b1.jpg" alt="Image 1" />
      </div>
      <div className={styles.imageB3}>
        <img src="/b3.jpg" alt="Image 3" />
      </div>
      <div className={styles.imageB2}>
        <img src="/b2.jpg" alt="Image 2" />
      </div>
    </div>
	</div>
  );
}

