import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Log the complete payload
    console.log('='.repeat(80));
    console.log('ORDER API - RECEIVED PAYLOAD:');
    console.log(JSON.stringify(body, null, 2));
    console.log('='.repeat(80));

    // Validate required fields
    const { name, phone, address, pincode, quantity, productId, productName, productPrice, productUnit, totalAmount } = body;

    if (!name || !phone || !address || !pincode || !quantity || !productId || !productName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate phone number (basic validation)
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone.replace(/\s+/g, ''))) {
      return NextResponse.json(
        { error: 'Invalid phone number format' },
        { status: 400 }
      );
    }

    // Validate pincode (6 digits)
    const pincodeRegex = /^[0-9]{6}$/;
    if (!pincodeRegex.test(pincode)) {
      return NextResponse.json(
        { error: 'Invalid pincode format. Must be 6 digits.' },
        { status: 400 }
      );
    }

    // Here you would typically:
    // 1. Save to database
    // 2. Send confirmation email
    // 3. Notify admin
    // 4. Send SMS notification

    // For now, we'll just log the order and return success
    const orderData = {
      id: `ORD-${Date.now()}`,
      name,
      phone,
      address,
      pincode,
      quantity,
      productId,
      productName,
      productPrice,
      productUnit,
      totalAmount,
      message: body.message || '',
      timestamp: new Date().toISOString(),
      status: 'pending',
    };

    console.log('\n📦 NEW ORDER CREATED:');
    console.log(JSON.stringify(orderData, null, 2));
    console.log('='.repeat(80) + '\n');

    // Save order to Google Sheets via Apps Script
    const scriptURL = process.env.GOOGLE_APPS_SCRIPT_URL;

    if (scriptURL) {
      try {
        const formData = new FormData();
        formData.append('orderId', orderData.id);
        formData.append('name', orderData.name);
        formData.append('phone', orderData.phone);
        formData.append('address', orderData.address);
        formData.append('pincode', orderData.pincode);
        formData.append('productName', orderData.productName);
        formData.append('quantity', orderData.quantity.toString());
        formData.append('productUnit', orderData.productUnit);
        formData.append('productPrice', orderData.productPrice.toString());
        formData.append('totalAmount', orderData.totalAmount.toString());
        formData.append('message', orderData.message);
        formData.append('status', orderData.status);
        formData.append('timestamp', orderData.timestamp);

        const response = await fetch(scriptURL, {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          console.log('✅ Order successfully saved to Google Sheets');
        } else {
          console.error('⚠️ Google Sheets responded with error:', response.status);
          if (response.status === 403) {
            console.error('   → Make sure the Apps Script is deployed with "Who has access" = "Anyone"');
            console.error('   → See GOOGLE_SHEETS_SETUP.md for detailed instructions');
          }
          const errorText = await response.text();
          console.error('   → Response:', errorText.substring(0, 200));
        }
      } catch (sheetError) {
        console.error('⚠️ Failed to save to Google Sheets, but order was processed:', sheetError);
        // Don't fail the entire request if Google Sheets fails
      }
    } else {
      console.log('ℹ️ Google Apps Script URL not configured, skipping sheet update');
    }

    // TODO: Implement your preferred notification method
    // Examples:
    // - Send email using Resend, SendGrid, or Nodemailer
    // - Send SMS using Twilio
    // - Save to database (MongoDB, PostgreSQL, etc.)
    // - Send to CRM or order management system
    // - Webhook to external service

    // Example structure for email notification (not implemented):
    /*
    await sendEmail({
      to: 'vermanicoharvest@gmail.com',
      subject: `New Order: ${productName}`,
      html: `
        <h2>New Order Received</h2>
        <p><strong>Order ID:</strong> ${orderData.id}</p>
        <p><strong>Customer:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Pincode:</strong> ${pincode}</p>
        <p><strong>Product:</strong> ${productName}</p>
        <p><strong>Quantity:</strong> ${quantity} ${productUnit}</p>
        <p><strong>Unit Price:</strong> ₹${productPrice} per ${productUnit}</p>
        <p><strong>Total Amount:</strong> ₹${totalAmount}</p>
        <p><strong>Message:</strong> ${body.message || 'N/A'}</p>
        <p><strong>Time:</strong> ${orderData.timestamp}</p>
      `,
    });
    */

    return NextResponse.json(
      {
        success: true,
        message: 'Order submitted successfully',
        orderId: orderData.id,
        data: orderData,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Order submission error:', error);
    return NextResponse.json(
      {
        error: 'Failed to process order',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}
