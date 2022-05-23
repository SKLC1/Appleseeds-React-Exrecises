import axios from "axios"


const KEY = 'AIzaSyCdW6Xf9faS6_RkjJwnNchCp6WiCn8Vndk'
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