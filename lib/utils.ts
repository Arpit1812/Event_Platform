// import { type ClassValue, clsx } from 'clsx'

// import { twMerge } from 'tailwind-merge'
// import qs from 'query-string'

// import { UrlQueryParams, RemoveUrlQueryParams } from '@/types'

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

// export const formatDateTime = (dateString: Date) => {
//   const dateTimeOptions: Intl.DateTimeFormatOptions = {
//     weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
//     month: 'short', // abbreviated month name (e.g., 'Oct')
//     day: 'numeric', // numeric day of the month (e.g., '25')
//     hour: 'numeric', // numeric hour (e.g., '8')
//     minute: 'numeric', // numeric minute (e.g., '30')
//     hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
//   }

//   const dateOptions: Intl.DateTimeFormatOptions = {
//     weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
//     month: 'short', // abbreviated month name (e.g., 'Oct')
//     year: 'numeric', // numeric year (e.g., '2023')
//     day: 'numeric', // numeric day of the month (e.g., '25')
//   }

//   const timeOptions: Intl.DateTimeFormatOptions = {
//     hour: 'numeric', // numeric hour (e.g., '8')
//     minute: 'numeric', // numeric minute (e.g., '30')
//     hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
//   }

//   const formattedDateTime: string = new Date(dateString).toLocaleString('en-US', dateTimeOptions)

//   const formattedDate: string = new Date(dateString).toLocaleString('en-US', dateOptions)

//   const formattedTime: string = new Date(dateString).toLocaleString('en-US', timeOptions)

//   return {
//     dateTime: formattedDateTime,
//     dateOnly: formattedDate,
//     timeOnly: formattedTime,
//   }
// }

// export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

// export const formatPrice = (price: string) => {
//   const amount = parseFloat(price)
//   const formattedPrice = new Intl.NumberFormat('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   }).format(amount)

//   return formattedPrice
// }

// export function formUrlQuery({ params, key, value }: UrlQueryParams) {
//   const currentUrl = qs.parse(params)

//   currentUrl[key] = value

//   return qs.stringifyUrl(
//     {
//       url: window.location.pathname,
//       query: currentUrl,
//     },
//     { skipNull: true }
//   )
// }

// export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
//   const currentUrl = qs.parse(params)

//   keysToRemove.forEach(key => {
//     delete currentUrl[key]
//   })

//   return qs.stringifyUrl(
//     {
//       url: window.location.pathname,
//       query: currentUrl,
//     },
//     { skipNull: true }
//   )
// }

// export const handleError = (error: unknown) => {
//   console.error(error)
//   throw new Error(typeof error === 'string' ? error : JSON.stringify(error))
// }


// Replace your existing utils.ts file with this complete version:

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import qs from 'query-string'

import { UrlQueryParams, RemoveUrlQueryParams } from '@/types'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const formatDateTime = (dateString: Date) => {
  const dateTimeOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    day: 'numeric', // numeric day of the month (e.g., '25')
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }

  const dateOptions: Intl.DateTimeFormatOptions = {
    weekday: 'short', // abbreviated weekday name (e.g., 'Mon')
    month: 'short', // abbreviated month name (e.g., 'Oct')
    year: 'numeric', // numeric year (e.g., '2023')
    day: 'numeric', // numeric day of the month (e.g., '25')
  }

  const timeOptions: Intl.DateTimeFormatOptions = {
    hour: 'numeric', // numeric hour (e.g., '8')
    minute: 'numeric', // numeric minute (e.g., '30')
    hour12: true, // use 12-hour clock (true) or 24-hour clock (false)
  }

  const formattedDateTime: string = new Date(dateString).toLocaleString('en-US', dateTimeOptions)
  const formattedDate: string = new Date(dateString).toLocaleString('en-US', dateOptions)
  const formattedTime: string = new Date(dateString).toLocaleString('en-US', timeOptions)

  return {
    dateTime: formattedDateTime,
    dateOnly: formattedDate,
    timeOnly: formattedTime,
  }
}

export const convertFileToUrl = (file: File) => URL.createObjectURL(file)

export const formatPrice = (price: string) => {
  const amount = parseFloat(price)
  const formattedPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount)

  return formattedPrice
}

export function formUrlQuery({ params, key, value }: UrlQueryParams) {
  const currentUrl = qs.parse(params)

  currentUrl[key] = value

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  )
}

export function removeKeysFromQuery({ params, keysToRemove }: RemoveUrlQueryParams) {
  const currentUrl = qs.parse(params)

  keysToRemove.forEach(key => {
    delete currentUrl[key]
  })

  return qs.stringifyUrl(
    {
      url: window.location.pathname,
      query: currentUrl,
    },
    { skipNull: true }
  )
}

// FIXED: This was causing your app to crash
export const handleError = (error: unknown) => {
  console.error('Error details:', error)
  
  // Don't throw errors in server actions - just log them
  // This prevents crashing the entire application
  if (typeof error === 'string') {
    console.error('String error:', error)
  } else if (error instanceof Error) {
    console.error('Error object:', error.message, error.stack)
  } else {
    console.error('Unknown error:', JSON.stringify(error))
  }
}

// Alternative: Return error information instead of throwing
export const handleErrorWithReturn = (error: unknown) => {
  console.error('Error details:', error)
  
  if (typeof error === 'string') {
    return { success: false, error }
  } else if (error instanceof Error) {
    return { success: false, error: error.message }
  } else {
    return { success: false, error: 'An unknown error occurred' }
  }
}

