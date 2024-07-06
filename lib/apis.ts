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


export async function getPackages(serviceTypeFilter = '', searchQuery = ''): Promise<Package[]> {
  let query = `*[_type == "package"]`;

  if (serviceTypeFilter || searchQuery) {
    query += `[`;
    if (serviceTypeFilter) {
      query += `serviceType == "${serviceTypeFilter}"`;
    }
    if (serviceTypeFilter && searchQuery) {
      query += ` && `;
    }
    if (searchQuery) {
      query += `name match "*${searchQuery}*"`;
    }
    query += `]`;
  }

  query += ` | order(name asc)`;

  const result = await sanityClient.fetch<Package[]>(query);
  return result;
}

export async function getPackage(slug: string): Promise<Package> {
  const result = await sanityClient.fetch<Package>(
    queries.getPackage,
    { slug },
    { cache: 'no-cache' }
  );
  return result;
}

export const createBooking = async (bookingData: CreateBookingDto) => {
    // Verify payment
    const { data: verificationData } = await axios.post('/api/verify-payment', { reference: bookingData.reference });

    if (verificationData.message !== 'Payment verified successfully') {
      throw new Error('Payment verification failed');
    }

    // Proceed with booking creation
    const mutation = {
      mutations: [
        {
          create: {
            _type: 'booking',
            userFullName: bookingData.userFullName,
            package: { _type: 'reference', _ref: bookingData.package },
            serviceType: bookingData.serviceType,
            phone: bookingData.phone,
            email: bookingData.email,
            specialRequests: bookingData.specialRequests,
            visaStatus: bookingData.visaStatus,
            totalPrice: bookingData.totalPrice,
          },
        },
      ],
    };

    const { data: sanityData } = await axios.post(
      `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-10-21/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`,
      mutation,
      { headers: { Authorization: `Bearer ${process.env.SANITY_STUDIO_TOKEN}` } }
    );

    return sanityData;

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
