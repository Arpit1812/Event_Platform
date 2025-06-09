// import { IEvent } from '@/lib/database/models/event.model'
// import { formatDateTime } from '@/lib/utils'
// import { auth } from '@clerk/nextjs'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import { DeleteConfirmation } from './DeleteConfirmation'

// type CardProps = {
//   event: IEvent,
//   hasOrderLink?: boolean,
//   hidePrice?: boolean
// }

// const Card = async ({ event, hasOrderLink, hidePrice }: CardProps) => {
//   const { sessionClaims } = await auth();
//   const userId = sessionClaims?.userId as string;

//   const isEventCreator = userId === event.organizer?._id.toString();

//   return (
//     <div className="group relative flex min-h-[380px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-white shadow-md transition-all hover:shadow-lg md:min-h-[438px]">
//       <Link 
//         href={`/events/${event._id}`}
//         style={{backgroundImage: `url(${event.imageUrl})`}}
//         className="flex-center flex-grow bg-gray-50 bg-cover bg-center text-grey-500"
//       />
//       {/* IS EVENT CREATOR ... */}

//       {isEventCreator && !hidePrice && (
//         <div className="absolute right-2 top-2 flex flex-col gap-4 rounded-xl bg-white p-3 shadow-sm transition-all">
//           <Link href={`/events/${event._id}/update`}>
//             <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
//           </Link>

//           <DeleteConfirmation eventId={event._id} />
//         </div>
//       )}

//       <div
//         className="flex min-h-[230px] flex-col gap-3 p-5 md:gap-4"
//       > 
//        {!hidePrice && <div className="flex gap-2">
//           <span className="p-semibold-14 w-min rounded-full bg-green-100 px-4 py-1 text-green-60">
//             {event.isFree ? 'FREE' : `$${event.price}`}
//           </span>
//           <p className="p-semibold-14 w-min rounded-full bg-grey-500/10 px-4 py-1 text-grey-500 line-clamp-1">
//             {event.category.name}
//           </p>
//         </div>}

//         <p className="p-medium-16 p-medium-18 text-grey-500">
//           {formatDateTime(event.startDateTime).dateTime}
//         </p>

//         <Link href={`/events/${event._id}`}>
//           <p className="p-medium-16 md:p-medium-20 line-clamp-2 flex-1 text-black">{event.title}</p>
//         </Link>

//         <div className="flex-between w-full">
//           <p className="p-medium-14 md:p-medium-16 text-grey-600">
//             {event.organizer?.firstName} {event.organizer?.lastName}
//           </p>

//           {hasOrderLink && (
//             <Link href={`/orders?eventId=${event._id}`} className="flex gap-2">
//               <p className="text-primary-500">Order Details</p>
//               <Image src="/assets/icons/arrow.svg" alt="search" width={10} height={10} />
//             </Link>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Card

import { IEvent } from '@/lib/database/models/event.model';
import { formatDateTime } from '@/lib/utils';
import { auth } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { DeleteConfirmation } from './DeleteConfirmation';

type CardProps = {
  event: IEvent;
  hasOrderLink?: boolean;
  hidePrice?: boolean;
};

const Card = async ({ event, hasOrderLink, hidePrice }: CardProps) => {
  const { sessionClaims } = await auth();
  const userId = sessionClaims?.userId as string;

  const isEventCreator = userId === event.organizer?._id.toString();

  return (
    <div className="group relative flex min-h-[280px] w-full max-w-[400px] flex-col overflow-hidden rounded-xl bg-gray-800 text-white shadow-md transition-all hover:shadow-lg md:min-h-[338px]">
      <Link 
        href={`/events/${event._id}`}
        style={{ backgroundImage: `url(${event.imageUrl})` }}
        className="flex-center flex-grow bg-cover bg-center text-grey-500 transition-all"
      >
        <div className="absolute inset-0 bg-black opacity-20"></div> {/* Dark overlay */}
      </Link>

      {/* Event Creator Actions */}
      {isEventCreator && !hidePrice && (
        <div className="absolute right-4 top-4 flex flex-col gap-3 rounded-lg bg-gray-900 p-3 shadow-lg transition-all hover:shadow-xl">
          <Link href={`/events/${event._id}/update`} className="group flex justify-center items-center p-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-all">
            <Image src="/assets/icons/edit.svg" alt="edit" width={20} height={20} />
          </Link>

          <DeleteConfirmation eventId={event._id} />
        </div>
      )}

      {/* Card Content */}
      <div className="flex min-h-[100px] flex-col gap-4 p-5 md:gap-5">
        {/* Price and Category */}
        {!hidePrice && (
          <div className="flex gap-3">
            <span className="text-sm font-semibold bg-green-500 text-white rounded-full px-4 py-1">
              {event.isFree ? 'FREE' : `£${event.price}`}
            </span>
            <p className="text-sm text-gray-400 bg-gray-600/30 rounded-full px-4 py-1">
              {event.category.name}
            </p>
          </div>
        )}

        {/* Event Date */}
        <p className="text-md text-gray-400">
          {formatDateTime(event.startDateTime).dateTime}
        </p>

        {/* Event Title */}
        <Link href={`/events/${event._id}`}>
          <p className="text-xl font-bold text-white line-clamp-2 hover:underline">
            {event.title}
          </p>
        </Link>

        {/* Organizer and Order Link */}
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-500">
            {event.organizer?.firstName} {event.organizer?.lastName}
          </p>

          {hasOrderLink && (
            <Link href={`/orders?eventId=${event._id}`} className="flex gap-2 text-primary-500 hover:text-primary-300 transition-all">
              <p>Order Details</p>
              <Image src="/assets/icons/arrow.svg" alt="arrow" width={10} height={10} />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
