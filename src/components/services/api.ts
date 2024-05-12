import axios from "axios";
import { Image } from "../../types";
const apiKey = "ujUaK9FroBE4YxiKnsmYTgyS_YW8EWz__G3v9njsCAY";

interface UnsplashResponse {
  results: [Image];
  total_pages: number;
  // results: ;
  data: string;
}

export const getImagesByQuery = async (query: string, page: number): Promise<UnsplashResponse> => {
  const { data } = await axios.get<UnsplashResponse>(`https://api.unsplash.com/search/photos/?client_id=${apiKey}&page=${page}&query=${query}&per_page=20`);
  return data;
};
