'use strict'
const { toXML } = require('./toxml')
const querystring = require('querystring')

class Produtos {
  constructor(client) {
    this.bling = client
  }

  async getById(productId) {
    let options = {
      method: 'GET',
      uri: this.bling.apiPath + `produto/${productId}/json?apikey=${this.bling.apiKey}&estoque=S&imagem=S`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }
    return this.bling.request(options)
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

  async update(produtoBody, produtoCodigo) {
    let data = toXML(produtoBody)
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'produto/' + produtoCodigo + '/json/',
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
