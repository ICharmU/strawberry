import adapter from '@adapterjs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // TODO: Custom fallback page. Defaults to GitHub 404 page
    // adapter: adapter({
    //   fallback: '404.html'
    // }),
    paths: {
      base: process.argv.includes('dev') ? '' : process.env.BASE_PATH
    }
  }
};

export default config;