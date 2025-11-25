# Fixing 403 Error - Google Apps Script

## The Problem

You're seeing this error in your console:
```
⚠️ Google Sheets responded with error: 403
```

This means the Google Apps Script web app is **blocking** requests from your application.

## Quick Fix (5 minutes)

### Step 1: Go to Your Apps Script

1. Open your Google Sheet
2. Click **Extensions** → **Apps Script**
3. You should see your script code

### Step 2: Redeploy with Correct Settings

1. Click **Deploy** → **Manage deployments**
2. Click the **Edit** icon (pencil) next to your active deployment
3. **IMPORTANT**: Change these settings:
   - **Execute as**: Me (your email)
   - **Who has access**: **Anyone** ⚠️ **This is critical!**
4. Click **Update**

### Step 3: Test Again

1. Go back to your application
2. Try placing an order
3. Check the console - you should see:
   ```
   ✅ Order successfully saved to Google Sheets
   ```

## Still Getting 403?

### Option A: Create a New Deployment

If updating doesn't work, create a fresh deployment:

1. In Apps Script, click **Deploy** → **New deployment**
2. Click the gear icon ⚙️ → Select **Web app**
3. Settings:
   - Description: "Order Handler v2"
   - Execute as: **Me**
   - Who has access: **Anyone** ⚠️
4. Click **Deploy**
5. **Authorize** the script when prompted
6. Copy the **new Web app URL**
7. Update your `.env.local` with the new URL:
   ```
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/NEW_SCRIPT_ID_HERE/exec
   ```
8. Restart your dev server:
   ```bash
   npm run dev
   ```

### Option B: Check Authorization

The script might not be authorized:

1. In Apps Script, click **Deploy** → **Test deployments**
2. Click **Install** if you see it
3. Follow the authorization flow:
   - Click **Review permissions**
   - Choose your Google account
   - Click **Advanced**
   - Click **Go to [Your Project] (unsafe)**
   - Click **Allow**

## Why Does This Happen?

Google Apps Script has security settings to control who can access your web app:

- **Anyone**: ✅ Anyone on the internet can send data (what we need)
- **Anyone with Google account**: ❌ Requires sign-in (doesn't work for our app)
- **Only myself**: ❌ Only you can access (doesn't work for our app)

Your website visitors don't have Google accounts (or aren't signed in), so we need **"Anyone"** access.

## Is "Anyone" Safe?

Yes! Here's why:

1. ✅ The script can **only write** to your specific Google Sheet
2. ✅ It can't read or access other Google Drive files
3. ✅ It only accepts the specific data fields you defined
4. ✅ No one can see your sheet unless you share it with them
5. ✅ You can see all executions in the Apps Script logs

Think of it like a contact form - anyone can submit, but only you can see the results.

## Verify It's Working

After fixing, you should see in your console:

```
================================================================================
ORDER API - RECEIVED PAYLOAD:
{
  "name": "Test Customer",
  "phone": "1234567890",
  ...
}
================================================================================

📦 NEW ORDER CREATED:
{
  "id": "ORD-1234567890",
  ...
}
================================================================================

✅ Order successfully saved to Google Sheets  ← This confirms it worked!
```

And in your Google Sheet, you'll see a new row with the order!

## Still Having Issues?

1. **Check the Apps Script execution log**:
   - In Apps Script editor, click the **Executions** icon (clock)
   - See if there are any failed executions
   - Click on them to see error details

2. **Test the URL directly**:
   - Open the web app URL in your browser
   - You should see a response (even if it's an error, it confirms the URL works)

3. **Check your .env.local**:
   ```bash
   GOOGLE_APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
   - Make sure it ends with `/exec`
   - No extra spaces or quotes
   - Restart your dev server after changing it

## Quick Checklist

- [ ] Apps Script is deployed as Web app
- [ ] "Who has access" is set to **Anyone**
- [ ] Script is authorized (went through permission flow)
- [ ] Web app URL is correct in `.env.local`
- [ ] Dev server was restarted after adding URL
- [ ] Sheet has headers in row 1
- [ ] Function is named exactly `doPost`

Once all checked, it should work! 🎉
