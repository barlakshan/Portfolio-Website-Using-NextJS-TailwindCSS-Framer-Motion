"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
  
const PageTransition = ({children}) => {
  const pathname = usePathname();
  return (
    <AnimatePresence>
        <dev key={pathname}>
            <motion.dev
                initial={{ opacity: 1 }}
                animate={{
                    opacity: 0,
                    tarnsition: { delay: 1, duration: 0.4, ease: "easeInOut"},
                }}
                className="h-screen w-screen fixed bg-primary top-8 pointer-events-none"
            />
            {children} 
        </dev>
    </AnimatePresence>
  )
}

export default PageTransition;