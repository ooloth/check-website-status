# Check Website Status

A script that attempts to fetch one or more URLs and sends a text message to alert you if one or more of them are down.

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
5. Run `npm run check`
6. If you want these checks to run automatically on a schedule:
   a. Edit the paths in `check.md` to match your local folder structure
   b. Run `chmod +x check.sh` to make `check.sh` executable
   c. Use a cron job (or an app like [Lingon](https://www.peterborgapps.com/lingon/)) to schedule `check.sh` to run every day, week, etc.
