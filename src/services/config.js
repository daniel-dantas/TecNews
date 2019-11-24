import axios from 'axios'

export default axios.create({
    baseURL: "https://cors-anywhere.herokuapp.com/https://g1.globo.com/rss/g1/"
})