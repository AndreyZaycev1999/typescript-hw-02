import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.unsplash.com/search/photos"
})

export const requestImagesByQuery = async (query = "", page) => {
  const identificator = "584665";
  const accessKey = "ujUaK9FroBE4YxiKnsmYTgyS_YW8EWz__G3v9njsCAY";
  const secretKey = "vgs4NUJQ4eURMNFpZUh9RFynprjC78MvJ-kCPA9n6fQ";
  
    const { data } = await instance.get(
        `?page=${page}&query=${query}&per_page=20&orientation=landscape&client_id=${accessKey}`
      );

      return data
} 