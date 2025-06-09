export const headerLinks = [
  {
    label: 'Home',
    route: '/',
  },
  {label: 'About Us',
   route: '/aboutus',
  },
  // {label: 'My Profile',
  //  route: '/profile',
  // },
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
    label: 'Contact Us',
    route: '/Contactus',
  },
  // {
  //   label: 'Create Event',
  //   route: '/events/create',
  // },
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