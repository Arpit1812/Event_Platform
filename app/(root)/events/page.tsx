// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection';
// import Search from '@/components/shared/Search';
// import { Button } from '@/components/ui/button';
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
// import Image from 'next/image';
// import Link from 'next/link';


// import CategoryFilter from '@/components/shared/CategoryFilter';
// import Collection from '@/components/shared/Collection';
// import Search from '@/components/shared/Search';
// import { Button } from '@/components/ui/button';
// import { getAllEvents } from '@/lib/actions/event.actions';
// import { SearchParamProps } from '@/types';
// import Image from 'next/image';
// import Link from 'next/link';

// export default async function Home({ searchParams }: SearchParamProps) {
//   const page = Number(searchParams?.page) || 1;
//   const searchText = (searchParams?.query as string) || '';
//   const category = (searchParams?.category as string) || '';

//   const events = await getAllEvents({
//     query: searchText,
//     category,
//     page,
//     limit: 6,
//   });

//   return (
//     <>
//       {/* Neon Colors Section */}
//       <section id="neon-section">
//   <h1 className="text-white text-center text-4xl">Events</h1>
// </section>


//       <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
//         <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
//           <div className="flex flex-col justify-center gap-8">
//             <h1 className="h1-bold">Host, Connect, Celebrate: Your Events, Our Platform!</h1>
//             <p className="p-regular-20 md:p-regular-24">Book and learn helpful tips from 3,168+ mentors in world-class companies with our global community.</p>
//             <Button size="lg" asChild className="button w-full sm:w-fit">
//               <Link href="#events">Explore Now</Link>
//             </Button>
//           </div>

//           <Image 
//             src="/assets/images/hero.png"
//             alt="hero"
//             width={1000}
//             height={1000}
//             className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
//           />
//         </div>
//       </section>

//       <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
//         {/* Existing Content */}
//       </section>

//       <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
//         <h2 className="h2-bold">Trusted by <br /> Thousands of Events</h2>

//         <div className="flex w-full flex-col gap-5 md:flex-row">
//           <Search />
//           <CategoryFilter />
//         </div>

//         <Collection
//           data={events?.data}
//           emptyTitle="No Events Found"
//           emptyStateSubtext="Come back later"
//           collectionType="All_Events"
//           limit={6}
//           page={page}
//           totalPages={events?.totalPages}
//         />
//       </section>
//     </>
//   );
// }

import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import Search from '@/components/shared/Search';
import { Button } from '@/components/ui/button';
import { getAllEvents } from '@/lib/actions/event.actions';
import { SearchParamProps } from '@/types';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || '';
  const category = (searchParams?.category as string) || '';

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 8, // Adjusted for 4 items per row with 2 rows
  });

  return (
    <div className="bg-black">
      {/* Neon Colors Section */}
      <section
        id="neon-section"
        className="relative flex h-[300px] items-center justify-center text-center text-white"
        style={{
          animation: 'colorTransition 8s infinite',
        }}
      >
        <h1 className="text-4xl font-bold">~ Events</h1>
      </section>

      <section className="bg-black py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8 text-white">
            <h1 className="text-4xl font-bold">
              Host, Connect, Celebrate: Your Events, Our Platform!
            </h1>
            <p className="text-lg">
              Book and learn helpful tips from 3,168+ mentors in world-class
              companies with our global community.
            </p>
            <Button size="lg" asChild className="button w-full sm:w-fit">
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          <Image
            src="/assets/images/hero.png"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] object-contain object-center 2xl:max-h-[50vh]"
          />
        </div>
      </section>

      <section id="events" className="wrapper bg-black my-8 flex flex-col gap-8 md:gap-12">
      <h2 className="border-t border-white border-opacity-40 pt-4 text-3xl font-bold text-white">
  Trusted by <br /> Thousands of Events
</h2>


        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter />
        </div>

        <Collection
          data={events?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={8} // Adjusted limit
          page={page}
          totalPages={events?.totalPages}
          gridClass="grid grid-cols-1 gap-5 md:grid-cols-4"
        />
      </section>
    </div>
  );
}
