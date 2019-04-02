'use strict'
const { toXML } = require('jstoxml')
const querystring = require('querystring')

module.exports = class ProdutoLoja {
  constructor(client) {
    this.bling = client
  }

  async add(produtoBody, produtoCodigo, lojaId = null) {
    let data = toXML(produtoBody)
    let lojId = lojaId || this.bling.lojaId
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'produtoLoja/' + lojId + '/' + produtoCodigo + '/json',
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

  async update(produtoBody, produtoCodigo, lojaId = null) {
    let data = toXML(produtoBody)
    let lojId = lojaId || this.bling.lojaId
    let options = {
      method: 'POST',
      uri: this.bling.apiPath + 'produtoLoja/' + lojId + '/' + produtoCodigo + '/json',
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
