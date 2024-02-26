// "use client";
// import { motion, AnimatePresence } from "framer-motion";
// import { useRouter } from "next/navigation";

// const PageTransition = ({ children }: { children: React.ReactNode }) => {
//   const router = useRouter();
//   const variants = {
//     in: {
//       opacity: 1,
//       x: 0,
//       // rotate: "0deg",
//       // scale: 1,
//       transformOrigin: "center",
//       transition: {
//         duration: 0.3,
//       },
//     },
//     out: {
//       opacity: 0,
//       // x: 20,
//       // rotate: "0deg",
//       // scale: 0.98,
//       transformOrigin: "center",
//       transition: {
//         duration: 0.5,
//         ease: "easeInOut",
//       },
//     },
//   };
//   return (
//     <div>
//       <AnimatePresence initial={false} mode="wait">
//         <motion.div
//           transition={{ duration: 1000, ease: "easeIn" }}
//           variants={variants}
//           animate="in"
//           initial="out"
//           exit="out"
//         >
//           {children}
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default PageTransition;
