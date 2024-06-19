'use strict';

const cronTasks = require('./src/cron-tasks');

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'http://<your-ec2-public-dns>:1337'), // Update with your EC2 public DNS
  cron: {
    enabled: true,
    tasks: cronTasks,
  },
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', true),
  },
  globalProxy: env('http_proxy'),
  http: {
    serverOptions: {
      requestTimeout: 1000 * 60 * 10, // set request timeout to 600000ms (10 minutes)
    },
  },
});

