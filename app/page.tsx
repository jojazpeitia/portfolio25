import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="container">
      <div className="nav">
        <div className="logo">Le Specs</div>
        {/* <div className="back">
          <ion-icon name="arrow-forward="></ion-icon>
        </div> */}
      </div>

      <div className="product-hero">
        <div className="product-header">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minima non eligendi? Recusandae nulla aliquid exercitationem eligendi animi non dolores!
          </p>
        </div>
        <div className="product">
          <div className="product-title">
            <h1>Aircraft</h1>
            <br />by <span>Woods</span>
          </div>
          <div className="product-look">
            <img src="/product.jpg" alt="" />
          </div>
        </div>
      </div>

      <div className="overlay"></div>

      <div className="product-description">
        <div className="desc">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repudiandae, quasi neque ipsum minus autem omnis quae laborum ducimus tempora laudantium culpa vero, eum numquam sapiente saepe maiores temporibus! Illo temporibus officiis perferendis repellat expedita neque placeat voluptate explicabo optio.
          </p>
          <div className="link"><span>Download PDF</span></div>
        </div>
        <div className="front-view view">
          <div className="sketch-img"><img src="./front-view.jpg" alt="" /></div>
          <br />
          <div className="sketch-title"><span>Front View</span><br />Dimensions</div>
        </div>

        <div className="side-view view">
          <div className="sketch-title"><span>Side View</span><br />Dimensions</div>
          <br />
          <div className="sketch-img"><img src="./side-view.jpg" alt="" /></div>
        </div> 
        <div className="close-desc" id="close">
          {/* <ion-icon name="close-outline"></ion-icon> */}
        </div>
      </div>

      <div className="product-info">
        <div className="product-nav">
          <div className="product-img">
            <img src="/product.png" alt="" />
          </div>
          <div className="product-name">Aircraft <br/><span>by Woods</span></div>
          <div className="product-variant">3 Variants Available</div>
          <div className="product-nav-links">
            <button id="measurements">Measurements</button>
            <button>What&apos;s included?</button>
          </div>
        </div>
        <div className="product-cart">
          <div className="product-price">$230</div>
          <div className="product-btn"><button>Book Now</button></div>
        </div>
      </div>
    </div>
  );
}
