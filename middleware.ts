 import { authMiddleware } from "@clerk/nextjs";
 //import { clerkClient } from '@clerk/nextjs/server';
 
 export default authMiddleware({
  publicRoutes: [
  '/',
  '/events/:id',
  '/contactus',
  '/aboutus',
  '/events',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
  '/robot'
],


// export default authMiddleware({
//   publicRoutes,

//   // async afterAuth(auth, req) {
//   //   if (!auth.userId){
//   //     const user = await clerkClient.users.getUser(auth, userId)
//   //   }
//   // },
  ignoredRoutes: [
    '/api/webhook/clerk',
    //'/events',
    '/api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
 