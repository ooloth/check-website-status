# Check Website Status

A script that attempts to fetch one or more URLs sends a text message if any are down.

## Usage

1. Clone this repo
2. Navigate to this repo's folder
3. Create an `.env.local` file at the root level and add values to the following variables:

```sh
TWILIO_ACCOUNT_SID=""
TWILIO_AUTH_TOKEN=""

MY_PHONE_NUMBER=""
TWILIO_PHONE_NUMBER=""

URLS_SEPARATED_BY_A_SPACE=""
```

4. Run `npm install`
5. Run `node lib/index`
6. If you like, use a cron job to run the script every day, week, etc.
