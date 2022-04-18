const Router = require('koa-router')
const {
    verifyAuth,
    verifyPermission
} = require('../middleware/auth.middleware')
const { create, exchange } = require('../controller/exchangeItem.controller')

const exchangeItemRouter = new Router({ prefix: '/exchangeItem' })

exchangeItemRouter.post('/', verifyAuth, verifyPermission, create)
exchangeItemRouter.patch('/:id', verifyAuth, exchange)

module.exports = exchangeItemRouter
