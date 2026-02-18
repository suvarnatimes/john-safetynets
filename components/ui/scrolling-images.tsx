"use client"

import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react"

const column1Images = [
  "/Invisible Grill Balcony Safety Nets.jpg",
  "/Invisible Pigeon Net.jpg",
  "/Sports Practice Nets.jpg",
  "/Duct Area Nets.jpg",
]

const column2Images = [
  "/Cloth Hanger Services.jpg",
  "/Children's Safety Nets.jpg",
  "/Pets Safety Nets.jpg",
  "/safety nets for the Staircase.jpg",
]

export function ScrollingImages() {
  return (
    <>
      {/* Desktop: Vertical Scroll (2 Columns) */}
      <div className="hidden lg:block relative h-full w-full overflow-hidden mask-gradient-y min-h-[400px]">
        <div className="grid grid-cols-2 gap-4 h-full">
          <ScrollColumn images={column1Images} direction="up" speed={40} />
          <ScrollColumn images={column2Images} direction="down" speed={50} />
        </div>
      </div>

      {/* Mobile: Horizontal Scroll (1 Row) */}
      <div className="block lg:hidden relative w-full overflow-hidden mask-gradient-x h-[200px]">
        <ScrollRow images={[...column1Images, ...column2Images]} speed={40} />
      </div>

      <style jsx global>{`
        .mask-gradient-y {
          mask-image: linear-gradient(
            to bottom,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
        .mask-gradient-x {
          mask-image: linear-gradient(
            to right,
            transparent,
            black 5%,
            black 95%,
            transparent
          );
        }
      `}</style>
    </>
  )
}

function ScrollColumn({
  images,
  direction = "up",
  speed = 30
}: {
  images: string[],
  direction?: "up" | "down",
  speed?: number
}) {
  // Duplicate images for infinite scroll
  const duplicatedImages = [...images, ...images, ...images]

  return (
    <div className="relative h-full overflow-hidden flex flex-col gap-4">
      <motion.div
        animate={{
          y: direction === "up" ? [0, -1000] : [-1000, 0],
        }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex flex-col gap-4"
      >
        {duplicatedImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-slate-200"
          >
            <Image
              src={src}
              alt="Safety Net Installation"
              fill
              sizes="(max-width: 1024px) 100vw, 25vw"
              priority={idx < 2}
              quality={75}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function ScrollRow({
  images,
  speed = 30
}: {
  images: string[],
  speed?: number
}) {
  const duplicatedImages = [...images, ...images, ...images]

  return (
    <div className="relative w-full h-full overflow-hidden flex flex-row gap-4">
      <motion.div
        animate={{
          x: [0, -2000],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        className="flex flex-row gap-4 h-full items-center"
      >
        {duplicatedImages.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-[4/3] h-full w-auto min-w-[200px] rounded-2xl overflow-hidden border border-slate-200 shrink-0"
          >
            <Image
              src={src}
              alt="Safety Net Installation"
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              priority={idx < 2}
              quality={75}
              className="object-cover"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}
