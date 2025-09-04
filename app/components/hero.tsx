// "use client";

// import { motion } from "framer-motion";
// import SearchForm from "./searchForm";

// export default function HeroSection() {
//   return (
//     <section className="bg-[#003b95] text-white px-4 py-12 md:py-16">
//       <div className="mx-auto max-w-6xl text-center">
//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-3xl md:text-5xl font-extrabold mb-4"
//         >
//           Find your next stay
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-lg md:text-xl opacity-90 mb-8"
//         >
//           Search deals on hotels, homes, and much more...
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//         >
//           <SearchForm />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, y: 10 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1 }}
//           className="mt-4 flex flex-col md:flex-row justify-center gap-4 text-sm text-white"
//         >
//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-4 h-4 accent-[#0071c2]" />
//             I'm looking for an entire home or apartment
//           </label>

//           <label className="flex items-center gap-2 cursor-pointer">
//             <input type="checkbox" className="w-4 h-4 accent-[#0071c2]" />
//             I'm looking for flights
//           </label>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


"use client";

import { motion } from "framer-motion";
import SearchForm from "./searchForm";

export default function HeroSection() {
  return (
    <section className="relative bg-[#003b95] px-4 pb-10 pt-10 text-white md:pb-16 md:pt-14">
      <div className="mx-auto max-w-7xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 text-3xl font-extrabold md:text-5xl"
        >
          Find your next stay
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-lg opacity-90 md:text-xl"
        >
          Search deals on hotels, homes, and much more...
        </motion.p>

       
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
          className="relative z-10"
        >
          <SearchForm />
        </motion.div>

      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-3 flex flex-col gap-3 text-sm md:flex-row md:items-center"
        >
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-[#0071c2]" />
            Im looking for an entire home or apartment
          </label>
          <label className="flex cursor-pointer items-center gap-2">
            <input type="checkbox" className="h-4 w-4 accent-[#0071c2]" />
            Im looking for flights
          </label>
        </motion.div>
      </div>
    </section>
  );
}

  
