import axios, { AxiosResponse } from "axios";

interface Nefturian {
  name: string;
  image: string;
  attributes: any[];
}

class NefturianService {
  async getNefturianById(nefturianId: number): Promise<Nefturian | null> {
    try {
      const res: AxiosResponse = await axios.get(
        `https://api.nefturians.io/metadata/${nefturianId}`
      );

      if (res.status === 200 && res.data) {
        return res.data;
      } else {
        return null;
      }
    } catch (error) {
      console.error(
        `Error fetching Nefturian with ID ${nefturianId}: ${error}`
      );
      return null;
    }
  }
}

export default new NefturianService();
