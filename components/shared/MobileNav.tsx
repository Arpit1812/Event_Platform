// import {
//   Sheet,
//   SheetContent,
//   SheetDescription,
//   SheetHeader,
//   SheetTitle,
//   SheetTrigger,
// } from "@/components/ui/sheet"
// import Image from "next/image"
// import { Separator } from "../ui/separator"
// import NavItems from "./NavItems"


// const MobileNav = () => {
//   return (
//     <nav className="md:hidden">
//       <Sheet>
//         <SheetTrigger className="align-middle">
//           <Image 
//             src="/assets/icons/menu.svg"
//             alt="menu"
//             width={24}
//             height={24}
//             className="cursor-pointer"
//           />
//         </SheetTrigger>
//         <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
//           <Image 
//             src="/assets/images/logo.svg"
//             alt="logo"
//             width={128}
//             height={38}
//           />
//           <Separator className="border border-gray-50" />
//           <NavItems />
//         </SheetContent>
//       </Sheet>
//     </nav>
//   )
// }

// export default MobileNav


import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <div className="flex items-center justify-between p-4">
        {/* Logo */}
        <Image 
          src="/assets/images/logo.svg"
          alt="logo"
          width={128}
          height={38}
        />
        
        {/* Dropdown Menu */}
        <Sheet>
          <SheetTrigger className="align-middle">
            <Image 
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </SheetTrigger>

          <SheetContent 
            className="flex flex-col bg-white md:hidden h-full overflow-y-auto p-4"
          >
            {/* Nav Items */}
            <div className="flex flex-col gap-4 overflow-y-auto flex-1">
              <NavItems />
            </div>

            {/* Footer or Contact Us */}
            <div className="mt-auto pt-4">
              <Separator className="mb-4" />
              <p className="text-center text-sm text-gray-500">
                © 2024 Your Company
              </p>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}

export default MobileNav
