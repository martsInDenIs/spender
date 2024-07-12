# Spender

Small funny project to extend my knowledge in NextJS and present me and my knowledge in JS, React etc.

## What is it about?

You can choose one of two roles - sugar daddy/mummy or their partner. Depending on the role you choose, you will have access to certain functionality

### 1. Sugar

You can view transactions and decide whether to allow your partner to make a certain purchase or not.

### 1. Partner

Can view transactions and react to sugar daddy/mommy's decision to "complete" the purchase if the request is approved. Or ask again if the request was rejected. And of course, a rejected request still has the "complete purchase" function. You know. BECAUSE.

## How to run?

After you clone the project you shold complete next steps:

1. Install packages with `npm install` (The version of Node used is 20)
2. Create a copy of the file `db.json.example` in a new file named `db.json` in the root
3. Run in one terminal command `npm run mocked-server`
4. Create a copy of the file `.env.example` in a new file named `.env` in the root. Set the `BASE_API_URL` and `NEXT_PUBLIC_BASE_API_URL` variables to the URL of the json-server
5. and in another terminal command `npm run dev` or `npm run build && npm start`

## Algorithm to check functionality

To check main functions i propose you to execute the algorithm below:

1. Select the role of "Sugar Partner"
2. Click on the "Create a new request" button and fill out the form
3. Log out and change the role to "Sugar Daddy/Mommy"
4. Accept or reject the request.
5. Log out again and change your role to "Sugar Partner"
6. Make a final decision on the request

## Improvements for the future

1. Cover the functionality with tests
2. Create a responsive design (for small screens/mobile devices)
3. Add success/failure notifications when creating/executing requests
4. Containerise the application
   ?. Create a BE using NestJS :)
5. Make the application attractive for users with a slow internet connection (using the loading file, skeletons)
6. I haven't figured it out yet ;)
