import { SanityImageSource } from '@sanity/image-url/lib/types/types';

type Slug = {
  _type: string;
  current: string;
};

type IncludedService = {
  _key: string;
  service: string;
  description: string;
};

export type Package = {
  _id: string;
  name: string;
  slug: Slug;
  description: string;
  price: number;
  discount: number;
  images: SanityImageSource[];
  coverImage: SanityImageSource;
  serviceType: 'hajj' | 'umrah';
  duration: number;
  specialNote: string;
  includedServices: IncludedService[];
  isFeatured: boolean;
};

export type CreateBookingDto = {
  userFullName: string;
  package: string;
  serviceType: 'hajj' | 'umrah';
  adults: number;
  children: number;
  specialRequests?: string;
  visaStatus: 'pending' | 'approved' | 'rejected';
  totalPrice: number;
};

export type Booking = {
  _id: string;
  userFullName: string;
  package: {
    _id: string;
    name: string;
    slug: { current: string };
    price: number;
  };
  serviceType: 'hajj' | 'umrah';
  adults: number;
  children: number;
  specialRequests?: string;
  visaStatus: 'pending' | 'approved' | 'rejected';
  totalPrice: number;
};
