// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
// import Image from "next/image"
// import Link from "next/link"
// import { Button } from "../ui/button"
// import NavItems from "./NavItems"
// import MobileNav from "./MobileNav"

// const Header = () => {
//   return (
//     <header className="w-full border-b">
//   <div className="wrapper flex items-center justify-between">
//     <Link href="/" className="w-36">
//       <Image 
//         src="/assets/images/Spotlight-Logo-High-Resolution.png" 
//         width={200} 
//         height={30} 
//         alt="Spotlight Logo" 
//       />
//     </Link>

//     <nav className="flex justify-inherit md:flex-between w-full max-w-xs">
//       <NavItems />
//     </nav>

//     <div className="flex items-center w-32 justify-between gap-3">
//       <SignedIn>
//         <UserButton afterSignOutUrl="/" />
//         <MobileNav />
//       </SignedIn>
//       <SignedOut>
//         <Button asChild className="rounded-full" size="lg">
//           {/* <Link href="/sign-in">
//             Login
//           </Link> */}
//         </Button>
//       </SignedOut>
//     </div>
//   </div>
// </header>


//   )
// }

// export default Header

// import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "../ui/button";
// import NavItems from "./NavItems";
// import MobileNav from "./MobileNav";

// const Header = () => {
//   return (
//     <header className="w-full bg-white border-b py-2"> {/* Reduced padding */}
//       <div className="wrapper flex items-center justify-between h-12"> {/* Reduced height */}
//         {/* Adjusted logo size */}
//         <Link href="/" className="w-28 flex-shrink-0">
//           <Image
//             src="/assets/images/Spotlight-Logo-High-Resolution.png"
//             width={112} // Adjusted width
//             height={30} // Adjusted height
//             alt="Spotlight Logo"
//             style={{ objectFit: "cover" }} // Ensures the logo fits within its container
//           />
//         </Link>

//         <nav className="flex justify-inherit md:flex-between w-full max-w-xs">
//           <NavItems />
//         </nav>

//         <div className="flex items-center w-32 justify-between gap-3">
//           <SignedIn>
//             <UserButton afterSignOutUrl="/" />
//             <MobileNav />
//           </SignedIn>
//           <SignedOut>
//             <Button asChild className="rounded-full" size="lg">
//               {/* <Link href="/sign-in">
//                 Login
//               </Link> */}
//             </Button>
//           </SignedOut>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import Link from "next/link";
import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="w-full bg-white border-b py-2">
      <div className="wrapper flex items-center justify-between h-12">
        {/* Logo */}
        <Link href="/" className="w-28 flex-shrink-0">
          <Image
            src="/assets/images/Spotlight-Logo-High-Resolution.png"
            width={112}
            height={30}
            alt="Spotlight Logo"
            style={{ objectFit: "cover" }}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex w-full max-w-xs">
          <NavItems />
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <MobileNav />
        </div>

        {/* User Actions */}
        <div className="flex items-center w-32 justify-between gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            {/* <Button asChild className="rounded-full" size="lg">
              <Link href="/sign-in">Login</Link>
            </Button> */}
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Header;
