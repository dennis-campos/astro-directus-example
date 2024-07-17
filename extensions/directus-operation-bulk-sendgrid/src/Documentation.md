Documentation

Set up the minimal repro to get it working.

Creating the Flow
Create a Trigger

- Manual Trigger
- Select your Collection

Create Operation

- Read Data
- Select your collection
- Add the query to filter whatever it is that you need.

Create another operation

- Name: Sengrid bulk email
- From Address: email@example.
  - Important to note that it should be the email set up from sendgrid
- Recipients Object
  - Utilize the {{$last}} to grab the details of the collection
- Recipients Email Key
  - Email -- Need to verify that an email field must exist in the collection.
- Subject
  - Whatever you want the subject to say.
- Dynamic Template Data
  - name: first_name
  - I think the the field must also exist in the collection
- SendGrid Template ID:
  - This is the template ID from SendGrid

Had an extra space in my template ID that caused a Bad Request error.
Learned that we should add loggers through the flow. Wasn't working as I expected it to so I may be missing something there.

As long as you have `EMAIL_SENGRID_API_KEY` in the root directory, the extensions should be able to read it. No need to have a new `.env` within the extensions directory

Template data a bit tricky
I deleted it on purpose and it worked otherwise I receive 202 error code.
I believe the issue could be that the data didn't match. Assuming no data added to the template just picks up any details.

Gotchas

- When making changes to the app or api file, make sure to run a build and restart the CMS. Important to test a lot during local development to ensure things work in prod
- Errors were not helpful. Directus has a logger flow but I couldn't get it to work properly.
- Add a try/catch to the handler in the api file AND ensure to add a .then .catch to sendgrid to ensure you get back readable errors.

## Setting Up the Minimal Reproduction

### Creating the Flow

1. Create a Trigger

- Type: Manual Trigger (this helps in testing faster vs. cron jobs)
- Collection: Select your collection.

2. Create Operation

- Type: Read Data
- Collection: Select your collection
- Query: Add the query to filter as needed.

3. Create another operation

- Name: Sendgrid Bulk Email
- From Address: email@example.com
  - Important: This should be the email set up in SendGrid.
- Recipients Object: Utilize `{{$last}}` to grab the details of the collection.
- Recipients Email Key: Email (Verify that an email field exists in the collection)
- Subject: Define your desired subject.
- Dynamic Template Data:
  - name: `first_name` (Ensure this field exists in the collection)
- SendGrid Template ID: This is the template ID from SendGrid.

### Notes

- Ensure there are no extra spaces in the template ID to avoid a Bad Request error.
- Loggers should be added through the flow for better debugging. If they aren’t working as expected, recheck the implementation.

### Environment Variables

- Ensure `EMAIL_SENDGRID_API_KEY` is in the root directory. The extensions should be able to read it without needing a new .env file within the extensions directory.

### Template Data

- If you receive a `302` status code, ensure the data matches the expected template. If the data does not match, the template will pick up any available details. Deleting mismatched data can sometimes resolve issues.

### Gotchas

- Rebuild and Restart: When making changes to the app or API file, always run a build and restart the CMS. Thoroughly test during local development to ensure production functionality.
- Error Handling: Directus error messages can be unhelpful. Implement a try/catch in the handler in the API file and add .then and .catch to SendGrid to get readable errors.
