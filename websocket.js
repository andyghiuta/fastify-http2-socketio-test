const fastify = require('fastify');
const socketio = require('socket.io');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const fsReadFile = promisify(fs.readFile);

const PORT = 8081;
const TLS_DIR = path.join(__dirname, 'tls');

async function createServerOptions() {
  const readCertFile = filename => fsReadFile(path.join(TLS_DIR, filename));
  const [key, cert] = await Promise.all([readCertFile('key.pem'), readCertFile('cert.pem')]);
  return { key, cert };
}

async function main() {
  const { key, cert } = await createServerOptions();
  // https
  const app = fastify({ https: { key, cert } });

  const io = socketio(app.server);

  io.on('connection', (socket) => {
    console.log('connect');
    socket.on('message', (msg) => {
      console.log(`message: ${msg}`);
    });
    socket.on('disconnect', () => {
      console.log('disconnect');
    });
  });

  await app.listen(PORT);

  console.log(`Listening on port ${PORT}`);
}

main().catch((err) => {
  console.error(err);
});
