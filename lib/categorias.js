'use strict'
const querystring = require('querystring')
module.exports = class Categorias {
  constructor(client) {
    this.bling = client
  }

  async add(produtoBody) {
    let data = toXML(produtoBody)
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'categoria/json',
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

  async getAll() {
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + 'categorias/json/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey
      })
    }
    return this.bling.request(options)
  }

  async getById(categoriaId) {
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + 'categoria/' + categoriaId + '/json',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify({
        'apikey': this.bling.apiKey
      })
    }
    return this.bling.request(options)
  }
}