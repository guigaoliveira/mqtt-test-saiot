const mosca = require("mosca")
const winston = require("winston")

const PORT = process.env.PORT || 1883

const logger = new winston.Logger({
  transports: [new winston.transports.File({ filename: "./broker-access.log" })]
});

const server = new mosca.Server({
  port: Number(PORT)
})

server.on("published", (packet, client) => {
  logger.info(
    `[brocker] topic: ${packet.topic}; message: ${packet.payload.toString()}`
  )
})

server.on("ready", () => console.log(`Server MQTT rodando na ${PORT}.`));
