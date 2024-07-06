import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(request: Request) {
  // Convert the Request object to a JSON object
  const { reference } = await request.json();

  try {
    const response = await axios.get(`https://api.paystack.co/transaction/verify/${reference}`, {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
      },
    });

    if (response.data.data.status === 'success') {
      return NextResponse.json({ message: 'Payment verified successfully' });
    } else {
      return NextResponse.json({ message: 'Payment verification failed' }, { status: 400 });
    }
  } catch (error) {
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
  }
}
