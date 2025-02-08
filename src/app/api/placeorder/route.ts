/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextRequest, NextResponse } from "next/server";
import { client } from "@/sanity/lib/client"; 
import { Product } from "@/app/components/cartcontext";

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      province,
      zip,
      country,
      cartItems,
      total,
    } = await req.json();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !phone ||
      !cartItems ||
      cartItems.length === 0
    ) {
      return NextResponse.json({ error: "Invalid data" }, { status: 400 });
    }
// unique order id

    const orderId = `ORD-${crypto.randomUUID().split("-")[0].toUpperCase()}`; // Example: ORD-7F3A9C

// costumer id check
    let customer = await client.fetch(
      `*[_type == "customer" && email == $email][0] { _id, customerId }`,
      { email }
    );

    let customerId = customer?.customerId;

    if (!customer) {
      customerId = `CUS-${crypto.randomUUID().slice(0, 6).toUpperCase()}`;
      customer = await client.create({
        _type: "customer",
        customerId,
        firstName,
        lastName,
        email,
        phone,
        address,
        city,
        province,
        zip,
        country,
      });
    }

    console.log("Customer ID:", customerId);


    console.log("Generated Order ID:", orderId);
    console.log("Cart Items:", cartItems);
    console.log(
      "Extracted IDs:",
      cartItems.map((item: Product) => item.id)
    );

    // Filter out undefined IDs
    const validCartItems = cartItems.filter(
      (item: Product) => item.id !== undefined
    );
    console.log(
      "Valid Cart Items:",
      validCartItems.map((item: any) => item.id)
    );

    const sanityCartItems = await Promise.all(
      validCartItems.map(async (item: Product) => {
        console.log("Fetching product with id:", item.id);

        const sanityProduct = await client.fetch(
          `*[_type == "product" && string(id) == $id][0]{_id}`, 
        );
        console.log("Sanity Response:", sanityProduct);

        if (!sanityProduct || !sanityProduct._id) {
          console.error("Sanity product not found for id:", item.id);
          return null;
        }

        return {
          _key: crypto.randomUUID(), 
          _type: "reference",
          _ref: sanityProduct._id, 
        };
      })
    ).then((items) => items.filter(Boolean)); // Remove null values

    // If no valid products, return an error
    if (sanityCartItems.length === 0) {
      return NextResponse.json(
        { error: "No valid products in cart" },
        { status: 400 }
      );
    }

    const orderDoc = {
      _type: "order",
      orderId,
      customerId,
      firstName,
      lastName,
      email,
      phone,
      address,
      city,
      province,
      zip,
      country,
      total,
      cartItems: sanityCartItems, 
      orderStatus: "Pending", // Default order status
      orderDate: new Date().toISOString(),
    };

    const response = await client.create(orderDoc);

    return NextResponse.json(
      {
        message: "Order placed successfully",
        orderId: response._id,
        customOrderId: orderId,
        customerId,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Order placement error:", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
