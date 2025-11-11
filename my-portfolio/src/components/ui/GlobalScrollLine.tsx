"use client";

import { motion, useTransform } from "framer-motion";
import { useScrollContext } from "@/contexts/ScrollContext";
import { useEffect, useState } from "react";

const GlobalScrollLine = () => {
  const { scrollYProgress } = useScrollContext();
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // This matches the original: path starts at 0.5 and goes to 1
  const pathLength = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  useEffect(() => {
    setIsVisible(true);

    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-0 flex justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 20,
      }}
      transition={{
        duration: 1,
        delay: 0.3,
        ease: "easeOut",
      }}
    >
      <svg
        width={isMobile ? "800" : "2400"}
        height={isMobile ? "1200" : "2200"}
        viewBox={isMobile ? "200 0 800 1800" : "0 0 1278 2319"}
        fill="none"
        overflow="visible"
        xmlns="http://www.w3.org/2000/svg"
        className={`absolute ${
          isMobile
            ? "-top-[20%] left-1/2 -translate-x-1/2 scale-75"
            : "-top-[40%] left-1/2 -translate-x-1/2"
        }`}
      >
        <defs>
          <linearGradient
            id="scrollGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="30%" stopColor="#DC0E0E" />
            <stop offset="50%" stopColor="#FA812F" />
            <stop offset="100%" stopColor="#FAB12F" />
          </linearGradient>
        </defs>
        <motion.path
          d={
            isMobile
              ? // Simplified path for mobile
                "M400 200 C300 150 200 180 195 220 C190 280 350 275 420 210 C470 160 465 100 380 80 C300 60 250 120 300 140 C370 170 440 70 350 30 C280 0 240 50 235 80 C230 110 260 115 280 108 C300 100 305 80 290 65 C270 40 220 60 200 80 C175 105 170 130 185 160 C195 185 220 195 250 190 C300 180 285 130 255 115 C220 95 150 120 152 170 C153 200 165 220 210 221 C280 222 340 175 420 170 C480 165 580 180 610 220 C625 240 630 255 615 275 C595 300 540 300 500 270 C460 240 450 210 453 170 C455 140 470 115 500 105 C525 97 550 100 555 120 C560 140 510 139 490 134 C465 128 450 110 442 85 C432 55 440 35 465 15 C485 0 520 -5 540 20 C560 45 545 65 525 80 C490 100 440 90 400 75 C370 65 340 35 355 10 C365 -5 390 -8 400 15 C410 38 405 65 385 95 C365 125 335 150 340 190 C345 240 400 320 450 325 C485 328 520 330 525 290 C535 230 470 195 420 220 C375 240 365 290 363 340 C360 480 520 580 400 680 C300 750 150 550 80 650 C20 730 0 850 80 900 C250 980 600 750 640 1050 C690 1400 50 950 180 1450"
              : // Original path for desktop
                "M876.605 394.131C788.982 335.917 696.198 358.139 691.836 416.303C685.453 501.424 853.722 498.43 941.95 409.714C1016.1 335.156 1008.64 186.907 906.167 142.846C807.014 100.212 712.699 198.494 789.049 245.127C889.053 306.207 986.062 116.979 840.548 43.3233C743.932 -5.58141 678.027 57.1682 672.279 112.188C666.53 167.208 712.538 172.943 736.353 163.088C760.167 153.234 764.14 120.924 746.651 93.3868C717.461 47.4252 638.894 77.8642 601.018 116.979C568.164 150.908 557 201.079 576.467 246.924C593.342 286.664 630.24 310.55 671.68 302.614C756.114 286.446 729.747 206.546 681.86 186.442C630.54 164.898 492 209.318 495.026 287.644C496.837 334.494 518.402 366.466 582.455 367.287C680.013 368.538 771.538 299.456 898.634 292.434C1007.02 286.446 1192.67 309.384 1242.36 382.258C1266.99 418.39 1273.65 443.108 1247.75 474.477C1217.32 511.33 1149.4 511.259 1096.84 466.093C1044.29 420.928 1029.14 380.576 1033.97 324.172C1038.31 273.428 1069.55 228.986 1117.2 216.384C1152.2 207.128 1188.29 213.629 1194.45 245.127C1201.49 281.062 1132.22 280.104 1100.44 272.673C1065.32 264.464 1044.22 234.837 1032.77 201.413C1019.29 162.061 1029.71 131.126 1056.44 100.965C1086.19 67.4032 1143.96 54.5526 1175.78 86.1513C1207.02 117.17 1186.81 143.379 1156.22 166.691C1112.57 199.959 1052.57 186.238 999.784 155.164C957.312 130.164 899.171 63.7054 931.284 26.3214C952.068 2.12513 996.288 3.87363 1007.22 43.58C1018.15 83.2749 1003.56 122.644 975.969 163.376C948.377 204.107 907.272 255.122 913.558 321.045C919.727 385.734 990.968 497.068 1063.84 503.35C1111.46 507.456 1166.79 511.984 1175.68 464.527C1191.52 379.956 1101.26 334.985 1030.29 377.017C971.109 412.064 956.297 483.647 953.797 561.655C947.587 755.413 1197.56 941.828 936.039 1140.66C745.771 1285.32 321.926 950.737 134.536 1202.19C-6.68295 1391.68 -53.4837 1655.38 131.935 1760.5C478.381 1956.91 1124.19 1515 1201.28 1997.83C1273.66 2451.23 100.805 1864.7 303.794 2668.89"
          }
          stroke="url(#scrollGradient)"
          strokeWidth={isMobile ? "6" : "10"}
          style={{
            pathLength,
            strokeDashoffset: useTransform(pathLength, (value) => 1 - value),
          }}
        />
      </svg>
    </motion.div>
  );
};

export default GlobalScrollLine;
