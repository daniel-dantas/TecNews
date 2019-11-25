import req from './config'

export default{
    read: ()=>{
        return req.get('mundo')
    }
}
