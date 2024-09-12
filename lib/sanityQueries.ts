import { groq } from 'next-sanity';

// Query to get all featured packages
export const getFeaturedPackagesQuery = groq`*[_type == "package" && isFeatured == true] {
    _id,
    name,
    slug,
    description,
    price,
    reg,
    discount,
    images,
    coverImage,
    serviceType,
    duration,
    specialNote,
    includedServices,
    isFeatured
}`;


// Query to get all packages
export const getPackagesQuery = groq`*[_type == "package"] {
    _id,
    name,
    slug,
    description,
    price,
    reg,
    discount,
    images,
    coverImage,
    serviceType,
    duration,
    specialNote,
    includedServices,
    isFeatured
}`;

// Query to get a specific package by slug
export const getPackage = groq`*[_type == "package" && slug.current == $slug][0] {
    _id,
    name,
    slug,
    description,
    price,
    discount,
    images,
    coverImage,
    serviceType,
    duration,
    specialNote,
    includedServices,
    isFeatured
}`;

// Query to get user bookings
export const getUserBookingsQuery = groq`*[_type == 'booking'] {
    _id,
    package -> {
        _id,
        name,
        slug,
        price
    },
    serviceType,
    adults,
    children,
    specialRequests,
    visaStatus,
    totalPrice
}`;
