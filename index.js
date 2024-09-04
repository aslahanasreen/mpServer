const jsonserver=require('json-server')

const mpserver=jsonserver.create()

const middleware=jsonserver.defaults()

const router=jsonserver.router('db.json')

mpserver.use(middleware)
mpserver.use(router)

const PORT=3000 || process.env.PORT

mpserver.listen(PORT,()=>{
    console.log('the server is running in PORT:'+PORT);
    
})