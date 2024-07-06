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
  phone: string;
  email: string;
  specialRequests?: string;
  visaStatus: 'pending' | 'approved' | 'rejected';
  totalPrice: number;
};
