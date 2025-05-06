import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "@/components/layout/Header"
import Autocomplete from "@/components/form-inputs/Autocomplete"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, PanelRight, PanelTop, Search } from "lucide-react"
import LaptopCard from "./LaptopCard"

import laptopImg1 from "@/assets/images/laptop-1.avif"
import laptopImg2 from "@/assets/images/laptop-2.avif"
import laptopImg3 from "@/assets/images/laptop-3.avif"
import laptopImg4 from "@/assets/images/laptop-4.webp"
import laptopImg5 from "@/assets/images/laptop-1.avif"
import laptopImg6 from "@/assets/images/laptop-3.avif"
const laptopImg = { 1: laptopImg1, 2: laptopImg2, 3: laptopImg3, 4: laptopImg4, 5: laptopImg5, 6: laptopImg6 }

export default function Home() {
  const [filterConfig, setFilterConfig] = useState({ open: true, rightPanel: false })

  let filterButtons = (
    <>
      {" "}
      <div
        className={`flex z-20 transition-all duration-800 ${
          filterConfig.rightPanel ? "justify-end mr-8 ease-in" : `flex-col items-center ${filterConfig.open ? "mt-[-20px] " : "mt-2"}`
        }`}
      >
        <div className={`flex gap-2 bg-background mt-2`}>
          <Button
            className="p-0 text-[.7em]"
            variant={"outline"}
            size="sm"
            onClick={() => setFilterConfig((prev) => ({ ...prev, open: !prev.open }))}
          >
            {filterConfig.rightPanel ? filterConfig.open ? <ChevronRight /> : <ChevronLeft /> : filterConfig.open ? <ChevronUp /> : <ChevronDown />}
            Filters
          </Button>
          <Button
            className="p-0 text-[.7em]"
            variant={"outline"}
            size="sm"
            onClick={() =>
              setFilterConfig((prev) => ({
                ...prev,
                rightPanel: !prev.rightPanel,
              }))
            }
          >
            {filterConfig.rightPanel ? <PanelTop /> : <PanelRight />}
          </Button>
        </div>
      </div>
    </>
  )

  return (
    <>
      <Header />
      <div className="md:flex justify-center hidden">
        <div className="relative w-full max-w-md mt-[-50px]">
          <Search className="absolute inset-y-0 top-1.5 left-3 w-5 text-gray-500" />
          <Input
            placeholder="AI Search for Laptop Configs..."
            className="w-full max-w-md px-4 pl-10 py-3 text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <div className={` grid ${filterConfig.rightPanel ? "grid-cols-4 relative" : "grid-cols-1"}`}>
        <div className={filterConfig.rightPanel ? (filterConfig.open ? "col-span-3" : "col-span-full") : "hidden"}>
          <div className="text-2xl font-bold ml-10 my-4">Latest Top Rated</div>
          <div className={`m-10 mt-0 grid gap-7 ${filterConfig.open ? "md:grid-cols-3" : "md:grid-cols-4"}`}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <LaptopCard key={item} img={laptopImg[item]} />
            ))}
          </div>
        </div>
        <div className={`${filterConfig.rightPanel ? "absolute top-0 right-0 z-20" : "hidden"}`}>{filterButtons}</div>
        <FilterLayout {...{ filterConfig, filterButtons }}>
          <div className={`grid ${filterConfig.rightPanel ? "grid-rows-12 mx-5" : "grid-rows-12 md:grid-cols-4 my-5  mb-0 mx-5"} gap-4 `}>
            <div>
              <Autocomplete
                name="brand"
                label="Brand"
                placeholder="Select Brand"
                options={[
                  { value: "next.js", label: "Lenovo" },
                  { value: "sveltekit", label: "Dell" },
                  { value: "nuxt.js", label: "HP" },
                  { value: "remix", label: "Alienware" },
                  { value: "astro", label: "" },
                ]}
              />
            </div>
            <div>
              <Autocomplete
                name="brand"
                label="Processor"
                placeholder="Select Processor"
                options={[
                  // Intel processors
                  { value: "intel-i3", label: "Intel Core i3" },
                  { value: "intel-i5", label: "Intel Core i5" },
                  { value: "intel-i7", label: "Intel Core i7" },
                  { value: "intel-i9", label: "Intel Core i9" },

                  // Intel Core Ultra (14th Gen & newer)
                  { value: "intel-ultra-5", label: "Intel Core Ultra 5" },
                  { value: "intel-ultra-7", label: "Intel Core Ultra 7" },
                  { value: "intel-ultra-9", label: "Intel Core Ultra 9" },

                  // AMD Ryzen processors
                  { value: "ryzen-3", label: "AMD Ryzen 3" },
                  { value: "ryzen-5", label: "AMD Ryzen 5" },
                  { value: "ryzen-7", label: "AMD Ryzen 7" },
                  { value: "ryzen-9", label: "AMD Ryzen 9" },
                ]}
              />
            </div>
            <div>
              <Autocomplete
                name="brand"
                label="Brand"
                placeholder="Select RAM"
                options={[
                  // DDR3 (legacy systems)
                  { value: "4gb-ddr3", label: "4GB DDR3" },
                  { value: "8gb-ddr3", label: "8GB DDR3" },
                  // DDR4 (common and modern)
                  { value: "4gb-ddr4", label: "4GB DDR4" },
                  { value: "8gb-ddr4", label: "8GB DDR4" },
                  { value: "16gb-ddr4", label: "16GB DDR4" },
                  { value: "32gb-ddr4", label: "32GB DDR4" },
                  // DDR5 (latest standard)
                  { value: "8gb-ddr5", label: "8GB DDR5" },
                  { value: "16gb-ddr5", label: "16GB DDR5" },
                  { value: "32gb-ddr5", label: "32GB DDR5" },
                  { value: "64gb-ddr5", label: "64GB DDR5" },
                ]}
              />
            </div>
            <div>
              <Autocomplete
                name="brand"
                label="Storage"
                placeholder="Select Memory"
                options={[
                  { value: "256-hdd", label: "256GB HDD" },
                  { value: "512-hdd", label: "512GB HDD" },
                  { value: "1tb-hdd", label: "1TB HDD" },
                  { value: "2tb-hdd", label: "2TB HDD" },
                  { value: "4tb-hdd", label: "4TB HDD" },
                  { value: "128-ssd", label: "128GB SSD" },
                  { value: "256-ssd", label: "256GB SSD" },
                  { value: "512-ssd", label: "512GB SSD" },
                  { value: "1tb-ssd", label: "1TB SSD" },
                  { value: "2tb-ssd", label: "2TB SSD" },
                ]}
              />
            </div>
          </div>
        </FilterLayout>
        <div className={filterConfig.rightPanel ? "hidden" : "block"}>
          {" "}
          <div className="text-2xl font-bold ml-10 my-4">Latest Top Rated</div>
          <div className={`m-10 mt-0 grid gap-7 md:grid-cols-4`}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <LaptopCard key={item} img={laptopImg[item]} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function FilterLayout({ filterConfig, filterButtons, children }) {
  if (filterConfig.rightPanel)
    return (
      <div
        className={`overflow-hidden border-l border-gray-300 dark:border-gray-600 pt-10
        transition-transform duration-700 ease-in-out transform 
        ${filterConfig.open ? "translate-x-0" : "translate-x-full opacity-0 invisible pointer-events-none"} `}
      >
        {children}
      </div>
    )
  return (
    <>
      <div
        className={`overflow-hidden border-b border-gray-300 dark:border-gray-600 mx-8
          transition-all duration-800 ease-in-out ${
            filterConfig.open ? "max-h-[340px] md:max-h-[120px]" : "max-h-0 opacity-0 invisible pointer-events-none"
          }`}
      >
        {children}
      </div>
      {filterButtons}
    </>
  )
}
