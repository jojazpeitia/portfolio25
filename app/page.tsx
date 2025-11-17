'use client';
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";

import Copy from "../components/Copy";

import { ReactLenis } from "lenis/react";

export default function Home() {

  const [count, setCount] = useState(0);
  const [canScroll, setCanScroll] = useState(false); 

  const rootRef = useRef<HTMLDivElement | null>(null); 

  useEffect(() => {
    // lock scroll
    if (!canScroll) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      // unlock scroll
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }

    // cleanup in case component unmounts
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    };
  }, [canScroll]);

  // counter logic (randomized ticks until 100)
  useEffect(() => {
    let frameId: number;
    const duration = 1000; // 3 seconds total
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1); // 0 → 1

      // linear
      const value = progress * 100;

      setCount(Math.floor(value));

      if (progress < 1) {
        frameId = requestAnimationFrame(animate);
      }
    };

    frameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameId);
  }, []);
  

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power4.inOut" },
        onComplete: () => {
          // loader timeline done → enable scroll
          setCanScroll(true); // 👈 unlock here
        },
      });

      const loader    = `.${styles.loader}`;

      // container slides from RIGHT and centers at left:50% with translateX(-50%), stays scale 0.5
      tl.fromTo(".container",
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
        }, 0.5
      );

      // loader scales out
      tl.to(loader, { duration: 2.5, scale: 0, ease: "power4.inOut", }, 2.5);

      // container scales up to 1
      tl.to(".container",{ duration: 2, scale: 1 }, 3);
    }, rootRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <ReactLenis root>
      <div ref={rootRef}>
        {/* LOADER */}
        <div className={styles.loader}>
          <h1 className={styles.counter}>{count}%</h1>
        </div>

        {/* PAGE */}
        <div className="container">
            <section className="hero">
              <div className="hero-img"></div>

              <div className="header">
                <Copy delay={2}>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Copy>
              </div>
            </section>

            <section className="story">
              <Copy delay={0.5}>
              <div className="col">
                <h1> The Story Behind <br /> Our Stillness</h1>
              </div>
              <div className="col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
              </div>
              </Copy>
            </section>

        </div>
      </div>
    </ReactLenis>
  );
};
