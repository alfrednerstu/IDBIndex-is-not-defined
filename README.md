# IDBIndex-is-not-defined

`src/firebaseConfig.js` 
The firebase configuration

`src/client.js` 
Importing and initializing Firebase on the client

`src/firebase.js` 
Returning client-side Firebase or initializes and returns server-side Firebase

`src/routes/index.svelte` 
Gets a list of documents from Firebase (currently works when you navigate to the page from another page (ie client side) but not when you hit the page directly (ie server side).

### Running the project

However you get the code, you can install dependencies and run the project in development mode with:

```bash
cd my-app
npm install # or yarn
npm run dev
```

Open up [localhost:3000](http://localhost:3000) and start clicking around.

Consult [sapper.svelte.dev](https://sapper.svelte.dev) for help getting started.
