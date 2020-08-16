const Koa = require('koa')
const axios = require('axios')
const InitManager = require('./core/init')
const catchError = require('./middlewares/exception')
const bodyParser = require('koa-bodyparser')

//require('./app/models_mysql/user')

const app = new Koa()
app.use(catchError)
app.use(bodyParser())
InitManager.initCore(app)

app.listen(3000)