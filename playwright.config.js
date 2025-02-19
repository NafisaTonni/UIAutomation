
import { defineConfig, devices } from '@playwright/test';
const { TIMEOUT } = require('dns');


// add new
const config = {
  testDir : './test',
  timeout: 30*1000,
   expect:{
     timeout : 5000
   } 
 }

export default defineConfig({
  testDir: './tests',
  timeout: 60*1000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use:
   {
      trace: 'on-first-retry',
   },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      viewport:{width:1920,height:1080},
      screenshot:"on",
      video: "on",
      trace: "on"

    },
  ],

});

