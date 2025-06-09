// import { IEvent } from '@/lib/database/models/event.model'
// import React from 'react'
// import Card from './Card'
// import Pagination from './Pagination'

// type CollectionProps = {
//   data: IEvent[],
//   emptyTitle: string,
//   emptyStateSubtext: string,
//   limit: number,
//   page: number | string,
//   totalPages?: number,
//   urlParamName?: string,
//   collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events'
// }

// const Collection = ({
//   data,
//   emptyTitle,
//   emptyStateSubtext,
//   page,
//   totalPages = 0,
//   collectionType,
//   urlParamName,
// }: CollectionProps) => {
//   return (
//     <>
//       {data.length > 0 ? (
//         <div className="flex flex-col items-center gap-10">
//           <ul className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
//             {data.map((event) => {
//               const hasOrderLink = collectionType === 'Events_Organized';
//               const hidePrice = collectionType === 'My_Tickets';

//               return (
//                 <li key={event._id} className="flex justify-center">
//                   <Card event={event} hasOrderLink={hasOrderLink} hidePrice={hidePrice} />
//                 </li>
//               )
//             })}
//           </ul>

//           {totalPages > 1 && (
//             <Pagination urlParamName={urlParamName} page={page} totalPages={totalPages} />
//           )}
//         </div>
//       ): (
//         <div className="flex-center wrapper min-h-[200px] w-full flex-col gap-3 rounded-[14px] bg-grey-50 py-28 text-center">
//           <h3 className="p-bold-20 md:h5-bold">{emptyTitle}</h3>
//           <p className="p-regular-14">{emptyStateSubtext}</p>
//         </div>
//       )} 
//     </>
//   )
// }

// export default Collection

import { IEvent } from '@/lib/database/models/event.model';
import React from 'react';
import Card from './Card';
import Pagination from './Pagination';

type CollectionProps = {
  data: IEvent[];
  emptyTitle: string;
  emptyStateSubtext: string;
  limit: number;
  page: number | string;
  totalPages?: number;
  urlParamName?: string;
  collectionType?: 'Events_Organized' | 'My_Tickets' | 'All_Events';
};

const Collection = ({
  data,
  emptyTitle,
  emptyStateSubtext,
  page,
  totalPages = 0,
  collectionType,
  urlParamName,
}: CollectionProps) => {
  return (
    <div className="px-4 py-6 sm:px-8">
      {data.length > 0 ? (
        <div className="flex flex-col items-center gap-10">
          {/* Grid layout with improved spacing */}
          <ul className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((event) => {
              const hasOrderLink = collectionType === 'Events_Organized';
              const hidePrice = collectionType === 'My_Tickets';

              return (
                <li
                  key={event._id}
                  className="flex justify-center transform transition duration-300 hover:scale-105"
                >
                  <Card
                    event={event}
                    hasOrderLink={hasOrderLink}
                    hidePrice={hidePrice}
                  />
                </li>
              );
            })}
          </ul>

          {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              urlParamName={urlParamName}
              page={page}
              totalPages={totalPages}
            />
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 rounded-lg bg-gray-900 py-16 px-6 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white">{emptyTitle}</h3>
          <p className="text-sm text-gray-400">{emptyStateSubtext}</p>
        </div>
      )}
    </div>
  );
};

export default Collection;
