import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { labelid: string } }
) {
  const { labelid } = params;

  if (!labelid) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
    });
  }

  // random tracking status
  const statuses = ["Label Created", "In Transit", "Out for Delivery", "Delivered"];
  const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];

    // random tracking dates
    const randomDate = new Date();
  const date = randomDate.toISOString().split("T")[0];

    //random tracking number
       const randomTrackingNumber = `TRK-${Math.floor(Math.random() * 1000000000)}`;

  // Fake tracking data
  const fakeTrackingData = {
    tracking_number: randomTrackingNumber,
    carrier_code: "ups",
    status: randomStatus,
    estimated_delivery_date: date,
  };

  return NextResponse.json(fakeTrackingData, { status: 200 });
}
