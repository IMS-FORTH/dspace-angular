export const environment = {
  // The "ui" section defines where you want Node.js to run/respond. It often is a *localhost* (non-public) URL, especially if you are using a Proxy.
  // In this example, we are setting up our UI to just use localhost, port 4000.
  // This is a common setup for when you want to use Apache or Nginx to handle HTTPS and proxy requests to Node on port 4000
  production: true,
  ui: {
      ssl: false,
      host: 'localhost',
      port: 4000,
      // NOTE: Space is capitalized because 'namespace' is a reserved string in TypeScript
      nameSpace: '/',
  },
  // The REST API server settings.
  // NOTE: these must be "synced" with the 'dspace.server.url' setting in your backend's local.cfg.
  rest: {
      ssl: true,
      host: 'dspace.ims.forth.gr',
      port: 443,
      // NOTE: Space is capitalized because 'namespace' is a reserved string in TypeScript
      nameSpace: '/server',
  },
  // Default Language in which the UI will be rendered if the user's browser language is not an active language
  defaultLanguage: 'en',
  // Languages. DSpace Angular holds a message catalog for each of the following languages.
  // When set to active, users will be able to switch to the use of this language in the user interface.
  languages: [{
     code: 'en',
     label: 'English',
     active: true,
  },
  //{
  //  code: 'el',
  //  label: 'Ελληνικά',
  //  active: true,
  //}
  ],
  themes: [
    {
      // Our custom dspace theme
      name: 'dspace'
    },
  ],
  mediaViewer: {
    image: true,
    video: true
  },
};
