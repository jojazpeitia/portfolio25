import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className="logo">Le Specs</div>
        {/* <div className="back">
          <ion-icon name="arrow-forward="></ion-icon>
        </div> */}
      </div>

      <div className={styles.producthero}>
        <div className="product-header">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minima non eligendi? Recusandae nulla aliquid exercitationem eligendi animi non dolores!
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.producttitle}>
            <h1>Aircraft</h1>
            <br />by <span>Woods</span>
          </div>
          <div className={styles.productlook}>
            <img src="/front-view.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className={styles.overlay}></div>

      <div className={styles.productdescription}>
        <div className={styles.desc}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae, quasi neque ipsum minus autem omnis quae laborum ducimus tempora laudantium culpa vero, eum numquam sapiente saepe maiores temporibus! Illo temporibus officiis perferendis repellat expedita neque placeat voluptate explicabo optio.
          </p>
          <div className="link"><span>Download PDF</span></div>
        </div>
        <div className={`${styles.frontview} ${styles.view}`}>
          <div className="sketch-img"><img src="./front-view.jpg" alt="" /></div>
          <br />
          <div className="sketch-title"><span>Front View</span><br />Dimensions</div>
        </div>

        <div className={`${styles.sideview} ${styles.view}`}>
          <div className={styles.sketchtitle}><span>Side View</span><br />Dimensions</div>
          <br />
          <div className="sketch-img"><img src="./side-view.jpg" alt="" /></div>
        </div> 
        <div className={styles.closedesc} id="close">
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </div>
      </div>

      <div className={styles.productinfo}>
        <div className={styles.productnav}>
          <div className={styles.productimg}>
            <img src="/product.png" alt="" />
          </div>
          <div className={styles.productname}>Aircraft <br/><span>by Woods</span></div>
          <div className={styles.productvariants}>3 Variants Available</div>
          <div className={styles.productnavlinks}>
            <button id="measurements">Measurements</button>
            <button>What&apos;s included?</button>
          </div>
        </div>
        <div className={styles.productcart}>
          <div className="product-price">$230</div>
          <div className={styles.productbtn}><button>Book Now</button></div>
        </div>
      </div>
    </div>
  );
}
