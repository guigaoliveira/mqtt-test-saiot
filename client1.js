const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:8000')

console.log('clientzinho!')

client.on('connect', () => {
  console.log('Conectado clientzinho!')
  setInterval(
    () =>
      client.publish(
        '/v1/history/hidrometro/',
        JSON.stringify([
          {
            dados: [
              {
                serial: 'as',
                pulso: 1,
              },
            ],
            data_hora: Date.now,
          },
        ]),
      ),
    3000,
  )
})

client.on('error', err => console.log(`MQTTclient: ${err.stack}`))
