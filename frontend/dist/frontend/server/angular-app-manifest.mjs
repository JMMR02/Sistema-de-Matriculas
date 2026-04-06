
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5076, hash: '1396a10ac88a045979fa94ff6aa6f74cbc7d20fd5aa7c86122e55062a032ca08', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1052, hash: '6e58b9494e9463ecf31538b6278d003167ccd74d4ce415ac2642df3448fbae7f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 25335, hash: '0f9bcec6db1c927062aa27bc8d036f4fadf44259f7fbe012fa275e9266dee241', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles.css': {size: 256429, hash: 'uFX0LeITcRY', text: () => import('./assets-chunks/styles_css.mjs').then(m => m.default)}
  },
};
