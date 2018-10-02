const mqtt = require('mqtt')
const client = mqtt.connect('mqtt://localhost:8000')

console.log('clientzinho!')

client.on('connect', () => {
  console.log('Conectado clientzinho!')
  const data = JSON.stringify([
                  {
                    dados: [
                      {
                        serial: 'as',
                        pulso: 1,
                      },
                    ],
                    data_hora: Date.now,
                  },
                ])
  setInterval(
    () =>
      client.publish(
        '/v1/history/hidrometro/',
        data,
      ),
    3000,
  )
})

client.on('error', err => console.log(`MQTTclient: ${err.stack}`))
