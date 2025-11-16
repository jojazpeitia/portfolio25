'use client';
import styles from "./page.module.css";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { gsap } from "gsap";

import Copy from "../components/Copy";

import { ReactLenis } from "lenis/react";

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
      tl.to(block, { duration: 0.75, width: 500, ease: "power4.inOut"}, 4.5 );

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
      tl.to(".container",{ duration: 2, scale: 1 }, 7.5 );
    }, rootRef);

    return () => ctx.revert();
  }, []);
  
  return (
    <ReactLenis root>
      <div ref={rootRef}>
        {/* LOADER */}
        <div className={styles.loader}>
          <h1 className={styles.counter}>{count}%</h1>

          <div className={styles.circles}>
            <div className={`${styles.circle} ${styles.circleouter}`}></div>
            <div className={`${styles.circle} ${styles.circleinner}`}></div>
            <div className={styles.circleinnerrotator}></div>
            <div className={styles.block}></div>
          </div>
        </div>

        {/* OLD PAGE */}
        <div className="container">
          {/* <div className={styles.producthero}>
            <div className={styles.productheader}>
              <Copy delay={5.5}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem minima non eligendi? Recusandae nulla aliquid exercitationem eligendi animi non dolores!
              </p>
              </Copy>
            </div>
          </div> */}
            <section className="hero">
              <div className="hero-img"></div>

              <div className="header">
                <Copy delay={5.5}>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Copy>
              </div>
            </section>


          

          {/* NEW PAGE */}
            {/* <section className="hero">
              <div className="hero-img"></div>

              <div className="header">
                <Copy delay={0.5}>
                  <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </Copy>
              </div>
            </section> */}

            {/* <section className="about">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>

              <div className="header">
                <h1>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque alias tempora voluptatum explicabo provident iusto cupiditate!
                </h1>
              </div>
            </section> */}

            {/* <section className="about-img">
              <img src="front-view.jpg" alt="" />
            </section> */}

            {/* <section className="story">
              <div className="col">
                <h1> The Story Behind <br /> Our Stillness</h1>
              </div>
              <div className="col">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum quae porro illo suscipit est expedita et. Saepe qui quidem explicabo, quos dolorum incidunt delectus, voluptatem perspiciatis alias facere rem sapiente hic molestiae.</p>
              </div>
            </section> */}

            {/* <section className="philosophy">
              <div className="span">The Thought Beneath</div>

              <div className="header">
                <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima molestiae voluptas maxime veniam dolore vero ad!</h1>
              </div>

            </section> */}

            {/* <div className="footer">
              <div className="col">
                <div className="sub-col">
                  <div className="span">Terms & Conditions</div>
                </div>
                <div className="sub-col">
                  <h1>Twitter</h1>
                  <h1>Linkedin</h1>
                  <h1>Instagram</h1>
                  <h1>Awwwards</h1>
                  <h1>Email</h1>
                </div>
              </div>
              <div className="col">
                <span>Copyright Greyloom 2025</span>
              </div>
            </div> */}

        </div>
      </div>
    </ReactLenis>
  );
};
