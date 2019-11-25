import req from './config'


export default{
    read: () => {
        return req.get('ciencia-e-saude')
    }
}