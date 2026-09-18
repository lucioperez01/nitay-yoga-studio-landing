# Lead System Setup

## Google Sheets + Apps Script

### 1. Create Google Sheet

Create a new Google Sheet with these column headers in row 1:

| Timestamp | Nombre | Email | WhatsApp | Edad | Objetivo | Experiencia | Disponibilidad | Lesiones | Estado |

### 2. Create Apps Script

1. In the Google Sheet, go to **Extensions > Apps Script**
2. Delete the default code
3. Paste the contents of `appsscript.gs`
4. Click **Deploy > New deployment**
5. Select type: **Web app**
6. Set "Execute as": **Me**
7. Set "Who has access": **Anyone**
8. Click **Deploy**
9. Copy the **Web app URL**

### 3. Configure environment variable

Add the Web app URL to your environment variables:

```
APPS_SCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
```

For local development, add it to `.env.local`.
For production, add it to your hosting platform's environment variables.

### 4. Test

Submit the lead form on the landing page. The data should appear in your Google Sheet within seconds.
