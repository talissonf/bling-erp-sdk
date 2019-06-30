'use strict'
const querystring = require('querystring')
const { toXML } = require('jstoxml')

module.exports = class Pedidos {
  constructor(client) {
    this.bling = client
  }

  async add(pedido, notafiscal = false) {
    let data = toXML(pedido)
    let dataBody = {
      apikey: this.bling.apiKey,
      xml: data
    }

    if (notafiscal === true) {
      dataBody.gerarnfe = 'true'
    }

    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'pedido/json/',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: querystring.stringify(dataBody)
    }
    return this.bling.request(options)
  }

  async update() {
  }

  async getAll(filters = '') {
    let dataBody = {
      apikey: this.bling.apiKey
    }

    if (filters !== '') {
      dataBody.filters = filters
    }

    let options = {
      method: 'GET',
      uri: this.bling.apiPath + `pedido/json?apikey=${this.bling.apiKey}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return this.bling.request(options)
  }

  async getById(pedidoId) {
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + `pedido/${pedidoId}/json?apikey=${this.bling.apiKey}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return this.bling.request(options)
  }
}