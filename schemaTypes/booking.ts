import { defineField } from 'sanity';

const booking = {
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'userFullName',
      title: 'User Full Name',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'package',
      title: 'Package',
      type: 'reference',
      to: [{ type: 'package' }],
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'serviceType',
      title: 'Service Type',
      type: 'string',
      options: {
        list: [
          { title: 'Hajj', value: 'hajj' },
          { title: 'Umrah', value: 'umrah' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'specialRequests',
      title: 'Special Requests',
      type: 'text',
    }),
    defineField({
      name: 'visaStatus',
      title: 'Visa Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
      },
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    }),
  ],
};

export default booking;
