
"use client";
import { motion, useMotionValue, MotionValue } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import Songadh from "../../assets/Songadh.jpg";

export default function DraggableBox() {
  const [screenWidth, setScreenWidth] = useState(0);
  const [screenHeight, setScreenHeight] = useState(0);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // single shared x MotionValue (hook used once)
  const x = useMotionValue(0);

  // configuration
  const itemCount = 5;
  const boxHalfWidth = 160; // w-40 => 160px
  const boxHalfHeight = 96; // h-24 => 96px
  const spacing = 520; // horizontal gap between train cars (adjust if needed)

  // offsets (stable memo)
  const offsets = useMemo(
    () => Array.from({ length: itemCount }, (_, i) => i * spacing),
    [itemCount, spacing]
  );

  // create per-item MotionValues for y & scale once and store in refs
  const itemY = useRef<MotionValue<number>[]>([]);
  const itemScale = useRef<MotionValue<number>[]>([]);

  if (itemY.current.length === 0) {
    itemY.current = Array.from({ length: itemCount }, () => useMotionValue(0));
    itemScale.current = Array.from({ length: itemCount }, () => useMotionValue(1));
  }

  // helper: piecewise linear map with center pivot (clamped)
  function mapPiecewise(
    v: number,
    inMin: number,
    inMid: number,
    inMax: number,
    outMin: number,
    outMid: number,
    outMax: number
  ) {
    if (v <= inMin) return outMin;
    if (v >= inMax) return outMax;
    if (v <= inMid) {
      const t = (v - inMin) / (inMid - inMin);
      return outMin + t * (outMid - outMin);
    } else {
      const t = (v - inMid) / (inMax - inMid);
      return outMid + t * (outMax - outMid);
    }
  }

  // only run mapping subscription once screen metrics are available
  useEffect(() => {
    if (!screenWidth || !screenHeight) return;

    const maxX = screenWidth / 2 - boxHalfWidth;
    const maxY = screenHeight / 2 - boxHalfHeight;

    const update = (val: number) => {
      for (let i = 0; i < itemCount; i++) {
        const relX = val + offsets[i]; // where this car is relative to center
        const yVal = mapPiecewise(relX, -maxX, 0, maxX, -maxY, 0, maxY);
        const sVal = mapPiecewise(relX, -maxX, 0, maxX, 1, 4, 1); // center -> 4, edges -> 1
        itemY.current[i].set(yVal);
        itemScale.current[i].set(sVal);
      }
    };

    const unsub = x.onChange(update);
    // initialize immediately
    update(x.get());

    return unsub;
  }, [screenWidth, screenHeight, offsets, x, itemCount]);

  if (!screenWidth || !screenHeight) return null;

  const maxX = screenWidth / 2 - boxHalfWidth;
  const dragConstraints = { left: -maxX, right: maxX };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden relative">
      {offsets.map((offset, index) => (
        // wrapper positions each car relative to screen center (so they appear as a train)
        <div
          key={index}
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: `translate(calc(-50% + ${offset}px), -50%)`,
            zIndex: itemCount - index, // front car has highest z
            pointerEvents: index === 0 ? "auto" : "none", // only front car accepts pointer events
          }}
        >
          <motion.img
            src={Songadh.src}
            alt={`train-${index}`}
            // shared x moves all cars together
            style={{
              x,
              y: itemY.current[index],
              scale: itemScale.current[index],
            }}
            // allow dragging from the front (index 0) only
            drag={index === 0 ? "x" : false}
            dragConstraints={dragConstraints}
            dragElastic={0.15}
            className="w-40 h-24 rounded-lg shadow-xl cursor-grab active:cursor-grabbing select-none"
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
}


// "use client";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import Songadh from "../../assets/Songadh.jpg";

// export default function DraggableBox() {
//   const [screenWidth, setScreenWidth] = useState(0);
//   const [screenHeight, setScreenHeight] = useState(0);

//   useEffect(() => {
//     setScreenWidth(window.innerWidth);
//     setScreenHeight(window.innerHeight);

//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//       setScreenHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Shared Motion value for X position
//   const x = useMotionValue(0);

//   const boxWidth = 320; // spacing between images
//   const boxHalfWidth = 160;
//   const boxHalfHeight = 96;
//   const maxX = screenWidth / 2 - boxHalfWidth;

//   // Y mapping: bottom → center → top
//   const maxY = screenHeight / 2 - boxHalfHeight;
//   const y = useTransform(x, [-maxX, 0, maxX], [-maxY, 0, maxY]);

//   // Scale mapping: edges → 1, center → 4
//   const scale = useTransform(x, [-maxX, 0, maxX], [1, 4, 1], { clamp: true });

//   if (!screenWidth || !screenHeight) return null;

//   // Array of offsets for the train
//   const offsets = [0, boxWidth, boxWidth * 2, boxWidth * 3, boxWidth * 4];

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden relative">
//       {offsets.map((offset, index) => (
//         <motion.img
//           key={index}
//           src={Songadh.src}
//           alt={`Image ${index + 1}`}
//           drag="x"
//           dragConstraints={{ left: -maxX, right: maxX }}
//           initial={{ x: 0, y: 0, scale: 3.5 }}
//           animate={{ x: 0, y: 0, scale: 3.5 }}
//           style={{
//             x, // base motion value
//             y,
//             scale,
//             translateX: offset, // offset applied per image
//           }}
//           className="w-40 h-24 rounded-lg shadow-xl cursor-grab active:cursor-grabbing absolute"
//         />
//       ))}
//     </div>
//   );
// }


// "use client";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import Songadh from "../../assets/Songadh.jpg";

// export default function DraggableBox() {
//   const [screenWidth, setScreenWidth] = useState(0);
//   const [screenHeight, setScreenHeight] = useState(0);

//   useEffect(() => {
//     setScreenWidth(window.innerWidth);
//     setScreenHeight(window.innerHeight);

//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//       setScreenHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Motion value for X position
//   const x = useMotionValue(0);

//   const boxHalfWidth = 160; // half of w-40 (160px)
//   const boxHalfHeight = 96; // half of h-24 (96px)
//   const maxX = screenWidth / 2 - boxHalfWidth;

//   // Y mapping: bottom → center → top
//   const maxY = screenHeight / 2 - boxHalfHeight;
//   const y = useTransform(x, [-maxX, 0, maxX], [-maxY, 0, maxY]);

//   // Scale mapping: edges → 1, center → 4
//   const scale = useTransform(x, [-maxX, 0, maxX], [1, 4, 1], { clamp: true });

//   if (!screenWidth || !screenHeight) return null;

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden relative">
//       <motion.img
//         src={Songadh.src}
//         alt="Image not applicable"
//         drag="x"
//         dragConstraints={{ left: -maxX, right: maxX }}
//         initial={{ x: 0, y: 0, scale: 3.5 }} // start at center with scale 4
//         animate={{ x: 0, y: 0, scale: 3.5 }}
//         style={{ x, y, scale }}
//         className="w-40 h-24 rounded-lg shadow-xl cursor-grab active:cursor-grabbing"
//       />

      
//     </div>
//   );
// }

// "use client";
// import { motion, useMotionValue, useTransform } from "framer-motion";
// import { useEffect, useState } from "react";
// import Songadh from "../../assets/Songadh.jpg";

// export default function DraggableBox() {
//   const [screenWidth, setScreenWidth] = useState(0);
//   const [screenHeight, setScreenHeight] = useState(0);
  
//   useEffect(() => {
//     setScreenWidth(window.innerWidth);
//     setScreenHeight(window.innerHeight);

//     const handleResize = () => {
//       setScreenWidth(window.innerWidth);
//       setScreenHeight(window.innerHeight);
//     };

//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   // Motion value for X position
//   const x = useMotionValue(0);

//   const boxHalfWidth = 160; // half of w-40 (160px)
//   const boxHalfHeight = 96; // half of h-24 (96px)
//   const maxX = screenWidth / 2 - boxHalfWidth;

//   // Y should move: bottom → center → top
//   const maxY = screenHeight / 2 - boxHalfHeight;
//   const y = useTransform(x, [-maxX, 0, maxX], [-maxY, 0, maxY]);

//   // Scale mapping: 1 at edges, 2 at center
//   const scale = useTransform(x, [-maxX, 0, maxX], [1, 4, 1], { clamp: true });

//   if (!screenWidth || !screenHeight) return null;

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100 overflow-hidden relative">
//       <motion.img 
//         src={Songadh.src}
//         alt="Image not applicable"
//         drag="x"
//         dragConstraints={{ left: -maxX, right: maxX }}
//         initial={{ x: maxX, y: maxY }} // start bottom-right
//         animate={{ x: maxX, y: maxY }}
//         style={{ x, y, scale }}
//         className="w-40 h-24  rounded-lg shadow-xl flex items-center justify-center text-white text-xl cursor-grab active:cursor-grabbing"
//       />
      
      
      
//     </div>
//   );
// }