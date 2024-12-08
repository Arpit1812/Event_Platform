export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {label: 'Create Event',
   route: '/events/create',
  },
  {
    label: 'Events',
    route: '/events',
    submenu: [
      {
        label: 'Upcoming Events',
        route: '/events/upcoming',
      },
      {
        label: 'Past Events',
        route: '/events/past',
      },
    ],
  },
  {
    label: 'My Profile',
    route: '/profile',
  },
];
export const eventDefaultValues = {
  title: '',
  description: '',
  location: '',
  imageUrl: '',
  startDateTime: new Date(),
  endDateTime: new Date(),
  categoryId: '',
  price: '',
  isFree: false,
  url: '',
}