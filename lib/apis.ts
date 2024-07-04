import axios from 'axios';
import sanityClient from './sanity';
import * as queries from './sanityQueries';
import { CreateBookingDto, Package } from '@/models/package';
import { Booking } from '@/models/booking';

// Function to fetch all featured packages
export async function getFeaturedPackages() {
  const result = await sanityClient.fetch<Package[]>(
    queries.getFeaturedPackagesQuery,
    {},
    { cache: 'no-cache' }
  );

  return result;
}


export async function getPackages() {
  const result = await sanityClient.fetch<Package[]>(
    queries.getPackagesQuery,
    {},
    { cache: 'no-cache' }
  );
  return result;
}

export async function getPackage(slug: string) {
  const result = await sanityClient.fetch<Package>(
    queries.getPackage,
    { slug },
    { cache: 'no-cache' }
  );

  return result;
}

export const createBooking = async ({
  userFullName,
  package: packageId,
  serviceType,
  adults,
  children,
  specialRequests,
  visaStatus,
  totalPrice,
}: CreateBookingDto) => {
  const mutation = {
    mutations: [
      {
        create: {
          _type: 'booking',
          userFullName,
          package: { _type: 'reference', _ref: packageId },
          serviceType,
          adults,
          children,
          specialRequests,
          visaStatus,
          totalPrice,
        },
      },
    ],
  };

  const { data } = await axios.post(
    `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
    mutation,
    { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
  );

  return data;
};

export async function getUserBookings(userFullName: string) {
  const result = await sanityClient.fetch<Booking[]>(
    queries.getUserBookingsQuery,
    {
      userFullName,
    },
    { cache: 'no-cache' }
  );

  return result;
}
