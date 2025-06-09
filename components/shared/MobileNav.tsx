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
//             src="/assets/images/Spotlight-Logo-High-Resolution.png"
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
  SheetHeader,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "../ui/separator";

// Mock navigation items (replace with your NavItems logic if necessary)
const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/aboutus" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/Contactus" },
];

const MobileNav = () => {
  return (
    <nav className="md:hidden">
      {/* Mobile menu trigger */}
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

        {/* Mobile menu content */}
        <SheetContent className="h-screen overflow-y-auto bg-white p-4">
          {/* Logo */}
          <SheetHeader className="flex justify-between items-center">
            <Image
              src="/assets/images/Spotlight-Logo-High-Resolution.png"
              alt="logo"
              width={128}
              height={38}
            />
          </SheetHeader>

          {/* Separator */}
          <Separator className="my-4 border-gray-300" />

          {/* Dropdown menu */}
          <ul className="flex flex-col gap-4">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="block text-lg font-medium text-gray-800 hover:text-gray-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;