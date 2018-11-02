const fastify = require('fastify');
const fastifyAutoPush = require('fastify-auto-push');
const fastifyCompress = require('fastify-compress');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const fsReadFile = promisify(fs.readFile);


const PORT = 8080;
const TLS_DIR = path.join(__dirname, 'tls');
const PUBLIC_PATH = path.join(__dirname, 'public');

async function createServerOptions() {
  const readCertFile = filename => fsReadFile(path.join(TLS_DIR, filename));
  const [key, cert] = await Promise.all([readCertFile('key.pem'), readCertFile('cert.pem')]);
  return { key, cert };
}

async function main() {
  const { key, cert } = await createServerOptions();
  // Browsers support only https for HTTP/2.
  const app = fastify({ https: { key, cert }, http2: true });

  // Create and register AutoPush plugin. It should be registered as the first
  // in the middleware chain.
  app.register(fastifyAutoPush.staticServe, { root: PUBLIC_PATH });
  // register compress plugin
  app.register(fastifyCompress);

  await app.listen(PORT);

  console.log(`Listening on port ${PORT}`);
}

main().catch((err) => {
  console.error(err);
});
