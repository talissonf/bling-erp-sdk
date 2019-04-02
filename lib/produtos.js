'use strict'
const { toXML } = require('jstoxml')
const querystring = require('querystring')

class Produtos {
  constructor(client) {
    this.bling = client
  }

  async add(produtoBody) {
    let data = toXML(produtoBody)
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'produto/json/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey,
        'xml': data
      })
    }
    return this.bling.request(options)
  }
}

module.exports = Produtos
