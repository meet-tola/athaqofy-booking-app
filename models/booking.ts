export type Booking = {
    _id: string;
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
  