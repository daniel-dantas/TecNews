import req from './config.js'

export default{
    read: ()=>{
        return req.get('tecnologia')
    }
}