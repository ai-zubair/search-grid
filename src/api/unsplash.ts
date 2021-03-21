import axios from 'axios';

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: 'Client-ID xw80LYvdz-jemzk7IgjPRxyJulxIw-KsvLIuZWl9XyM'
  }
})