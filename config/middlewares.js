module.exports = [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        directives: {
          "script-src": ["'self'", "https://cdn.ckeditor.com"],
          "frame-src": ["'self'", "https://cdn.ckeditor.com"],
          "img-src": ["'self'", "data:", "blob:"],
        },
      },
    },
  },
];
