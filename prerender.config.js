// Prerendering configuration for better SEO
// This helps search engines index your SPA properly

export default {
  // Routes to prerender
  routes: [
    '/',
    '/about',
    '/our-story',
    '/team',
    '/careers',
    '/contact',
    '/faq',
    '/privacy'
  ],
  
  // Renderer options
  renderer: '@prerenderer/renderer-puppeteer',
  rendererOptions: {
    maxConcurrentRoutes: 4,
    renderAfterTime: 5000,
    headless: true,
    injectProperty: '__PRERENDER_INJECTED',
    inject: {
      isPrerendering: true
    }
  },
  
  // Post-processing
  postProcess(renderedRoute) {
    // Add prerendering meta tag
    renderedRoute.html = renderedRoute.html.replace(
      '</head>',
      '<meta name="prerender-status" content="200" /><meta name="prerender-date" content="' + new Date().toISOString() + '" /></head>'
    );
    return renderedRoute;
  }
};
