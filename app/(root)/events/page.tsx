// export default function EventsPage() {
//     return <h1>Hello World</h1>;
//   }
  


'use client';

import React, { useEffect, useState } from 'react';
 
import Checkout from './Checkout';
import { SignedIn, SignedOut } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Checkout from './Checkout'
import { Button } from "@/components/ui/button"
import { useState } from "react"

import "react-datepicker/dist/react-datepicker.css";

const AllEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch events from the API
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/all-events/eventroute'); // Ensure this matches your API path
        const data = await response.json();
        setEvents(data.events); // Assuming the API returns an object with an `events` array
      } catch (error) {
        console.error('Error fetching events:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (events.length === 0) {
    return <div>No events available.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Events</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {events.map((event) => (
          <li key={event.id} className="border p-4 rounded shadow">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.description}</p>
            <p className="text-sm text-gray-500">Location: {event.location}</p>
            <p className="text-sm text-gray-500">
              Date: {new Date(event.startDateTime).toLocaleString()} -{' '}
              {new Date(event.endDateTime).toLocaleString()}
              <SignedOut>
            <Button asChild className="button rounded-full" size="lg">
              <Link href={event.url as string}>
                Get Tickets
              </Link>
            </Button>
          </SignedOut>

          <SignedIn>
            <Checkout event={event} userId={userId} />
          </SignedIn>
        </>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
  // return (
  //   <div className="flex items-center gap-3">
  //     {hasEventFinished ? (
  //       <p className="p-2 text-red-400">Sorry, tickets are no longer available.</p>
  //     ): (
  //       <>
  //         <SignedOut>
  //           <Button asChild className="button rounded-full" size="lg">
  //             <Link href={event.url as string}>
  //               Get Tickets
  //             </Link>
  //           </Button>
  //         </SignedOut>

  //         <SignedIn>
  //           <Checkout event={event} userId={userId} />
  //         </SignedIn>
  //       </>
  //     )}
  //   </div>
  // );
};

export default AllEvents;