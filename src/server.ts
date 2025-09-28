import createApp from "./app";
const app = createApp();
const port = process.env.PORT || 3000;

app.listen(
  {
    port: Number(port),
  },
  (err, address) => {
    if (err) {
      console.error(`⚠️ Erro ao tentar conectar na porta ${port}\n`, err);
      process.exit(1);
    }
    console.log(`☁️ Servidor conectado: http://localhost:${port}\n Address: ${address}`);
  }
);