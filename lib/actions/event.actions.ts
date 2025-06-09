// 'use server'

// import { revalidatePath } from 'next/cache'

// import { connectToDatabase } from '@/lib/database'
// import Event from '@/lib/database/models/event.model'
// import User from '@/lib/database/models/user.model'
// import Category from '@/lib/database/models/category.model'
// import { handleError } from '@/lib/utils'

// import {
//   CreateEventParams,
//   UpdateEventParams,
//   DeleteEventParams,
//   GetAllEventsParams,
//   GetEventsByUserParams,
//   GetRelatedEventsByCategoryParams,
// } from '@/types'

// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: 'i' } })
// }

// const populateEvent = (query: any) => {
//   return query
//     .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: Category, select: '_id name' })
// }

// // CREATE
// export async function createEvent({ userId, event, path }: CreateEventParams) {
//   try {
//     await connectToDatabase()

//     const organizer = await User.findById(userId)
//     if (!organizer) throw new Error('Organizer not found')

//      const newEvent = await Event.create({ ...event, category: event.categoryId, organizer: userId })
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(newEvent))
//   } catch (error) {
//     handleError(error)
//   }
// }

// // GET ONE EVENT BY ID
// export async function getEventById(eventId: string) {
//   try {
//     await connectToDatabase()

//     const event = await populateEvent(Event.findById(eventId))

//     if (!event) throw new Error('Event not found')

//     return JSON.parse(JSON.stringify(event))
//   } catch (error) {
//     handleError(error)
//   }
// }

// // UPDATE
// export async function updateEvent({ userId, event, path }: UpdateEventParams) {
//   try {
//     await connectToDatabase()

//     const eventToUpdate = await Event.findById(event._id)
//     if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
//       throw new Error('Unauthorized or event not found')
//     }

//     const updatedEvent = await Event.findByIdAndUpdate(
//       event._id,
//       { ...event, category: event.categoryId },
//       { new: true }
//     )
//     revalidatePath(path)

//     return JSON.parse(JSON.stringify(updatedEvent))
//   } catch (error) {
//     handleError(error)
//   }
// }

// // DELETE
// export async function deleteEvent({ eventId, path }: DeleteEventParams) {
//   try {
//     await connectToDatabase()

//     const deletedEvent = await Event.findByIdAndDelete(eventId)
//     if (deletedEvent) revalidatePath(path)
//   } catch (error) {
//     handleError(error)
//   }
// }

// // GET ALL EVENTS
// export async function getAllEvents({ query, limit = 6, page, category }: GetAllEventsParams) {
//   try {
//     await connectToDatabase()

//     const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
//     const categoryCondition = category ? await getCategoryByName(category) : null
//     const conditions = {
//       $and: [titleCondition, categoryCondition ? { category: categoryCondition._id } : {}],
//     }

//     const skipAmount = (Number(page) - 1) * limit
//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return {
//       data: JSON.parse(JSON.stringify(events)),
//       totalPages: Math.ceil(eventsCount / limit),
//     }
//   } catch (error) {
//     handleError(error)
//   }
// }

// // GET EVENTS BY ORGANIZER
// export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
//   try {
//     await connectToDatabase()

//     const conditions = { organizer: userId }
//     const skipAmount = (page - 1) * limit

//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
//   } catch (error) {
//     handleError(error)
//   }
// }

// // GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
// export async function getRelatedEventsByCategory({
//   categoryId,
//   eventId,
//   limit = 3,
//   page = 1,
// }: GetRelatedEventsByCategoryParams) {
//   try {
//     await connectToDatabase()

//     const skipAmount = (Number(page) - 1) * limit
//     const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] }

//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return { data: JSON.parse(JSON.stringify(events)), totalPages: Math.ceil(eventsCount / limit) }
//   } catch (error) {
//     handleError(error)
//   }
// }


// // lib/actions/event.actions.ts - Updated with better error handling
// 'use server'

// import { revalidatePath } from 'next/cache'

// import { connectToDatabase } from '@/lib/database'
// import Event from '@/lib/database/models/event.model'
// import User from '@/lib/database/models/user.model'
// import Category from '@/lib/database/models/category.model'

// import {
//   CreateEventParams,
//   UpdateEventParams,
//   DeleteEventParams,
//   GetAllEventsParams,
//   GetEventsByUserParams,
//   GetRelatedEventsByCategoryParams,
// } from '@/types'

// const getCategoryByName = async (name: string) => {
//   return Category.findOne({ name: { $regex: name, $options: 'i' } })
// }

// const populateEvent = (query: any) => {
//   return query
//     .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
//     .populate({ path: 'category', model: Category, select: '_id name' })
// }

// // CREATE
// export async function createEvent({ userId, event, path }: CreateEventParams) {
//   try {
//     await connectToDatabase()

//     const organizer = await User.findById(userId)
//     if (!organizer) {
//       console.error('Organizer not found:', userId)
//       return { success: false, error: 'Organizer not found' }
//     }

//     // Ensure categoryId exists and is valid
//     if (!event.categoryId) {
//       console.error('Category ID is required')
//       return { success: false, error: 'Category ID is required' }
//     }

//     // Verify the category exists
//     const category = await Category.findById(event.categoryId)
//     if (!category) {
//       console.error('Category not found:', event.categoryId)
//       return { success: false, error: 'Category not found' }
//     }

//     // Create the event with proper category reference
//     const newEvent = await Event.create({ 
//       ...event, 
//       category: event.categoryId, 
//       organizer: userId 
//     })

//     // Populate the new event before returning
//     const populatedEvent = await populateEvent(Event.findById(newEvent._id))
    
//     revalidatePath(path)

//     return { 
//       success: true, 
//       data: JSON.parse(JSON.stringify(populatedEvent)) 
//     }
//   } catch (error) {
//     console.error('Error in createEvent:', error)
    
//     // Handle specific MongoDB errors
//     if (error && typeof error === 'object' && 'code' in error) {
//       if (error.code === 'ETIMEOUT') {
//         return { success: false, error: 'Database connection timeout. Please try again.' }
//       }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to create event' 
//     }
//   }
// }

// // GET ONE EVENT BY ID
// export async function getEventById(eventId: string) {
//   try {
//     await connectToDatabase()

//     const event = await populateEvent(Event.findById(eventId))

//     if (!event) {
//       return { success: false, error: 'Event not found' }
//     }

//     return { 
//       success: true, 
//       data: JSON.parse(JSON.stringify(event)) 
//     }
//   } catch (error) {
//     console.error('Error in getEventById:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to get event' 
//     }
//   }
// }

// // UPDATE
// export async function updateEvent({ userId, event, path }: UpdateEventParams) {
//   try {
//     await connectToDatabase()

//     const eventToUpdate = await Event.findById(event._id)
//     if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
//       return { success: false, error: 'Unauthorized or event not found' }
//     }

//     // Verify category exists if categoryId is provided
//     if (event.categoryId) {
//       const category = await Category.findById(event.categoryId)
//       if (!category) {
//         return { success: false, error: 'Category not found' }
//       }
//     }

//     const updatedEvent = await Event.findByIdAndUpdate(
//       event._id,
//       { ...event, category: event.categoryId },
//       { new: true }
//     )

//     // Populate the updated event
//     const populatedEvent = await populateEvent(Event.findById(updatedEvent._id))
    
//     revalidatePath(path)

//     return { 
//       success: true, 
//       data: JSON.parse(JSON.stringify(populatedEvent)) 
//     }
//   } catch (error) {
//     console.error('Error in updateEvent:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to update event' 
//     }
//   }
// }

// // DELETE
// export async function deleteEvent({ eventId, path }: DeleteEventParams) {
//   try {
//     await connectToDatabase()

//     const deletedEvent = await Event.findByIdAndDelete(eventId)
//     if (deletedEvent) revalidatePath(path)
    
//     return { success: true }
//   } catch (error) {
//     console.error('Error in deleteEvent:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to delete event' 
//     }
//   }
// }

// // GET ALL EVENTS
// export async function getAllEvents({ query, limit = 6, page, category }: GetAllEventsParams) {
//   try {
//     await connectToDatabase()

//     const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
//     const categoryCondition = category ? await getCategoryByName(category) : null
    
//     // Fix the conditions object - remove empty objects
//     const conditions: any = {}
    
//     if (query) {
//       conditions.title = { $regex: query, $options: 'i' }
//     }
    
//     if (categoryCondition) {
//       conditions.category = categoryCondition._id
//     }

//     const skipAmount = (Number(page) - 1) * limit
//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return {
//       success: true,
//       data: JSON.parse(JSON.stringify(events)),
//       totalPages: Math.ceil(eventsCount / limit),
//     }
//   } catch (error) {
//     console.error('Error in getAllEvents:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to get events' 
//     }
//   }
// }

// // GET EVENTS BY ORGANIZER
// export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
//   try {
//     await connectToDatabase()

//     const conditions = { organizer: userId }
//     const skipAmount = (page - 1) * limit

//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return { 
//       success: true,
//       data: JSON.parse(JSON.stringify(events)), 
//       totalPages: Math.ceil(eventsCount / limit) 
//     }
//   } catch (error) {
//     console.error('Error in getEventsByUser:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to get user events' 
//     }
//   }
// }

// // GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
// export async function getRelatedEventsByCategory({
//   categoryId,
//   eventId,
//   limit = 3,
//   page = 1,
// }: GetRelatedEventsByCategoryParams) {
//   try {
//     await connectToDatabase()

//     const skipAmount = (Number(page) - 1) * limit
//     const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] }

//     const eventsQuery = Event.find(conditions)
//       .sort({ createdAt: 'desc' })
//       .skip(skipAmount)
//       .limit(limit)

//     const events = await populateEvent(eventsQuery)
//     const eventsCount = await Event.countDocuments(conditions)

//     return { 
//       success: true,
//       data: JSON.parse(JSON.stringify(events)), 
//       totalPages: Math.ceil(eventsCount / limit) 
//     }
//   } catch (error) {
//     console.error('Error in getRelatedEventsByCategory:', error)
    
//     if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
//       return { success: false, error: 'Database connection timeout. Please try again.' }
//     }
    
//     return { 
//       success: false, 
//       error: error instanceof Error ? error.message : 'Failed to get related events' 
//     }
//   }
// }

'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/database'
import Event from '@/lib/database/models/event.model'
import User from '@/lib/database/models/user.model'
import Category from '@/lib/database/models/category.model'

import {
  CreateEventParams,
  UpdateEventParams,
  DeleteEventParams,
  GetAllEventsParams,
  GetEventsByUserParams,
  GetRelatedEventsByCategoryParams,
} from '@/types'

const getCategoryByName = async (name: string) => {
  return Category.findOne({ name: { $regex: name, $options: 'i' } })
}

const populateEvent = (query: any) => {
  return query
    .populate({ path: 'organizer', model: User, select: '_id firstName lastName' })
    .populate({ path: 'category', model: Category, select: '_id name' })
}

// CREATE
export async function createEvent({ userId, event, path }: CreateEventParams) {
  try {
    await connectToDatabase()

    const organizer = await User.findById(userId)
    if (!organizer) {
      console.error('Organizer not found:', userId)
      return { success: false, error: 'Organizer not found' }
    }

    // Ensure categoryId exists and is valid
    if (!event.categoryId) {
      console.error('Category ID is required')
      return { success: false, error: 'Category ID is required' }
    }

    // Verify the category exists
    const category = await Category.findById(event.categoryId)
    if (!category) {
      console.error('Category not found:', event.categoryId)
      return { success: false, error: 'Category not found' }
    }

    // Create the event with proper category reference
    const newEvent = await Event.create({ 
      ...event, 
      category: event.categoryId, 
      organizer: userId 
    })

    // Populate the new event before returning
    const populatedEvent = await populateEvent(Event.findById(newEvent._id))
    
    revalidatePath(path)

    return { 
      success: true, 
      data: JSON.parse(JSON.stringify(populatedEvent)) 
    }
  } catch (error) {
    console.error('Error in createEvent:', error)
    
    // Handle specific MongoDB errors
    if (error && typeof error === 'object' && 'code' in error) {
      if (error.code === 'ETIMEOUT') {
        return { success: false, error: 'Database connection timeout. Please try again.' }
      }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to create event' 
    }
  }
}

// GET ONE EVENT BY ID
export async function getEventById(eventId: string) {
  try {
    await connectToDatabase()

    const event = await populateEvent(Event.findById(eventId))

    if (!event) {
      return { success: false, error: 'Event not found' }
    }

    return { 
      success: true, 
      data: JSON.parse(JSON.stringify(event)) 
    }
  } catch (error) {
    console.error('Error in getEventById:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to get event' 
    }
  }
}

// UPDATE
export async function updateEvent({ userId, event, path }: UpdateEventParams) {
  try {
    await connectToDatabase()

    const eventToUpdate = await Event.findById(event._id)
    if (!eventToUpdate || eventToUpdate.organizer.toHexString() !== userId) {
      return { success: false, error: 'Unauthorized or event not found' }
    }

    // Verify category exists if categoryId is provided
    if (event.categoryId) {
      const category = await Category.findById(event.categoryId)
      if (!category) {
        return { success: false, error: 'Category not found' }
      }
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      event._id,
      { ...event, category: event.categoryId },
      { new: true }
    )

    // Populate the updated event
    const populatedEvent = await populateEvent(Event.findById(updatedEvent._id))
    
    revalidatePath(path)

    return { 
      success: true, 
      data: JSON.parse(JSON.stringify(populatedEvent)) 
    }
  } catch (error) {
    console.error('Error in updateEvent:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to update event' 
    }
  }
}

// DELETE
export async function deleteEvent({ eventId, path }: DeleteEventParams) {
  try {
    await connectToDatabase()

    const deletedEvent = await Event.findByIdAndDelete(eventId)
    if (deletedEvent) revalidatePath(path)
    
    return { success: true }
  } catch (error) {
    console.error('Error in deleteEvent:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to delete event' 
    }
  }
}

// GET ALL EVENTS
export async function getAllEvents({ query, limit = 6, page, category }: GetAllEventsParams) {
  try {
    await connectToDatabase()

    const titleCondition = query ? { title: { $regex: query, $options: 'i' } } : {}
    const categoryCondition = category ? await getCategoryByName(category) : null
    
    // Fix the conditions object - remove empty objects
    const conditions: any = {}
    
    if (query) {
      conditions.title = { $regex: query, $options: 'i' }
    }
    
    if (categoryCondition) {
      conditions.category = categoryCondition._id
    }

    const skipAmount = (Number(page) - 1) * limit
    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateEvent(eventsQuery)
    const eventsCount = await Event.countDocuments(conditions)

    return {
      success: true,
      data: JSON.parse(JSON.stringify(events)),
      totalPages: Math.ceil(eventsCount / limit),
    }
  } catch (error) {
    console.error('Error in getAllEvents:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to get events' 
    }
  }
}

// GET EVENTS BY ORGANIZER
export async function getEventsByUser({ userId, limit = 6, page }: GetEventsByUserParams) {
  try {
    await connectToDatabase()

    const conditions = { organizer: userId }
    const skipAmount = (page - 1) * limit

    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateEvent(eventsQuery)
    const eventsCount = await Event.countDocuments(conditions)

    return { 
      success: true,
      data: JSON.parse(JSON.stringify(events)), 
      totalPages: Math.ceil(eventsCount / limit) 
    }
  } catch (error) {
    console.error('Error in getEventsByUser:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to get user events' 
    }
  }
}

// GET RELATED EVENTS: EVENTS WITH SAME CATEGORY
export async function getRelatedEventsByCategory({
  categoryId,
  eventId,
  limit = 3,
  page = 1,
}: GetRelatedEventsByCategoryParams) {
  try {
    await connectToDatabase()

    const skipAmount = (Number(page) - 1) * limit
    const conditions = { $and: [{ category: categoryId }, { _id: { $ne: eventId } }] }

    const eventsQuery = Event.find(conditions)
      .sort({ createdAt: 'desc' })
      .skip(skipAmount)
      .limit(limit)

    const events = await populateEvent(eventsQuery)
    const eventsCount = await Event.countDocuments(conditions)

    return { 
      success: true,
      data: JSON.parse(JSON.stringify(events)), 
      totalPages: Math.ceil(eventsCount / limit) 
    }
  } catch (error) {
    console.error('Error in getRelatedEventsByCategory:', error)
    
    if (error && typeof error === 'object' && 'code' in error && error.code === 'ETIMEOUT') {
      return { success: false, error: 'Database connection timeout. Please try again.' }
    }
    
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to get related events' 
    }
  }
}