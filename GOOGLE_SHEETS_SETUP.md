# Google Sheets Integration Setup Guide (Apps Script Method)

This guide will help you set up Google Sheets integration using Google Apps Script - a simple, no-authentication approach.

## Overview

Orders submitted through your website will automatically be saved to a Google Sheet using Google Apps Script as a web app endpoint.

## Step 1: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Name it "Vermanico Orders" (or any name you prefer)
4. In the first row, add these headers:

| A | B | C | D | E | F | G | H | I | J | K | L | M |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Order ID | Customer Name | Phone | Address | Pincode | Product Name | Quantity | Unit | Unit Price | Total Amount | Message | Status | Timestamp |

## Step 2: Create Google Apps Script

1. In your Google Sheet, click **Extensions** > **Apps Script**
2. Delete any existing code in the editor
3. Copy and paste this script:

```javascript
function doPost(e) {
  try {
    // Get the active spreadsheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // Get form data
    var orderId = e.parameter.orderId || '';
    var name = e.parameter.name || '';
    var phone = e.parameter.phone || '';
    var address = e.parameter.address || '';
    var pincode = e.parameter.pincode || '';
    var productName = e.parameter.productName || '';
    var quantity = e.parameter.quantity || '';
    var productUnit = e.parameter.productUnit || '';
    var productPrice = e.parameter.productPrice || '';
    var totalAmount = e.parameter.totalAmount || '';
    var message = e.parameter.message || '';
    var status = e.parameter.status || 'pending';
    var timestamp = e.parameter.timestamp || new Date().toISOString();

    // Append new row with order data
    sheet.appendRow([
      orderId,
      name,
      phone,
      address,
      pincode,
      productName,
      quantity,
      productUnit,
      productPrice,
      totalAmount,
      message,
      status,
      timestamp
    ]);

    // Return success response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Order saved successfully'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Return error response
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Save the project:
   - Click the disk icon or **File** > **Save**
   - Give it a name like "Vermanico Order Handler"

## Step 3: Deploy the Script as a Web App

1. Click **Deploy** > **New deployment**
2. Click the gear icon ⚙️ next to "Select type"
3. Choose **Web app**
4. Fill in the deployment settings:
   - **Description**: "Order submission handler" (or any description)
   - **Execute as**: **Me** (your Google account)
   - **Who has access**: **Anyone**
     - ⚠️ Important: This must be "Anyone" for your website to access it
5. Click **Deploy**
6. **Authorization required** dialog will appear:
   - Click **Authorize access**
   - Choose your Google account
   - Click **Advanced** if you see a warning
   - Click **Go to [Your Project Name] (unsafe)**
   - Click **Allow**
7. Copy the **Web app URL** that appears
   - It will look like: `https://script.google.com/macros/s/AKfycby.../exec`
   - **Save this URL - you'll need it next!**

## Step 4: Configure Your Application

1. In your project root, create or edit `.env.local`:
   ```bash
   cp .env.example .env.local
   ```

2. Add the Google Apps Script URL:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```

3. Replace `YOUR_SCRIPT_ID` with the actual URL you copied in Step 3

## Step 5: Test the Integration

1. Restart your development server:
   ```bash
   npm run dev
   ```

2. Go to your products page and place a test order

3. Check your Google Sheet - you should see a new row with the order details!

4. Check the terminal console for confirmation:
   ```
   ✅ Order successfully saved to Google Sheets
   ```

## Troubleshooting

### Orders not appearing in sheet

**Check 1: Script Deployment**
- Make sure you clicked "Deploy" and got the web app URL
- Verify "Who has access" is set to "Anyone"

**Check 2: Environment Variable**
- Ensure `.env.local` has the correct `GOOGLE_APPS_SCRIPT_URL`
- Restart your dev server after adding the variable
- Make sure there are no extra spaces or quotes

**Check 3: Script Execution**
- In Google Apps Script editor, click **Executions** (clock icon) to see logs
- Check for any error messages

**Check 4: Headers**
- Make sure your sheet has the correct headers in row 1
- The script appends to the active sheet

### Error: "Authorization required"

- You need to authorize the script in Step 3
- Click "Advanced" > "Go to [project name] (unsafe)" > "Allow"

### Error: "Script function not found"

- Make sure you saved the script after pasting the code
- The function must be named exactly `doPost`

### Orders saved but with missing data

- Check that the Apps Script code matches exactly
- Verify all parameter names in the script match the API

## Column Descriptions

- **Order ID**: Unique identifier (ORD-timestamp)
- **Customer Name**: Full name from order form
- **Phone**: 10-digit phone number
- **Address**: Complete delivery address
- **Pincode**: 6-digit postal code
- **Product Name**: Name of the ordered product
- **Quantity**: Number of units
- **Unit**: Product unit (kg, g, piece, etc.)
- **Unit Price**: Price per unit (₹)
- **Total Amount**: Calculated total (quantity × unit price)
- **Message**: Optional customer message
- **Status**: Order status (default: "pending")
- **Timestamp**: ISO 8601 timestamp

## Updating the Script

If you need to modify the script later:

1. Make your changes in the Apps Script editor
2. Click **File** > **Save**
3. Click **Deploy** > **Manage deployments**
4. Click the edit icon (pencil) next to your deployment
5. Change **Version** to "New version"
6. Click **Deploy**

The web app URL stays the same, so no need to update `.env.local`!

## Production Deployment

When deploying to Vercel, Railway, Netlify, etc.:

1. Add the environment variable in your hosting platform:
   - Variable name: `GOOGLE_APPS_SCRIPT_URL`
   - Value: Your Apps Script web app URL

2. Deploy your application - orders will automatically save to Google Sheets!

## Benefits of This Method

✅ **Simple Setup**: No complex authentication or API keys
✅ **Free**: Completely free with Google Apps Script
✅ **Reliable**: Runs on Google's infrastructure
✅ **No Limits**: Generous free tier quotas
✅ **Secure**: Your sheet data is only accessible through the script
✅ **Real-time**: Orders appear instantly in your sheet

## Advanced: Email Notifications

You can enhance the Apps Script to send email notifications when orders are received:

```javascript
function doPost(e) {
  try {
    // ... existing code to save to sheet ...

    // Send email notification
    var emailBody = 'New order received!\n\n' +
                   'Order ID: ' + orderId + '\n' +
                   'Customer: ' + name + '\n' +
                   'Phone: ' + phone + '\n' +
                   'Product: ' + productName + '\n' +
                   'Quantity: ' + quantity + ' ' + productUnit + '\n' +
                   'Total: ₹' + totalAmount;

    MailApp.sendEmail({
      to: 'your-email@example.com',
      subject: 'New Order: ' + productName,
      body: emailBody
    });

    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Order saved and notification sent'
    })).setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}
```

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify your environment variables
3. Test the script URL directly in your browser
4. Check your server console for error messages

Happy order management! 🎉
