
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/student",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/student"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4958, hash: '201012a9990307a8c94f64f08d016a1545aeab8d79b5c3946bf66017985f4673', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1074, hash: 'd6d9c20295883179c1bc26353b5d936c2f9a732acd84c24e7c9074b906afd2d5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'student/index.html': {size: 6275, hash: '2af40e5483a6aab3670000a372b3d66b7d0ebef970483742ba5b88aadaf6c24c', text: () => import('./assets-chunks/student_index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
