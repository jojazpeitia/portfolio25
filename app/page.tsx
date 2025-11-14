'use client';
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";

export default function Home() {

  const [count, setCount] = useState(0);

  const rootRef = useRef<HTMLDivElement | null>(null);

  // counter logic (randomized ticks until 100)
  useEffect(() => {
    let current = 0;
    let raf: number | null = null;
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const tick = () => {
      if (current >= 100) return;
      current += Math.floor(Math.random() * 10) + 1;
      if (current > 100) current = 100;
      setCount(current);
      const delay = Math.floor(Math.random() * 200) + 250;
      timeout = setTimeout(() => {
        raf = requestAnimationFrame(tick);
      }, delay);
    };


    raf = requestAnimationFrame(tick);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      if (timeout) clearTimeout(timeout);
    };
  }, []);

 useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.inOut" } });

      const circles   = `.${styles.circles}`;
      const circleIn  = `.${styles.circleinner}`;
      const rotator   = `.${styles.circleinnerrotator}`;
      const block     = `.${styles.block}`;
      const loader    = `.${styles.loader}`;
      const container = `.${styles.container}`;

      // circles drop in 
      tl.from(circles, { duration: 2, y: "-200%", ease: "elastic.out" }, 0.5);

      // inner circle grows (your 2s mark)
      tl.to(circleIn, { duration: 1, width: 75,  height: 75, ease: "power4.inOut"   }, 2.0);

      // inner rotator scales up
      tl.to(rotator, { duration: 1, scale: 1, ease: "power4.inOut" }, 2.5);

      // circles rotate 360
      tl.to(circles, { duration: 1.5, rotation: 360,  ease: "power4.inOut"}, 3.0);

      // block reveal (height then width)
      tl.to(block, { duration: 0.75, display: "block", height: 200, ease: "power4.inOut", }, 4.0);
      tl.to(block, { duration: 0.75, width: 800, ease: "power4.inOut"}, 4.5 );

      // container slides from RIGHT and centers at left:50% with translateX(-50%), stays scale 0.5
      tl.fromTo(container,
        {
          duration: 2,
          left: "100%",
          scale: 0.5,
          ease: "power4.inOut",
        },
        {
          duration: 2,
          left: "50%",
          scale: 0.5,
          transform: "translateX(-50%)",
          ease: "power4.inOut",
        }, 4.0
      );

      // block collapses (width then height)
      tl.to(block, { duration: 1.5, width: 0, ease: "power4.inOut", }, 5.0);

      tl.to(block, { duration: 0.75, height: 0, display: "block", ease: "power4.inOut", }, 6.0);

      // circles rotate back
      tl.to(circles, { duration: 1.5, rotation: 0, ease: "power4.inOut"}, 6.5);

      // loader scales out
      tl.to(loader, { duration: 2.5, scale: 0, ease: "power4.inOut", }, 7.0);

      // container scales up to 1
      tl.to(container,{ duration: 2, scale: 1 }, 7.5 );
    }, rootRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <div ref={rootRef}>
      <div className={styles.loader}>
        <h1 className={styles.counter}>{count}%</h1>

        <div className={styles.circles}>
          <div className={`${styles.circle} ${styles.circleouter}`}></div>
          <div className={`${styles.circle} ${styles.circleinner}`}></div>
          <div className={styles.circleinnerrotator}></div>
          <div className={styles.block}></div>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.nav}>
          <div className="logo">Le Specs</div>
          <div className="back">
        </div>
      </div>

      <div className={styles.producthero}>
        <div className={styles.productheader}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minima non eligendi? Recusandae nulla aliquid exercitationem eligendi animi non dolores!
          </p>
        </div>
        <div className={styles.product}>
          <div className={styles.producttitle}>
            <h1>Aircraft</h1>
            <br />by <span>Woods</span>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
