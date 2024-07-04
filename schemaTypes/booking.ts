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
      name: 'adults',
      title: 'Adults',
      type: 'number',
      initialValue: 1,
      validation: Rule => Rule.required().min(1),
    }),
    defineField({
      name: 'children',
      title: 'Children',
      type: 'number',
      initialValue: 0,
      validation: Rule => Rule.required().min(0),
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
