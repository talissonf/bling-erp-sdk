'use strict'
module.exports = class Pedidos {
  constructor(client) {
    this.bling = client
  }

  async fetch() {
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + `situacao/Vendas/json/?apikey=${this.bling.apiKey}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return this.bling.request(options)
  }
}