import { getAllEvents } from '@/lib/actions/event.actions';
import CategoryFilter from '@/components/shared/CategoryFilter';
import Collection from '@/components/shared/Collection';
import { SearchParamProps } from '@/types';
import Search from '@/components/shared/Search';

// export default function EventsPage() {
//     return <h1>Hello World</h1>;
//   }
  
  export default async function events({ searchParams }: SearchParamProps) {
    const page = Number(searchParams?.page) || 1;
    const searchText = (searchParams?.query as string) || '';
    const category = (searchParams?.category as string) || '';
  
  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6
  })

// 'use client';

// import React, { useEffect, useState } from 'react';

// const AllEvents = () => {
//   const [events, setEvents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // Fetch events from the API
//   useEffect(() => {
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('/api/all-events/eventroute'); // Ensure this matches your API path
//         const data = await response.json();
//         setEvents(data.events); // Assuming the API returns an object with an `events` array
//       } catch (error) {
//         console.error('Error fetching events:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchEvents();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (events.length === 0) {
//     return <div>No events available.</div>;
//   }

  return (
  <>
  <section id="events" className="wrapper my-8 flex flex-col gap-8 md:gap-12">
  <h2 className="h2-bold">Trust by <br /> Thousands of Events</h2>

  <div className="flex w-full flex-col gap-5 md:flex-row">
    <Search />
    <CategoryFilter />
  </div>

  <Collection 
    data={events?.data}
    emptyTitle="No Events Found"
    emptyStateSubtext="Come back later"
    collectionType="All_Events"
    limit={6}
    page={page}
    totalPages={events?.totalPages}
  />
</section>
</>
)
};