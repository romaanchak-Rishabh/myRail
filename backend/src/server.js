import conf from './config/config.js'
import app from './app.js'

app.listen(conf.appUrl, function() {
    console.log(`list on ${conf.appUrl}`)
})