import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://ongdevlab-portfolio-v2.netlify.app/",
  integrations: [preact()]
});