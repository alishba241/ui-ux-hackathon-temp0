/* eslint-disable @typescript-eslint/no-explicit-any */
import Stripe from "stripe";
import { NextResponse } from "next/server";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2024-12-18.acacia",
});

export async function POST(request: Request) {
  try {
    const { items } = await request.json();
 if (!items || items.length === 0) {
   return NextResponse.json({ error: "Cart is empty" }, { status: 400 });
    }
    
    const line_items = items.map((item: any) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.productName || "Sample Product",
          images: item.productImage ? [item.productImage] : [], 
        },
        unit_amount: item.amount || 2000, 
      },
      quantity: item.quantity || 1,
    }));

   const session = await stripe.checkout.sessions.create({
     payment_method_types: ["card"],
     line_items,
     mode: "payment",
     success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
     cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
   });

    return NextResponse.json({ url: session.url });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error(error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
