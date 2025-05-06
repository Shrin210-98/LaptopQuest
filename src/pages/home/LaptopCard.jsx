import React, { useState, useEffect, use } from "react"
import { Button } from "@/components/ui/button"
import laptopImage from "@/assets/images/laptop-1.avif"
import { Cpu, HardDrive, Layers, MemoryStick } from "lucide-react"

export default function LaptopCard({ img }) {
  const [isFlipped, setIsFlipped] = useState(false)
  return (
    <>
      <style>
        {`.flip-card {
        perspective: 1000px;
        display: flex;
        flex-direction: column;
        align-items: center;
        }

        .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        transform-style: preserve-3d;
        transition: transform 0.6s;
        }

        .flipped .flip-card-inner {
        transform: rotateY(180deg);
        }

        .flip-card-front,
        .flip-card-back {
        position:absolute;
        width: 100%;
        height: 100%;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }


        .flip-card-back {
        background: gray;
        transform: rotateY(180deg);
        }
    }`}
      </style>
      <div className={`relative flex items-center justify-center flip-card h-60 ${isFlipped ? "flipped" : ""}`}>
        <div className="flip-card-inner w-96 h-60">
       
          <div class="flip-card-front relative w-96 h-60 border border-black/40 dark:border-white/40 rounded-sm overflow-hidden shadow-lg/50 dark:shadow-white bg-white/10 dark:bg-black/70 ">
            <img src={img ?? laptopImage} alt="Background" class="absolute inset-0 w-full h-full object-cover" />
            <div class="relative z-10 h-full w-full backdrop-blur-xs bg-white/70 dark:bg-black/70 p-6 flex flex-col">
              <h2 class="text-xl font-bold mb-2">Lenovo Thinkpad</h2>
              <p class="text-sm mb-3">This content stays readable while the image is nicely blurred behind.</p>
              {[
                { icon: <Cpu size="1em" />, label: "Intel i3" },
                { icon: <MemoryStick size="1em" />, label: "4GB RAM" },
                { icon: <HardDrive size="1em" />, label: "1TB Hard Disk" },
              ].map((item) => (
                <div key={item.label} className="flex items-center mt-1">
                  {item.icon} <h6 className="text-sm ml-2">{item.label}</h6>
                </div>
              ))}
            </div>
          </div>

          <div class="flip-card-back relative w-96 h-60 border border-black/40 dark:border-white/40 rounded-sm overflow-hidden shadow-lg/50 dark:shadow-white bg-white/10 dark:bg-black/70 ">
            <img src={img ?? laptopImage} alt="Background" class="absolute inset-0 w-full h-full object-cover" />
          </div>
        </div>

        <Button
            className="absolute z-20 top-1 right-1 cursor-pointer"
            variant="text"
            size="icon"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
          >
            <Layers />
          </Button>
      </div>
    </>
  )
}
