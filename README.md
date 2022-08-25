# Validate Twilio Request

This code based demonstrate how to validate Twilio incoming request that are `application/json`.

## TL;DR:

- If your call from Studio, be sure to minify the JSON. You can use this [tool](https://codebeautify.org/jsonminifier) to minify your JSON.


## Prerequisite
You will need the following:

- [Twilio Auth Token](https://www.twilio.com/console)
- [Docker](https://www.docker.com/)
- [ngrok](https://ngrok.com/)

## Getting Started

### ngrok

1. Execute the following command:

```sh
$ ngrok http 8080
```

### Docker

1. Copy the `.env-example` and rename it to be `.env`.

2. Add the following to your `.env` file:
- TWILIO_AUTH_TOKEN
- PRODUCTION_URL (i.e. Ngrok Base URL)
- PORT

3. Execute the following command:

```sh
$ docker compose -f "docker-compose.yml" up -d --build
```

### Twilio

1. Go to [Twilio Studio](https://console.twilio.com/us1/develop/studio/flows)

2. Create a new Studio Flow and import the **validate-twilio-request.json**.

3. Set the ngrok url in the `GlobalVariables` widget.

## FAQs

1. Does Twilio Functions work with this?

> Not possible at the moment. When testing this out, I notice the Full URL didn't contain the `bodySHA256` url parameter. So your best bet is using Studio or other Twilio Settings.

## Resources:

- [Twilio - Security](https://www.twilio.com/docs/usage/security#notes)
- [Secure your Express app by validating incoming Twilio requests](https://www.twilio.com/docs/usage/tutorials/how-to-secure-your-express-app-by-validating-incoming-twilio-requests)
- [How to secure Twilio webhook URLs in Node.js](https://www.twilio.com/blog/how-to-secure-twilio-webhook-urls-in-nodejs)