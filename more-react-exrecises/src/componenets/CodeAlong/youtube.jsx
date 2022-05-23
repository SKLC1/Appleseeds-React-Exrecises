import axios from "axios"


const KEY = 'deleted api key'
axios.create({
baseURL: 'htpps://www.googleapis.com/youtube/v3',
params: {
  part: 'snippet',
  maxResults: 5,
  type: 'video',
  key: KEY,
}
})
export default axios