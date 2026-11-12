const SUBDOMAIN_ROUTES = {
  partida: '/partida',
  partes: '/partes',
  objetivo: '/objetivo',
  medicion: '/medicion',
  plan: '/plan',
  verifica: '/verifica'
};

export async function onRequest(context) {
  const url = new URL(context.request.url);
  const hostParts = url.hostname.split('.');

  // Detect subdomain on *.mapacircular.cl (excluding www)
  if (hostParts.length >= 3) {
    const sub = hostParts[0].toLowerCase();
    const basePath = SUBDOMAIN_ROUTES[sub];
    if (basePath && !url.pathname.startsWith(basePath + '/') && url.pathname !== basePath) {
      const rewrittenUrl = new URL(url.toString());
      rewrittenUrl.pathname = url.pathname === '/' ? `${basePath}/index.html` : `${basePath}${url.pathname}`;
      return context.env.ASSETS.fetch(new Request(rewrittenUrl.toString(), context.request));
    }
  }

  return context.next();
}
