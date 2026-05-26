"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus } from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";

type FabButtonProps = {
  className?: string;
};

export const FabButton = ({ className }: FabButtonProps) => {
  const [open, setOpen] = useState(false);

  const actions = [
    {
      icon: FaFacebookF,
      x: -60,
      y: 0,
      href: "#",
    },
    {
      icon: FaInstagram,
      x: 0,
      y: -60,
      href: "#",
    },
    {
      icon: FaLinkedinIn,
      x: -45,
      y: -45,
      href: "#",
    },
  ];

  return (
    <div className={`relative ${className}`}>
      <AnimatePresence>
        {open &&
          actions.map((action, index) => (
            <motion.a
              key={index}
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0, x: 0, y: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: action.x,
                y: action.y,
              }}
              exit={{
                opacity: 0,
                scale: 0,
                x: 0,
                y: 0,
              }}
              transition={{
                duration: 0.25,
                delay: index * 0.03,
              }}
              className="
                absolute
                w-10 h-10
                rounded-full
                bg-card
                border border-border
                shadow-lg
                flex items-center justify-center
                text-foreground
                hover:bg-primary
                hover:text-primary-foreground
                hover:scale-110
                transition-all duration-300
              "
            >
              <action.icon size={16} />
            </motion.a>
          ))}
      </AnimatePresence>

      {/* Main FAB */}
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={() => setOpen(!open)}
        className="
          relative
          w-11 h-11
          rounded-full
          bg-primary
          text-primary-foreground
          flex items-center justify-center
          shadow-lg
          hover:scale-110
          transition-all duration-300
          cursor-pointer
        "
      >
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <Plus size={18} strokeWidth={2.5} />
        </motion.div>
      </motion.button>
    </div>
  );
};